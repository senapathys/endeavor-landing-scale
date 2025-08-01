// pages/index.js
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solution from "@/components/Solution";
import Security from "@/components/Security";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Implementation from "@/components/Implementation";
import Head from "next/head";
import ScrollFeatureSection from "@/components/ScrollFeature";
import { InfiniteSliderHoverSpeed } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

function Home() {
  const heroRef = useRef(null);
  const demoRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Quoting Made Smarter | Respond to RFQs in Seconds</title>
        <meta
          property="og:title"
          content="Quoting Made Smarter - Respond to RFQs in Seconds"
        />
        <meta
          property="og:description"
          content="Harness the power of Generative AI to simplify your quoting process."
        />
        <meta property="og:image" content="/hero.png" />
      </Head>
      <Navbar heroRef={heroRef} demoRef={demoRef} />
      <div className="relative bg-[url(/dark-gradient-bg.svg)] bg-cover before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black before:pointer-events-none">
        <div className="relative z-10">
          <Hero heroRef={heroRef} />
          <Demo demoRef={demoRef} />
        </div>
      </div>
      <InfiniteSliderHoverSpeed />
      <ScrollFeatureSection />
      <Solution />
      <Features />
      <Security />
      <Implementation />
      {/* <CardsSection /> */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
