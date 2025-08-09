import React, { useState } from 'react';
import { ShoppingCart, Factory, Heart, Cpu } from 'lucide-react';

const CardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with Manufacturing highlighted

  const industries = [
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      description: 'Streamline your fulfillment process, reduce delivery times, and improve customer satisfaction.',
      icon: ShoppingCart,
      size: 'normal'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      description: 'Optimize your supply chain, from raw materials to finished goods, with efficient transportation and services.',
      icon: Factory,
      size: 'large'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Pharmacy',
      description: 'Ensure the safe, timely delivery of temperature-sensitive products and critical shipments.',
      icon: Heart,
      size: 'normal'
    },
    {
      id: 'technology',
      title: 'Technology & Electronics',
      description: 'Handle high-value, sensitive products with care, ensuring fast, secure delivery across global markets.',
      icon: Cpu,
      size: 'normal'
    },
    // {
    //   id: 'logistics',
    //   title: 'Logistics & Distribution',
    //   description: 'Enhance your distribution network with AI-powered route optimization and real-time tracking.',
    //   icon: Truck,
    //   size: 'normal'
    // },
    // {
    //   id: 'construction',
    //   title: 'Construction & Industrial',
    //   description: 'Manage heavy equipment and material deliveries with precision timing and specialized handling.',
    //   icon: Building2,
    //   size: 'normal'
    // }
  ];



  const getCardSize = (index: number) => {
    if (index === currentIndex) return 'large';
    return 'normal';
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === -1 || (currentIndex === 0 && index === industries.length - 1)) return 'left';
    if (diff === 1 || (currentIndex === industries.length - 1 && index === 0)) return 'right';
    return 'hidden';
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
              /INDUSTRIES WE SERVE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Tailored Logistics<br />
              for Every Business
            </h2>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At <strong>AXION</strong>, we understand that every industry has unique logistics challenges. 
              That&apos;s why we offer customized solutions for a wide range of sectors.
            </p>
            
            {/* Navigation Controls */}
            {/* <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous industry"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex-1 h-px bg-gray-300 relative">
                <div 
                  className="absolute h-full bg-gray-900 transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / industries.length) * 100}%` }}
                />
              </div>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next industry"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div> */}
          </div>
        </div>

        {/* Industry Cards Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex items-end justify-center gap-6 min-h-[400px]">
            {industries.map((industry, index) => {
              const position = getCardPosition(index);
              const size = getCardSize(index);
              const IconComponent = industry.icon;
              
              // if (position === 'hidden') return null;

              return (
                <div
                  key={industry.id}
                  className={`
                    transition-all duration-500 ease-out cursor-pointer
                    ${size === 'large' 
                      ? 'w-80 h-96 bg-gray-800 text-white' 
                      : 'w-64 h-80 bg-white text-gray-900 hover:scale-105'
                    }
                    ${position === 'center' ? 'z-10' : 'z-5'}
                    rounded-2xl p-8 flex flex-col justify-between shadow-lg
                  `}
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center mb-6
                    ${size === 'large' ? 'bg-white' : 'bg-gray-900'}
                  `}>
                    <IconComponent 
                      className={`w-8 h-8 ${size === 'large' ? 'text-gray-900' : 'text-white'}`} 
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`
                      font-bold mb-4 leading-tight
                      ${size === 'large' ? 'text-2xl text-white' : 'text-xl text-gray-900'}
                    `}>
                      {industry.title}
                    </h3>
                    <p className={`
                      leading-relaxed
                      ${size === 'large' ? 'text-gray-200' : 'text-gray-600'}
                    `}>
                      {industry.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        {/* <div className="flex justify-center mt-8 gap-2">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'}
              `}
              aria-label={`Go to industry ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default CardsSection;