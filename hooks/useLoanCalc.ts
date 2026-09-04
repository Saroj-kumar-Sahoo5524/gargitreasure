'use client';

import { useState, useCallback } from 'react';
import type { LoanCalcOutputs } from '@/types/calculators';
import { runLoanCalc } from '@/lib/calculations';
import { loanCalcDefaults } from '@/lib/data/loans';

export interface LoanCalcState {
  amount: number;
  income: number;
  obligations: number;
  tenureMonths: number;
  outputs: LoanCalcOutputs;
  setAmount: (v: number) => void;
  setIncome: (v: number) => void;
  setObligations: (v: number) => void;
  setTenureMonths: (v: number) => void;
}

const RATE = loanCalcDefaults.illustrativeAnnualRate;
const d = loanCalcDefaults;

function compute(amount: number, income: number, obligations: number, tenureMonths: number): LoanCalcOutputs {
  return runLoanCalc({ amount, income, obligations, tenureMonths }, RATE);
}

/**
 * Manages the state and computation for the loan eligibility calculator.
 * Returns slider values, their setters, and formatted outputs.
 */
export function useLoanCalc(): LoanCalcState {
  const [amount, setAmountState] = useState(d.amount.default);
  const [income, setIncomeState] = useState(d.income.default);
  const [obligations, setObligationsState] = useState(d.obligations.default);
  const [tenureMonths, setTenureState] = useState(d.tenure.default);
  const [outputs, setOutputs] = useState<LoanCalcOutputs>(() =>
    compute(d.amount.default, d.income.default, d.obligations.default, d.tenure.default)
  );

  const setAmount = useCallback((v: number) => {
    setAmountState(v);
    setIncomeState((inc) => {
      setObligationsState((obg) => {
        setTenureState((ten) => {
          setOutputs(compute(v, inc, obg, ten));
          return ten;
        });
        return obg;
      });
      return inc;
    });
  }, []);

  const setIncome = useCallback((v: number) => {
    setIncomeState(v);
    setAmountState((amt) => {
      setObligationsState((obg) => {
        setTenureState((ten) => {
          setOutputs(compute(amt, v, obg, ten));
          return ten;
        });
        return obg;
      });
      return amt;
    });
  }, []);

  const setObligations = useCallback((v: number) => {
    setObligationsState(v);
    setAmountState((amt) => {
      setIncomeState((inc) => {
        setTenureState((ten) => {
          setOutputs(compute(amt, inc, v, ten));
          return ten;
        });
        return inc;
      });
      return amt;
    });
  }, []);

  const setTenureMonths = useCallback((v: number) => {
    setTenureState(v);
    setAmountState((amt) => {
      setIncomeState((inc) => {
        setObligationsState((obg) => {
          setOutputs(compute(amt, inc, obg, v));
          return obg;
        });
        return inc;
      });
      return amt;
    });
  }, []);

  return {
    amount, income, obligations, tenureMonths, outputs,
    setAmount, setIncome, setObligations, setTenureMonths,
  };
}
