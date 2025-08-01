import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Email from "./Email";

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0, 1, 5])); // Pre-opened items

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
      question: "Do I need to give you prior examples of RFQs?",
      answer:
        "Our AI works without prior examples and only needs product descriptions. However, prior examples improve accuracy significantly.",
    },
    {
      question: "What if the AI makes mistakes?",
      answer:
        "A user must approve and can correct any AI-generated quote. Additionally, our AI learns from its mistakes over time.",
    },
    {
      question: "How much does the AI tool cost?",
      answer:
        "Pricing is dependent on the volume of quotes that are processed by the system, but our base pricing covers a large number of quotes.",
    },
    {
      question: "Who are the people behind Endeavor?",
      answer:
        "We're a team of Texas-based engineers and AI experts with experience from Amazon Web Services (AWS), the US Air Force, and Palantir.",
    },
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const getIcon = (index) => {
    const isOpen = openItems.has(index);
    if (isOpen) {
      return <X className="w-5 h-5 text-gray-600" />;
    } else {
      return <Plus className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
        FAQs
      </h2>

      <div className="space-y-0">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-6 text-left transition-colors duration-200"
            >
              <h3 className="text-lg md:text-xl font-medium text-gray-900 hover:text-gray-900/70 pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0">{getIcon(index)}</div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(index)
                  ? "max-h-96 opacity-100 pb-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pr-8">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 mb-5 py-16 mx-8">
        <div className="text-center text-zinc-900 text-2xl mb-6">
          Time is money. Save both.
        </div>
        <Email style="border" />
      </div>
    </section>
  );
};

export default FAQ;
