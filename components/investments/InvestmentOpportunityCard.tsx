/**
 * InvestmentOpportunityCard
 * Renders one opportunity item inside an InvestmentSection.
 * The `isOpportunityCallout` variant gets a distinct teal treatment.
 */
import {
  FaBolt, FaIndustry, FaLeaf, FaFlask, FaSolarPanel, FaBuilding,
  FaBatteryFull, FaLocationDot, FaTruck, FaMicrochip, FaCircleCheck,
  FaMapLocation, FaFileContract, FaRoad, FaHouseChimney, FaUsers,
  FaMoneyBillTrendUp, FaShop, FaWarehouse, FaChartLine, FaArrowTrendUp,
  FaGlobe, FaFileInvoiceDollar, FaLandmark, FaMoneyBillWave,
  FaMagnifyingGlassChart, FaTicket, FaCalendarCheck, FaFish, FaWater,
  FaBoxOpen, FaSeedling, FaAppleWhole, FaStore, FaCow, FaEgg,
  FaWheatAwn, FaStar, FaMobileScreenButton, FaFileShield, FaCoins,
  FaAtom, FaGem, FaPalette, FaShieldHalved, FaBitcoin, FaVault,
  FaReceipt, FaEthereum, FaNetworkWired, FaChartPie, FaFileLines,
  FaScaleBalanced, FaGavel, FaCertificate, FaArrowRightArrowLeft,
  FaCloudSun, FaRoute, FaHandshake,
  FaMagnifyingGlass, FaArrowsRotate, FaLock,
} from 'react-icons/fa6';
import type { InvestmentOpportunity } from '@/lib/data/investmentDetails';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = React.ComponentType<any>;

/** Map icon string name → React Icons component */
const ICON_MAP: Record<string, IconComponent> = {
  FaBolt, FaIndustry, FaLeaf, FaFlask, FaSolarPanel, FaBuilding,
  FaBatteryFull, FaLocationDot, FaTruck, FaMicrochip, FaCircleCheck,
  FaMapLocation, FaFileContract, FaRoad, FaHouseChimney, FaUsers,
  FaMoneyBillTrendUp, FaShop, FaWarehouse, FaChartLine, FaArrowTrendUp,
  FaGlobe, FaFileInvoiceDollar, FaLandmark, FaMoneyBillWave,
  FaMagnifyingGlassChart, FaTicket, FaCalendarCheck, FaFish, FaWater,
  FaBoxOpen, FaSeedling, FaAppleWhole, FaStore, FaCow, FaEgg,
  FaWheatAwn, FaStar, FaMobileScreenButton, FaFileShield, FaCoins,
  FaAtom, FaGem, FaPalette, FaShieldHalved, FaBitcoin, FaVault,
  FaReceipt, FaEthereum, FaNetworkWired, FaChartPie, FaFileLines,
  FaScaleBalanced, FaGavel, FaCertificate, FaArrowRightArrowLeft,
  FaCloudSun, FaRoute, FaHandshake,
  FaMagnifyingGlass, FaArrowsRotate, FaLock,
};

interface Props {
  opportunity: InvestmentOpportunity;
}

export function InvestmentOpportunityCard({ opportunity }: Props) {
  const { icon, title, description, isOpportunityCallout } = opportunity;
  const IconComponent = ICON_MAP[icon] ?? FaCircleCheck;

  if (isOpportunityCallout) {
    return (
      <div
        className="col-span-full rounded-[14px] p-5 flex items-start gap-4 border"
        style={{
          background: 'linear-gradient(135deg,#EFF8F8 0%,#E6F4F1 100%)',
          borderColor: '#0E7C7B30',
        }}
      >
        <span
          className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 mt-[2px]"
          style={{ background: '#0E7C7B1A' }}
        >
          <IconComponent size={16} className="text-teal-700" />
        </span>
        <div>
          <p className="font-heading font-bold text-[15px] mb-1" style={{ color: '#0A5F5E' }}>
            ✅ {title}
          </p>
          <p className="text-[14px] leading-relaxed" style={{ color: '#1A4A49' }}>
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E3E7EF] rounded-[14px] p-5 hover:shadow-[0_8px_28px_rgba(11,27,52,.09)] hover:-translate-y-[2px] transition-all duration-300 flex items-start gap-4">
      <span
        className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 mt-[2px]"
        style={{ background: '#EFF6FF' }}
      >
        <IconComponent size={16} className="text-[#2451D6]" />
      </span>
      <div>
        <p className="font-heading font-bold text-[#0B1B34] text-[15px] mb-1">{title}</p>
        <p className="text-[#5A6478] text-[13.5px] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
