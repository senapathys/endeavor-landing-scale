"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Utensils, FlaskConical, Package, Building2 } from "lucide-react";

type UseCase = {
  id: string;
  customer: string;
  title: string;
  subtext: string;
  description: string;
  imageSrc?: string;
  tags?: string[];
  logoSrc?: string;
  icon: LucideIcon;
};

const useCases: UseCase[] = [
  {
    id: "schreiber-foods",
    customer: "Schreiber Foods",
    title: "Accelerate product R&D and specification review with AI",
    subtext: "How Schreiber Foods uses AI to accelerate R&D",
    description:
        "Supplier specs take months to review manually, slowing time-to-market and leaving millions in revenue on the table. Endeavor helps Schreiebr Foods automate spec review, reducing onboarding to days and creating new revenue streams.",
    imageSrc: "/schreiber-use-case.webp",
    tags: ["Food & Beverage", "R&D", "PIM", "Supplier Specifications"],
    logoSrc: "/customer_logos/image.png",
    icon: Utensils,
  },
  {
    id: "clark-dietrich",
    customer: "ClarkDietrich",
    title: "Turnaround quotes in minutes, not days with AI",
    subtext: "How ClarkDietrich uses AI to win more quotes",
    description:
      "Quoting is challening, manual, and requires expertise in long product catalogs. Endeavor helps ClarkDietrich automate quotes and product matching, turning around quotes in minutes when competitors take days.",
    imageSrc: "/clarkdietrich-use-case.webp",
    tags: ["Manufacturing", "Inside Sales", "Quoting", "Product Mapping"],
    logoSrc: "/customer_logos/ClarkDietrich_rgb.png",
    icon: Building2,
  },
  {
    id: "cabot-corporation",
    customer: "Cabot Corporation",
    title: "Fully automate order entry and support with AI",
    subtext: "How Cabot uses AI to deliver exceptional order support",
    description:
      "Order entry and support can be manual, error-prone, and slow. Inside sales departments can balloon in size. Endeavor helps Cabot improve productivity with AI-powered order entry and customer support.",
    imageSrc: "/cabot-use-case.webp",
    tags: ["Chemicals", "Customer Support", "Order Entry", "Order Support"],
    logoSrc: "/customer_logos/Cabot_Corporation_Logo.svg.png",
    icon: FlaskConical,
  },
  {
    id: "menasha",
    customer: "Menasha",
    title: "Ensure product compliance and quality with AI",
    subtext: "How Menasha uses AI to satisfy customer standards",
    description:
      "Product design requires compliance with customer requirements and standards, which can be a challenge with siloed systems. Endeavor helps Menasha easily query specifications data to ensure compliance.",
    imageSrc: "/menasha-use-case.webp",
    tags: ["Packaging", "Product Design", "Customer Specifications", "Knowledge Base"],
    logoSrc: "/customer_logos/Menasha-Logo_MMIH_2Color.webp",
    icon: Package,
  },
];

interface CustomerUseCasesProps {
  externalActiveId?: string;
  onUseCaseChange?: (useCaseId: string) => void;
}

const CustomerUseCases: React.FC<CustomerUseCasesProps> = ({ 
  externalActiveId, 
  onUseCaseChange 
}) => {
  const [activeId, setActiveId] = useState<string>(externalActiveId || useCases[0].id);
  const [imageLoading, setImageLoading] = useState(false);

  // Handle external active ID changes
  React.useEffect(() => {
    if (externalActiveId && externalActiveId !== activeId) {
      setActiveId(externalActiveId);
    }
  }, [externalActiveId, activeId]);

  const active = useMemo(
    () => useCases.find((c) => c.id === activeId) ?? useCases[0],
    [activeId]
  );

  const handleUseCaseChange = (newId: string) => {
    setImageLoading(true);
    setActiveId(newId);
    
    // Call parent callback to keep state in sync
    if (onUseCaseChange) {
      onUseCaseChange(newId);
    }
    
    // Reset loading state after animation completes
    setTimeout(() => setImageLoading(false), 50);
  };

  return (
    <section
      id="use-cases"
      className="flex justify-center items-center my-8 mt-24 sm:my-16 sm:mt-32 px-4 sm:px-6"
    >
      <div className="w-full rounded-xl max-w-7xl flex flex-col lg:flex-row bg-[url(/gradient-bg.svg)] bg-cover p-4 sm:p-6 md:p-8 gap-6 md:gap-8 overflow-hidden">
        {/* Left side: header, subtext, tabs */}
        <div className="flex flex-1 flex-col">
          <div className="text-[#F6F6F6] transition-colors pt-2">
            {active.logoSrc ? (
              <Image
                src={active.logoSrc}
                alt={`${active.customer} logo`}
                width={180}
                height={48}
                className="h-6 sm:h-8 w-auto brightness-0 invert opacity-90"
              />
            ) : (
              <span>{active.customer}</span>
            )}
          </div>
          <div className="text-[#F6F6F6] transition-colors text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4 py-4 sm:mt-6 leading-tight">
            {active.title}
          </div>

          {/* Vertical tabs (accordion-style) */}
          <div className="mt-6 sm:mt-8">
            <div className="border-t border-white/10 divide-y divide-white/10">
              {useCases.map((uc) => {
                const isActive = uc.id === activeId;
                return (
                  <div key={uc.id} className="group">
                    <button
                      type="button"
                      onClick={() => handleUseCaseChange(uc.id)}
                      aria-expanded={isActive}
                      className={[
                        "w-full text-left flex items-start justify-between gap-4 px-2",
                        "transition-colors duration-200",
                        isActive ? "pt-3 sm:pt-4" : "py-4 sm:py-5",
                        isActive
                          ? "opacity-100"
                          : "opacity-70 hover:opacity-100 hover:bg-white/5",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        <div
                          className={[
                            "mt-1 max-h-9 max-w-9 p-2 sm:h-10 sm:w-10 rounded-full border flex items-center justify-center transition-colors",
                            isActive
                              ? "bg-white border-white text-black"
                              : "bg-white/5 border-white/15 text-white/80",
                          ].join(" ")}
                        >
                          {(() => {
                            const Icon = uc.icon;
                            return (
                              <Icon
                                className={[
                                  "h-3 w-3 sm:h-4 sm:w-4 transition-opacity",
                                  isActive ? "opacity-100" : "opacity-60",
                                ].join(" ")}
                              />
                            );
                          })()}
                        </div>
                        <div>
                          <div className="text-[#F6F6F6] text-base sm:text-lg font-medium leading-tight">
                            {uc.subtext}
                          </div>
                        </div>
                      </div>
                      <svg
                        className={[
                          "mt-1 h-5 w-5 text-white/60 transition-transform duration-300",
                          isActive ? "rotate-180" : "rotate-0",
                        ].join(" ")}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Drawer content */}
                    <div
                      className={[
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-80",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-1 sm:pt-2 pb-4 sm:pb-5 pl-12 sm:pl-14">
                          <p className="text-[#F6F6F6]/70 text-sm leading-relaxed break-words">
                            {uc.description}
                          </p>
                          {uc.tags && uc.tags.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                              {uc.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs rounded-full border border-white/15 text-[#F6F6F6]/80 px-3 py-1 bg-white/5"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right side: demo image */}
        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <div
            className="relative w-full max-w-full lg:max-w-[42rem] xl:max-w-[48rem] h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px] mx-2 lg:mx-0 lg:-mr-20 xl:-mr-20"
          >
            <Image
              key={active.id}
              src={active.imageSrc ?? "/dashboard-with-chat.svg"}
              alt="Product demo"
              fill
              priority={false}
              sizes="(max-width: 1600px) 100vw, 1600px"
              className={`rounded-lg object-cover shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-opacity duration-500 ease-in-out ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              objectPosition={active.id === "clark-dietrich" ? "center" : "left"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerUseCases;


