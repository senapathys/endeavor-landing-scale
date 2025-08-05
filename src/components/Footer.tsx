import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 60 : 100;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="text-white relative overflow-hidden px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto py-12 sm:py-16">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link className="flex items-center space-x-2 md:space-x-3" href="/">
              <Image
                src="/industrial-ai-logo.svg"
                alt="Endeavor"
                className="h-6 w-auto md:h-6 lg:h-8"
                width={500}
                height={80}
              />
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 sm:mt-8 justify-center md:justify-start">
              <a
                href="https://x.com/EndeavorAI"
                className="w-10 h-10 bg-[#121212] hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/endeavor-ai"
                className="w-10 h-10 bg-[#121212] hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 px-4 sm:px-0">
            <button
              onClick={() => handleScrollToSection("features")}
              className="text-[#121212] hover:text-[#121212]/60 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleScrollToSection("solution")}
              className="text-[#121212] hover:text-[#121212]/60 transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => handleScrollToSection("implementation")}
              className="text-[#121212] hover:text-[#121212]/60 transition-colors"
            >
              Implementation
            </button>
            <button
              onClick={() => handleScrollToSection("faq")}
              className="text-[#121212] hover:text-[#121212]/60 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => handleScrollToSection("form")}
              className="text-[#121212] hover:text-[#121212]/60 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
        {/* Large background text */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
            <span className="text-[clamp(6rem,15vw,24rem)] font-bold leading-none tracking-tight">
              Endeavor
            </span>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="pt-6">
          <div className="text-zinc-400 text-light text-xs leading-relaxed">
            832 Sansome St, San Francisco CA, 94114
            <br />
            <br />© 2025 Endeavor AI, Inc. All rights reserved. The services and
            the content on this website are provided on an &quot;as is&quot;
            basis. Endeavor, its licensors, and its suppliers, to the fullest
            extent permitted by law, disclaim all warranties, either express or
            implied, statutory or otherwise, including but not limited to the
            implied warranties of merchantability, non-infringement of third
            parties&apos; rights, and fitness for particular purpose. Without
            limiting the foregoing, Endeavor, its licensors, and its suppliers
            make no representations or warranties about the accuracy,
            reliability, completeness, currentness, or timeliness of the
            content, software, text, graphics, links, or communications provided
            on or through the use of the website.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
