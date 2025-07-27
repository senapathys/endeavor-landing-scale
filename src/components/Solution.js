function Solution() {

    return (
        <div id="solution" className="pt-10 md:pt-24 pb-16">
            <div className="text-center space-y-3 mb-12 flex items-center flex-col mx-auto">
                <div className="bg-black w-4 h-4 rounded" />
                <h2 className="text-3xl md:text-4xl text-zinc-900">Order entry in seconds, not hours</h2>
                <p className="px-12 text-zinc-700 max-w-lg">Simplify your order process and respond to your customers instantly with AI.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 px-8 md:px-24 text-center mb-6">
                <div className="col-span-1 md:col-span-2 p-8 rounded-lg bg-zinc-100">
                    <h3 className="text-xl text-zinc-900">Email, Handwritten, and Docs</h3>
                    <p className="text-zinc-600 text-sm mt-2">Upload your POs in any format</p>
                    <img src="/formats.svg" alt="formats" className="" />
                </div>
                <div className="col-span-1 md:col-span-2 p-8 rounded-lg bg-zinc-100">
                    <h3 className="text-xl text-zinc-900">AI Quote Generation</h3>
                    <p className="text-zinc-600 text-sm mt-2">AI Quotes exported as PDF or Excel</p>
                    <img src="/quote.svg" alt="quote" className="mt-4" />
                </div>
                <div className="col-span-1 md:col-span-2 p-8 rounded-lg bg-zinc-100">
                    <h3 className="text-xl text-zinc-900">Purchase Order Entry</h3>
                    <p className="text-zinc-600 text-sm mt-2">Automatically enter POs into your ERP</p>
                    <img src="/po.svg" alt="po" className="mt-4" />
                </div>
                <div className="col-span-1 md:col-span-3 p-8 rounded-lg bg-zinc-100">
                    <h3 className="text-xl text-zinc-900">AI-Powered Pricing</h3>
                    <p className="text-zinc-600 text-sm mt-2">Intelligent pricing based on customer, product, and volume</p>
                    <img src="/pricing.svg" alt="pricing" className="mt-4" />
                </div>
                <div className="col-span-1 md:col-span-3 pt-8 rounded-lg bg-zinc-100">
                    <h3 className="text-xl text-zinc-900 px-8">Automated Emailing</h3>
                    <p className="text-zinc-600 text-sm mt-2 px-8">Email quotes directly to your customers with one click</p>
                    <img src="/email.svg" alt="email" className="" />
                </div>
            </div>

        </div>
    );
}

export default Solution;