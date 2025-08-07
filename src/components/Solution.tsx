import Image from "next/image";

function Solution() {
  return (
    <div
      id="solution"
    >
      <div className="pt-10 md:pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center space-y-3 mb-8 sm:mb-12 flex items-center flex-col mx-auto">
          <div className="bg-black w-4 h-4 rounded" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-900 px-4">
            Order entry in seconds, not hours
          </h2>
          <p className="px-4 sm:px-12 text-zinc-700 max-w-lg text-sm sm:text-base">
            Simplify your order process and respond to your customers instantly
            with AI.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 text-center mb-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 p-4 sm:p-6 md:p-8 rounded-lg bg-[#E5E7EB]/40 border-secondary-200/40 border-1">
            <h3 className="text-lg sm:text-xl text-zinc-900">
              Email, Handwritten, and Docs
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              Upload your POs in any format
            </p>
            <Image src="/solution/formats.svg" alt="formats" className="mt-2 sm:mt-4" width={400} height={200} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2 p-4 sm:p-6 md:p-8 rounded-lg bg-[#E5E7EB]/40 border-secondary-200/40 border-1">
            <h3 className="text-lg sm:text-xl text-zinc-900">AI Quote Generation</h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              AI Quotes exported as PDF or Excel
            </p>
            <Image src="/solution/quote.svg" alt="quote" className="mt-2 sm:mt-4" width={400} height={200} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2 p-4 sm:p-6 md:p-8 rounded-lg bg-[#E5E7EB]/40 backdrop-blur-md border-secondary-200/40 border-1">
            <h3 className="text-lg sm:text-xl text-zinc-900">Purchase Order Entry</h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              Automatically enter POs into your ERP
            </p>
            <Image src="/solution/po.svg" alt="po" className="mt-2 sm:mt-4" width={400} height={200} />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 p-4 sm:p-6 md:p-8 rounded-lg bg-[#E5E7EB]/40 border-secondary-200/40 border-1 flex flex-col justify-center items-center">
            <h3 className="text-lg sm:text-xl text-zinc-900">AI-Powered Pricing</h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              Intelligent pricing based on customer, product, and volume
            </p>
            <Image src="/solution/pricing.svg" alt="pricing" className="mt-2 sm:mt-4" width={400} height={200} />
          </div>
          <div className="flex flex-col justify-between items-center col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 p-4 pb-0 sm:p-6 sm:pb-0 md:p-8 md:pb-0 rounded-lg bg-[#E5E7EB]/40 border-secondary-200/40 border-1">
            <h3 className="text-lg sm:text-xl text-zinc-900 px-2 sm:px-8">Automated Emailing</h3>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2 px-2 sm:px-8">
              Email quotes directly to your customers with one click
            </p>
            <Image src="/solution/email.svg" alt="email" className="mt-2 sm:mt-4" width={500} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
