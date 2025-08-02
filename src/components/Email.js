import DOMPurify from "dompurify";
import { useState } from "react";
import { Button } from "./ui/button";
import { GlowEffect } from "@/components/core/glow-effect";

function Email({ style = "fill" }) {
  const containerClass =
    style === "fill" ? "bg-zinc-50" : "bg-white border border-zinc-200";

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [email, setEmail] = useState("");

  function sanitizeInput(input) {
    return DOMPurify.sanitize(input);
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const sendEmail = async (event) => {
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
      document.querySelector("#submit" + style).textContent = "Sent!";
      document.querySelector("#submit" + style).disabled = true;
      document.querySelector("#email" + style).disabled = true;
    }
  };

  return (
    <form onSubmit={sendEmail} className="relative z-10 max-w-lg min-w-lg">
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
          <Button className="min-w-28 md:min-w-32 min-h-12 !bg-[#52525C]">Get started</Button>
        </div>
      </div>
      {invalidEmail && (
        <p className="text-orange-400 text-sm mt-2">
          Please enter a valid email address
        </p>
      )}
    </form>
  );
}

export default Email;
