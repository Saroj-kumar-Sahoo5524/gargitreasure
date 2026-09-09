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
      icon: '🏗️',
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
      icon: '📈',
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
      icon: '🌾',
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
      icon: '💎',
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
      icon: '🪙',
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
