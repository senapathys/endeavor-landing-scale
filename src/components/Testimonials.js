import { InfiniteSlider } from "@/components/core/infinite-slider";

const testimonials = [
  {
    quote:
      "Endeavor's AI has transformed our order processing. What used to take hours now happens in minutes, and the accuracy is incredible.",
    logo: "/customer_logos/Building-Supply.png",
    name: "Jason Cohen",
    role: "President",
    company: "Northeast Building Supply",
  },
  {
    quote:
      "Endeavor has shown us that AI Agents are the future of the food and beverage industry. Love it - we're going to be using this for a lot of things.",
    logo: "/customer_logos/image.png",
    name: "Michael Wagner",
    role: "Global Director, PIM",
    company: "Schreiber Foods",
  },
  {
    quote:
      "F**k that’s awesome. This makes my life so much easier and with just this one tool. I can turn around quotes in half the time as I was before.",
    logo: "/customer_logos/viking-group-inc-logo-png-transparent.png",
    name: "Matt S.",
    role: "Customer Success Rep",
    company: "Viking Group Inc.",
  },
  {
    quote:
      "Endeavor has been an invaluable strategic partner to solve several critical business problems facing our company and the construction industry.",
    logo: "/customer_logos/ClarkDietrich_rgb.png",
    name: "Brian Panuccio",
    role: "CEO and President",
    company: "ClarkDietrich",
  },
  {
    quote:
      "Endeavor's AI has transformed our order processing. What used to take hours now happens in minutes, and the accuracy is incredible.",
    logo: "/customer_logos/Building-Supply.png",
    name: "Jason Cohen",
    role: "President",
    company: "Northeast Building Supply",
  },
  {
    quote:
      "Endeavor has shown us that AI Agents are the future of the food and beverage industry. Love it - we're going to be using this for a lot of things.",
    logo: "/customer_logos/image.png",
    name: "Michael Wagner",
    role: "Global Director, PIM",
    company: "Schreiber Foods",
  },
  {
    quote:
      "F**k that’s awesome. This makes my life so much easier and with just this one tool. I can turn around quotes in half the time as I was before.",
    logo: "/customer_logos/viking-group-inc-logo-png-transparent.png",
    name: "Matt S.",
    role: "Customer Success Rep",
    company: "Viking Group Inc.",
  },
  {
    quote:
      "Endeavor has been an invaluable strategic partner to solve several critical business problems facing our company and the construction industry.",
    logo: "/customer_logos/ClarkDietrich_rgb.png",
    name: "Brian Panuccio",
    role: "CEO and President",
    company: "ClarkDietrich",
  },
];

export function InfiniteSliderHoverSpeed() {
  return (
    <div id="testimonials" className="bg-[#121212] py-12 sm:py-16 md:py-24 mb-8 sm:px-6">
      <div className="">
        {/* Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-12 flex items-center flex-col mx-auto">
          <div className="bg-white w-4 h-4 rounded" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white px-4">
            "
            <span className="hover:scale-110 transition-transform duration-200 inline-block">
              F**k
            </span>
            , that's awesome."
          </h2>
          <p className="px-4 sm:px-12 text-zinc-300 max-w-lg text-sm sm:text-base">
            Teams at companies doing $10M to $10B love using Endeavor to grow
            sales and support their customers.
          </p>
        </div>
        <InfiniteSlider speed={50} speedOnHover={20} gap={24} className="pb-4">
          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#1a1a1a] rounded-lg p-4 sm:p-6 max-w-[350px] sm:max-w-[400px] md:max-w-[350px] max-h-[280px] sm:max-h-[300px] shadow-md ${
                index % 2 ? "mt-8 sm:mt-16" : ""
              }`}
            >
              {/* Quote */}
              <blockquote className="text-zinc-400 text-sm sm:text-md md:text-lg leading-relaxed mb-4 sm:mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Company Logo */}
              <div className="mb-3 sm:mb-4">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  className="h-6 sm:h-8 w-auto brightness-0 invert"
                />
              </div>

              {/* Person Info */}
              <div>
                <p className="text-zinc-400 font-medium text-xs sm:text-sm">
                  {testimonial.name}
                </p>
                <p className="text-zinc-500 text-xs">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
