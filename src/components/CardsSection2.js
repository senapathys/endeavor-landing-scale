import React from 'react';

const ProgressiveBlur = ({ className, blurIntensity = 6 }) => {
  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)`,
        backdropFilter: `blur(${blurIntensity}px)`,
      }}
    />
  );
};

const IndustriesSection = () => {
  const industries = [
    {
      title: 'Manufacturing',
      subtitle: 'Supply Chain Excellence',
      description: 'Optimize your supply chain, from raw materials to finished goods, with efficient transportation and services.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=center'
    },
    {
      title: 'Healthcare & Pharmacy',
      subtitle: 'Critical Deliveries',
      description: 'Ensure the safe, timely delivery of temperature-sensitive products and critical shipments.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop&crop=center'
    },
    {
      title: 'Technology & Electronics',
      subtitle: 'High-Value Logistics',
      description: 'Handle high-value, sensitive products with care, ensuring fast, secure delivery across global markets.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=center'
    },
    {
      title: 'Retail & E-commerce',
      subtitle: 'Customer Satisfaction',
      description: 'Streamline your fulfillment process, reduce delivery times, and improve customer satisfaction.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop&crop=center'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
            /INDUSTRIES WE SERVE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Tailored Solutions<br />
            for Every Business
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We understand that every industry has unique challenges. That's why we offer 
            customized AI-powered solutions for a wide range of sectors.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative aspect-square w-full overflow-hidden rounded-2xl group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Background Image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Progressive Blur Overlay */}
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[60%] w-full"
                blurIntensity={4}
              />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10">
                <div className="flex flex-col items-start gap-2 px-6 py-6">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {industry.title}
                  </h3>
                  <span className="text-sm text-zinc-300 font-medium mb-2">
                    {industry.subtitle}
                  </span>
                  <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
            Explore All Industries
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;