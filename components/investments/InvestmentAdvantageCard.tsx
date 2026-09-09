/**
 * InvestmentAdvantageCard
 * Used in the "Our Investment Advantage" section — 3-col premium card grid.
 */
import {
  FaChartPie, FaRoute, FaShieldHalved, FaScaleBalanced, FaHandshake,
  FaChartLine, FaMagnifyingGlass, FaArrowsRotate, FaLock, FaCloudSun,
  FaSeedling, FaLeaf, FaCertificate, FaArrowRightArrowLeft,
  FaVault, FaGavel,
  // Finance additional
  FaLandmark, FaFileLines, FaFileContract,
} from 'react-icons/fa6';
import type { InvestmentAdvantage } from '@/lib/data/investmentDetails';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = React.ComponentType<any>;

const ICON_MAP: Record<string, IconComponent> = {
  FaChartPie, FaRoute, FaShieldHalved, FaScaleBalanced, FaHandshake,
  FaChartLine, FaMagnifyingGlass, FaArrowsRotate, FaLock, FaCloudSun,
  FaSeedling, FaLeaf, FaCertificate, FaArrowRightArrowLeft,
  FaVault, FaGavel,
  // Finance additional
  FaLandmark, FaFileLines, FaFileContract,
};

interface Props {
  advantage: InvestmentAdvantage;
  index: number;
}

/** Subtle accent colours per card index (0–2) */
const ACCENTS = [
  { bg: '#EFF6FF', color: '#2451D6', border: '#2451D620' },
  { bg: '#F0FDF4', color: '#16a34a', border: '#16a34a20' },
  { bg: '#FFF7ED', color: '#c2410c', border: '#c2410c20' },
];

export function InvestmentAdvantageCard({ advantage, index }: Props) {
  const { icon, title, description } = advantage;
  const IconComponent = ICON_MAP[icon] ?? FaChartPie;
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <div
      className="bg-white border rounded-[18px] p-7 hover:shadow-[0_16px_48px_rgba(11,27,52,.11)] hover:-translate-y-[3px] transition-all duration-300 flex flex-col"
      style={{ borderColor: accent.border }}
    >
      {/* Icon badge */}
      <span
        className="w-12 h-12 rounded-[13px] flex items-center justify-center flex-shrink-0 mb-5"
        style={{ background: accent.bg }}
      >
        <IconComponent size={20} className={`text-[${accent.color}]`} />
      </span>

      {/* Content */}
      <h3 className="font-heading font-bold text-[#0B1B34] text-[18px] mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-[#5A6478] text-[14.5px] leading-relaxed flex-1">{description}</p>

      {/* Decorative bottom accent line */}
      <div
        className="mt-5 h-[3px] w-12 rounded-full"
        style={{ background: accent.color, opacity: 0.35 }}
      />
    </div>
  );
}
