import type { FAQItem } from '@/types/content';

export const faqItems: FAQItem[] = [
  // Loans
  {
    category: 'loans',
    question: 'What is a personal loan?',
    answer:
      'A personal loan is unsecured financing that can be used for a range of personal needs, repaid through fixed monthly installments over an agreed tenure.',
  },
  {
    category: 'loans',
    question: 'Who can apply?',
    answer:
      'Eligibility generally depends on factors such as income, existing obligations, and documentation — full criteria are shared during the application process.',
  },
  {
    category: 'loans',
    question: 'What documents are required?',
    answer:
      'Typically identity proof, address proof, and income documentation. Specific requirements vary by loan type.',
  },
  {
    category: 'loans',
    question: 'How is eligibility determined?',
    answer:
      'Eligibility is assessed based on income, existing monthly obligations, requested amount, and tenure, among other factors.',
  },
  {
    category: 'loans',
    question: 'How does EMI work?',
    answer:
      'An EMI (Equated Monthly Installment) is a fixed monthly payment covering both principal and interest, spread across the loan tenure.',
  },
  // Investments
  {
    category: 'investments',
    question: 'What investment options are available?',
    answer:
      'Short-term and long-term structured investment options are available, each with different minimums, horizons, and risk profiles.',
  },
  {
    category: 'investments',
    question: 'What is the minimum investment?',
    answer:
      'Minimum investment amounts vary by plan, starting from ₹25,000 for short-term options. Exact figures are confirmed at the time of investment.',
  },
  {
    category: 'investments',
    question: 'How does the investment period work?',
    answer:
      'Each plan has a defined investment period and, where applicable, specific windows for exit or withdrawal — detailed in the plan documentation.',
  },
  {
    category: 'investments',
    question: 'Are returns guaranteed?',
    answer:
      'No. Returns are not guaranteed and depend on applicable terms, market conditions, and the specific plan selected. Please review documentation carefully.',
  },
  {
    category: 'investments',
    question: 'What are the risks?',
    answer:
      'All investments carry some degree of risk, which varies by plan type and time horizon. Risk details are provided before you invest.',
  },
  // General
  {
    category: 'general',
    question: 'How do I get started?',
    answer:
      'You can explore the relevant section of this site, use the calculator to get indicative estimates, and then contact our team to discuss your specific requirements.',
  },
  {
    category: 'general',
    question: 'Is there an application fee?',
    answer:
      'Any applicable fees are communicated clearly during the application process. There are no hidden charges.',
  },
  {
    category: 'general',
    question: 'How long does the process take?',
    answer:
      'Timelines vary by product type and individual circumstances. Our team aims to provide clear timelines at each stage of your application.',
  },
  {
    category: 'general',
    question: 'How is my information handled?',
    answer:
      'Information shared with us is handled in line with our Privacy Policy, available in the footer of this site.',
  },
];

export const faqCategories: Array<{ key: FAQItem['category']; label: string }> = [
  { key: 'loans', label: 'Loans' },
  { key: 'investments', label: 'Investments' },
  { key: 'general', label: 'General' },
];
