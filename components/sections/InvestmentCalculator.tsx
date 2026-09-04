'use client';

import { FaCircleInfo } from 'react-icons/fa6';
import { RangeInput } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { useInvestmentCalc } from '@/hooks/useInvestmentCalc';
import { GrowthChartSVG } from '@/components/graphics/GrowthChartSVG';
import { investCalcDefaults } from '@/lib/data/investments';

const frequencyOptions = [
  { value: 'lumpsum', label: 'One-time (lump sum)' },
  { value: 'monthly', label: 'Monthly contribution' },
];

/**
 * Investment growth calculator — sliders + select + animated growth chart.
 */
export function InvestmentCalculator() {
  const {
    amount, durationYears, annualReturnPct, frequency, outputs,
    setAmount, setDurationYears, setAnnualReturnPct, setFrequency,
  } = useInvestmentCalc();

  const d = investCalcDefaults;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-[44px] items-start mt-[56px]">
      {/* Controls */}
      <div className="bg-white border border-border-base rounded-[20px] p-7 shadow-md" style={{ position: 'static' }}>
        <h4 className="font-heading font-bold text-[17px] text-ink mb-1">Investment calculator</h4>
        <p className="text-[13px] text-text-soft mb-[22px]">Estimate potential growth of your investment</p>

        <RangeInput
          label="Investment amount"
          value={amount}
          displayValue={outputs.display.amount}
          min={d.amount.min}
          max={d.amount.max}
          step={d.amount.step}
          onChange={setAmount}
        />
        <RangeInput
          label="Investment duration"
          value={durationYears}
          displayValue={outputs.display.duration}
          min={d.duration.min}
          max={d.duration.max}
          step={d.duration.step}
          onChange={setDurationYears}
        />
        <RangeInput
          label="Expected annual return"
          value={annualReturnPct}
          displayValue={outputs.display.returnRate}
          min={d.returnRate.min}
          max={d.returnRate.max}
          step={d.returnRate.step}
          onChange={setAnnualReturnPct}
        />
        <Select
          label="Investment frequency"
          value={frequency}
          options={frequencyOptions}
          onChange={(v) => setFrequency(v as 'lumpsum' | 'monthly')}
        />

        {/* Results */}
        <div className="bg-bg-alt rounded-[14px] p-5 mt-[22px] mb-[14px]">
          <div className="flex justify-between items-center py-2 border-b border-border-soft">
            <span className="text-[13px] text-text-muted font-semibold">Total invested</span>
            <span className="font-heading font-extrabold text-[17px] text-ink tabular-nums">{outputs.display.totalInvested}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border-soft">
            <span className="text-[13px] text-text-muted font-semibold">Estimated growth</span>
            <span className="font-heading font-extrabold text-[17px] text-ink tabular-nums">{outputs.display.estimatedGrowth}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-[13px] text-text-muted font-semibold">Estimated final value</span>
            <span className="font-heading font-extrabold text-[22px] text-royal tabular-nums">{outputs.display.finalValue}</span>
          </div>
        </div>

        <div className="flex gap-2 items-start text-[12px] text-text-soft leading-[1.5]">
          <FaCircleInfo className="text-brass mt-[2px] flex-shrink-0" size={13} />
          <span>Illustrative calculation only. Actual returns may vary based on market conditions and applicable terms.</span>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white border border-border-base rounded-[20px] p-7 shadow-md">
        <h4 className="font-heading font-bold text-[16.5px] text-ink mb-5">Projected growth</h4>
        <GrowthChartSVG series={outputs.series} />
        <div className="flex gap-[22px] mt-4">
          <div className="flex items-center gap-2 text-[13px] text-text-muted font-semibold">
            <span className="w-[10px] h-[10px] rounded-[3px] bg-royal" />
            Invested amount
          </div>
          <div className="flex items-center gap-2 text-[13px] text-text-muted font-semibold">
            <span className="w-[10px] h-[10px] rounded-[3px] bg-teal" />
            Estimated value
          </div>
        </div>
      </div>
    </div>
  );
}
