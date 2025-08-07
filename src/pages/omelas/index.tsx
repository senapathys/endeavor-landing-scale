import React, { useState } from "react";
import SolutionTemplate from "@/components/SolutionTemplate";
import InteractiveDemo from "../../components/InteractiveDemo";
import ChatInterface from "../../components/chat/ChatInterface";
import { omelasConfig } from "@/config/solutions";

function Omelas() {
  const [showChat, setShowChat] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Custom extraction complete content for Omelas with chat integration
  const omelasExtractionContent = (
    <>
      <ChatInterface onFullScreenChange={setIsFullScreen} />
    </>
  );

  return (
    <SolutionTemplate config={omelasConfig}>
      {/* Interactive Demo Overlay - shown on demand */}
      {showChat ? (
        <div className="fixed inset-0 z-50 bg-gray-900">
          <ChatInterface onFullScreenChange={setIsFullScreen} />
        </div>
      ) : (
        <div className="fixed inset-0 z-50 hidden" id="demo-overlay">
          <InteractiveDemo
            title="Omelas"
            description="Experience the power of our AI-powered business intelligence assistant."
            badgeText="or click here to try out Order Entry"
            badgeLink="/order-entry"
            extractionCompleteContent={omelasExtractionContent}
          />
        </div>
      )}
    </SolutionTemplate>
  );
}

export default Omelas;