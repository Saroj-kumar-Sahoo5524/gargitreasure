'use client';

import { useState, useCallback } from 'react';
import type { InvestmentCalcOutputs, InvestmentFrequency } from '@/types/calculators';
import { calculateInvestmentGrowth } from '@/lib/calculations';
import { investCalcDefaults } from '@/lib/data/investments';

export interface InvestmentCalcState {
  amount: number;
  durationYears: number;
  annualReturnPct: number;
  frequency: InvestmentFrequency;
  outputs: InvestmentCalcOutputs;
  setAmount: (v: number) => void;
  setDurationYears: (v: number) => void;
  setAnnualReturnPct: (v: number) => void;
  setFrequency: (v: InvestmentFrequency) => void;
}

function compute(
  amount: number,
  durationYears: number,
  annualReturnPct: number,
  frequency: InvestmentFrequency
): InvestmentCalcOutputs {
  return calculateInvestmentGrowth({ amount, durationYears, annualReturnPct, frequency });
}

const defaults = investCalcDefaults;

/**
 * Manages the state and computation for the investment growth calculator.
 */
export function useInvestmentCalc(): InvestmentCalcState {
  const [amount, setAmountRaw] = useState(defaults.amount.default);
  const [durationYears, setDurationRaw] = useState(defaults.duration.default);
  const [annualReturnPct, setReturnRaw] = useState(defaults.returnRate.default);
  const [frequency, setFrequencyRaw] = useState<InvestmentFrequency>('lumpsum');

  const [outputs, setOutputs] = useState<InvestmentCalcOutputs>(() =>
    compute(defaults.amount.default, defaults.duration.default, defaults.returnRate.default, 'lumpsum')
  );

  const setAmount = useCallback((v: number) => {
    setAmountRaw(v);
    setOutputs((prev) => compute(v, durationYears, annualReturnPct, frequency));
  }, [durationYears, annualReturnPct, frequency]);

  const setDurationYears = useCallback((v: number) => {
    setDurationRaw(v);
    setOutputs(compute(amount, v, annualReturnPct, frequency));
  }, [amount, annualReturnPct, frequency]);

  const setAnnualReturnPct = useCallback((v: number) => {
    setReturnRaw(v);
    setOutputs(compute(amount, durationYears, v, frequency));
  }, [amount, durationYears, frequency]);

  const setFrequency = useCallback((v: InvestmentFrequency) => {
    setFrequencyRaw(v);
    setOutputs(compute(amount, durationYears, annualReturnPct, v));
  }, [amount, durationYears, annualReturnPct]);

  return {
    amount, durationYears, annualReturnPct, frequency, outputs,
    setAmount, setDurationYears, setAnnualReturnPct, setFrequency,
  };
}
