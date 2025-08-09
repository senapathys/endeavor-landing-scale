import DOMPurify from "dompurify";
import { useState } from "react";
import { Button } from "./ui/button";
import { GlowEffect } from "@/components/core/glow-effect";

function Email({ style = "fill" }) {
  const containerClass =
    style === "fill" ? "bg-zinc-50" : "bg-white border border-zinc-200";

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");

  function sanitizeInput(input: string) {
    return DOMPurify.sanitize(input);
  }

  function validateEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleGetStarted = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Get Started clicked, email:", email);

    const cleanedEmail = sanitizeInput(email);

    if (!validateEmail(cleanedEmail)) {
      setInvalidEmail(true);
      console.log("Invalid email:", cleanedEmail);
      return;
    } else {
      setInvalidEmail(false);
    }

    // Store email in sessionStorage for auto-population
    sessionStorage.setItem("userEmail", cleanedEmail);
    console.log("Email stored in sessionStorage:", cleanedEmail);
    
    // Dispatch custom event to notify Form component
    window.dispatchEvent(new Event('sessionStorageUpdated'));

    // Scroll to form section
    const formElement = document.getElementById("form");
    if (formElement) {
      const elementPosition = formElement.offsetTop;
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 60 : 100;
      const offsetPosition = elementPosition - offset;

      console.log("Scrolling to form section at:", offsetPosition);
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.warn("Form element not found");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleGetStarted}
        className="relative z-10 max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg w-full"
      >
        <GlowEffect
          colors={["#D01E28aa", "#EF4444aa", "#46ADCaa", "#2573A3aa"]}
          mode="rotate"
          blur="softest"
          duration={10}
          scale={1}
        />
        <div
          className={`relative px-1 py-1 flex items-center mx-auto ${containerClass} rounded-md text-sm md:text-base border border-zinc-800 shadow-lg relative z-10 shadow-lg !bg-[#121212] backdrop-blur-md`}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            id={"email" + style}
            type="email"
            placeholder="What's your email?"
            className="relative px-3 bg-transparent w-full focus:outline-none placeholder-[#F6F6F6]/90 disabled:opacity-50 disabled:cursor-not-allowed !text-[#F6F6F6]"
          />
          {/* <button
                    id={"submit" + style} 
                    className="min-w-28 md:min-w-32 bg-emerald-300 hover:bg-emerald-200 transition-color duration-200 text-zinc-900 rounded px-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                    Get started
                </button> */}
          <div className="relative">
            {/* <GlowEffect
            colors={["#D01E28", "#EF4444", "#46ADC5", "#2573A3"]}
            mode="rotate"
            blur="softest"
            duration={10}
            scale={1}
          /> */}
            {/* @ts-expect-error Button component type mismatch */}
            <Button
              type="submit"
              className="min-w-28 md:min-w-32 min-h-12 !bg-[#52525C]"
            >
              <span className="text-xs md:text-sm">Get started</span>
            </Button>
          </div>
        </div>
      </form>
      <div className="mt-4 h-6 flex items-start">
        {invalidEmail && (
          <p className="text-error-600 text-sm">
            Please enter a valid email address
          </p>
        )}
      </div>
    </div>
  );
}

export default Email;
