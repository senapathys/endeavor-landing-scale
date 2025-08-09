// pages/index.js
import React, { useRef } from "react";
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

  return (
    <div className="">
      <Head>
        <title>AI Order Entry and Quoting | Endeavor</title>
        <meta
          property="og:title"
          content="AI Order Entry and Quoting | Endeavor"
        />
        <meta
          property="og:description"
          content="AI Order Entry implemented in just 1 day. Accurate and easy to use AI, built for manufacturers and distributors."
        />
        <meta property="og:image" content="/hero.png" />
        {/* Preload hero background and demo image to speed up first paint */}
        <link rel="preload" as="image" href="/dark-gradient-bg.svg" type="image/svg+xml" />
        <link rel="preload" as="image" href="/dashboard-with-chat.svg" />
      </Head>
      <Navbar heroRef={heroRef} demoRef={demoRef} />
      <div className="relative bg-[url(/dark-gradient-bg.svg)] bg-cover before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#121212] before:pointer-events-none" style={{ marginBottom: '-1px' }}>
        <div className="relative z-10">
          <Hero heroRef={heroRef} />
          <Demo demoRef={demoRef} />
        </div>
      </div>

      <Erp />
      <InfiniteSliderHoverSpeed />
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
