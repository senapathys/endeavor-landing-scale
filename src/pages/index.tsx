// pages/index.js
import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solution from "@/components/Solution";
import Security from "@/components/Security";
import Demo from "@/components/Demo";
import MobileTimeline from "@/components/MobileTimeline";
import Head from "next/head";
import ScrollFeatureSection from "@/components/ScrollFeature";
import { InfiniteSliderHoverSpeed } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Form from "@/components/Form";
import Erp from "@/components/Erp";
import CustomerUseCases from "@/components/CustomerUseCases";

const logos = [
  {
    quote:
      "Endeavor's AI has transformed our order processing. What used to take hours now happens in minutes, and the accuracy is incredible.",
    logo: "../customer_logos/Building-Supply.png",
    name: "Jason Cohen",
    role: "President",
    company: "Northeast Building Supply",
  },
  {
    quote:
      "Endeavor has shown us that AI Agents are the future of the food and beverage industry. Love it - we're going to be using this for a lot of things.",
    logo: "../customer_logos/image.png",
    name: "Michael Wagner",
    role: "Global Director, PIM",
    company: "Schreiber Foods",
  },
  {
    quote:
      "F**k that’s awesome. This makes my life so much easier and with just this one tool. I can turn around quotes in half the time as I was before.",
    logo: "../customer_logos/viking-group-inc-logo-png-transparent.png",
    name: "Matt S.",
    role: "Customer Success Rep",
    company: "Viking Group Inc.",
  },
  {
    quote:
      "Endeavor has been an invaluable strategic partner to solve several critical business problems facing our company and the construction industry.",
    logo: "../customer_logos/ClarkDietrich_rgb.png",
    name: "Brian Panuccio",
    role: "CEO and President",
    company: "ClarkDietrich Building Systems",
  },
    {
    quote:
      "Endeavor's AI has transformed our order processing. What used to take hours now happens in minutes, and the accuracy is incredible.",
    logo: "../customer_logos/Building-Supply.png",
    name: "Jason Cohen",
    role: "President",
    company: "Northeast Building Supply",
  },
  {
    quote:
      "Endeavor has shown us that AI Agents are the future of the food and beverage industry. Love it - we're going to be using this for a lot of things.",
    logo: "../customer_logos/image.png",
    name: "Michael Wagner",
    role: "Global Director, PIM",
    company: "Schreiber Foods",
  },
  {
    quote:
      "F**k that’s awesome. This makes my life so much easier and with just this one tool. I can turn around quotes in half the time as I was before.",
    logo: "../customer_logos/viking-group-inc-logo-png-transparent.png",
    name: "Matt S.",
    role: "Customer Success Rep",
    company: "Viking Group Inc.",
  },
  {
    quote:
      "Endeavor has been an invaluable strategic partner to solve several critical business problems facing our company and the construction industry.",
    logo: "../customer_logos/ClarkDietrich_rgb.png",
    name: "Brian Panuccio",
    role: "CEO and President",
    company: "ClarkDietrich Building Systems",
  }
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  // Handle scroll to section after redirect from company page
  useEffect(() => {
    const targetSection = sessionStorage.getItem('scrollToSection');
    if (targetSection) {
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection');
      
                // Scroll to section with proper offset (no delay needed with static offset)
          const element = document.getElementById(targetSection);
          if (element) {
            const elementPosition = element.offsetTop;
            const isMobile = window.innerWidth < 768;
            
            // Use a more conservative offset that accounts for navbar state changes
            let offset;
            if (isMobile) {
              // Mobile: use larger offset to account for navbar state changes
              offset = 120; // Increased from 82 to 120
            } else {
              // Desktop: use larger offset for consistency
              offset = 140; // Increased from 100 to 140
            }
            
            // Add static offset only for sections that need it (Implementation and FAQ) and only on mobile
            let staticOffset = 0;
            if (isMobile && (targetSection === "implementation" || targetSection === "faq")) {
              staticOffset = -580; // Negative to compensate for measurement difference (mobile only)
            }
            const totalOffset = offset + staticOffset;
            const offsetPosition = elementPosition - totalOffset;
            
            console.log('Scroll debug (with static offset):', {
              section: targetSection,
              elementPosition,
              baseOffset: offset,
              staticOffset: staticOffset,
              totalOffset: totalOffset,
              finalPosition: offsetPosition,
              isMobile
            });
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
    }
  }, []);

  return (
    <div className="">
      <Head>
        <title>Sell Products Smarter | Endeavor</title>
        <meta
          property="og:title"
          content="Sell Products Smarter | Endeavor"
        />
        <meta
          property="og:description"
          content="AI use cases built for manufacturers and distributors. Sell products smarter, deliver faster."
        />
        <meta property="og:image" content="/hero-2.png" />
        {/* Preload hero background and demo image to speed up first paint */}
        <link rel="preload" as="image" href="/dark-gradient-bg.svg" type="image/svg+xml" />
        <link rel="preload" as="image" href="/dashboard-with-chat.svg" />
      </Head>
      <Navbar heroRef={heroRef} demoRef={demoRef} />
      <div className="relative bg-[#121212] bg-[url(/dark-gradient-bg.svg)] bg-no-repeat bg-cover before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#121212] before:pointer-events-none" style={{ marginBottom: '-1px' }}>
        <div className="relative z-10">
          <Hero heroRef={heroRef} />
          <Demo demoRef={demoRef} />
        </div>
      </div>

      <Erp />
      <InfiniteSliderHoverSpeed />
      <CustomerUseCases />
      <ScrollFeatureSection />
      <Solution />
      <Security />
      <MobileTimeline />
      <FAQ />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
