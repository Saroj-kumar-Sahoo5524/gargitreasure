import type { GoalPickerData } from '@/types/content';

export const goalPickerData: GoalPickerData = {
  vehicle: {
    title: 'Buy a Vehicle',
    desc: 'Financing for new or pre-owned cars and two-wheelers, with repayment options built around your monthly budget.',
    recs: ['Vehicle Loan', 'Financial Advisory'],
    iconName: 'FaCar',
  },
  home: {
    title: 'Buy a Home',
    desc: 'Financing for home purchase or construction, with longer tenure options to suit larger goals.',
    recs: ['Home Finance', 'Financial Advisory'],
    iconName: 'FaHouse',
  },
  business: {
    title: 'Grow Your Business',
    desc: 'Working capital, equipment, and expansion financing to support your business at its current stage.',
    recs: ['Business Finance', 'Financial Advisory'],
    iconName: 'FaBriefcase',
  },
  wealth: {
    title: 'Build Wealth',
    desc: 'Structured investment options across short and long-term horizons, matched to your goals and risk comfort.',
    recs: ['Investment Solutions', 'Financial Advisory'],
    iconName: 'FaSeedling',
  },
  expenses: {
    title: 'Manage Expenses',
    desc: 'Flexible personal financing to help manage planned or unplanned costs without disrupting your budget.',
    recs: ['Personal Loan', 'Financial Advisory'],
    iconName: 'FaWallet',
  },
  future: {
    title: 'Plan for the Future',
    desc: 'Longer-horizon investment planning designed around future milestones and goals.',
    recs: ['Investment Solutions', 'Financial Advisory'],
    iconName: 'FaHourglassHalf',
  },
};

export const goalListItems: Array<{ key: keyof GoalPickerData; label: string; iconName: string }> = [
  { key: 'vehicle', label: 'Buy a Vehicle', iconName: 'FaCar' },
  { key: 'home', label: 'Buy a Home', iconName: 'FaHouse' },
  { key: 'business', label: 'Grow Your Business', iconName: 'FaBriefcase' },
  { key: 'wealth', label: 'Build Wealth', iconName: 'FaSeedling' },
  { key: 'expenses', label: 'Manage Expenses', iconName: 'FaWallet' },
  { key: 'future', label: 'Plan for the Future', iconName: 'FaHourglassHalf' },
];
