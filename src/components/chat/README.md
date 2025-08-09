# Chat Interface Components

This directory contains the chat interface components ported from the Oracle project to the Endeavor landing page.

## Components

### ChatInterface.tsx
The main chat interface component that combines:
- Chat functionality with suggested prompts
- Document viewer with slide-out panel
- Dark mode styling

### Chat.tsx
The core chat component featuring:
- Message display with markdown rendering
- Suggested action buttons
- Citation handling for document links
- Real-time message streaming simulation

### DocumentViewer.tsx
A document viewer component with:
- Zoom in/out functionality
- Document rotation
- Drag to pan
- Mock PDF content display

### Artifact.tsx
A slide-out panel component that:
- Animates in from the right side
- Contains the document viewer
- Can be closed with an X button

## Usage

The chat interface is integrated into the Omelas page after the extraction is complete. Users can:

1. Click "Start Chat with Documents" after extraction
2. Use suggested prompts or type custom questions
3. Click on citation links to view documents
4. Interact with the document viewer (zoom, rotate, pan)

## Features

- **Dark Mode Design**: Consistent with the Oracle project styling
- **Suggested Prompts**: Pre-built action buttons for common queries
- **Citation Links**: Clickable links that open document viewer
- **Document Viewer**: Full-featured viewer with zoom, rotation, and pan
- **Responsive Design**: Works on desktop and mobile
- **Smooth Animations**: Framer Motion animations for transitions

## Mock Data

The components use mock data to simulate:
- Chat responses with citations
- Document content
- File uploads and processing

In a real implementation, these would connect to actual backend APIs. 