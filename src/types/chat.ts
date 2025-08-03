export interface ChatSession {
  id: number;
  title: string;
  messages: string;
  created_at: string;
  updated_at: string;
}

export interface Message {
  role: string;
  content: string;
  timestamp: string;
  isStreaming?: boolean;
}

export interface Citation {
  documentId: number;
  pageNumber: number;
  documentName: string;
  originalText: string;
  start: number;
  end: number;
} 