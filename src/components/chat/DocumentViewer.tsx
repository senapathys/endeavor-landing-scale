import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  FileText,
} from "lucide-react";

interface DocumentViewerProps {
  fileContent: string | null;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  setIsDocumentPopupOpened: (isDocumentPopupOpened: boolean) => void;
  handlePopoutPdf: () => void;
  initialLoad: boolean;
  isDocumentPopupOpened: boolean;
}

const DocumentViewer = ({
  fileContent,
  pageNumber,
  setPageNumber,
  setIsDocumentPopupOpened,
  handlePopoutPdf,
  initialLoad,
  isDocumentPopupOpened,
}: DocumentViewerProps) => {
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDocumentLoading, setIsDocumentLoading] = useState<boolean>(false);

  useEffect(() => {
    if (fileContent) {
      setIsDocumentLoading(true);
      // Simulate loading
      setTimeout(() => {
        setIsDocumentLoading(false);
      }, 500);
    }
  }, [fileContent]);

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.25));
  };

  const zoomToFit = () => {
    setScale(1);
  };

  const resetView = () => {
    setScale(1);
    setRotation(0);
  };

  const rotateClockwise = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 0) { // Left click only
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && containerRef.current) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      containerRef.current.scrollLeft -= deltaX;
      containerRef.current.scrollTop -= deltaY;
      
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setScale(prev => Math.max(0.25, Math.min(3, prev + delta)));
    }
  };

  if (!fileContent) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-900 text-gray-400">
        <div className="text-center">
          <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No document selected</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-900 flex flex-col">
      {/* Toolbar */}
      <div className="bg-gray-800 border-b border-gray-700 p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={zoomOut}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4 text-gray-300" />
          </button>
          <span className="text-sm text-gray-300 min-w-[60px] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4 text-gray-300" />
          </button>
          <button
            onClick={zoomToFit}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            title="Fit to Page"
          >
            <FileText className="w-4 h-4 text-gray-300" />
          </button>
          <button
            onClick={rotateClockwise}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            title="Rotate"
          >
            <RotateCw className="w-4 h-4 text-gray-300" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={resetView}
            className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Document Content */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto bg-gray-900 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      >
        {isDocumentLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading document...</p>
            </div>
          </div>
        ) : (
          <div
            ref={contentRef}
            className="min-h-full flex items-center justify-center p-8"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              transformOrigin: 'center',
            }}
          >
            <div className="bg-white shadow-2xl rounded-lg p-8 max-w-4xl w-full">
              <div className="prose prose-lg max-w-none">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                  Sample Document
                </h1>
                
                <div className="text-gray-700 space-y-4">
                  <p>
                    This is a mock document viewer that simulates the content of a PDF or other document.
                    In a real implementation, this would display the actual document content.
                  </p>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                    Document Content
                  </h2>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                      {fileContent}
                    </pre>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                    Features
                  </h3>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Zoom in/out functionality</li>
                    <li>Document rotation</li>
                    <li>Drag to pan around the document</li>
                    <li>Responsive design with dark mode</li>
                    <li>Citation linking from chat</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> This is a demonstration of the document viewer component. 
                      In a real application, this would display actual PDF content with proper rendering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentViewer; 