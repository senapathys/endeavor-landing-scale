import { useEffect, useState, useRef } from 'react';

// Your component
const Demo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const demoRef = useRef(null);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay for smooth effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-6 sm:pt-10 relative lg:min-h-[800px] px-4 sm:px-6">
      {/* <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none"></div> */}
      {/* <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.07)] pointer-events-none z-20"></div> */}
      <div
        id="demo"
        className="block mx-auto relative overflow-hidden z-30"
        ref={demoRef}
      >
        <div
  className={`mx-auto relative rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl bg-transparent z-30 shadow-xl transition-all duration-1000 ease-out w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[70%] ${
    isVisible 
      ? 'opacity-100 transform translate-y-0 scale-100' 
      : 'opacity-0 transform translate-y-4 scale-97'
  }`}
>
  <div className="relative">
    <img
      src="/dashboard-dark-2.svg"
      alt="Sample Web Application Dashboard"
      className="w-full h-auto object-cover rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl"
    />
    {/* Gradient overlay that fades image to transparent */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121212] pointer-events-none rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl lg:rounded-t-3xl" style={{ marginBottom: '-1px' }}></div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Demo;