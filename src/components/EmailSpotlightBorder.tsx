import DOMPurify from "dompurify";
import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { GlowEffect } from '@/components/core/glow-effect';

function EmailSpotlightBorder({ style = "fill" }) {
  const containerClass =
    style === "fill" ? "bg-zinc-50" : "bg-white border border-zinc-200";

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");
  
  // Spotlight border states
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  function sanitizeInput(input: string) {
    return DOMPurify.sanitize(input);
  }

  function validateEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Spotlight border handlers
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();

    const cleanedEmail = sanitizeInput(email);
    const body = { email: cleanedEmail };

    if (!validateEmail(body.email)) {
      setInvalidEmail(true);
      return;
    } else {
      setInvalidEmail(false);
    }

    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const submitButton = document.querySelector("#submit" + style) as HTMLButtonElement;
      const emailInput = document.querySelector("#email" + style) as HTMLInputElement;
      
      if (submitButton) {
        submitButton.textContent = "Sent!";
        submitButton.disabled = true;
      }
      if (emailInput) {
        emailInput.disabled = true;
      }
    }
  };

  return (
    <form onSubmit={sendEmail} className="relative z-10">
      <div className="relative max-w-lg mx-auto">
        {/* Main container */}
        <div
          className={`px-1 py-1 flex items-center ${containerClass} rounded-md text-sm md:text-base border border-zinc-300 relative z-10 shadow-lg`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            id={"email" + style}
            type="email"
            placeholder="What's your email?"
            className="px-3 bg-transparent w-full focus:outline-none placeholder-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          
          <div className="relative">
            <GlowEffect
              colors={["#D01E28", "#EF4444", "#46ADC5", "#2573A3"]}
              mode="colorShift"
              blur="soft"
              duration={4}
              scale={0.9}
            />
            {/* @ts-expect-error Button component type mismatch */}
            <Button id={"submit" + style} className="min-w-28 md:min-w-32 min-h-12">
              Get started
            </Button>
          </div>
        </div>

        {/* Spotlight border overlay */}
        <div
          ref={divRef}
          className="pointer-events-none absolute inset-0 z-20 rounded-md border-2 border-transparent bg-transparent transition-opacity duration-500"
          style={{
            opacity,
            // borderColor: invalidEmail ? "rgb(251 146 60)" : "rgb(34 197 94)", // Orange for error, green for normal
            borderColor: "#EF4444",
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
        />
      </div>

      {invalidEmail && (
        <p className="text-orange-400 text-sm mt-2 text-center">
          Please enter a valid email address
        </p>
      )}
    </form>
  );
}

export default EmailSpotlightBorder;