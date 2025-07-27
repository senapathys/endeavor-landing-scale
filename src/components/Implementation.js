import { Button } from "./ui/button";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const implementationSteps = [
    {
        number: "01",
        title: "Connect",
        contentTitle: "Integrate your data sources",
        bullets: [
            "Connect your ERP, CRM, and product catalogs",
            "Upload your existing product database",
            "AI learns your business processes automatically"
        ]
    },
    {
        number: "02",
        title: "Train",
        contentTitle: "Your AI gets better and better",
        bullets: [
            "Upload sample RFQs and historical quotes",
            "AI learns your pricing strategies",
            "Train on product configurations"
        ]
    },
    {
        number: "03",
        title: "Automate",
        contentTitle: "Ask why you didn't switch sooner",
        bullets: [
            "Start processing customer RFQs automatically",
            "AI generates accurate quotes instantly",
            "Orders enter directly into your ERP system"
        ]
    }
];

function Implementation() {
    return (
        <div id="implementation" className="mb-16">
            <div className="relative bg-zinc-50">
                <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none z-0"></div>
                <div className="relative z-10 px-8 md:px-24 py-16 pb-24">
                    {/* Header with button */}
                    <div className="text-center space-y-3 mb-12 flex items-center flex-col mx-auto max-w-2xl">
                        <div className="bg-black w-4 h-4 rounded" />
                        <h2 className="text-3xl md:text-4xl text-zinc-900">AI shouldn't take months to implement.
                        </h2>
                        <Button className="min-w-28 md:min-w-32 min-h-12" plain>
                            Check it out
                            <FiArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Timeline */}
                    <div className="relative mx-auto flex w-fit flex-col">
                        {/* Date labels above timeline */}
                        <div className="hidden grid-cols-1 grid-rows-3 gap-12 md:grid lg:mb-8 lg:grid-cols-3 lg:grid-rows-1 lg:gap-0">
                            {implementationSteps.map((step, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    <span className="leading-trim text-sm rounded-md border border-zinc-300 px-4 py-2.5 bg-white">
                                        {index === 0 ? "Today" : index === 1 ? "Day 5" : "Day 30"}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Timeline line and markers container */}
                        <div className="relative lg:px-6 lg:py-0">
                            {/* Vertical line for mobile/tablet */}
                            <div className="absolute left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-zinc-300 lg:hidden"></div>
                            
                            {/* Horizontal line for desktop */}
                            <div className="absolute left-1/2 top-1/2 hidden h-px -translate-y-1/2 -translate-x-1/2 bg-zinc-300 lg:block" style={{ width: '66.67%' }}></div>
                            
                            {/* Timeline markers */}
                            <div className="relative grid h-full grid-cols-1 grid-rows-3 justify-between gap-12 lg:grid-cols-3 lg:grid-rows-1">
                                {implementationSteps.map((step, index) => (
                                    <div key={index} className="relative z-10 mt-3 size-3 rounded bg-zinc-900 md:mt-0 place-self-center"></div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline content cards */}
                        <div className="ml-5 grid grid-rows-3 gap-12 lg:ml-0 lg:mt-8 lg:grid-cols-3 lg:grid-rows-1">
                            {implementationSteps.map((step, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    {/* Mobile date labels */}
                                    <span className={`leading-trim text-sm w-fit rounded-md border border-zinc-300 px-3 py-2 bg-white md:hidden ${index === 1 || index === 2 ? 'lg:translate-x-1/2' : index === 0 ? 'lg:-translate-x-1/2' : ''}`}>
                                        {index === 0 ? "Today" : index === 1 ? "Day 5" : "Day 30"}
                                    </span>
                                    
                                    {/* Content card */}
                                    <div className={`h-full rounded-xl border border-zinc-300 bg-white px-4 py-6 md:px-6 md:py-8 ${index === 2 ? 'shadow-xl shadow-zinc-300' : ''}`}>
                                        <h3 className="text-lg font-medium mb-4 leading-trim text-zinc-900">{step.contentTitle}</h3>
                                        <ul className="space-y-2">
                                            {step.bullets.map((bullet, bulletIndex) => (
                                                <li key={bulletIndex} className="flex items-center">
                                                    <FiCheck className="text-zinc-600 mr-2 size-4 flex-none md:size-5" />
                                                    <span className="leading-trim text-sm text-zinc-700">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-b from-zinc-50 via-zinc-50/80 to-white pointer-events-none z-20" style={{ bottom: '-96px' }}></div>
            </div>
        </div>
    );
}

export default Implementation; 