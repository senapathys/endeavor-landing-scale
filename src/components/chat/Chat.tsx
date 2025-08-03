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
    action: "Please compare the following designs: "
  },
  {
    title: "Find examples",
    label: "Show specific examples from the documentation",
    action: "Find examples of "
  },
  {
    title: "Create charts",
    label: "Build graphs to visualize data",
    action: "Create a chart plotting "
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
                <code className="bg-gray-700 px-1 py-0.5 rounded text-sm" {...props}>
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
              return <a href={href} className="text-blue-400 hover:text-blue-300 underline">{children}</a>;
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

      setMessages(prev => [...prev, newUserMessage]);

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

\`\`\`javascript
// Example API call
const response = await fetch('/api/documents/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: userMessage })
});
\`\`\`

Would you like me to provide more specific information about any of these topics?`,
          timestamp: new Date().toISOString(),
        };

        setMessages(prev => [...prev, aiResponse]);
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
              
              {/* Suggested Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {suggestedActions.map((action, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSuggestedAction(action.action)}
                    className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="font-medium text-gray-200 mb-1">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {action.label}
                    </p>
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
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {message.isStreaming ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  ) : (
                    renderMessageContent(message.content, message.role === "assistant")
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
        <div className="border-t border-gray-700 p-4">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a question about your documents..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={1}
                style={{ minHeight: "44px", maxHeight: "120px" }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isCreatingSession}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors duration-200"
            >
              <ArrowUpIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

Chat.displayName = "Chat";

export default Chat; 