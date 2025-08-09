import { X, Maximize2, Minimize2 } from "lucide-react";
import DocumentViewer from "./DocumentViewer";
import { motion, AnimatePresence } from "framer-motion";

interface DocumentViewerProps {
  fileContent: string | null;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  initialLoad: boolean;
  isDocumentPopupOpened: boolean;
  setIsDocumentPopupOpened: (isDocumentPopupOpened: boolean) => void;
  handlePopoutPdf: () => void;
}

interface ArtifactProps {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  document: DocumentViewerProps;
  isSidebarOpened: boolean;
  isFullScreen?: boolean;
  onToggleFullScreen?: () => void;
}

const Artifact = ({
  isOpened,
  setIsOpened,
  document,
  isSidebarOpened,
  isFullScreen = false,
  onToggleFullScreen,
}: ArtifactProps) => {
  if (isOpened) {
    return (
      <AnimatePresence>
        <motion.div
          className={`${isFullScreen ? 'w-full h-full' : 'absolute top-0 right-0 w-80 max-w-[50%]'} bg-fulldark50 border-fulldark shadow-md shadow-lg z-50`}
          initial={{
            x: isFullScreen ? 0 : "100%",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: isFullScreen ? 0 : "100%",
            opacity: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.25, 0.46, 0.45, 0.94],
            duration: 0.4,
            opacity: { duration: 0.2 },
          }}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-fulldark50">
              <h3 className="text-lg font-medium text-gray-200">
                Document Viewer
              </h3>
              <div className="flex items-center gap-2">
                {onToggleFullScreen && (
                  <button
                    className="hover:bg-gray-700 p-2 rounded-lg transition-colors"
                    onClick={onToggleFullScreen}
                    title={isFullScreen ? "Exit full screen" : "Enter full screen"}
                  >
                    {isFullScreen ? (
                      <Minimize2 className="w-4 h-4 text-gray-300" />
                    ) : (
                      <Maximize2 className="w-4 h-4 text-gray-300" />
                    )}
                  </button>
                )}
                <button
                  className="hover:bg-gray-700 p-2 rounded-lg transition-colors"
                  onClick={() => {
                    setIsOpened(false);
                  }}
                >
                  <X className="w-4 h-4 text-gray-300" />
                </button>
              </div>
            </div>
            
            {/* Document Viewer */}
            <div className="flex-1 overflow-hidden">
              <DocumentViewer
                fileContent={document.fileContent}
                pageNumber={document.pageNumber}
                setPageNumber={document.setPageNumber}
                setIsDocumentPopupOpened={document.setIsDocumentPopupOpened}
                handlePopoutPdf={document.handlePopoutPdf}
                initialLoad={document.initialLoad}
                isDocumentPopupOpened={document.isDocumentPopupOpened}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }
  
  return null;
};

export default Artifact; 