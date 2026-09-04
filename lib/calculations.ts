import type {
  LoanCalcInputs,
  LoanCalcOutputs,
  InvestmentCalcInputs,
  InvestmentCalcOutputs,
  GrowthDataPoint,
} from '@/types/calculators';

// ── Formatting ────────────────────────────────────────────────────────────────

/**
 * Formats a number as Indian Rupee currency string.
 * @example formatINR(500000) → "₹5,00,000"
 */
export function formatINR(num: number): string {
  return '₹' + Math.round(num).toLocaleString('en-IN');
}

// ── Loan Calculations ─────────────────────────────────────────────────────────

/**
 * Calculates the Equated Monthly Installment (EMI) for a loan.
 *
 * Formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1)
 *
 * @param principal - Loan principal in INR
 * @param annualRateDecimal - Annual interest rate as a decimal (e.g. 0.11 for 11%)
 * @param tenureMonths - Loan tenure in months
 * @returns Monthly EMI amount in INR
 */
export function calculateEMI(
  principal: number,
  annualRateDecimal: number,
  tenureMonths: number
): number {
  const r = annualRateDecimal / 12; // monthly rate
  if (r === 0) return principal / tenureMonths;
  const emi =
    (principal * r * Math.pow(1 + r, tenureMonths)) / (Math.pow(1 + r, tenureMonths) - 1);
  return emi;
}

/**
 * Estimates the maximum eligible loan principal based on income, obligations,
 * and the standard 50% FOIR (Fixed Obligation to Income Ratio) heuristic.
 *
 * This is an illustrative estimate. Actual eligibility depends on the lender's
 * credit assessment process.
 *
 * @param monthlyIncome - Monthly income in INR
 * @param monthlyObligations - Existing monthly debt obligations in INR
 * @param annualRateDecimal - Illustrative annual interest rate as a decimal
 * @param tenureMonths - Loan tenure in months
 * @returns Eligible principal (capped at ₹50 lakhs) in INR
 */
export function calculateLoanEligibility(
  monthlyIncome: number,
  monthlyObligations: number,
  annualRateDecimal: number,
  tenureMonths: number
): number {
  const maxEmi = Math.max(monthlyIncome * 0.5 - monthlyObligations, 0);
  const r = annualRateDecimal / 12;
  if (maxEmi === 0) return 0;
  if (r === 0) return maxEmi * tenureMonths;
  const eligiblePrincipal =
    (maxEmi * (Math.pow(1 + r, tenureMonths) - 1)) / (r * Math.pow(1 + r, tenureMonths));
  return Math.min(eligiblePrincipal, 5_000_000);
}

/**
 * Runs the full loan calculator and returns all display values.
 */
export function runLoanCalc(inputs: LoanCalcInputs, annualRate: number): LoanCalcOutputs {
  const eligiblePrincipal = calculateLoanEligibility(
    inputs.income,
    inputs.obligations,
    annualRate,
    inputs.tenureMonths
  );
  const emi = calculateEMI(inputs.amount, annualRate, inputs.tenureMonths);

  return {
    eligiblePrincipal,
    emi,
    display: {
      amount: formatINR(inputs.amount),
      income: formatINR(inputs.income),
      obligations: formatINR(inputs.obligations),
      tenure: `${inputs.tenureMonths} months`,
      eligibility: formatINR(eligiblePrincipal),
      emi: formatINR(emi),
    },
  };
}

// ── Investment Calculations ───────────────────────────────────────────────────

/**
 * Builds a year-by-year growth data series for an investment.
 *
 * For lump sum: value[y] = principal × (1 + r)^y
 * For monthly SIP: compound each month, tally per year.
 *
 * @param inputs - Investment calculator inputs
 * @returns Array of {year, invested, value} data points (0 to durationYears)
 */
export function buildGrowthSeries(inputs: InvestmentCalcInputs): GrowthDataPoint[] {
  const { amount, durationYears, annualReturnPct, frequency } = inputs;
  const r = annualReturnPct / 100;
  const series: GrowthDataPoint[] = [];

  if (frequency === 'lumpsum') {
    for (let y = 0; y <= durationYears; y++) {
      series.push({
        year: y,
        invested: amount,
        value: amount * Math.pow(1 + r, y),
      });
    }
  } else {
    // Monthly SIP — `amount` treated as monthly contribution
    const rMonthly = r / 12;
    let bal = 0;
    let totalInvested = 0;
    series.push({ year: 0, invested: 0, value: 0 });

    for (let y = 1; y <= durationYears; y++) {
      for (let m = 0; m < 12; m++) {
        bal = bal * (1 + rMonthly) + amount;
        totalInvested += amount;
      }
      series.push({ year: y, invested: totalInvested, value: bal });
    }
  }

  return series;
}

/**
 * Runs the full investment calculator and returns outputs + formatted display values.
 */
export function calculateInvestmentGrowth(inputs: InvestmentCalcInputs): InvestmentCalcOutputs {
  const series = buildGrowthSeries(inputs);
  const last = series[series.length - 1];
  const totalInvested = last.invested;
  const finalValue = last.value;
  const estimatedGrowth = Math.max(finalValue - totalInvested, 0);
  const { durationYears, annualReturnPct } = inputs;

  return {
    totalInvested,
    estimatedGrowth,
    finalValue,
    series,
    display: {
      amount: formatINR(inputs.amount),
      duration: `${durationYears} ${durationYears === 1 ? 'year' : 'years'}`,
      returnRate: `${annualReturnPct}%`,
      totalInvested: formatINR(totalInvested),
      estimatedGrowth: formatINR(estimatedGrowth),
      finalValue: formatINR(finalValue),
    },
  };
}
