import Email from "./Email";

function Hero({ heroRef }) {
  return (
    <div
      ref={heroRef}
      className="grid grid-cols-1 pt-24 sm:pt-32 md:pt-40 text-center pb-6 sm:pb-8 relative px-4 sm:px-6"
    >
      {/* <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none"></div> */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter leading-tight md:leading-tight text-[#F6F6F6] px-2">
          AI Order Entry<br />implemented in <span className="italic">just</span> 1
          day
        </h1>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm sm:text-base md:text-xl text-[#F6F6F6] mt-4 sm:mt-6 leading-relaxed">
            Accurate and easy to use AI, built for{" "}
            <span className="border-b-2 border-[#F6F6F6]">manufacturers</span>{" "}
            and <span className="border-b-2 border-[#F6F6F6]">distributors</span>
            .
          </p>
        </div>
        <div className="mt-8 sm:mt-12 w-full flex justify-center px-4">
          <Email style="fill" />
          {/* <EmailSpotlightBorder style="fill" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
