import React, { useState, useCallback, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

const stepsData = [
  {
    id: "analyze",
    title: "Analyze with AI",
    description:
      "Accelerate workflows, drill into variance, and deeply understand your business. Our AI-powered analytics automatically surface key insights and anomalies in your data, saving hours of manual investigation. Get intelligent recommendations and predictive forecasts that help you make data-driven decisions with confidence.",
    image: "/card-1.svg",
  },
  {
    id: "shape",
    title: "Shape data to your business logic",
    description:
      "Create flexible, structured models built to scale with your organization. Define custom inputs, tie in dimensions, and reuse inputs across plans to maintain consistency and reduce redundancy. Transform raw data into meaningful business metrics that align with your unique processes and reporting requirements.",
    image: "/card-6.svg",
  },
  {
    id: "test",
    title: "Pressure test every plan",
    description:
      "Run what-if scenarios and plan for best and worst cases with ease. Stress test your assumptions by adjusting key variables and instantly see the impact across all connected metrics. Build confidence in your strategic decisions by exploring multiple outcomes before committing to a path forward.",
    image: "/card-7.svg",
  },
];

function Step({ step, onInView }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-20% 0px -60% 0px",
  });

  React.useEffect(() => {
    if (inView) {
      onInView(step.id);
    }
  }, [inView, step.id, onInView]);

  return (
    <div
      ref={ref}
      className="max-h-[30vh] min-h-[30vh] py-8 border-b border-gray-200 flex flex-col justify-start"
    >
      <h2 className="text-2xl font-normal mb-4">{step.title}</h2>
      <p className="text-md font-light text-gray-600">{step.description}</p>
    </div>
  );
}

function MobileStep({ step, isActive, onInView }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-10% 0px -10% 0px",
  });

  React.useEffect(() => {
    if (inView) {
      onInView(step.id);
    }
  }, [inView, step.id, onInView]);

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isActive ? 1 : 0.3,
        y: isActive ? 0 : 10,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Content */}
      <div className="space-y-4 mb-8">
        <h2 className="text-2xl font-normal text-gray-900">{step.title}</h2>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </div>

      {/* Full-width Image */}
      <div className="mb-8">
        <img
          src={step.image}
          alt={step.title}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Bottom border for visual separation */}
      <div className="mt-8 pt-8 border-t border-gray-100"></div>
    </motion.div>
  );
}

function StickyPanel({ activeStepId, scrollDirection }) {
  const currentIndex = stepsData.findIndex((s) => s.id === activeStepId);

  return (
    <div
      id="scroll-feature"
      className="sticky top-20 h-[65vh] min-h-[600px] max-h-[700px] flex items-center justify-center bg-[url(/dark-gradient-bg.svg)] bg-cover rounded-xl shadow-lg relative overflow-hidden"
    >
      <div className="flex justify-end items-end w-full h-full relative">
        {/* Render all images with proper layering */}
        <AnimatePresence>
          {stepsData.map((stepItem, index) => {
            const isActive = stepItem.id === activeStepId;
            const isScrollingDown = scrollDirection === "down";

            return (
              <motion.img
                key={stepItem.id}
                src={stepItem.image}
                alt={stepItem.title}
                initial={
                  isActive
                    ? {
                        y: isScrollingDown ? "100%" : "-100%",
                        opacity: 0,
                        scale: 0.95,
                      }
                    : false
                }
                animate={{
                  y: isActive ? 0 : index < currentIndex ? "-50%" : "50%",
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.95,
                }}
                exit={{
                  y: isScrollingDown ? "-100%" : "100%",
                  opacity: 0,
                  scale: 1.02,
                }}
                transition={{
                  duration: isActive ? 1.2 : 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  y: {
                    type: "spring",
                    stiffness: 300,
                    damping: 35,
                  },
                  scale: { duration: 0.5 },
                  opacity: { duration: isActive ? 0.4 : 0.3 },
                }}
                style={{
                  height: "90%",
                  maxWidth: "95%",
                  zIndex: isActive ? 20 : 10 - Math.abs(index - currentIndex),
                }}
                className="absolute bottom-0 right-0 rounded-tl-lg"
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ScrollFeatureSection() {
  const [activeStep, setActiveStep] = useState(stepsData[0].id);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);
  const lastActiveStep = useRef(stepsData[0].id);

  const handleStepInView = useCallback((id) => {
    const currentIndex = stepsData.findIndex((s) => s.id === id);
    const prevIndex = stepsData.findIndex(
      (s) => s.id === lastActiveStep.current
    );

    // Determine scroll direction based on step index change
    if (currentIndex > prevIndex) {
      setScrollDirection("down");
    } else if (currentIndex < prevIndex) {
      setScrollDirection("up");
    }

    setActiveStep(id);
    lastActiveStep.current = id;
  }, []);

  // Optional: Track actual scroll direction for more accuracy
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="features" className="max-w-7xl mx-auto py-12">
      {/* MOBILE LAYOUT */}
      <div id="scroll-feature-mobile" className="xl:hidden">
        <div className="sticky top-16 bg-white z-10 pt-4 mb-8 px-4 sm:px-6 md:px-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-normal mb-2">
              Turn complexity into conviction
            </h2>
            <span className="font-light text-gray-600">
              Incredibly flexible and fun finance copilot
            </span>
          </div>
        </div>

        <div className="space-y-16 px-4 sm:px-6 md:px-8">
          {stepsData.map((step, index) => (
            <MobileStep
              key={step.id}
              step={step}
              isActive={step.id === activeStep}
              onInView={handleStepInView}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div id="scroll-feature" className="hidden xl:grid xl:grid-cols-2 gap-20 md:px-8">
        {/* LEFT COLUMN */}
        <div className="relative h-[calc(100%-25vh)]">
          <div className="sticky top-16 bg-white pb-4 z-10 border-b border-gray-200 pt-4">
            <h2 className="text-4xl font-normal mb-2">
              Order entry in seconds, not hours
            </h2>
            <span className="font-light">
              Simplify your order process and respond to your customers
              instantly with AI.
            </span>
          </div>

          <div className="flex flex-col pb-[30vh]">
            {stepsData.map((step) => (
              <Step key={step.id} step={step} onInView={handleStepInView} />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <StickyPanel
            activeStepId={activeStep}
            scrollDirection={scrollDirection}
          />
        </div>
      </div>
    </section>
  );
}
