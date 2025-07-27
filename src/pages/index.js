// pages/index.js
import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FAQs from '@/components/FAQs';
import Solution from '@/components/Solution';
import Security from '@/components/Security';
import Demo from '@/components/Demo';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Implementation from '@/components/Implementation';
import Testimonials from '@/components/Testimonials';
import Head from 'next/head';

function Home() {
  const heroRef = useRef(null);
  const demoRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Quoting Made Smarter | Respond to RFQs in Seconds</title>
        <meta property="og:title" content="Quoting Made Smarter - Respond to RFQs in Seconds" />
        <meta property="og:description" content="Harness the power of Generative AI to simplify your quoting process." />
        <meta property="og:image" content="/hero.png" />
      </Head>
      <Navbar
        heroRef={heroRef}
        demoRef={demoRef}
      />
      <Hero
        heroRef={heroRef}
      />
      <Demo
        demoRef={demoRef}
      />
      <Testimonials />
      <Solution />
      <Features />
      <Security />
      <Implementation />
      <FAQs />
      <Footer />
    </div>
  );
}

export default Home;
