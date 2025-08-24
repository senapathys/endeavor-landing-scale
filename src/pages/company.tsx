import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "@/components/core/glow-effect";
import { NavigationMenuDemo } from "@/components/NavigationMenu";
import { FiChevronRight, FiHome } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

// Growth phases data
const growthPhases = [
  {
    number: "01",
    title: "Early Life",
    phase: "Early Life",
    contentTitle: "Growing up in Middle America",
    bullets: [
      "Sahitya was born in Michigan, where his father worked for Ford Motor Company.",
      "His father had studied mechanical engineering, setting Sahitya down a path of curiosity for technology.",
      "Sahitya started coding at 7 years old, and was a self-taught programmer."
    ],
    imageSrc: "/journey_image/early-life.jpg"
  },
      {
      number: "02", 
      title: "Early Career",
      phase: "Early Career",
      contentTitle: "Joining the Air Force at 16 years old",
      bullets: [
        "Sahitya started working at 11 years old for FEMA, doing database and app development.",
        "He joined the Air Force at 16 years at Kirtland Air Force Base, in Albuquerque, New Mexico.",
        "Sahitya earned a secret security clearance by 17 years old and conducted AI research in deep reinforcement learning for drones.",
      ],
      imageSrc: "/journey_image/air-force-image.jpg"
    },
  {
    number: "03",
    title: "Founding Endeavor",
    phase: "Founding Endeavor",
    contentTitle: "Wharton to Palantir to Endeavor",
    bullets: [
      "He attended the Wharton School at the University of Pennsylvania, where he received a Graduate Degree and two Bachelor's Degrees in 4 years.",
      "Sahitya joined Palantir, helping building their Generative AI platform, and he deployed with Fortune 500 manufacturers like WestRock.",
      "He founded Endeavor, backed by founding Palantir team members and top Silicon Valley investors.",
    ],
    imageSrc: "/journey_image/panel.jpg"
  },
];

// Growth Phases Component
function GrowthPhases() {
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-16" ref={timelineRef}>
      <div className="relative bg-white">
        <div className="relative z-10 px-4 sm:px-8 md:px-24 py-12 sm:py-16 pb-20 sm:pb-24">
          {/* Header */}
          <div className="text-center space-y-3 mb-8 sm:mb-12 flex items-center flex-col mx-auto max-w-2xl px-4">
            <div className="bg-black w-4 h-4 rounded" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-900">
              Our Founder&apos;s Journey
            </h2>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-zinc-300"></div>
              
              {/* Animated vertical line that grows from top to bottom */}
              <div
                className={`absolute left-8 top-8 w-0.5 bg-zinc-900 origin-top ${
                  isVisible ? "animate-timeline-fill-vertical" : ""
                }`}
                style={{
                  height: "calc(100% - 2rem)",
                  transform: "scaleY(0)",
                }}
              ></div>
              
              {/* Timeline Steps */}
              <div className="space-y-8">
                {growthPhases.map((phase, index) => (
                  <div key={index} className="relative flex">
                    {/* Timeline Square */}
                    <div 
                      className={`absolute left-[33px] w-3 h-3 bg-zinc-900 -translate-x-1/2 mt-7 opacity-0 ${
                        isVisible ? "animate-marker-appear" : ""
                      }`}
                      style={{
                        animationDelay: isVisible ? `${index * 0.3}s` : "0s",
                        animationFillMode: "forwards",
                      }}
                    ></div>
                    
                    {/* Content */}
                    <div 
                      className={`ml-16 flex-1 opacity-0 translate-y-4 ${
                        isVisible ? "animate-card-appear" : ""
                      }`}
                      style={{
                        animationDelay: isVisible ? `${index * 0.2}s` : "0s",
                        animationFillMode: "forwards",
                      }}
                    >
                      {/* Mobile phase labels */}
                      <span className="leading-trim text-sm w-fit rounded-md border border-zinc-300 px-3 py-2 bg-white mb-4 block">
                        {phase.phase}
                      </span>
                      
                      {/* Content Card */}
                      <div className="bg-white rounded-xl border border-zinc-300 px-3 sm:px-4 py-4 sm:py-6">
                        {/* Phase image */}
                        <div className="w-full h-48 bg-zinc-200 rounded-lg mb-4 mt-2 overflow-hidden">
                          {phase.imageSrc.startsWith('http') || phase.imageSrc.startsWith('/') ? (
                            <img 
                              src={phase.imageSrc} 
                              alt={`${phase.title} phase`}
                              className="w-full h-full object-cover"
                              style={{ objectPosition: 'center 10%' }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-zinc-500 text-sm">{phase.title} Phase</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 leading-trim text-zinc-900">
                          {phase.contentTitle}
                        </h3>
                        <ul className="space-y-4">
                          {phase.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start">
                              <FiChevronRight className="text-zinc-600 mr-2 size-3 sm:size-4 flex-none md:size-5 mt-0.5" />
                              <span className="leading-trim text-xs sm:text-sm text-zinc-700">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative mx-auto flex w-fit flex-col">
              {/* Phase labels above timeline */}
              <div className="hidden grid-cols-1 grid-rows-3 gap-12 md:grid lg:mb-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-0">
                {growthPhases.map((phase, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <span className="leading-trim text-sm rounded-md border border-zinc-300 px-4 py-2.5 bg-white">
                      {phase.phase}
                    </span>
                  </div>
                ))}
              </div>

              {/* Timeline line and markers container */}
              <div className="relative lg:px-6 lg:py-0">
                {/* Desktop timeline lines */}
                <div className="hidden lg:block">
                  {/* Static background line */}
                  <div
                    className="absolute left-1/2 top-1/2 h-px -translate-y-1/2 -translate-x-1/2 bg-zinc-300"
                    style={{ width: "66.67%" }}
                  ></div>

                  {/* Animated line that grows from left to right */}
                  <div
                    className={`absolute top-1/2 h-px -translate-y-1/2 bg-zinc-900 opacity-0 origin-left ${
                      isVisible ? "animate-timeline-fill" : ""
                    }`}
                    style={{
                      width: "66.67%",
                      left: "calc(50% - 33.335%)",
                    }}
                  ></div>
                </div>

                {/* Timeline markers */}
                <div className="relative grid h-full grid-cols-1 grid-rows-3 justify-between gap-12 lg:grid-cols-3 lg:grid-rows-1">
                  {growthPhases.map((phase, index) => (
                    <div
                      key={index}
                      className={`relative z-10 mt-3 size-3 rounded bg-zinc-900 md:mt-0 place-self-center opacity-0 ${
                        isVisible ? "animate-marker-appear" : ""
                      }`}
                      style={{
                        animationDelay: isVisible ? `${index * 0.9}s` : "0s",
                        animationFillMode: "forwards",
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Timeline content cards */}
              <div className="ml-5 grid grid-rows-3 gap-12 lg:ml-0 lg:mt-8 lg:grid-cols-3 lg:grid-rows-1">
                {growthPhases.map((phase, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-4 opacity-0 translate-y-4 ${
                      isVisible ? "animate-card-appear" : ""
                    }`}
                    style={{
                      animationDelay: isVisible ? `${index * 0.8}s` : "0s",
                      animationFillMode: "forwards",
                    }}
                  >
                    {/* Content card */}
                    <div
                      className={`h-full rounded-xl border border-zinc-300 bg-white px-3 sm:px-4 py-4 sm:py-6 md:px-6 md:py-8 ${
                        index === 2 ? "shadow-xl shadow-zinc-300" : ""
                      }`}
                    >
                      {/* Phase image */}
                      <div className="w-full h-48 bg-zinc-200 rounded-lg mb-4 mt-2 overflow-hidden">
                        {phase.imageSrc.startsWith('http') || phase.imageSrc.startsWith('/') ? (
                          <img 
                            src={phase.imageSrc} 
                            alt={`${phase.title} phase`}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center 10%' }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-zinc-500 text-sm">{phase.title} Phase</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 leading-trim text-zinc-900">
                        {phase.contentTitle}
                      </h3>
                      <ul className="space-y-4">
                        {phase.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start">
                            <FiChevronRight className="text-zinc-600 mr-2 size-3 sm:size-4 flex-none md:size-5 mt-0.5" />
                            <span className="leading-trim text-xs sm:text-sm text-zinc-700">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Company() {
  // Mission & Vision data for easy editing
  const missionVisionData = {
    title: "Endeavor is AI for World-Building",
    subtitle: "Our mission.",
    content: [
      {
        type: "paragraph",
        text: "Our belief is that AI will power many applications in legal, healthcare, and finance. But none are more important than building AI that can build the world around us. Especially the physical infrastructure that will accelerate the development of AI."
      },
      {
        type: "paragraph",
        text: "Sam Altman writes in a 2025 blog post:"
      },
      {
        type: "quote",
        text: "[If AI] can operate the entire supply chain—digging and refining minerals, driving trucks, running factories, etc.—to build more robots, which can build more chip fabrication facilities, data centers, etc, then the rate of progress will obviously be quite different.",
        source: "The Gentle Singularity",
        sourceUrl: "https://blog.samaltman.com/the-gentle-singularity"
      },
      {
        type: "paragraph",
        text: "It has become clear that OpenAI, DeepMind, and Anthropic will continue to release increasingly powerful foundation models that are capable of building the factories of the future, designing the food we eat, and managing fleets of robots that will build the world around us."
      },
      {
        type: "paragraph",
        text: "But models need a delivery mechanism to support their interaction with the world. Without tools, environments, and verification systems, models fail to deliver the results they promise."
      },
      {
        type: "paragraph",
        text: "Harvey distributes AI for the world's leading law firms. Waymo is another example with a more nuanced environment, self-driving, where even one mistake from an AI is consequential."
      },
      {
        type: "paragraph",
        text: "Our software is the distribution layer for powerful AI models that will build the world."
      },
      {
        type: "examples",
        items: [
          "We support ClarkDietrich, the country's leading steel building systems manufacturer. They produce the steel beams that make up Intel's new data center and Tesla's factories. Our tools help them to sell, manufacture, and supply their products.",
          "Our customer Schreiber Foods is one of the world's largest dairy producers. Their products make up the yogurt, milk, and cheese we buy at the supermarket. We accelerate their R&D processes, helping design new sustainable foods of the future.",
          "We serve Cabot, a 143-year storied publicly-listed chemicals manufacturer. They make the basis for every component in a car: tires, engine mounts, coatings, and tints, as well as pharmaceuticals, agriculture, and more. We help them make and sell new chemicals."
        ]
      },
      {
        type: "paragraph",
        text: "While labs build the models of the future, we build the last-mile delivery for them. We must model complex environments, deliver reliable results, and bridge the gap between models and the antiquated ecosystems in which they must operate."
      },
      {
        type: "conclusion",
        text: "Endeavor is AI for World Building."
      }
    ]
  };

  // Team members data for easy editing
  const teamMembers = [
    {
      id: 'palantir',
      name: 'Sahitya Senapathy',
      role: 'Founder and CEO',
      description: 'Invented the first commercialized Generative AI product at Palantir in 2023.',
      logoSrc: '/customer_logos/palantir-logo.png',
      logoAlt: 'Palantir',
      profilePhoto: '/team/sahitya-senapathy.jpg'
    },
    {
      id: 'snowflake',
      name: 'Chris Degnan',
      role: 'Founding GTM Advisor',
      description: 'Founding CRO at Snowflake. Scaled Snowflake from $0 to $3 billion in annual revenue over 11 years.',
      logoSrc: '/customer_logos/snowflake-logo.png',
      logoAlt: 'Snowflake',
      profilePhoto: '/team/chris-degnan.jpg'
    },
    {
      id: 'craft-ventures',
      name: 'David Sacks',
      role: 'Founding Investor',
      description: 'Founder of Craft Ventures and PayPal Mafia. Current White House AI and Crypto Czar.',
      logoSrc: '/customer_logos/craft-ventures-logo.png',
      logoAlt: 'Craft Ventures',
      profilePhoto: '/team/david-sacks.jpg'
    },
    {
      id: 'uc-berkeley',
      name: 'Yuanbo "YC" Chen',
      role: 'Head of Deployments',
      description: 'UC Berkeley Artificial Intelligence Graduate Researcher in computer vision and robotics.',
      logoSrc: '/customer_logos/uc-berkeley-logo.png',
      logoAlt: 'UC Berkeley',
      profilePhoto: '/team/yuanbo-chen.jpg'
    },
    {
      id: 'pov',
      name: 'Jake Boggs',
      role: 'Head of AI/ML',
      description: 'Built AI models for everything from stock trading to maritine port operations. Open source contributor.',
      logoSrc: '/customer_logos/pov-logo.png',
      logoAlt: 'POV',
      profilePhoto: '/team/jake-boggs.jpg'
    },
    {
      id: 'microsoft',
      name: 'Ryan Huang',
      role: 'Head of Product',
      description: 'Founded Osmos Learn, an AI grading platform backed by Microsoft, at 16. Former AI lab software engineer.',
      logoSrc: '/customer_logos/microsoft-logo.png',
      logoAlt: 'Microsoft',
      profilePhoto: '/team/ryan-huang.jpg'
    },
    {
      id: 'bridgestone',
      name: 'Gabriel Asbun',
      role: 'Partner',
      description: 'Former President of Bridgestone Tires, Americas (Canada, USA, Latin America).',
      logoSrc: '/customer_logos/Bridgestone_logo.svg',
      logoAlt: 'Bridgestone',
      profilePhoto: '/team/gabriel-asbun.jpg'
    },
    {
      id: 'oshkosh',
      name: 'Sanjeev Tara',
      role: 'Partner',
      description: 'Former COO/CFO of Oshkosh Corp (NYSE: OSK), Commercial.',
      logoSrc: '/customer_logos/Oshkosh_Corporation_2019_Logo.svg.png',
      logoAlt: 'Oshkosh',
      profilePhoto: '/team/sanjeev-tara.jpg'
    },
    {
      id: 'kimberly-clark',
      name: 'Pete Dulcamara',
      role: 'Partner',
      description: 'Former Chief Scientist of Kimberly-Clark (NASDAQ: KMB).',
      logoSrc: '/customer_logos/Kimberly-Clark_Logo.png',
      logoAlt: 'Kimberly-Clark',
      profilePhoto: '/team/pete-dulcamara.jpg'
    }
  ];

  // Customer stories data for easy editing
  const customerStories = [
    {
      id: 'schreiber-foods',
      companyName: 'Schreiber Foods',
      logoSrc: '/customer_logos/image.png',
      logoAlt: 'Schreiber Foods logo',
      title: "Schreiber Foods's First AI Agent",
      story: [
        "We met Schreiber Foods's C-level executives through our investors at Craft Ventures (David Sacks of the PayPal Mafia).",
        "After spending time onsite with their IT leadership and product, supplier, and customer teams in Green Bay, Wisconsin, we became Schreiber Foods's first Agentic AI platform, to power R&D, supplier management, customer service, and more.",
        "Schreiber Foods is a leader in the dairy industry, doing more than $7 billion in sales."
      ],
      tags: ['Food & Beverage', 'R&D']
    },
    {
      id: 'cabot-corporation',
      companyName: 'Cabot Corporation',
      logoSrc: '/customer_logos/Cabot_Corporation_Logo.svg.png',
      logoAlt: 'Cabot Corporation logo',
      title: "Cabot's First AI Automation",
      story: [
        "We met Cabot's digital team when they had started to look at resolving their manual, error-prone, and slow order entry process.",
        "After a rigorous RFP process, including beating out incumbent document automation vendors and new-age AI vendors, Cabot selected Endeavor to be their first AI partner. Why? Our speed of implementation, white glove service, and advanced capabilities.",
        "Cabot (NYSE: CBT) is a speciality chemicals supplier, doing more than $5 billion in sales."
      ],
      tags: ['Chemicals', 'Order Entry']
    },
    {
      id: 'clarkdietrich',
      companyName: 'ClarkDietrich',
      logoSrc: '/customer_logos/ClarkDietrich_rgb.png',
      logoAlt: 'ClarkDietrich logo',
      title: "ClarkDietrich's First AI Platform",
      story: [
        "We met ClarkDietrich's executive leadership as they were just starting to look at AI for their manufacturing operations.",
        "After spending time at CD's factories in the Midwest and South, we successfully launched ClarkDietrich's first AI agent at 2 plants. Today, Endeavor powers ClarkDietrich's sales and operations nationwide, across their seventeen plants.",
        "ClarkDietrich is North America's largest manufacturer of cold-formed steel framing."
      ],
      tags: ['Manufacturing', 'Quoting']
    }
  ];

  return (
    <>
      <Head>
        <title>Company | Endeavor AI</title>
        <meta name="description" content="Learn about Endeavor AI - our mission, team, and vision for transforming industrial enterprises with AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/hero-2.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        {/* Custom Navbar for Company Page */}
        <nav className="py-4 relative z-50 w-full bg-white">
          <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
            <Link className="flex items-center space-x-2 md:space-x-3" href="/">
              <Image
                src="/industrial-ai-logo.svg"
                alt="Endeavor"
                className="h-6 w-auto md:h-6 lg:h-7 transition-all duration-300"
                width={200}
                height={30}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-4 flex-1">
              <NavigationMenuDemo getLinkClasses={() => "text-zinc-900 hover:text-zinc-600"} />
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {/* @ts-expect-error Button component type mismatch */}
              <Button
                onClick={() => {
                  const formElement = document.getElementById("form");
                  if (formElement) {
                    window.location.href = "/#form";
                  }
                }}
                color="dark"
                className="transition-all duration-300"
              >
                Book a demo
              </Button>
            </div>

            {/* Mobile home button */}
            <Link href="/" className="md:hidden p-2 rounded-lg transition-colors duration-200 text-zinc-900 hover:bg-zinc-100">
              <FiHome className="w-6 h-6" />
            </Link>
          </div>
        </nav>
        
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="relative z-10">
            <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
                  <div className="flex justify-center mb-10">
                <Image
                  src="/industrial-ai-logo.svg"
                  alt="Endeavor Industrial AI"
                      width={140}
                      height={42}
                      className="h-7 sm:h-9 w-auto opacity-50"
                />
              </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-zinc-900 mb-6">
                    AI for the American Heartland
                  </h1>
                  
                  {/* Agentic AI Workforce Component */}
                  <div className="w-full flex flex-col justify-center items-center mb-8">
                    <div className="relative z-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl">
                      <GlowEffect
                        colors={["#D01E28aa", "#EF4444aa", "#46ADCaa", "#2573A3aa"]}
                        mode="rotate"
                        blur="softest"
                        duration={10}
                        scale={1}
                      />
                      <div className="relative isolate inline-flex items-center justify-center gap-x-2 py-6 px-8 rounded-lg border text-base/6 text-white bg-zinc-900 border-zinc-950/90 hover:bg-zinc-900/90 shadow-sm before:absolute before:inset-0 before:-z-10 before:rounded-[calc(var(--radius-lg)-1px)] before:bg-zinc-900 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(var(--radius-lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] mx-auto">
                        <span className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
                          Built in Silicon Valley
                        </span>
                      </div>
                    </div>
                  </div>
                  
            </div>
          </div>
        </section>

            {/* Customer Logos Section */}
            <section className="pb-24 sm:pb-36 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                  <p className="text-zinc-600 text-sm sm:text-base max-w-3xl mx-auto">
                    Trusted by multi-billion dollar industrial enterprises like
                </p>
              </div>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                  <div className="flex items-center justify-center h-5 sm:h-6 md:h-7">
                    <Image
                      src="/customer_logos/image.png"
                      alt="Schreiber Foods"
                      width={180}
                      height={48}
                      className="h-full w-auto object-contain "
                    />
                  </div>
                  <div className="flex items-center justify-center h-5 sm:h-6 md:h-7">
                    <Image
                      src="/customer_logos/Cabot_Corporation_Logo.svg.png"
                      alt="Cabot Corporation"
                      width={180}
                      height={48}
                      className="h-full w-auto object-contain "
                    />
                  </div>
                  <div className="flex items-center justify-center h-5 sm:h-6 md:h-7">
                    <Image
                      src="/customer_logos/ClarkDietrich_rgb.png"
                      alt="ClarkDietrich"
                      width={180}
                      height={48}
                      className="h-full w-auto object-contain "
                    />
                  </div>
                  <div className="flex items-center justify-center h-5 sm:h-6 md:h-7">
                    <Image
                      src="/customer_logos/viking-group-inc-logo-png-transparent.png"
                      alt="Viking Group Inc"
                      width={180}
                      height={48}
                      className="h-full w-auto object-contain "
                    />
                  </div>
                  <div className="flex items-center justify-center h-5 sm:h-6 md:h-7">
                    <Image
                      src="/customer_logos/Menasha-Logo_MMIH_2Color.webp"
                      alt="Menasha"
                      width={180}
                      height={48}
                      className="h-full w-auto object-contain "
                    />
              </div>
            </div>
          </div>
        </section>
          </div>
        </div>

                {/* Customer Stories Section */}
                <section className="bg-black py-8 sm:py-10 px-4 sm:px-8 md:px-24 md:py-20 relative flex justify-center">
          <div className="absolute inset-0 bg-[url(/gradient-bg.svg)] bg-cover pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl w-full">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4">Our Customers</h2>
              <p className="text-zinc-100 max-w-2xl mx-auto text-sm sm:text-base">
                We are often our customer&apos;s first AI partner, supporting enterprises in industries like food and beverage, chemicals, and manufacturing and distribution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {customerStories.map((customer) => (
                <div key={customer.id} className="bg-[#1F1F1F]/40 text-[#F5F7F9] backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-xl border-[#F5F7F9]/10 border-1">
                  <div className="mb-4 sm:mb-6">
                    <Image
                      src={customer.logoSrc}
                      alt={customer.logoAlt}
                      width={120}
                      height={40}
                      className="h-8 sm:h-10 w-auto brightness-0 invert opacity-90"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl text-[#F5F7F9] font-medium mb-3">{customer.title}</h3>
                  <div className="text-[#F5F7F9]/60 text-sm sm:text-base leading-relaxed mb-4 space-y-4">
                    {customer.story.map((paragraph, index) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {customer.tags.map((tag, index) => (
                      <span key={index} className="text-xs rounded-full border border-white/15 text-[#F6F6F6]/80 px-3 py-1 bg-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
                 <section className="pt-10 md:pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
           <div className="text-center space-y-3 mb-8 sm:mb-12 flex items-center flex-col mx-auto">
             <div className="bg-black w-4 h-4 rounded" />
             <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-900 px-4">
               Leaders in AI and industry 
             </h2>
             <p className="px-4 sm:px-12 text-zinc-700 max-w-lg text-sm sm:text-base">
                Built in Silicon Valley, deployed in the American Heartland
              </p>
            </div>
            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {teamMembers.map((member) => (
               <div key={member.id} className="p-4 sm:p-6 rounded-lg bg-[#E5E7EB]/40 border-secondary-200/40 border-1 text-center flex flex-col">
                 {member.profilePhoto ? (
                   <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                     <Image
                       src={member.profilePhoto}
                       alt={`${member.name} profile photo`}
                       width={64}
                       height={64}
                       className="w-full h-full object-cover"
                     />
                   </div>
                 ) : (
                   <div className="w-16 h-16 bg-zinc-300 rounded-full mx-auto mb-4"></div>
                 )}
                 <h3 className="text-lg text-zinc-900 font-medium mb-2">{member.name}</h3>
                 <p className="text-zinc-600 mb-3 text-sm font-medium">{member.role}</p>
                 <p className="text-xs text-zinc-500 leading-relaxed mb-4 flex-grow">
                   {member.description}
                 </p>
                 <div className="mt-auto">
                   <Image
                     src={member.logoSrc}
                     alt={member.logoAlt}
                     width={120}
                     height={32}
                     className="mx-auto opacity-60"
                   />
                 </div>
               </div>
             ))}
           </div>
         </section>

        {/* Growth Phases Section */}
        <GrowthPhases />

        {/* Mission & Vision */}
        <section className="bg-black py-8 sm:py-10 px-4 sm:px-8 md:px-24 md:py-20 relative flex justify-center">
          <div className="absolute inset-0 bg-[url(/gradient-bg.svg)] bg-cover pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl w-full">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4">{missionVisionData.title}</h2>
              <p className="text-zinc-100 max-w-2xl mx-auto text-sm sm:text-base">
                {missionVisionData.subtitle}
              </p>
            </div>
            
            <div className="bg-[#1F1F1F]/40 text-[#F5F7F9] backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-xl border-[#F5F7F9]/10 border-1 max-w-4xl mx-auto">
              <div className="text-[#F5F7F9]/90 text-sm sm:text-base leading-relaxed space-y-6">
                {missionVisionData.content.map((item, index) => {
                  switch (item.type) {
                    case 'paragraph':
                      return (
                        <p key={index}>
                          {item.text}
                        </p>
                      );
                    case 'quote':
                      return (
                        <blockquote key={index} className="border-l-4 border-white/30 pl-4 italic text-[#F5F7F9]/80 bg-white/5 p-4 rounded-r-lg">
                          &ldquo;{item.text}&rdquo;
                          {item.source && (
                            <footer className="mt-2 text-sm not-italic">
                              — <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline text-[#F5F7F9]/90 hover:text-white">{item.source}</a>
                            </footer>
                          )}
                        </blockquote>
                      );
                    case 'examples':
                      return (
                        <div key={index} className="ml-6 space-y-4">
                          {item.items?.map((example, exampleIndex) => (
                            <p key={exampleIndex} className="text-[#F5F7F9]/80">
                              {example}
                            </p>
                          ))}
                        </div>
                      );
                    case 'conclusion':
                      return (
                        <p key={index} className="font-medium text-white text-lg">
                          {item.text}
                        </p>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex justify-center items-center py-8 sm:py-16 px-4 sm:px-6">
          <div className="w-full rounded-xl max-w-7xl flex flex-col lg:flex-row bg-[url(/gradient-bg.svg)] bg-cover p-4 sm:p-6 md:p-8 gap-6 md:gap-8 items-center text-center lg:text-left">
            <div className="flex flex-1 flex-col">
              <div className="text-[#F6F6F6] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Join Us. We&apos;re Hiring.
              </div>
              <p className="text-[#F6F6F6]/60 text-sm sm:text-md mt-4 sm:mt-6 max-w-md lg:max-w-none leading-relaxed">
                We&apos;re growing rapidly and looking for exceptional individuals to join our team.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:w-auto">
              <div className="relative w-full sm:w-auto">
                <GlowEffect
                  colors={["#D01E28aa", "#EF4444aa", "#46ADCaa", "#2573A3aa"]}
                  mode="rotate"
                  blur="softest"
                  duration={10}
                  scale={1}
                />
                <Link href="mailto:careers@endeavor.ai">
                  {/* @ts-expect-error Button component type mismatch */}
                  <Button 
                    color="white"
                    className="relative w-full px-16 py-6 text-xl sm:text-2xl font-medium"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
