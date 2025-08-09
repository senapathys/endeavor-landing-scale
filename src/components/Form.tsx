"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form as ShadcnForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "./shadcn/textarea";
import { Checkbox } from "./shadcn/checkbox";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  title: z.string().min(2, {
    message: "Job title must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      company: "",
      email: "",
      message: "",
      terms: false,
    },
  });

  // Auto-populate email from sessionStorage
  useEffect(() => {
    const checkForStoredEmail = () => {
      const storedEmail = sessionStorage.getItem("userEmail");
      console.log("Checking for stored email:", storedEmail);
      if (storedEmail) {
        form.setValue("email", storedEmail);
        console.log("Email auto-populated:", storedEmail);
        // Clear from sessionStorage after using it
        sessionStorage.removeItem("userEmail");

        // Focus the first input field (name) when redirected from Email component
        // Wait for smooth scroll animation to complete (typically 500-800ms)
        setTimeout(() => {
          form.setFocus("name");
        }, 800);
      }
    };

    // Check initially
    checkForStoredEmail();

    // Listen for storage events (when sessionStorage is updated)
    const handleStorageChange = () => {
      checkForStoredEmail();
    };

    // Add event listener for storage changes
    window.addEventListener("storage", handleStorageChange);

    // Also listen for a custom event we'll dispatch when sessionStorage is set
    window.addEventListener("sessionStorageUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("sessionStorageUpdated", handleStorageChange);
    };
  }, [form]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset(); // Reset form on success
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="form"
      className="flex justify-center items-center py-8 sm:py-16 px-4 sm:px-6"
    >
      <div className="w-full rounded-xl max-w-7xl flex flex-col lg:flex-row bg-[url(/gradient-bg.svg)] bg-cover p-4 sm:p-6 md:p-8 gap-6 md:gap-8">
        <div className="flex flex-1 flex-col">
          <div className="text-[#F6F6F6] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Implement AI
            <br />
            in 1 day
          </div>
          <p className="text-[#F6F6F6]/60 text-sm sm:text-md mt-4 sm:mt-6 max-w-md leading-relaxed">
            Ready to transform your order entry and quoting processes? Get started with Endeavor's
            AI-powered platform and go live in 1 day.
          </p>
        </div>

        <div className="flex flex-1 w-full">
          <ShadcnForm {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6 w-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#F6F6F6]">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#F6F6F6]">Job Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Software Engineer"
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#F6F6F6]">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Acme Corp"
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#F6F6F6]">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#F6F6F6]">
                      Message (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-gray-400 data-[state=checked]:bg-black data-[state=checked]:border-black data-[state=checked]:text-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-[#F6F6F6] text-sm font-normal">
                        I agree to the terms and conditions and privacy policy
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg">
                  <p className="text-green-300 text-sm">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg">
                  <p className="text-error-600 text-sm">
                    Sorry, there was an error sending your message. Please try
                    again.
                  </p>
                </div>
              )}

              {/* @ts-ignore */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Get Started"}
              </Button>
            </form>
          </ShadcnForm>
        </div>
      </div>
    </section>
  );
};

export default Form;
