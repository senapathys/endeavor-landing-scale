import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([]));

  const faqData = [
    {
      question: "Do you use ChatGPT?",
      answer:
        "No, at Endeavor, we build our own AI models that we host securely on Amazon Web Services. No data you submit is processed by OpenAI.",
    },
    {
      question: "Do you integrate with my ERP?",
      answer:
        "Yes, we will integrate with your ERP system to automate PO entry. However, an ERP integration is not necessary to use the tool.",
    },
    {
      question: "Do I need to give you prior examples of RFQs, POs, or quotes?",
      answer:
        "Our AI works without prior examples and only needs product descriptions. However, prior examples improve accuracy significantly.",
    },
    {
      question: "What if the AI makes mistakes?",
      answer:
        "A user must approve and can correct any AI-generated quote or order. Additionally, our AI learns from its mistakes over time.",
    },
    {
      question: "How much does the AI tool cost?",
      answer:
        "Pricing is dependent on the volume of quotes that are processed by the system, but our base pricing covers a large number of quotes.",
    },
    {
      question: "Who are the people behind Endeavor?",
      answer:
        "We're a team of Silicon Valley-based AI engineers with experience from Palantir, the military, and top universities like UC Berkeley and UPenn.",
    },
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const getIcon = (index: number) => {
    const isOpen = openItems.has(index);
    if (isOpen) {
      return <X className="w-5 h-5 text-gray-600 transition-transform duration-150" />;
    } else {
      return <Plus className="w-5 h-5 text-gray-600 transition-transform duration-150" />;
    }
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-12">
        FAQs
      </h2>

      <div className="space-y-0">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-4 sm:py-6 text-left transition-colors duration-150"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 hover:text-gray-900/70 pr-4 leading-relaxed">
                {item.question}
              </h3>
              <div className="flex-shrink-0">{getIcon(index)}</div>
            </button>

            <div
              className={`overflow-hidden ${
                openItems.has(index)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              style={{
                transition: 'opacity 0.15s ease-out, max-height 0.15s ease-out, padding-bottom 0.15s ease-out',
                maxHeight: openItems.has(index) ? '200px' : '0px',
                paddingBottom: openItems.has(index) ? '1.5rem' : '0px'
              }}
            >
              <div className="pr-4 sm:pr-8">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
