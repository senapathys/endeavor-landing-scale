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
      <div className="flex items-center justify-center h-full bg-fulldark">
        <div className="text-center">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p className="text-bright">No document selected</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <div className="relative flex flex-col min-h-[500px] h-full rounded-lg border border-dark bg-fulldark overflow-hidden shadow-md">
        {/* Header with controls */}
        <div className="w-full flex items-center justify-between px-4 py-2 border-b border-dark bg-fulldark">
          {/* Controls */}
          {fileContent && (
            <div className="flex items-center space-x-2 w-full">
              {/* Zoom Controls */}
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-start">
                  <button
                    onClick={zoomOut}
                    className="p-1 text-bright rounded hover:bg-dark"
                    title="Zoom out"
                    tabIndex={-1}
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className="mx-1 text-xs text-bright min-w-[40px] text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={zoomIn}
                    className="p-1 text-bright rounded hover:bg-dark"
                    title="Zoom in"
                    tabIndex={-1}
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button
                    onClick={zoomToFit}
                    className="ml-1 text-xs text-bright px-2 py-1 rounded hover:bg-dark"
                    title="Fit to screen"
                    tabIndex={-1}
                  >
                    Zoom to fit
                  </button>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={resetView}
                    className="ml-1 text-xs text-bright px-2 py-1 rounded hover:bg-dark"
                    title="Reset view"
                    tabIndex={-1}
                  >
                    Reset
                  </button>
                  <button
                    onClick={rotateClockwise}
                    className="p-1 text-bright rounded hover:bg-dark mx-1"
                    title="Rotate"
                    tabIndex={-1}
                  >
                    <RotateCw size={16} />
                  </button>
                  <button
                    onClick={handlePopoutPdf}
                    className="p-1 text-bright rounded hover:bg-dark mx-1"
                    title="Popout"
                    tabIndex={-1}
                  >
                    <FileText size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Document viewer container */}
        <div
          ref={containerRef}
          className="flex-1 w-full overflow-auto bg-fulldark"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          style={{
            cursor: isDragging ? "grabbing" : scale > 1 ? "grab" : "default",
            scrollbarWidth: "thin",
          }}
        >
          {isDocumentLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-bright mx-auto mb-4"></div>
                <p className="text-bright">Loading document...</p>
              </div>
            </div>
          ) : (
            <div
              ref={contentRef}
              className="flex justify-center items-center p-8"
              style={{
                minHeight: "100%",
                transform: `scale(${scale}) rotate(${rotation}deg)`,
                transformOrigin: 'center',
              }}
            >
              <div 
                className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full"
                style={{
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
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
                    
                    <div className="mt-6 p-4 bg-gray-800 border border-dark rounded-lg">
                      <p className="text-bright text-sm">
                        <strong>Note:</strong> This is a demonstration of the document viewer component. 
                        In a real application, this would display actual PDF content with proper rendering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Help text overlay for zooming and panning */}
          {fileContent && scale > 1 && (
            <div className="absolute bottom-4 right-4 text-xs text-gray-600 bg-white bg-opacity-80 p-2 rounded shadow-sm">
              Tip: Drag to pan when zoomed in
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer; 