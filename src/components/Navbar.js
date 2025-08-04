import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { NavigationMenuDemo } from "./NavigationMenu";
import { Menu, X } from "lucide-react";

function Navbar({ theme = "auto" }) {
  const [navbarState, setNavbarState] = useState(theme === "light" ? "scroll-feature" : "hero"); // 'hero', 'scrolled', 'scroll-feature', 'security', 'testimonials', 'form'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // If theme is forced to light, don't change navbar state based on scroll
    if (theme === "light") {
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollFeatureSection = document.getElementById("scroll-feature"); // Desktop scroll feature
      const scrollFeatureMobile = document.getElementById("scroll-feature-mobile"); // Mobile scroll feature
      const securitySection = document.getElementById("security");
      const testimonialsSection = document.getElementById("testimonials");
      const formSection = document.getElementById("form");

      // Check hero first - more responsive on mobile
      const pastHero =
        window.scrollY > heroHeight * (window.innerWidth < 768 ? 0.8 : 1.5);

      // Check testimonials section
      let nearTestimonials = false;
      if (testimonialsSection) {
        const sectionTop = testimonialsSection.offsetTop;
        const sectionBottom = sectionTop + testimonialsSection.offsetHeight;
        const scrollPosition =
          window.scrollY +
          window.innerHeight * (window.innerWidth < 1024 ? 0.05 : 0.1);

        nearTestimonials =
          scrollPosition > sectionTop &&
          window.scrollY < sectionBottom - (window.innerWidth < 1024 ? 30 : 50);
      }

      // Check scroll-feature section
      let nearScrollFeature = false;
      
      // Check desktop scroll feature
      if (scrollFeatureSection && window.innerWidth >= 1024) {
        const sectionTop = scrollFeatureSection.offsetTop;
        const sectionBottom = sectionTop + scrollFeatureSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.1;
        
        nearScrollFeature =
          scrollPosition > sectionTop &&
          window.scrollY < sectionBottom + 20;
      }
      
      // Check mobile scroll feature
      if (scrollFeatureMobile && window.innerWidth < 1024) {
        const sectionTop = scrollFeatureMobile.offsetTop;
        const sectionBottom = sectionTop + scrollFeatureMobile.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.05;
        
        nearScrollFeature =
          scrollPosition > (sectionTop - 100) &&
          window.scrollY < sectionBottom + 10;
      }

      // Check form section
      let nearForm = false;
      if (formSection) {
        const sectionTop =
          formSection.offsetTop + (window.innerWidth < 1024 ? 40 : 120);
        const sectionBottom = sectionTop + formSection.offsetHeight;
        const scrollPosition =
          window.scrollY +
          window.innerHeight * (window.innerWidth < 1024 ? 0.05 : 0.1);

        nearForm =
          scrollPosition > sectionTop &&
          window.scrollY < sectionBottom - (window.innerWidth < 1024 ? 30 : 50);
      }

      // Check security section
      let nearSecurity = false;
      if (securitySection) {
        const sectionTop = securitySection.offsetTop;
        const sectionBottom = sectionTop + securitySection.offsetHeight;
        const scrollPosition =
          window.scrollY +
          window.innerHeight * (window.innerWidth < 1024 ? 0.03 : 0.05);

        nearSecurity =
          scrollPosition > sectionTop &&
          window.scrollY < sectionBottom - (window.innerWidth < 1024 ? 30 : 50);
      }

      // Update scroll state
      setIsScrolled(window.scrollY > 30);
      
      // Set state based on priority (order matters!)
      if (nearSecurity) {
        console.log("security");
        setNavbarState("security");
      } else if (nearForm) {
        console.log("form");
        setNavbarState("form");
      } else if (nearTestimonials) {
        console.log("testimonials");
        setNavbarState("testimonials");
      } else if (nearScrollFeature) {
        console.log("scroll-feature");
        setNavbarState("scroll-feature");
      } else if (pastHero) {
        console.log("scrolled");
        setNavbarState("scrolled");
      } else {
        console.log("hero");
        setNavbarState("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarClasses = () => {
    const backdropClass = isScrolled ? "backdrop-blur-md" : "";
    
    switch (navbarState) {
      case "hero":
        return `text-zinc-900 bg-transparent ${backdropClass}`;
      case "scrolled":
        return `text-zinc-900 bg-transparent ${backdropClass}`;
      case "scroll-feature":
        return `text-zinc-900 bg-white ${backdropClass}`; // Different style for scroll feature
      case "testimonials":
        return `text-zinc-900 bg-transparent ${backdropClass}`;
      case "form":
        return `text-zinc-900 bg-transparent ${backdropClass}`;
      case "security":
        return `text-zinc-900 bg-transparent ${backdropClass}`;
      default:
        return `text-zinc-900 bg-transparent ${backdropClass}`;
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
      className={`py-4 fixed top-0 z-50 w-full transition-all duration-150 ${getNavbarClasses()}`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Link className="flex items-center space-x-2 md:space-x-3" href="/">
          <Image
            src="/industrial-ai-logo.svg"
            alt="Endeavor"
            className={`h-6 w-auto md:h-6 lg:h-7 transition-all duration-300 ${getLogoClasses()}`}
            width={200}
            height={30}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-4 flex-1">
          <NavigationMenuDemo getLinkClasses={getLinkClasses} />
        </div>

        <div className="hidden md:block">
          <Button
            color={`${
              navbarState === "scrolled" || navbarState === "scroll-feature"
                ? "dark"
                : "white"
            }`}
            className="transition-all duration-300"
          >
            Book a demo
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${getLinkClasses()}`} />
          ) : (
            <Menu className={`w-6 h-6 ${getLinkClasses()}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              <Link
                href="#solution"
                className="block py-2 text-gray-900 hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="#demo"
                className="block py-2 text-gray-900 hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="#testimonials"
                className="block py-2 text-gray-900 hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#form"
                className="block py-2 text-gray-900 hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-200/20">
              <Button color="dark" className="w-full">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
