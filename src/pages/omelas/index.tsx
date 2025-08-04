import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import InteractiveDemo from "../../components/InteractiveDemo";
import ChatInterface from "../../components/chat/ChatInterface";

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
    <div className="">
      <Head>
        <title>Omelas | Endeavor</title>
        <meta property="og:title" content="Omelas - Endeavor" />
        <meta
          property="og:description"
          content="Experience the power of our AI-powered order entry automation"
        />
        <meta property="og:image" content="/hero.png" />
      </Head>
      
      {/* Only show navbar when not in full-screen mode */}
      {!isFullScreen && <Navbar />}

      {showChat ? (
        <div className="h-screen bg-gray-900">
          <ChatInterface onFullScreenChange={setIsFullScreen} />
        </div>
      ) : (
        <InteractiveDemo
          title="Order Entry"
          description="Experience the power of our AI-powered order entry automation."
          badgeText="or click here to try out Endeavor Omelas"
          badgeLink="/omelas"
          extractionCompleteContent={omelasExtractionContent}
        />
      )}
    </div>
  );
}

export default Omelas;
