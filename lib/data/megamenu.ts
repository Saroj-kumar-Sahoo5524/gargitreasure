/**
 * Mega-menu data for Investment and Finance nav dropdowns.
 * Each category has a slug (used for routing), a title, sub-items, description,
 * and page content used on the dedicated category pages.
 */

export interface MegaMenuSubItem {
  label: string;
  href: string;
}

export interface MegaMenuCategory {
  slug: string;
  title: string;
  icon: string; /** emoji icon for visual identity */
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
      icon: '⚡',
      tagline: 'Power the future, profit from it',
      items: [
        { label: 'Petrochemicals', href: '/investments/energy#petrochemicals' },
        { label: 'Solar Panel', href: '/investments/energy#solar' },
        { label: 'EV Charging Station', href: '/investments/energy#ev' },
      ],
      pageDescription:
        'The energy transition is creating once-in-a-generation investment opportunities. From petrochemical infrastructure to clean energy installations, we help you position your capital where tomorrow\'s demand is being built today.',
      pageFeatures: [
        'Petrochemical plant equity participation',
        'Rooftop & utility-scale solar panel projects',
        'EV charging network franchise opportunities',
        'Government-backed renewable energy bonds',
        'Carbon credit monetisation advisory',
      ],
      ctaLabel: 'Explore Energy Investments',
    },
    {
      slug: 'real-estate',
      title: 'Real Estate',
      icon: '🏗️',
      tagline: 'Tangible assets, lasting returns',
      items: [
        { label: 'Land Investment', href: '/investments/real-estate#land' },
        { label: 'Residential Projects', href: '/investments/real-estate#residential' },
        { label: 'Commercial Spaces', href: '/investments/real-estate#commercial' },
      ],
      pageDescription:
        'Real estate remains one of India\'s most resilient wealth-creation vehicles. We curate pre-vetted land and property opportunities — from prime residential plots to high-footfall commercial developments — with complete legal due diligence.',
      pageFeatures: [
        'Verified land titles with clear ownership history',
        'Residential township pre-launch allocations',
        'Commercial property REITs and direct ownership',
        'NRI-friendly investment structuring',
        'Rental yield optimisation advisory',
      ],
      ctaLabel: 'Browse Real Estate Deals',
    },
    {
      slug: 'shares-bonds',
      title: 'Shares & Bonds',
      icon: '📈',
      tagline: 'Market-linked wealth with disciplined strategy',
      items: [
        { label: 'Equity Shares', href: '/investments/shares-bonds#equity' },
        { label: 'Corporate Bonds', href: '/investments/shares-bonds#bonds' },
        { label: 'IPO Advisory', href: '/investments/shares-bonds#ipo' },
      ],
      pageDescription:
        'Capital markets offer unmatched liquidity and compounding potential when approached with research-backed discipline. Our advisors build customised equity and fixed-income portfolios aligned to your risk appetite and time horizon.',
      pageFeatures: [
        'Curated equity baskets across large, mid & small cap',
        'High-yield corporate NCD and bond allocations',
        'IPO grey-market insight and allotment strategy',
        'Sector-rotation advisory based on macro trends',
        'Quarterly portfolio review and rebalancing',
      ],
      ctaLabel: 'Start Investing in Markets',
    },
    {
      slug: 'agriculture',
      title: 'Agriculture',
      icon: '🌾',
      tagline: 'Invest in India\'s food security',
      items: [
        { label: 'Aqua Culture', href: '/investments/agriculture#aqua' },
        { label: 'Horti Culture', href: '/investments/agriculture#horti' },
        { label: 'Animal Husbandry', href: '/investments/agriculture#animal' },
        { label: 'Seed Production', href: '/investments/agriculture#seed' },
      ],
      pageDescription:
        'Agriculture-linked investments combine stable cash flows with India\'s growing domestic consumption story. From fish farming to speciality horticulture, these asset classes offer low correlation to equity markets and strong rural yield potential.',
      pageFeatures: [
        'Shrimp and fish aquaculture pond leasing',
        'Polyhouse horticulture for high-value crops',
        'Dairy and poultry enterprise co-investment',
        'Certified seed multiplication programs',
        'FPO (Farmer Producer Organisation) equity stakes',
      ],
      ctaLabel: 'Explore Agri Investments',
    },
    {
      slug: 'bullion-gemstones',
      title: 'Bullion / Gemstones',
      icon: '💎',
      tagline: 'Timeless stores of value',
      items: [
        { label: 'Gold', href: '/investments/bullion-gemstones#gold' },
        { label: 'Silver', href: '/investments/bullion-gemstones#silver' },
        { label: 'Platinum', href: '/investments/bullion-gemstones#platinum' },
      ],
      pageDescription:
        'Precious metals and certified gemstones act as powerful hedges against inflation and currency depreciation. We facilitate physical, digital, and ETF-linked exposure to gold, silver, and platinum with BIS-hallmarked assurance.',
      pageFeatures: [
        'Physical gold & silver with hallmark certification',
        'Digital gold via SEBI-regulated platforms',
        'Gold ETF and sovereign gold bond advisory',
        'Platinum rare metal portfolio allocation',
        'Certified diamond and coloured gemstone investment',
      ],
      ctaLabel: 'Invest in Precious Metals',
    },
    {
      slug: 'crypto',
      title: 'Crypto',
      icon: '🪙',
      tagline: 'Digital assets for the forward-thinking investor',
      items: [
        { label: 'Bitcoin (BTC)', href: '/investments/crypto#btc' },
        { label: 'Ethereum (ETH)', href: '/investments/crypto#eth' },
        { label: 'Diversified Basket', href: '/investments/crypto#basket' },
      ],
      pageDescription:
        'Cryptocurrency is a high-risk, high-reward asset class that warrants a measured allocation within a diversified portfolio. Our advisors help you navigate regulatory frameworks, custody solutions, and position sizing with discipline.',
      pageFeatures: [
        'Bitcoin SIP (Systematic Investment Plan)',
        'Ethereum staking yield advisory',
        'Diversified top-10 crypto index basket',
        'Tax-efficient reporting and FIFO advisory',
        'Cold-wallet custody best practices',
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
      icon: '🏦',
      tagline: 'Smart banking for every life stage',
      items: [
        { label: 'Mutual Fund', href: '/finance/banking#mutual-fund' },
        { label: 'Loans', href: '/loans' },
        { label: 'Micro Finance', href: '/finance/banking#micro-finance' },
      ],
      pageDescription:
        'Banking solutions that go beyond savings accounts. We connect you with optimal mutual fund schemes, structured loan products, and micro-finance avenues that match your income profile and goals.',
      pageFeatures: [
        'Goal-based SIP and lump-sum mutual fund selection',
        'Personal, vehicle, and business loan facilitation',
        'NBFC and co-operative bank micro-loan linkage',
        'Digital banking and zero-balance account setup',
        'Fixed deposit ladder strategy for liquidity management',
      ],
      ctaLabel: 'Explore Banking Solutions',
    },
    {
      slug: 'insurance',
      title: 'Insurance',
      icon: '🛡️',
      tagline: 'Protection that keeps your wealth intact',
      items: [
        { label: 'Life Insurance', href: '/finance/insurance#life' },
        { label: 'General Insurance', href: '/finance/insurance#general' },
        { label: 'Health Insurance', href: '/finance/insurance#health' },
        { label: 'Miscellaneous', href: '/finance/insurance#misc' },
      ],
      pageDescription:
        'Comprehensive insurance planning is the foundation of lasting financial security. We assess your risk exposure and design a layered cover strategy — from term life and health floater policies to property and liability insurance.',
      pageFeatures: [
        'Pure term life cover with high sum assured',
        'Unit-linked and endowment plan comparison',
        'Family floater and senior citizen health policies',
        'Vehicle, fire, and property general insurance',
        'Business liability and professional indemnity cover',
      ],
      ctaLabel: 'Get Insurance Advisory',
    },
    {
      slug: 'provident-fund',
      title: 'Provident Fund',
      icon: '📁',
      tagline: 'Tax-efficient retirement savings',
      items: [
        { label: 'EPF Advisory', href: '/finance/provident-fund#epf' },
        { label: 'PPF Planning', href: '/finance/provident-fund#ppf' },
        { label: 'NPS Allocation', href: '/finance/provident-fund#nps' },
      ],
      pageDescription:
        'Provident fund instruments are the backbone of long-term retirement planning in India. We help you optimise EPF contributions, build a PPF corpus, and design an NPS tier allocation that maximises tax benefits under 80C and 80CCD.',
      pageFeatures: [
        'EPF passbook audit and UAN management',
        'PPF extension and partial withdrawal strategy',
        'NPS Tier-I and Tier-II fund selection guidance',
        '80C deduction optimisation across instruments',
        'Retirement corpus goal projection and review',
      ],
      ctaLabel: 'Plan Your Retirement',
    },
    {
      slug: 'alternate-investment',
      title: 'Alternate Investment',
      icon: '🖼️',
      tagline: 'Unique assets, unique returns',
      items: [
        { label: 'Paintings & Fine Art', href: '/finance/alternate-investment#art' },
        { label: 'Luxury Watches', href: '/finance/alternate-investment#watches' },
        { label: 'Antiques & Collectibles', href: '/finance/alternate-investment#antiques' },
      ],
      pageDescription:
        'Alternative investments offer genuine diversification beyond traditional financial markets. Art, vintage watches, and authenticated antiques have delivered compelling long-term appreciation — we provide access, authentication support, and exit facilitation.',
      pageFeatures: [
        'Curated fine art acquisition with certificate of authenticity',
        'Swiss and Japanese luxury watch investment advisory',
        'Authenticated antique collectible sourcing',
        'Fractional art ownership through AIF structures',
        'Valuation, insurance, and resale facilitation',
      ],
      ctaLabel: 'Discover Alternate Assets',
    },
  ],
};

/** Combined reference for both mega-menu groups */
export const allMegaMenuGroups: MegaMenuGroup[] = [investmentMegaMenu, financeMegaMenu];
