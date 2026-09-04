import type { LoanTab } from '@/types/content';

export const loanTabs: LoanTab[] = [
  {
    key: 'personal',
    label: 'Personal Loan',
    title: 'Personal Loan',
    description:
      'Flexible financing to help manage planned expenses — such as medical needs, education, or travel — or unplanned costs that come up along the way.',
    meta: [
      { label: 'Purpose', value: 'Personal & household needs' },
      { label: 'Typical tenure', value: '12 – 60 months' },
      { label: 'Repayment', value: 'Monthly EMI' },
      { label: 'Eligibility basis', value: 'Income & obligations' },
    ],
    docs: [
      {
        title: 'Documentation typically required',
        items: [
          'Identity and address proof',
          'Income proof (salary slips / income statements)',
          'Bank statements for recent months',
        ],
      },
      {
        title: 'Application process',
        items: [
          'Submit your application with required details',
          'Our team reviews eligibility and documentation',
          'Receive a decision and applicable terms',
        ],
      },
    ],
  },
  {
    key: 'vehicle',
    label: 'Vehicle Loan',
    title: 'Vehicle Loan',
    description:
      'Financing for new or pre-owned cars, and two-wheelers, with repayment plans built around your monthly budget.',
    meta: [
      { label: 'Covers', value: 'New & used vehicles, two-wheelers' },
      { label: 'Typical tenure', value: '12 – 84 months' },
      { label: 'Repayment', value: 'Monthly EMI' },
      { label: 'Eligibility basis', value: 'Income & vehicle value' },
    ],
    docs: [
      {
        title: 'Documentation typically required',
        items: [
          'Identity and address proof',
          'Income proof',
          'Vehicle quotation / proforma invoice',
        ],
      },
      {
        title: 'Application process',
        items: [
          'Choose your vehicle and financing amount',
          'Submit application and documentation',
          'Receive approval terms and proceed',
        ],
      },
    ],
  },
  {
    key: 'business',
    label: 'Business Loan',
    title: 'Business Loan / Business Finance',
    description:
      'Support for working capital, business expansion, equipment purchase, and other growth-stage needs.',
    meta: [
      { label: 'Covers', value: 'Working capital, expansion, equipment' },
      { label: 'Typical tenure', value: '12 – 60 months' },
      { label: 'Repayment', value: 'Monthly / structured' },
      { label: 'Eligibility basis', value: 'Business financials' },
    ],
    docs: [
      {
        title: 'Documentation typically required',
        items: [
          'Business registration documents',
          'Financial statements / bank statements',
          'Identity proof of business owner(s)',
        ],
      },
      {
        title: 'Application process',
        items: [
          'Share your business and financing requirement',
          'Our team reviews business financials',
          'Receive applicable terms and proceed',
        ],
      },
    ],
  },
];

/** Default loan calculator configuration */
export const loanCalcDefaults = {
  amount: { min: 50000, max: 3000000, step: 10000, default: 500000 },
  income: { min: 15000, max: 500000, step: 1000, default: 50000 },
  obligations: { min: 0, max: 200000, step: 500, default: 5000 },
  tenure: { min: 12, max: 84, step: 6, default: 36 },
  /** Illustrative annual interest rate — 11% */
  illustrativeAnnualRate: 0.11,
};
