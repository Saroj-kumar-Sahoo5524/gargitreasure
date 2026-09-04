// ── Loan Calculator ───────────────────────────────────────────────────────────
export interface LoanCalcInputs {
  /** Requested loan amount in INR */
  amount: number;
  /** Monthly income in INR */
  income: number;
  /** Existing monthly obligations in INR */
  obligations: number;
  /** Preferred tenure in months */
  tenureMonths: number;
}

export interface LoanCalcOutputs {
  eligiblePrincipal: number;
  emi: number;
  /** Formatted display strings */
  display: {
    amount: string;
    income: string;
    obligations: string;
    tenure: string;
    eligibility: string;
    emi: string;
  };
}

// ── Investment Calculator ─────────────────────────────────────────────────────
export type InvestmentFrequency = 'lumpsum' | 'monthly';

export interface InvestmentCalcInputs {
  /** Amount in INR. For lumpsum = total; for monthly = monthly contribution */
  amount: number;
  /** Duration in years */
  durationYears: number;
  /** Expected annual return in % (e.g. 10 for 10%) */
  annualReturnPct: number;
  frequency: InvestmentFrequency;
}

export interface GrowthDataPoint {
  year: number;
  invested: number;
  value: number;
}

export interface InvestmentCalcOutputs {
  totalInvested: number;
  estimatedGrowth: number;
  finalValue: number;
  /** Per-year data for the growth chart */
  series: GrowthDataPoint[];
  /** Formatted display strings */
  display: {
    amount: string;
    duration: string;
    returnRate: string;
    totalInvested: string;
    estimatedGrowth: string;
    finalValue: string;
  };
}
