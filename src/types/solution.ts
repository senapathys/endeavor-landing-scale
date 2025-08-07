export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureSection {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export interface SolutionConfig {
  // Hero section
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Badge/navigation
  badgeText?: string;
  badgeLink?: string;
  
  // ERP section customization
  erpTitle?: string;
  erpDescription?: string;
  
  // Feature sections (left-right alternating)
  features: FeatureSection[];
  
  // FAQ section
  faqs: FAQItem[];
  
  // Form section customization
  formTitle?: string;
  formDescription?: string;
}