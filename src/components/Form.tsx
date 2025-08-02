"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "./shadcn/textarea";
import { Checkbox } from "./shadcn/checkbox";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Form = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section id="form" className="flex justify-center items-center py-16">
      <div className="min-w-7xl rounded-xl max-w-7xl flex bg-[url(/gradient-bg.svg)] bg-cover p-8">
        <div className="flex flex-1 flex-col">
          <div className="text-[#F6F6F6] text-6xl">
            Accelerate,
            <br />
            Anon
          </div>
          <p className="text-[#F6F6F6]/60 text-md mt-6 max-w-md leading-relaxed">
            Ready to transform your quoting process? Get started with Endeavor's
            AI-powered platform and see results in minutes.
          </p>
        </div>

        <div className="flex flex-1">
          <ShadcnForm {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full"
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
                        className="bg-[#1F1F1F]/40 border-[#F5F7F9]/10 text-[#F5F7F9] placeholder:text-[#F5F7F9]/50"
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
                        className="bg-[#1F1F1F]/40 border-[#F5F7F9]/10 text-[#F5F7F9] placeholder:text-[#F5F7F9]/50"
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
                        className="bg-[#1F1F1F]/40 border-[#F5F7F9]/10 text-[#F5F7F9] placeholder:text-[#F5F7F9]/50"
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
                        className="bg-[#1F1F1F]/40 border-[#F5F7F9]/10 text-[#F5F7F9] placeholder:text-[#F5F7F9]/50"
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
                        className="bg-white border-[#F5F7F9]/10 text-[#F5F7F9]  min-h-[100px]"
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
                        className="border-[#F5F7F9]/30 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
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

              <Button
                type="submit"
                className="w-full py-2 px-4 rounded-lg transition-all duration-200"
              >
                Get Started
              </Button>
            </form>
          </ShadcnForm>
        </div>
      </div>
    </section>
  );
};

export default Form;
