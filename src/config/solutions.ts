import { SolutionConfig } from "@/types/solution";

export const orderEntryConfig: SolutionConfig = {
  title: "AI-Powered Order Entry",
  description: "Streamline your order processing with intelligent document extraction and automated catalog matching. Process purchase orders 10x faster with industry-leading accuracy.",
  heroImage: "/autofill.mp4",
  heroImageAlt: "Order Entry Automation Demo",
  badgeText: "or click here to try out Endeavor Omelas",
  badgeLink: "/omelas",
  
  erpTitle: "Seamlessly integrate with your existing ERP system",
  erpDescription: "Connect directly to your current workflow without disrupting operations",
  
  features: [
    {
      title: "Intelligent Document Processing",
      description: "Our AI automatically extracts key information from purchase orders, invoices, and other business documents. No manual data entry required - just upload and let our system handle the rest.",
      image: "/solution/po.svg",
      imageAlt: "Document processing illustration",
      imagePosition: "right"
    },
    {
      title: "Smart Catalog Matching", 
      description: "Advanced algorithms match extracted items to your product catalog with 99%+ accuracy. Our system learns from your corrections to continuously improve matching precision.",
      image: "/solution/pricing.svg",
      imageAlt: "Catalog matching illustration",
      imagePosition: "left"
    },
    {
      title: "Seamless ERP Integration",
      description: "Direct integration with major ERP systems including Epicor, Oracle, and Infor. Orders flow automatically into your existing workflow without disrupting current processes.",
      image: "/solution/formats.svg", 
      imageAlt: "ERP integration illustration",
      imagePosition: "right"
    }
  ],
  
  faqs: [
    {
      question: "How accurate is the document extraction?",
      answer: "Our AI achieves 99%+ accuracy in extracting key information from purchase orders and invoices. The system continuously learns and improves from user corrections."
    },
    {
      question: "Which document formats are supported?",
      answer: "We support PDF, image files (PNG, JPG), and scanned documents. Our OCR technology can handle both typed and handwritten text with high accuracy."
    },
    {
      question: "How long does implementation take?",
      answer: "Most customers are up and running within 24-48 hours. Our team handles the integration setup while you continue normal operations."
    },
    {
      question: "Can I review orders before they're processed?",
      answer: "Yes, you maintain full control. All extracted orders can be reviewed and approved before being sent to your ERP system. You can also set up automatic approval for trusted vendors."
    },
    {
      question: "What happens if the AI makes an error?",
      answer: "Any corrections you make are used to train the system, making it more accurate over time. You always have the ability to modify any extracted information before final processing."
    }
  ],
  
  formTitle: "Ready to Transform Your Order Entry Process?",
  formDescription: "Get started with a personalized demo and see how our AI can streamline your operations."
};

export const omelasConfig: SolutionConfig = {
  title: "Endeavor Omelas",
  description: "Advanced AI assistant that understands your business context and provides intelligent insights. Chat with your data and get instant answers to complex business questions.",
  heroImage: "/knowledge-base.mp4",
  heroImageAlt: "Omelas AI Assistant Demo",
  badgeText: "or click here to try out Order Entry",
  badgeLink: "/order-entry",
  
  erpTitle: "Works with your existing business systems",
  erpDescription: "Seamlessly connect to multiple data sources and business applications",
  
  features: [
    {
      title: "Intelligent Business Conversations",
      description: "Chat naturally with your business data using advanced AI. Ask complex questions about sales, inventory, customer trends, and get instant, accurate answers backed by your actual data.",
      image: "/solution/email.svg",
      imageAlt: "AI conversation illustration", 
      imagePosition: "left"
    },
    {
      title: "Multi-Source Data Integration",
      description: "Connect to databases, spreadsheets, CRM systems, and more. Omelas understands relationships between different data sources and provides unified insights across your entire business ecosystem.",
      image: "/solution/formats.svg",
      imageAlt: "Data integration illustration",
      imagePosition: "right"
    },
    {
      title: "Contextual Business Intelligence",
      description: "Get insights that matter to your specific role and department. Omelas learns your business context and provides relevant recommendations and analysis tailored to your needs.",
      image: "/solution/quote.svg",
      imageAlt: "Business intelligence illustration",
      imagePosition: "left"
    }
  ],
  
  faqs: [
    {
      question: "What types of data sources can Omelas connect to?",
      answer: "Omelas can connect to databases, ERP systems, CRM platforms, spreadsheets, cloud storage, and most business applications through APIs or direct integration."
    },
    {
      question: "How secure is my business data?",
      answer: "We use enterprise-grade security with end-to-end encryption. Your data never leaves your secure environment, and we're SOC 2 Type II compliant with regular security audits."
    },
    {
      question: "Can Omelas learn our specific business terminology?",
      answer: "Yes, Omelas adapts to your business language, product names, processes, and terminology. The more you use it, the better it understands your specific business context."
    },
    {
      question: "Do I need technical expertise to use Omelas?",
      answer: "No technical knowledge required. Omelas is designed for business users and responds to natural language questions. Simply ask what you want to know in plain English."
    },
    {
      question: "Can multiple team members use Omelas simultaneously?",
      answer: "Yes, Omelas supports multi-user access with role-based permissions. Each user gets personalized insights while maintaining data security and access controls."
    }
  ],
  
  formTitle: "Experience the Future of Business Intelligence",
  formDescription: "Schedule a demo to see how Omelas can transform how your team accesses and analyzes business data."
};