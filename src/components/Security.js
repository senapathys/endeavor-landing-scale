import { FiActivity, FiAward, FiCloud, FiDatabase, FiDribbble, FiLock, FiShield, FiUserCheck } from "react-icons/fi";

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
        icon: <FiLock />,
        title: "Infrastructure Security",
        description: "Data is hosted in ISO 27001 certified data centers, physical safeguards, redundant networking, and 24/7 security staff."
    },
    {
        icon: <FiCloud />,
        title: "Network Security",
        description: "Our systems are hosted within a secure virtual private cloud. We perform periodic automated network intrusion tests."
    },
    {
        icon: <FiDatabase />,
        title: "Leading Encryption",
        description: "Your data is encrypted with AES-256 at rest. All connections are secured using TLS with 256-bit encryption."
    },
    {
        icon: <FiShield />,
        title: "Regular Audits and Tests",
        description: "Systems are tested for vulnerabilities, logs are reviewed for suspicious activity, and we get regular third-party audits."
    },
    {
        icon: <FiUserCheck />,
        title: "Granular permissions",
        description: "Invite users to see just a specific analysis or the entire dashboard. You're in control of who has read/write access."
    }
];

function Security() {
    return (
        <div id="security" className="bg-black py-10 px-8 md:px-24 md:py-20 relative">
            <div className="absolute inset-0 cosmic-grid-dark opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
                <h2 className="text-white text-2xl md:text-4xl mt-2">Enterprise-grade Security</h2>
                <p className="text-zinc-100 mt-2">Endeavor is committed to protecting your data and your business.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {securityCards.map((card, idx) => (
                        <div key={idx} className="bg-white p-8 rounded">
                            <span className="text-5xl text-zinc-400 flex items-center">
                                {card.icon}
                            </span>
                            <h3 className="text-xl font-medium mt-4">{card.title}</h3>
                            <p className="text-zinc-700 mt-2">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Security;