import Email from './Email';

function Hero(
  { heroRef }
) {

    return (
    <div
      ref={heroRef}
      className="bg-zinc-50 grid grid-cols-1 pt-40 text-center pb-10 relative">
      <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight md:leading-tight">
          AI Order Entry implemented in <span className="italic">just</span> 1 day
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-xl text-zinc-800 mt-6">
            Accurate and easy to use AI, built for <span className="border-b-2 border-zinc-800">manufacturers</span> and <span className="border-b-2 border-zinc-800">distributors</span>.
          </p>
        </div>
        <div className="mt-12">
          <Email style="fill" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
