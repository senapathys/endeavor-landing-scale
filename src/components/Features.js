import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { FiCpu, FiZap, FiAirplay, FiClock } from "react-icons/fi";

function Features() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "Delegate manual order entry and quoting to AI.",
            description: "Leverage our comprehensive AI platform to optimize your entire quoting process.",
            svg: "/features/platform.svg",
            name: "AI Platform",
            icon: <FiCpu />
        },
        {
            title: "Scale AI to as many customers as you want.",
            description: "Why limit yourself to your top 20% of your customers?",
            svg: "/features/crawl.svg",
            name: "AI Auto-Fill",
            icon: <FiZap />
        },
        {
            title: "You do business differently than others",
            description: "Endeavor builds a customer-specific knowledge base so you can respond.",
            svg: "/features/logic.svg",
            name: "AI Knowledge",
            icon: <FiAirplay />
        },
        {
            title: "Implement AI Order Entry in just one day.",
            description: "Preserve your business knowledge and know-how with AI.",
            svg: "/features/teach.svg",
            name: "AI Memory",
            icon: <FiClock />
        }
    ];

    return (
        <div id="features" className="pt-10 md:pt-24">
            <div className="text-center space-y-3 mb-12 flex items-center flex-col mx-auto">
                <div className="bg-black w-4 h-4 rounded" />
                <h2 className="text-3xl md:text-4xl text-zinc-900">Save an average of 65% on quoting time.
                </h2>
                <p className="px-12 text-zinc-700 max-w-lg">
                    Endeavor helps you respond to your customer RFQs
                    faster and more accurately.
                </p>
                <Button className="min-w-28 md:min-w-32 min-h-12">
                    See it in action
                </Button>
            </div>
            <div className="relative bg-zinc-50 pb-0">
                <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none z-0"></div>
                <div className="relative z-10 grid grid-cols-1 xl:grid-cols-3 gap-12 mx-8 md:mx-24 py-16">
                    <div className="flex flex-col space-y-4 xl:col-span-1">
                        <div className="space-y-4">
                            <h3 className="text-3xl md:text-4xl 2xl:text-5xl text-zinc-900">
                                All the AI features you want, for the best price
                            </h3>
                            <p className="text-zinc-700 max-w-lg">
                                We've built the most comprehensive AI platform for order entry and quoting.
                            </p>
                        </div>
                        <div className="space-y-4 mt-6">
                            {features.map((feature, index) => (
                                <div key={index}>
                                    <button
                                        onClick={() => setActiveFeature(index)}
                                        className={`w-full text-left p-6 transition-all duration-200 ${
                                            activeFeature === index
                                                ? 'text-zinc-900 font-medium bg-white border border-zinc-300 rounded-lg'
                                                : 'text-zinc-500 hover:text-zinc-700 bg-zinc-50 border border-zinc-200 rounded-lg hover:border-zinc-300'
                                        }`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-zinc-100 border border-zinc-300 w-8 h-8 rounded-lg flex items-center justify-center text-black">
                                                {feature.icon}
                                            </div>
                                            <span className="text-base md:text-xl">
                                                {feature.name}
                                            </span>
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            activeFeature === index
                                                ? 'max-h-20 opacity-100 mt-4'
                                                : 'max-h-0 opacity-0 mt-0'
                                        }`}>
                                            <p className="text-zinc-600 max-w-lg text-sm lg:text-base font-normal">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-lg  xl:col-span-2 flex items-center justify-center">
                                <img
                                    src={features[activeFeature].svg}
                                    alt={features[activeFeature].name}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;