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
    company: "ClarkDietrich Building Systems",
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
    company: "ClarkDietrich Building Systems",
  },
];

export function InfiniteSliderHoverSpeed() {
  return (
    <div id="testimonials" className="bg-white py-16 md:py-24 mb-8">
      <div className="">
        {/* Header */}
        <div className="text-center space-y-3 mb-12 flex items-center flex-col mx-auto">
          <div className="bg-black w-4 h-4 rounded" />
          <h2 className="text-3xl md:text-4xl text-zinc-900">
            "
            <span className="hover:scale-110 transition-transform duration-200 inline-block">
              F**k
            </span>
            , that's awesome."
          </h2>
          <p className="px-12 text-zinc-700 max-w-lg">
            Teams at companies doing $10M to $10B love using Endeavor to grow
            sales and support their customers.
          </p>
        </div>
        <InfiniteSlider speed={50} speedOnHover={20} gap={24}>
          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#E5E7EB]/40 rounded-lg p-6 max-w-[400px] max-h-[300px] ${
                index % 2 ? "mt-16" : ""
              }`}
            >
              {/* Quote */}
              <blockquote className="text-zinc-700 text-md md:text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Company Logo */}
              <div className="mb-4">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  className="h-8 w-auto"
                />
              </div>

              {/* Person Info */}
              <div>
                <p className="text-zinc-900 font-medium text-sm">
                  {testimonial.name}
                </p>
                <p className="text-zinc-600 text-xs">{testimonial.role}</p>
                <p className="text-zinc-500 text-xs">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
