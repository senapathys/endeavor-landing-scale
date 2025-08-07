import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./Navbar";
import Email from "./Email";
import Erp from "./Erp";
import { InfiniteSliderHoverSpeed } from "./Testimonials";
import FAQ from "./FAQ";
import Form from "./Form";
import Footer from "./Footer";
import { SolutionConfig } from "@/types/solution";
import { ArrowRight } from "lucide-react";

interface SolutionTemplateProps {
  config: SolutionConfig;
  children?: React.ReactNode;
}

// Hero section component
const SolutionHero: React.FC<{ config: SolutionConfig }> = ({ config }) => {
  return (
    <div className="relative bg-[url(/dark-gradient-bg.svg)] bg-cover before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#121212] before:pointer-events-none">
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto items-center">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium tracking-tighter leading-tight text-[#F6F6F6]">
              {config.title}
            </h1>
            <p className="text-base sm:text-md md:text-lg text-[#F6F6F6] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              {config.description}
            </p>
            <div className="flex justify-center lg:justify-start">
              <Email style="fill" centered={false} responsiveCentered={true} />
            </div>
            {config.badgeText && config.badgeLink && (
              <div className="mt-2 flex justify-center lg:justify-start">
                <a
                  href={config.badgeLink}
                  className="inline-flex items-center px-4 py-2 text-sm text-[#F6F6F6] hover:text-[#F6F6F6]/80 transition-colors duration-200 rounded-xl border border-[#F6F6F6]/60"
                >
                  {config.badgeText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            )}
          </div>

          {/* Right side - Hero Image/Video */}
          <div className="flex items-center justify-center order-last lg:order-last mt-8 lg:mt-0">
            <div className="relative w-full max-w-2xl">
              {config.heroImage.endsWith(".mp4") ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-lg shadow-2xl"
                >
                  <source src={config.heroImage} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={config.heroImage}
                  alt={config.heroImageAlt}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature section component
const FeatureSection: React.FC<{
  feature: SolutionConfig["features"][0];
  index: number;
}> = ({ feature, index }) => {
  const isImageLeft = feature.imagePosition === "left";

  return (
    <section
      id={`solution-feature-${index}`}
      className={`py-16 sm:py-20 md:py-24 ${
        index % 2 === 0 ? "bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            !isImageLeft ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Content */}
          <div
            className={`space-y-6 lg:space-y-8  ${
              !isImageLeft ? "lg:col-start-2 lg:pl-16" : "lg:pr-16"
            }`}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 leading-tight">
              {feature.title}
            </h2>
            <p className="text-base sm:text-md text-gray-700 font-light leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Image */}
          <div
            className={`${
              !isImageLeft ? "lg:col-start-1" : ""
            } order-first lg:order-none p-4 sm:p-6 md:p-8 rounded-lg bg-[#E5E7EB]/40 border-secondary-200/40 border-1`}
          >
            <div className="relative">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom FAQ component for solutions
const SolutionFAQ: React.FC<{ faqs: SolutionConfig["faqs"] }> = ({ faqs }) => {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set([]));

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-0">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-4 sm:py-6 text-left transition-colors duration-150"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 hover:text-gray-900/70 pr-4 leading-relaxed">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                {openItems.has(index) ? (
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden ${
                openItems.has(index) ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transition:
                  "opacity 0.15s ease-out, max-height 0.15s ease-out, padding-bottom 0.15s ease-out",
                maxHeight: openItems.has(index) ? "200px" : "0px",
                paddingBottom: openItems.has(index) ? "1.5rem" : "0px",
              }}
            >
              <div className="pr-4 sm:pr-8">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main template component
const SolutionTemplate: React.FC<SolutionTemplateProps> = ({
  config,
  children,
}) => {
  return (
    <div className="">
      <Head>
        <title>{config.title} | Endeavor</title>
        <meta property="og:title" content={`${config.title} - Endeavor`} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.heroImage} />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <SolutionHero config={config} />

      {/* ERP Integration Section */}
      <Erp />

      {/* Feature Sections */}
      {config.features.map((feature, index) => (
        <FeatureSection key={index} feature={feature} index={index} />
      ))}

      {/* Testimonials Section */}
      {/* <div className="bg-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 text-center leading-tight">
            Trusted by Industry Leaders
          </h2>
        </div>
        <InfiniteSliderHoverSpeed />
      </div> */}

      <InfiniteSliderHoverSpeed />

      {/* Custom FAQ Section */}
      <SolutionFAQ faqs={config.faqs} />

      {/* Contact Form */}
      <Form />

      {/* Footer */}
      <Footer />

      {/* Custom content (for interactive demos, etc.) */}
      {children}
    </div>
  );
};

export default SolutionTemplate;
