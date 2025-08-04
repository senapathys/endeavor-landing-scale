import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  Dispatch,
  SetStateAction,
} from "react";
import { ArrowUpIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";
import { ChatSession, Message, Citation } from "../../types/chat";

const suggestedActions = [
  {
    title: "Describe requirements",
    label: "Quickly search hundreds of pages to find specifications",
    action: "What are the size requirements for ",
  },
  {
    title: "Compare designs",
    label: "Find the design that best suits multiple retailers",
    action: "Please compare the following designs: ",
  },
  {
    title: "Find examples",
    label: "Show specific examples from the documentation",
    action: "Find examples of ",
  },
  {
    title: "Create charts",
    label: "Build graphs to visualize data",
    action: "Create a chart plotting ",
  },
];

interface ChatProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onNewChat: () => void;
  onChatTitleChange: (title: string | null) => void;
  setFileContent: (fileContent: string | null) => void;
  setIsArtifactOpened: (isArtifactOpened: boolean) => void;
  setPageNumber: (pageNumber: number) => void;
  chatSessions: ChatSession[];
  setChatSessions: Dispatch<SetStateAction<ChatSession[]>>;
  handleNewChat: () => void;
  messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
  selectedSession: ChatSession | null;
  setSelectedSession: (session: ChatSession | null) => void;
  newMessage: string;
  setNewMessage: (message: string) => void;
  isCreatingSession: boolean;
  thinking: string | null;
  setThinking: Dispatch<SetStateAction<string | null>>;
}

export interface ChatRef {
  startNewChat: () => void;
}

const Chat = forwardRef<ChatRef, ChatProps>(
  (
    {
      sidebarOpen,
      onToggleSidebar,
      onNewChat,
      onChatTitleChange,
      setFileContent,
      setIsArtifactOpened,
      setPageNumber,
      chatSessions,
      setChatSessions,
      handleNewChat,
      messages,
      setMessages,
      selectedSession,
      setSelectedSession,
      newMessage,
      setNewMessage,
      isCreatingSession,
      thinking,
      setThinking,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
      startNewChat: () => {
        setSelectedSession(null);
        setMessages([]);
        setInputValue("");
        onNewChat();
      },
    }));

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const handleCitationClick = async (citation: Citation) => {
      // Mock document content for demo
      const mockContent = `This is a mock document content for ${citation.documentName} on page ${citation.pageNumber}. 
      
      The original text was: "${citation.originalText}"
      
      This is a sample document that would normally contain the actual PDF content. In a real implementation, this would load the actual document from the backend.`;

      setFileContent(mockContent);
      setPageNumber(citation.pageNumber);
      setIsArtifactOpened(true);
    };

    const renderMessageContent = (content: string, isAssistant: boolean) => {
      return (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Custom component for citations
            code: ({ className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || "");
              const isInline = !match;
              if (!isInline) {
                return (
                  <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <code className="text-gray-200" {...props}>
                      {children}
                    </code>
                  </pre>
                );
              }
              return (
                <code
                  className="bg-gray-700 px-1 py-0.5 rounded text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            // Custom component for links that look like citations
            a: ({ href, children }: any) => {
              // Check if this looks like a citation link
              if (href && href.startsWith("#citation-")) {
                const citationData = {
                  documentId: 1,
                  pageNumber: 1,
                  documentName: "Sample Document.pdf",
                  originalText: children as string,
                  start: 0,
                  end: (children as string).length,
                };

                return (
                  <button
                    onClick={() => handleCitationClick(citationData)}
                    className="text-blue-400 hover:text-blue-300 underline cursor-pointer"
                  >
                    {children}
                  </button>
                );
              }
              return (
                <a
                  href={href}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {children}
                </a>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      );
    };

    const handleSendMessage = async () => {
      if (!inputValue.trim()) return;

      const userMessage = inputValue;
      setInputValue("");
      setNewMessage(userMessage);

      // Add user message immediately
      const newUserMessage: Message = {
        role: "user",
        content: userMessage,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, newUserMessage]);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          role: "assistant",
          content: `I understand you're asking about "${userMessage}". Here's a detailed response with some sample citations:

## Analysis

Based on the documentation, here are the key findings:

1. **Requirements**: The system supports multiple formats including PDF, DOCX, and TXT files.
2. **Processing**: Documents are automatically processed and indexed for search.
3. **Search**: You can search through all uploaded documents using natural language.

## Sample Citations

Here are some relevant sections from the documentation:

- [Page 3: System Overview](#citation-1) - Details about the core architecture
- [Page 7: File Formats](#citation-2) - Supported file types and specifications
- [Page 12: Search Features](#citation-3) - Advanced search capabilities

## Code Example

Would you like me to provide more specific information about any of these topics?`,
          timestamp: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };

    const handleSuggestedAction = (action: string) => {
      setInputValue(action);
      inputRef.current?.focus();
    };

    return (
      <div className="flex flex-col h-full max-w-4xl mx-auto">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                Welcome to Omelas Chat
              </h2>
              <p className="text-gray-400 mb-8">
                Ask questions about your documents and get instant answers
              </p>

              {/* <div className="grid grid-cols-2 gap-2 p-2">              <div className="grid grid-cols-2 gap-2 p-2">
                {suggestedActions.map((suggestedAction, index) => (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.05 * index }}
                    // variant="ghost"
                    onClick={() => {setNewMessage(suggestedAction.action)}}
                    // disabled={disabled}
                    className="flex flex-col justify-center items-start bg-[#FAFBFC]/40 dark:bg-fulldark50 dark:text-bright rounded-lg border border-[#6b7c93]/40 p-3 text-xs font-light hover:border-[#6b7c93]/60"
                  >
                    <span className="font-medium mb-1">
                      {suggestedAction.title}
                    </span>
                    <span className="dark:text-bright/60">
                      {suggestedAction.label}
                    </span>
                  </motion.button>
                ))}
              </div> */}
              {/* Suggested Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {suggestedActions.map((action, index) => (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.05 * index }}
                    key={index}
                    onClick={() => handleSuggestedAction(action.action)}
                    className="flex flex-col justify-center items-start bg-[#18181b80] text-[#f6f6f6] rounded-lg border border-[#6b7c93]/40 p-3 text-xs font-light hover:border-[#6b7c93]/60 text-left"
                  >
                    <h3 className="font-medium text-gray-200 mb-1">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-400">{action.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-3xl rounded-lg px-4 py-3 ${
                    message.role === "user"
                      ? "bg-white dark:bg-fulldark lg:max-w-2xl"
                      : "text-[#F6F6F6] border-none lg:max-w-full text-left"
                  }`}
                >
                  {message.isStreaming ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  ) : (
                    renderMessageContent(
                      message.content,
                      message.role === "assistant"
                    )
                  )}
                </div>
              </div>
            ))
          )}

          {thinking && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-200 rounded-lg px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <span className="text-sm">{thinking}</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4">
          <div className="flex bg-transparent justify-center items-end">
            <div className="flex items-center p-1 bg-dark/80 backdrop-blur-sm border border-[#6b7c93]/40 rounded-2xl shadow-lg w-full hover:border-[#6b7c93]/60 focus-within:ring-1 focus-within:ring-bright transition-colors duration-150">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="How can I help you today?"
                className="flex-1 px-4 py-2 bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-bright resize-none min-h-[40px] leading-6"
                disabled={isCreatingSession}
                rows={1}
                style={{ maxHeight: "120px" }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isCreatingSession}
                className="rounded-full p-1.5 h-fit bg-bright mr-2 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-200"
              >
                {isCreatingSession ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark"></div>
                ) : (
                  <ArrowUpIcon
                    size={14}
                    className="text-dark"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Chat.displayName = "Chat";

export default Chat;
