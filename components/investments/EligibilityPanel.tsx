/**
 * EligibilityPanel
 * Premium eligibility criteria panel for the Banking details page.
 * Each panel renders as a distinct card with accent header, icon-enhanced rows,
 * and a highlighted minimum note.
 */
import {
  FaCircleCheck,
  FaUser,
  FaIdCard,
  FaLandmark,
  FaUsers,
  FaBriefcase,
  FaFileInvoiceDollar,
  FaStar,
  FaMoneyBillWave,
  FaShieldHalved,
  FaHouseChimney,
  FaFileLines,
  FaChartLine,
  FaMobileScreenButton,
  FaCoins,
  FaCalendarCheck,
  FaScaleBalanced,
  FaGavel,
  FaArrowTrendUp,
} from 'react-icons/fa6';
import type { EligibilitySection } from '@/lib/data/financeDetails';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconType = React.ComponentType<any>;

/** Map eligibility item labels to icons */
const LABEL_ICON_MAP: Record<string, IconType> = {
  // Banking
  'Age':                    FaUser,
  'Age Profile':            FaUser,
  'KYC Compliance':         FaIdCard,
  'Banking Linkage':        FaLandmark,
  'Investor Status':        FaUsers,
  'Salaried':               FaBriefcase,
  'Self-Employed':          FaBriefcase,
  'Income Threshold':       FaMoneyBillWave,
  'Credit Profile':         FaStar,
  'Documentation':          FaFileLines,
  'Target Profile':         FaUsers,
  'Household Income':       FaChartLine,
  'Collateral':             FaShieldHalved,
  'Credit Discipline':      FaFileInvoiceDollar,
  // Provident Fund
  'Wage Baseline':          FaMoneyBillWave,
  'Contribution Benchmark': FaArrowTrendUp,
  'Regulatory Governance':  FaGavel,
  'Non-Eligibility':        FaScaleBalanced,
  'Deposit Limits':         FaCoins,
  'Tenure':                 FaCalendarCheck,
  'Account Models':         FaUsers,
  'Tier I Minimum':         FaCoins,
  'Tier II Minimum':        FaCoins,
};

/** One colour palette per panel index (0, 1, 2) */
const PANEL_PALETTES = [
  { header: '#1E40AF', headerLight: '#EFF6FF', accent: '#2563EB', dot: '#BFDBFE', itemBg: '#F8FAFF', iconBg: '#DBEAFE', iconColor: '#1E40AF' },
  { header: '#065F46', headerLight: '#ECFDF5', accent: '#059669', dot: '#A7F3D0', itemBg: '#F0FDF9', iconBg: '#D1FAE5', iconColor: '#065F46' },
  { header: '#7C2D12', headerLight: '#FFF7ED', accent: '#EA580C', dot: '#FED7AA', itemBg: '#FFFAF7', iconBg: '#FFEDD5', iconColor: '#7C2D12' },
];

interface Props {
  section: EligibilitySection;
  index: number;
}

export function EligibilityPanel({ section, index }: Props) {
  const palette = PANEL_PALETTES[index % PANEL_PALETTES.length];

  return (
    <div
      className="rounded-[20px] overflow-hidden flex flex-col"
      style={{
        boxShadow: '0 4px 24px rgba(11,27,52,0.08), 0 1px 4px rgba(11,27,52,0.05)',
        border: '1px solid rgba(11,27,52,0.07)',
      }}
    >
      {/* ── Coloured header bar ──────────────────────────────────── */}
      <div
        className="px-6 py-5 flex items-center gap-3"
        style={{ background: palette.header }}
      >
        {/* Numbered badge */}
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
        >
          {index + 1}
        </span>
        <h3 className="font-heading font-bold text-white text-[16px] leading-snug">
          {section.title}
        </h3>
      </div>

      {/* ── Criteria rows ────────────────────────────────────────── */}
      <div
        className="flex-1 px-5 py-5 flex flex-col gap-3"
        style={{ background: palette.itemBg }}
      >
        {section.items.map((item) => {
          const Icon = LABEL_ICON_MAP[item.label] ?? FaCircleCheck;
          return (
            <div
              key={item.label}
              className="flex items-start gap-3 bg-white rounded-[12px] px-4 py-3.5"
              style={{
                border: `1px solid ${palette.dot}50`,
                boxShadow: '0 1px 4px rgba(11,27,52,0.04)',
              }}
            >
              {/* Icon */}
              <span
                className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 mt-[1px]"
                style={{ background: palette.iconBg }}
              >
                <Icon size={13} style={{ color: palette.iconColor }} />
              </span>

              {/* Text */}
              <div className="min-w-0">
                <p
                  className="text-[11.5px] font-bold uppercase tracking-[0.06em] mb-[3px]"
                  style={{ color: palette.accent }}
                >
                  {item.label}
                </p>
                <p className="text-[13px] text-[#374151] leading-relaxed">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Minimum note callout ─────────────────────────────────── */}
      {section.minimumNote && (
        <div
          className="px-5 py-4 flex items-start gap-3 border-t"
          style={{
            background: palette.headerLight,
            borderColor: `${palette.dot}80`,
          }}
        >
          <FaCircleCheck size={14} style={{ color: palette.accent, marginTop: 2, flexShrink: 0 }} />
          <p className="text-[13px] font-semibold" style={{ color: palette.header }}>
            {section.minimumNote}
          </p>
        </div>
      )}
    </div>
  );
}
