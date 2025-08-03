import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chat, { ChatRef } from "./Chat";
import Artifact from "./Artifact";

interface ChatSession {
  id: number;
  title: string;
  messages: string;
  created_at: string;
  updated_at: string;
}

interface Message {
  role: string;
  content: string;
  timestamp: string;
  isStreaming?: boolean;
}

interface ChatInterfaceProps {
  isSidebarOpened?: boolean;
  onFullScreenChange?: (isFullScreen: boolean) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  isSidebarOpened = false, 
  onFullScreenChange 
}) => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isArtifactOpened, setIsArtifactOpened] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [artifactSourceSessionId, setArtifactSourceSessionId] = useState<number | null>(null);

  // Chat state
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isCreatingSession, setIsCreatingSession] = useState(false);
  const [thinking, setThinking] = useState<string | null>(null);
  const chatRef = useRef<ChatRef>(null);

  // Notify parent component of full-screen state changes
  useEffect(() => {
    onFullScreenChange?.(isFullScreen);
  }, [isFullScreen, onFullScreenChange]);

  // Handle keyboard events for full-screen mode
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
        setIsArtifactOpened(false); // Hide document viewer when exiting full-screen
      }
    };

    window.document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullScreen]);

  const handleSetIsArtifactOpened = (opened: boolean) => {
    setIsArtifactOpened(opened);
    if (opened && selectedSession) {
      setArtifactSourceSessionId(selectedSession.id);
    } else if (!opened) {
      setArtifactSourceSessionId(null);
      setIsFullScreen(false); // Exit full screen when closing artifact
    }
  };

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      // When entering full-screen, ensure artifact is opened
      setIsArtifactOpened(true);
    } else {
      // When exiting full-screen, hide artifact
      setIsArtifactOpened(false);
    }
  };

  // Function to handle citation clicks and trigger full-screen mode
  const handleCitationClick = () => {
    setIsArtifactOpened(true);
    setIsFullScreen(true); // Automatically go full screen when citation is clicked
  };

  const handleNewChat = () => {
    setSelectedSession(null);
    setMessages([]);
    setNewMessage("");
  };

  const document = {
    fileContent: fileContent,
    pageNumber: pageNumber,
    setPageNumber: setPageNumber,
    setIsDocumentPopupOpened: () => {},
    handlePopoutPdf: () => {},
    initialLoad: false,
    isDocumentPopupOpened: false,
  };

  // If in full screen mode, show both chat and artifact side by side
  if (isFullScreen) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-gray-900 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex h-full">
            {/* Chat Section - Subtle scale down */}
            <motion.div
              className="flex-1 flex flex-col"
              initial={{ scale: 1 }}
              animate={{ scale: 0.98 }}
              exit={{ scale: 1 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut"
              }}
            >
              <Chat
                ref={chatRef}
                sidebarOpen={false}
                onToggleSidebar={() => {}}
                onNewChat={handleNewChat}
                onChatTitleChange={() => {}}
                setFileContent={setFileContent}
                setIsArtifactOpened={handleCitationClick}
                setPageNumber={setPageNumber}
                chatSessions={chatSessions}
                setChatSessions={setChatSessions}
                handleNewChat={handleNewChat}
                messages={messages}
                setMessages={setMessages}
                selectedSession={selectedSession}
                setSelectedSession={setSelectedSession}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                isCreatingSession={isCreatingSession}
                thinking={thinking}
                setThinking={setThinking}
              />
            </motion.div>

            {/* Document Viewer Section - Simple fade in */}
            <motion.div
              className="w-1/2 border-l border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut"
              }}
            >
              <Artifact
                isOpened={true}
                setIsOpened={handleSetIsArtifactOpened}
                document={document}
                isSidebarOpened={isSidebarOpened}
                isFullScreen={isFullScreen}
                onToggleFullScreen={handleToggleFullScreen}
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex flex-col relative h-full bg-gray-900">
      {selectedSession && (
        <div className="absolute w-full top-0 left-0 right-[1rem] z-10 p-3 pointer-events-none px-4">
          <div className="flex justify-between">
            <h4 className="text-lg font-medium text-gray-200 bg-gray-800/60 backdrop-blur-lg p-2 px-3 rounded-xl">
              {selectedSession.title}
            </h4>
          </div>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto pt-6">
        <motion.div
          className="flex flex-1 justify-center h-full"
          animate={{
            marginRight: isArtifactOpened ? "20rem" : "0%",
          }}
          transition={{
            type: "tween",
            ease: [0.25, 0.46, 0.45, 0.94],
            duration: 0.4,
          }}
        >
          <Chat
            ref={chatRef}
            sidebarOpen={false}
            onToggleSidebar={() => {}}
            onNewChat={handleNewChat}
            onChatTitleChange={() => {}}
            setFileContent={setFileContent}
            setIsArtifactOpened={handleCitationClick}
            setPageNumber={setPageNumber}
            chatSessions={chatSessions}
            setChatSessions={setChatSessions}
            handleNewChat={handleNewChat}
            messages={messages}
            setMessages={setMessages}
            selectedSession={selectedSession}
            setSelectedSession={setSelectedSession}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            isCreatingSession={isCreatingSession}
            thinking={thinking}
            setThinking={setThinking}
          />
        </motion.div>
      </div>
      
      {/* Only show Artifact in window mode if it's opened */}
      <AnimatePresence>
        {isArtifactOpened && (
          <Artifact
            isOpened={isArtifactOpened}
            setIsOpened={handleSetIsArtifactOpened}
            document={document}
            isSidebarOpened={isSidebarOpened}
            isFullScreen={isFullScreen}
            onToggleFullScreen={handleToggleFullScreen}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatInterface; 