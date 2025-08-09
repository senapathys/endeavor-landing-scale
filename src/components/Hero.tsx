import Email from "./Email";
import { Button } from "./ui/button";

function Hero({ heroRef }: { heroRef?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={heroRef}
      className="grid grid-cols-1 pt-28 sm:pt-36 md:pt-48 text-center pb-6 sm:pb-8 relative px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-tight md:leading-tight text-[#F6F6F6] px-2">
          Sell products <span className="italic">smarter</span>.
        </h1>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm sm:text-base md:text-xl text-[#F6F6F6] mt-4 sm:mt-6 leading-relaxed font-light">
            AI use cases built for manufacturers and distributors.
          </p>
        </div>
        {/* Button group: content-sized pills that wrap, centered */}
        <div className="mt-4 sm:mt-6 w-full px-4">
          <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-3">
            {/* @ts-expect-error Button component type mismatch */}
            <Button className="justify-center">Quoting</Button>
            {/* @ts-expect-error Button component type mismatch */}
            <Button className="justify-center">Order Entry</Button>
            {/* @ts-expect-error Button component type mismatch */}
            <Button className="justify-center">Product Onboarding</Button>
            {/* @ts-expect-error Button component type mismatch */}
            <Button className="justify-center">Order Status</Button>
            {/* @ts-expect-error Button component type mismatch */}
            <Button className="justify-center">Supplier Specs</Button>
            {/* @ts-expect-error Button component type mismatch */}
            <Button className="justify-center">Invoices</Button>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 w-full flex justify-center px-4">
          <Email style="fill" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
