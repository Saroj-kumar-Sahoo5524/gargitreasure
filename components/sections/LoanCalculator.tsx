'use client';

import { FaCircleInfo } from 'react-icons/fa6';
import { RangeInput } from '@/components/ui/Input';
import { useLoanCalc } from '@/hooks/useLoanCalc';
import { loanCalcDefaults } from '@/lib/data/loans';

/**
 * Loan eligibility calculator — four range sliders with live eligibility/EMI output.
 * Self-contained with its own useLoanCalc() state.
 */
export function LoanCalculator() {
  const { amount, income, obligations, tenureMonths, outputs, setAmount, setIncome, setObligations, setTenureMonths } =
    useLoanCalc();
  const d = loanCalcDefaults;

  return (
    <div className="bg-white border border-border-base rounded-[20px] p-7 shadow-md sticky top-[110px]">
      <h4 className="font-heading font-bold text-[17px] text-ink mb-1">Loan eligibility calculator</h4>
      <p className="text-[13px] text-text-soft mb-[22px]">Estimate your indicative eligibility and EMI</p>

      <RangeInput
        label="Loan amount"
        value={amount}
        displayValue={outputs.display.amount}
        min={d.amount.min}
        max={d.amount.max}
        step={d.amount.step}
        onChange={setAmount}
      />
      <RangeInput
        label="Monthly income"
        value={income}
        displayValue={outputs.display.income}
        min={d.income.min}
        max={d.income.max}
        step={d.income.step}
        onChange={setIncome}
      />
      <RangeInput
        label="Existing monthly obligations"
        value={obligations}
        displayValue={outputs.display.obligations}
        min={d.obligations.min}
        max={d.obligations.max}
        step={d.obligations.step}
        onChange={setObligations}
      />
      <RangeInput
        label="Preferred tenure"
        value={tenureMonths}
        displayValue={outputs.display.tenure}
        min={d.tenure.min}
        max={d.tenure.max}
        step={d.tenure.step}
        onChange={setTenureMonths}
      />

      {/* Results */}
      <div className="bg-bg-alt rounded-[14px] p-5 mt-[22px] mb-[14px]">
        <div className="flex justify-between items-center py-2 border-b border-border-soft">
          <span className="text-[13px] text-text-muted font-semibold">Estimated eligibility</span>
          <span className="font-heading font-extrabold text-[17px] text-ink tabular-nums">{outputs.display.eligibility}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-[13px] text-text-muted font-semibold">Estimated EMI</span>
          <span className="font-heading font-extrabold text-[22px] text-royal tabular-nums">{outputs.display.emi}</span>
        </div>
      </div>

      <div className="flex gap-2 items-start text-[12px] text-text-soft leading-[1.5]">
        <FaCircleInfo className="text-brass mt-[2px] flex-shrink-0" size={13} />
        <span>For illustration purposes only. Actual eligibility, interest rate and EMI depend on verification, credit assessment, and applicable terms.</span>
      </div>
    </div>
  );
}
