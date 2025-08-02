import { Cloud, Database, Lock, Shield, UserCheck } from "lucide-react";

const soc2Logo = (
    <img src="/soc2-logo.svg" alt="SOC 2 Type 2 Logo" className="h-12 w-auto" />
);

const securityCards = [
    {
        icon: soc2Logo,
        title: "SOC 2 Type 2 Certified",
        description: "Endeavor is SOC 2 Type 2 certified, ensuring the highest standards for security, availability, and confidentiality."
    },
    {
        icon: <Lock className="w-12 h-12" strokeWidth={1.3} />,
        title: "Infrastructure Security",
        description: "Data is hosted in ISO 27001 certified data centers, physical safeguards, redundant networking, and 24/7 security staff."
    },
    {
        icon: <Cloud className="w-12 h-12" strokeWidth={1.3} />,
        title: "Network Security",
        description: "Our systems are hosted within a secure virtual private cloud. We perform periodic automated network intrusion tests."
    },
    {
        icon: <Database className="w-12 h-12" strokeWidth={1.3} />,
        title: "Leading Encryption",
        description: "Your data is encrypted with AES-256 at rest. All connections are secured using TLS with 256-bit encryption."
    },
    {
        icon: <Shield className="w-12 h-12" strokeWidth={1.3} />,
        title: "Regular Audits and Tests",
        description: "Systems are tested for vulnerabilities, logs are reviewed for suspicious activity, and we get regular third-party audits."
    },
    {
        icon: <UserCheck className="w-12 h-12" strokeWidth={1.3} />,
        title: "Granular permissions",
        description: "Invite users to see just a specific analysis or the entire dashboard. You're in control of who has read/write access."
    }
];

function Security() {
    return (
        <div id="security" className="bg-black py-8 sm:py-10 px-4 sm:px-8 md:px-24 md:py-20 relative flex justify-center">
            <div className="absolute inset-0 bg-[url(/gradient-bg.svg)] bg-cover pointer-events-none"></div>
            <div className="relative z-10 max-w-7xl w-full">
                <h2 className="text-white text-xl sm:text-2xl md:text-4xl">Enterprise-grade Security</h2>
                <p className="text-zinc-100 mt-2 text-sm sm:text-base">Endeavor is committed to protecting your data and your business.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
                    {securityCards.map((card, idx) => (
                        <div key={idx} className="bg-[#1F1F1F]/40 text-[#F5F7F9] backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-xl border-[#F5F7F9]/10 border-1">
                            <span className="text-3xl sm:text-4xl md:text-5xl text-[#F5F7F9] flex items-center">
                                {card.icon}
                            </span>
                            <h3 className="text-lg sm:text-xl text-[#F5F7F9] font-medium mt-3 sm:mt-4">{card.title}</h3>
                            <p className="text-[#F5F7F9]/60 mt-2 text-sm sm:text-base">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Security;