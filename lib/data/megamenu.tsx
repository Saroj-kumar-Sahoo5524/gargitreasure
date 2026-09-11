/**
 * Mega-menu data for Investment and Finance nav dropdowns.
 * Each category has a slug (used for routing), a title, sub-items, description,
 * and page content used on the dedicated category pages.
 *
 * NOTE: icons are React.ReactNode (react-icons SVG) — NOT emoji strings.
 * Emoji rendering is unreliable on Linux-based production servers that
 * lack modern emoji fonts (e.g. Noto Emoji), so we use SVG icons instead.
 */
import type { ReactNode } from 'react';
import {
  FaBolt,
  FaBuilding,
  FaChartLine,
  FaSeedling,
  FaGem,
  FaBitcoinSign,
  FaBuildingColumns,
  FaShieldHalved,
  FaFolderOpen,
  FaPaintbrush,
} from 'react-icons/fa6';

export interface MegaMenuSubItem {
  label: string;
  href: string;
}

export interface MegaMenuCategory {
  slug: string;
  title: string;
  icon: ReactNode; /** SVG icon (react-icons) for visual identity */
  tagline: string;
  items: MegaMenuSubItem[];
  /** Used on the dedicated category page */
  pageDescription: string;
  pageFeatures: string[];
  ctaLabel: string;
}

export interface MegaMenuGroup {
  key: string;
  label: string;
  basePath: string;
  categories: MegaMenuCategory[];
}

// ── Investment Mega-Menu ────────────────────────────────────────────────────

export const investmentMegaMenu: MegaMenuGroup = {
  key: 'investment',
  label: 'Investment',
  basePath: '/investments',
  categories: [
    {
      slug: 'energy',
      title: 'Energy',
      icon: <FaBolt />,
      tagline: 'Power the future, profit from it',
      items: [
        { label: 'Petrochemicals', href: '/investments/energy#petrochemicals' },
        { label: 'Solar Panel', href: '/investments/energy#solar' },
        { label: 'EV Charging Station', href: '/investments/energy#ev' },
      ],
      pageDescription:
        'Meeting modern energy demands requires a balanced approach: supporting essential industrial supply chains while funding low carbon infrastructure. We deploy capital into key assets across traditional and renewable energy sectors to build resilient, long term portfolios.',
      pageFeatures: [
        'Advanced refining, specialty chemical, and carbon reduction projects',
        'Utility scale solar farms and commercial solar installations',
        'High speed highway EV charging networks and commercial fleet hubs',
      ],
      ctaLabel: 'Explore Energy Investments',
    },
    {
      slug: 'real-estate',
      title: 'Real Estate',
      icon: <FaBuilding />,
      tagline: 'Tangible assets, lasting returns',
      items: [
        { label: 'Land Investment', href: '/investments/real-estate#land' },
        { label: 'Residential Projects', href: '/investments/real-estate#residential' },
        { label: 'Commercial Spaces', href: '/investments/real-estate#commercial' },
      ],
      pageDescription:
        'True wealth isn’t just numbers on a screen it is a lasting legacy you can see, touch, and pass down through generations. Land and physical property give your family enduring security, steady rental cash flows, and protection against inflation. We secure legally verified land, master planned living communities, and prime commercial spaces so your life’s hard work is anchored in something permanent and unbreakable.',
      pageFeatures: [
        'High growth land parcels and industrial logistics acreage',
        'Master planned residential townships, apartments, and gated communities ',
        'Institutional Grade-A office spaces and prime retail developments. ',
      ],
      ctaLabel: 'Browse Real Estate Deals',
    },
    {
      slug: 'shares-bonds',
      title: 'Shares & Bonds',
      icon: <FaChartLine />,
      tagline: 'Market-linked wealth with disciplined strategy',
      items: [
        { label: 'Equity Shares', href: '/investments/shares-bonds#equity' },
        { label: 'Corporate Bonds', href: '/investments/shares-bonds#bonds' },
        { label: 'IPO Advisory', href: '/investments/shares-bonds#ipo' },
      ],
      pageDescription:
        'We connect investors to dynamic market opportunities through structured equity participation and income generating debt securities. Whether seeking capital growth or predictable yields, our desk provides transparent access to liquid, institutional grade market instruments.',
      pageFeatures: [
        'Blue chip, mid market, and thematic equity portfolios',
        'Investment grade corporate bonds offering predictable periodic yields ',
        'Sovereign Treasury Bills, Government Securities, and State Development Loans.',
      ],
      ctaLabel: 'Start Investing in Markets',
    },
    {
      slug: 'agriculture',
      title: 'Agriculture',
      icon: <FaSeedling />,
      tagline: 'Invest in India\'s food security',
      items: [
        { label: 'Aqua Culture', href: '/investments/agriculture#aqua' },
        { label: 'Horti Culture', href: '/investments/agriculture#horti' },
        { label: 'Animal Husbandry', href: '/investments/agriculture#animal' },
        { label: 'Seed Production', href: '/investments/agriculture#seed' },
      ],
      pageDescription:
        'Modern agriculture has evolved from traditional cultivation into an asset backed, technology driven industry. Our investment strategy focuses on commercial biological production, organized supply chains, and high yield farming practices that meet expanding domestic consumption and specialized international export demand.',
      pageFeatures: [
        'Commercial bio secure aquaculture and temperature controlled processing',
        'Climate controlled polyhouses and high value fruit and vegetable plantations ',
        'Automated commercial dairy farms and bio energy systems ',
        'Certified, high yield hybrid seed production and distribution ',
      ],
      ctaLabel: 'Explore Agri Investments',
    },
    {
      slug: 'bullion-gemstones',
      title: 'Bullion / Gemstones',
      icon: <FaGem />,
      tagline: 'Timeless stores of value',
      items: [
        { label: 'Gold', href: '/investments/bullion-gemstones#gold' },
        { label: 'Silver', href: '/investments/bullion-gemstones#silver' },
        { label: 'Platinum', href: '/investments/bullion-gemstones#platinum' },
      ],
      pageDescription:
        'Tangible, non correlated assets have served as reliable stores of value across economic cycles. Our investment framework provides direct, verified access to institutional grade precious metals and investment class gemstones, helping clients protect purchasing power and diversify risk against currency volatility and geopolitical stress.',
      pageFeatures: [
        'High purity (.9999) gold bullion stored in fully insured, audited vaults',
        'Investment silver bars linked to clean energy and industrial demand',
        'Certified platinum bars aligned with green technology and manufacturing.',
      ],
      ctaLabel: 'Invest in Precious Metals',
    },
    {
      slug: 'crypto',
      title: 'Crypto',
      icon: <FaBitcoinSign />,
      tagline: 'Digital assets for the forward-thinking investor',
      items: [
        { label: 'Bitcoin (BTC)', href: '/investments/crypto#btc' },
        { label: 'Ethereum (ETH)', href: '/investments/crypto#eth' },
        { label: 'Diversified Basket', href: '/investments/crypto#basket' },
      ],
      pageDescription:
        'Digital assets have transitioned from speculative experiments into recognized alternative macroeconomic holdings. Our digital asset desk provides disciplined, secure access to premier decentralized networks, focusing strictly on blue chip digital stores of value and foundational smart contract infrastructure.',
      pageFeatures: [
        'Direct, secure Bitcoin exposure as a scarce digital store of value',
        'Ethereum infrastructure allocation and yield bearing network staking',
        'Multi signature institutional cold storage and clean OTC trade execution',
      ],
      ctaLabel: 'Explore Crypto Advisory',
    },
  ],
};

// ── Finance Mega-Menu ───────────────────────────────────────────────────────

export const financeMegaMenu: MegaMenuGroup = {
  key: 'finance',
  label: 'Finance',
  basePath: '/finance',
  categories: [
    {
      slug: 'banking',
      title: 'Banking',
      icon: <FaBuildingColumns />,
      tagline: 'Smart banking for every life stage',
      items: [
        { label: 'Mutual Fund', href: '/finance/banking#mutual-fund' },
        { label: 'Loans', href: '/loans' },
        { label: 'Micro Finance', href: '/finance/banking#micro-finance' },
      ],
      pageDescription:
        'More than standard deposits. We pair personalized loan structures and high growth mutual fund portfolios with community microfinance, delivering dependable capital whenever life or business demands it.',
      pageFeatures: [
        'Personalised investment and savings accounts',
        'Personal, vehicle, home, and business loans',
        'Microfinance for small businesses and self help groups',
        'Fixed and recurring deposit schemes',
        'Doorstep and digital banking facilities',
      ],
      ctaLabel: 'Explore Banking Solutions',
    },
    {
      slug: 'insurance',
      title: 'Insurance',
      icon: <FaShieldHalved />,
      tagline: 'Protection that keeps your wealth intact',
      items: [
        { label: 'Life Insurance', href: '/finance/insurance#life' },
        { label: 'General Insurance', href: '/finance/insurance#general' },
        { label: 'Health Insurance', href: '/finance/insurance#health' },
        { label: 'Miscellaneous', href: '/finance/insurance#misc' },
      ],
      pageDescription:
        "True financial security isn't just about growing your wealth; it is about defending it. Unexpected medical emergencies, accidents, or property losses can quickly deplete years of hardearned savings. We help you identify potential risks and put the right protective safety net in place, so you and your family can build your future with complete peace of mind.",
      pageFeatures: [
        "High-Value Term Life Cover to safeguard your family's future and protect corporate continuity.",
        "Cashless Hospitalization Health Plans for individuals, families, and seniors.",
        "Comprehensive Asset Protection for personal vehicles, homes, cargo, and commercial properties.",
        "Specialized Liability and Risk Cover against modern operational, digital, and professional losses.",
      ],
      ctaLabel: 'Get Insurance Advisory',
    },
    {
      slug: 'provident-fund',
      title: 'Provident Fund',
      icon: <FaFolderOpen />,
      tagline: 'Tax-efficient retirement savings',
      items: [
        { label: 'EPF Advisory', href: '/finance/provident-fund#epf' },
        { label: 'PPF Planning', href: '/finance/provident-fund#ppf' },
        { label: 'NPS Allocation', href: '/finance/provident-fund#nps' },
      ],
      pageDescription:
        'The safest foundation for your retirement. While equity and business investments drive active capital growth, provident funds anchor your net worth with sovereign safety. We help you optimize EPF, PPF, and voluntary contributions to lock in guaranteed returns, compound interest tax free, and maximize statutory exemptions under Sections 80C and 80CCD.',
      pageFeatures: [
        'Sovereign backed Public Provident Fund (PPF) accounts with tax free interest.',
        'Employee and Voluntary Provident Fund (EPF/VPF) optimization for salaried        professionals.',
        'National Pension System (NPS) plans for disciplined compounding and extra tax deductions.',
        'Seamless EPF transfers, UAN tracking, and retirement claim support.',
      ],
      ctaLabel: 'Plan Your Retirement',
    },
    {
      slug: 'alternate-investment',
      title: 'Alternate Investment',
      icon: <FaPaintbrush />,
      tagline: 'Unique assets, unique returns',
      items: [
        { label: 'Paintings & Fine Art', href: '/finance/alternate-investment#art' },
        { label: 'Luxury Watches', href: '/finance/alternate-investment#watches' },
        { label: 'Antiques & Collectibles', href: '/finance/alternate-investment#antiques' },
      ],
      pageDescription:
        'True portfolio diversification goes beyond standard stocks and fixed deposits. Fine art, luxury timepieces, and historical collectibles hold intrinsic value, deliver uncorrelated returns, and hedge against inflation. We take the speculation out of luxury assets by providing verified provenance, institutional authentication, and structured resale exits.',
      pageFeatures: [
        'Curated fine art acquisitions backed by certified gallery provenance',
        'Investment grade Swiss and independent luxury watch portfolio advisory',
        'Rare, authenticated antique sourcing compliant with heritage regulation',
        'Professional valuation, private storage advisory, and asset insurance',
        'Discreet secondary market liquidation and private auction facilitation',
      ],
      ctaLabel: 'Discover Alternate Assets',
    },
  ],
};

/** Combined reference for both mega-menu groups */
export const allMegaMenuGroups: MegaMenuGroup[] = [investmentMegaMenu, financeMegaMenu];
