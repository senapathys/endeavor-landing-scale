import Image from "next/image";

const erpLogos = [
  {
    name: "Epicor Prophet 21",
    src: "/erp_logos/epicor-prophet.svg",
    alt: "Epicor ERP Logo"
  },
  {
    name: "Epicor Bistrack",
    src: "/erp_logos/epicor-bistrack.svg",
    alt: "Infor ERP Logo"
  },
  {
    name: "Infor",
    src: "/erp_logos/infor.svg",
    alt: "Infor ERP Logo"
  },
  {
    name: "Oracle Fusion",
    src: "/erp_logos/oracle-fusion.svg",
    alt: "Oracle Fusion"
  },
  {
    name: "JD Edwards",
    src: "/erp_logos/oracle-jde.svg",
    alt: "JD Edwards ERP Logo"
  }
];

export default function Erp() {
  return (
    <section id="erp" className="bg-[#121212] py-8 pt-12 sm:py-12 pt-16 md:py-16 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto">
            We integrate with your existing ERP system
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {erpLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 sm:h-16 md:h-20"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-full w-auto h-8 sm:h-12 md:h-16 object-contain filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300 brightness-0 invert"
                style={{
                  maxHeight: "100%",
                  width: "auto"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}