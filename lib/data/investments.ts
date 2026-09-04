import type { InvestmentCard, InvestmentTableRow } from '@/types/content';

export const investmentCards: InvestmentCard[] = [
  {
    term: 'short',
    badge: 'Short Term',
    title: 'Short-Term Investment',
    description:
      'Suitable for those looking for a relatively shorter investment horizon with periodic review points.',
    meta: [
      { label: 'Minimum investment', value: '₹25,000' },
      { label: 'Investment period', value: '6 – 18 months' },
      { label: 'Indicative returns', value: 'Market / plan linked' },
      { label: 'Liquidity', value: 'Defined exit windows' },
    ],
    riskNote: 'Moderate risk — returns are not guaranteed and depend on applicable terms',
    ctaLabel: 'Explore Short-Term',
    href: '#contact',
    gradientClass: 'short',
  },
  {
    term: 'long',
    badge: 'Long Term',
    title: 'Long-Term Investment',
    description:
      'Designed for longer-term financial goals, with periodic returns where applicable and a goal-oriented structure.',
    meta: [
      { label: 'Minimum investment', value: '₹50,000' },
      { label: 'Investment period', value: '3 – 10 years' },
      { label: 'Indicative returns', value: 'Plan / profit-share linked' },
      { label: 'Liquidity', value: 'Lower, goal-oriented' },
    ],
    riskNote: 'Risk varies by plan — please review documentation before investing',
    ctaLabel: 'Explore Long-Term',
    href: '#contact',
    gradientClass: 'long',
  },
];

export const investmentTableRows: InvestmentTableRow[] = [
  {
    type: 'Short-Term Plan',
    horizon: 'Short Term',
    horizonBadge: 'short',
    minimum: '₹25,000',
    returnStructure: 'Market / plan linked',
    liquidity: 'Defined exit windows',
    risk: 'Moderate',
    riskBadge: 'moderate',
    suitableFor: 'Near-term goals',
  },
  {
    type: 'Balanced Plan',
    horizon: 'Medium Term',
    horizonBadge: 'medium',
    minimum: '₹40,000',
    returnStructure: 'Periodic + plan linked',
    liquidity: 'Semi-annual windows',
    risk: 'Moderate',
    riskBadge: 'moderate',
    suitableFor: '2–4 year goals',
  },
  {
    type: 'Long-Term Plan',
    horizon: 'Long Term',
    horizonBadge: 'long',
    minimum: '₹50,000',
    returnStructure: 'Profit-share linked',
    liquidity: 'Lower, goal-oriented',
    risk: 'Higher',
    riskBadge: 'higher',
    suitableFor: 'Wealth building',
  },
];

/** Default investment calculator configuration */
export const investCalcDefaults = {
  amount: { min: 10000, max: 5000000, step: 5000, default: 100000 },
  duration: { min: 1, max: 20, step: 1, default: 5 },
  returnRate: { min: 4, max: 18, step: 0.5, default: 10 },
};
