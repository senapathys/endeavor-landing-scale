import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { NavigationMenuDemo } from "./NavigationMenu";

function Navbar() {
  const [navbarState, setNavbarState] = useState("hero"); // 'hero', 'scrolled', 'scroll-feature', 'security', 'testimonials', 'form'

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollFeatureSection = document.getElementById("scroll-feature"); // Add this ID to your scroll feature section
      const securitySection = document.getElementById("security");
      const testimonialsSection = document.getElementById("testimonials");
      const formSection = document.getElementById("form");

      // Check hero first
      const pastHero = window.scrollY > heroHeight * 1.5;

      // Check scroll-feature section
      let nearScrollFeature = false;
      if (scrollFeatureSection) {
        const sectionTop = scrollFeatureSection.offsetTop;
        const sectionBottom = sectionTop + scrollFeatureSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.1; // 30% into viewport

        nearScrollFeature =
          scrollPosition > sectionTop && window.scrollY < sectionBottom + 20;
      }

      // Check testimonials section
      let nearTestimonials = false;
      if (testimonialsSection) {
        const sectionTop = testimonialsSection.offsetTop;
        const sectionBottom = sectionTop + testimonialsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.1;

        nearTestimonials =
          scrollPosition > sectionTop && window.scrollY < sectionBottom - 50;
      }

      // Check form section
      let nearForm = false;
      if (formSection) {
        const sectionTop = formSection.offsetTop + 120;
        const sectionBottom = sectionTop + formSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.1;

        nearForm =
          scrollPosition > sectionTop && window.scrollY < sectionBottom - 50;
      }

      // Check security section
      let nearSecurity = false;
      if (securitySection) {
        const sectionTop = securitySection.offsetTop;
        const sectionBottom = sectionTop + securitySection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.05;

        nearSecurity =
          scrollPosition > sectionTop && window.scrollY < sectionBottom - 50;
      }

      // Set state based on priority (order matters!)
      if (nearSecurity) {
        setNavbarState("security");
      } else if (nearForm) {
        setNavbarState("form");
      } else if (nearTestimonials) {
        setNavbarState("testimonials");
      } else if (nearScrollFeature) {
        setNavbarState("scroll-feature");
      } else if (pastHero) {
        setNavbarState("scrolled");
      } else {
        setNavbarState("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarClasses = () => {
    switch (navbarState) {
      case "hero":
        return "text-zinc-900 bg-transparent";
      case "scrolled":
        return "text-zinc-900 bg-transparent";
      case "scroll-feature":
        return "text-zinc-900 bg-white"; // Different style for scroll feature
      case "testimonials":
        return "text-zinc-900 bg-transparent";
      case "form":
        return "text-zinc-900 bg-transparent";
      case "security":
        return "text-zinc-900 bg-transparent";
      default:
        return "text-zinc-900 bg-transparent";
    }
  };

  const getLinkClasses = () => {
    switch (navbarState) {
      case "hero":
        return "text-[#F6F6F6] hover:!text-[#F6F6F6]/80";
      case "scrolled":
        return "text-[#121212] hover:!text-[#121212]/60";
      case "scroll-feature":
        return "text-[#121212] hover:!text-[#121212]/60"; // Dark text for scroll feature
      case "testimonials":
        return "text-[#F6F6F6] hover:!text-[#F6F6F6]/80";
      case "form":
        return "text-[#F6F6F6] hover:!text-[#F6F6F6]/80";
      case "security":
        return "text-[#F6F6F6] hover:!text-[#F6F6F6]/80";
      default:
        return "text-[#F6F6F6] hover:!text-[#F6F6F6]/80";
    }
  };

  const getLogoClasses = () => {
    switch (navbarState) {
      case "hero":
        return "invert";
      case "scrolled":
        return "";
      case "scroll-feature":
        return ""; // Normal logo for scroll feature
      case "testimonials":
        return "invert";
      case "form":
        return "invert";
      case "security":
        return "invert";
      default:
        return "invert";
    }
  };

  return (
    <nav
      className={`py-4 fixed top-0 z-50 backdrop-blur-md w-full transition-all duration-150 ${getNavbarClasses()}`}
    >
      <div className="flex justify-between items-center mx-8 max-w-7xl mx-auto">
        <Link className="flex items-center space-x-2 md:space-x-3" href="/">
          <Image
            src="/industrial-ai-logo.svg"
            alt="Endeavor"
            className={`h-6 w-auto md:h-6 lg:h-7 transition-all duration-300 ${getLogoClasses()}`}
            width={200}
            height={30}
          />
        </Link>
        <NavigationMenuDemo getLinkClasses={getLinkClasses} />
        <Button
          color={`${navbarState === "scrolled" || navbarState === "scroll-feature" ? "dark" : "white"}`}
          className="transition-all duration-300"
        >
          Book a demo
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
