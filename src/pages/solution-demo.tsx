import React from "react";
import SolutionTemplate from "@/components/SolutionTemplate";
import { SolutionConfig } from "@/types/solution";

// Example configuration for a new solution
const demoSolutionConfig: SolutionConfig = {
  title: "AI Document Analysis",
  description: "Transform your document workflows with intelligent automation. Extract, classify, and process business documents with unparalleled accuracy and speed.",
  heroImage: "/dashboard.png",
  heroImageAlt: "Document Analysis Dashboard Demo",
  badgeText: "See our other solutions",
  badgeLink: "/",
  
  erpTitle: "Works with all major business systems",
  erpDescription: "Seamlessly integrate with your existing document management and business applications",
  
  features: [
    {
      title: "Smart Document Classification",
      description: "Our AI automatically categorizes incoming documents by type, urgency, and department. Save hours of manual sorting and ensure nothing falls through the cracks.",
      image: "/solution/formats.svg",
      imageAlt: "Document classification illustration",
      imagePosition: "left"
    },
    {
      title: "Advanced Data Extraction", 
      description: "Extract key information from contracts, invoices, reports, and more. Our ML models understand context and relationships to provide structured data output.",
      image: "/solution/email.svg",
      imageAlt: "Data extraction illustration",
      imagePosition: "right"
    },
    {
      title: "Intelligent Workflow Automation",
      description: "Automatically route documents to the right teams, trigger approval processes, and update business systems. Reduce processing time by up to 90%.",
      image: "/solution/quote.svg", 
      imageAlt: "Workflow automation illustration",
      imagePosition: "left"
    }
  ],
  
  faqs: [
    {
      question: "What document types can the AI process?",
      answer: "Our system handles PDFs, images, scanned documents, emails, and most common business document formats. It can process both structured and unstructured documents."
    },
    {
      question: "How accurate is the document analysis?",
      answer: "We achieve 95%+ accuracy on most document types, with continuous learning that improves performance over time based on your specific document patterns."
    },
    {
      question: "Can I customize the extraction fields?",
      answer: "Yes, you can define custom extraction templates for your specific document types and business requirements. The system adapts to your unique needs."
    },
    {
      question: "How does the system handle sensitive documents?",
      answer: "All documents are processed with enterprise-grade security. We support on-premise deployment and comply with industry regulations like GDPR and HIPAA."
    },
    {
      question: "What's the typical implementation timeline?",
      answer: "Most customers see results within 2-3 weeks. We provide full implementation support and training to ensure smooth adoption across your organization."
    }
  ],
  
  formTitle: "Ready to Automate Your Document Workflows?",
  formDescription: "Schedule a consultation to see how our AI can transform your document processing operations."
};

function SolutionDemo() {
  return <SolutionTemplate config={demoSolutionConfig} />;
}

export default SolutionDemo;