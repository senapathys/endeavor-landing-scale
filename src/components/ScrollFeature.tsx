import React, { useState, useCallback, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

const stepsData = [
  {
    id: "analyze",
    title: "Handwritten, emails, and documents OK",
    description:
    "Upload and forward purchase orders of any size, format, or language. Our AI can process them in seconds. Even the handwritten ones.",
    image: "/card-6.svg",
  },
  {
    id: "shape",
    title: "AI learns your part number mappings",
    description:
    "If you've tried other solutions, you know manual mappings are a pain. Our system learns your mappings from item descriptions rapidly.",
    image: "/card-7.svg",
  },
  {
    id: "test",
    title: "Performance analytics at your fingertips",
    description:
      "Tap into all the unstructured data to get an understanding of how many orders, what products, and who's processing them.",
    image: "/card-1.svg",
  },
];

function Step({
  step,
  onInView,
  isActive,
}: {
  step: { id: string; title: string; description: string; image: string };
  onInView: (id: string) => void;
  isActive: boolean;
}) {
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
    <motion.div
      ref={ref}
      className="max-h-[22vh] min-h-[22vh] py-6 border-b border-gray-200 flex flex-col justify-start last:mb-[120px]"
      initial={false}
      animate={{ opacity: isActive ? 1 : 0.4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-normal mb-3">{step.title}</h2>
      <p className="text-md font-light text-gray-600">{step.description}</p>
    </motion.div>
  );
}

function MobileStep({ step, isActive, onInView }: { step: { id: string; title: string; description: string; image: string }; isActive: boolean; onInView: (id: string) => void }) {
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

function StickyPanel({ activeStepId, scrollDirection }: { activeStepId: string; scrollDirection: string }) {
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

  const handleStepInView = useCallback((id: string) => {
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
    <section id="features" className="max-w-7xl mx-auto pt-20 pb-12">
      {/* MOBILE LAYOUT */}
      <div id="scroll-feature-mobile" className="xl:hidden">
        <div className="sticky top-16 bg-white z-10 pt-4 mb-8 px-4 sm:px-6 md:px-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-normal mb-2">
              This isn&apos;t your regular OCR...
            </h2>
            <span className="font-light text-gray-600">
              Simplify your order process and respond to your customers
              instantly with AI.
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
          <div className="sticky top-16 bg-white pb-8 z-10 border-b border-gray-200 pt-4">
            <h2 className="text-4xl font-normal mb-2">
              This isn&apos;t your regular OCR...
            </h2>
            <span className="font-light">
              Simplify your order process and respond to your customers
              instantly with AI.
            </span>
          </div>

          <div className="flex flex-col pb-[30vh]">
            {stepsData.map((step) => (
              <Step
                key={step.id}
                step={step}
                onInView={handleStepInView}
                isActive={step.id === activeStep}
              />
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
