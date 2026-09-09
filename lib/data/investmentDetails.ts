/**
 * Investment Detail Page Content
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all /investments/[category]/details pages.
 *
 * ✏️  To update content:
 *   • Edit the values in `investmentDetails[slug]` below.
 *   • No UI component changes are required.
 *   • To add a new section, append an object to the `sections` array.
 *   • To add a new advantage, append to the `advantages` array.
 *
 * Slug keys match the category slugs in lib/data/megamenu.ts
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface InvestmentOpportunity {
  /** Icon from react-icons/fa6, e.g. 'FaBolt', or an emoji fallback */
  icon: string;
  title: string;
  description: string;
  /** Optional flag for the "Investment Opportunity" callout card */
  isOpportunityCallout?: boolean;
}

export interface InvestorSnapshot {
  /** e.g. "₹5 Lakhs to ₹10+ Lakhs per work" */
  entrySize: string;
  /** e.g. "5 to 10 years" */
  holdingHorizon: string;
  /** e.g. "Sale of Goods Act, 1930 (clear title guarantee)" */
  legalShield: string;
}

export interface InvestmentSection {
  /** e.g. "Petrochemicals" */
  title: string;
  /** e.g. "Supporting Modern Manufacturing" */
  subtitle: string;
  /** 2–3 sentence description of the investment area */
  description: string;
  /** List of 3–5 sub-opportunities rendered as icon cards */
  opportunities: InvestmentOpportunity[];
  /** Optional investor snapshot — Entry Size, Holding Horizon, Legal Shield */
  investorSnapshot?: InvestorSnapshot;
}

export interface InvestmentAdvantage {
  icon: string;
  title: string;
  description: string;
}

export interface InvestmentDetailData {
  /** ALL-CAPS eyebrow label above the headline */
  eyebrow: string;
  /** Main hero headline */
  headline: string;
  /** Supporting hero paragraph */
  subheadline: string;
  /** One entry per investment area (e.g. Petrochemicals, Solar, EV Charging) */
  sections: InvestmentSection[];
  /** Three advantage cards shown in the "Our Investment Advantage" section */
  advantages: InvestmentAdvantage[];
  /** Label for the primary CTA at the bottom of the page */
  ctaLabel: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const investmentDetails: Record<string, InvestmentDetailData> = {

  // ── ENERGY ─────────────────────────────────────────────────────────────────
  // ✅ Real content — do not replace with placeholders
  energy: {
    eyebrow: 'ENERGY INVESTMENTS',
    headline: 'Powering the Future Through Strategic Energy Investments',
    subheadline:
      'A diversified approach across industrial infrastructure, renewable energy, and electric mobility — focused on long-term value creation and sustainable growth.',
    sections: [
      {
        title: 'Petrochemicals',
        subtitle: 'Supporting Modern Manufacturing',
        description:
          'Petrochemicals remain vital to the global economy, supplying key materials for industrial manufacturing, healthcare, and components used in renewable energy systems. We focus on operational efficiency, specialized products, and emissions reduction.',
        opportunities: [
          {
            icon: 'FaIndustry',
            title: 'Refining & Processing',
            description:
              'Investing in modern, automated facilities to increase efficiency and lower production costs.',
          },
          {
            icon: 'FaFlask',
            title: 'Specialty Chemicals',
            description:
              'Backing high-demand polymers and synthetics for consumer electronics, automotive manufacturing, and construction.',
          },
          {
            icon: 'FaLeaf',
            title: 'Recycling & Emission Control',
            description:
              'Supporting chemical recycling projects and technologies that reduce facility carbon emissions.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Reliable industrial demand combined with operational upgrades that improve margins and environmental performance.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Solar Energy & Grid Infrastructure',
        subtitle: 'Scaling Clean, Direct Power Generation',
        description:
          'Solar is one of the most reliable and cost-effective renewable energy sources available today. We invest across the entire development cycle, from equipment manufacturing to large-scale power generation.',
        opportunities: [
          {
            icon: 'FaSolarPanel',
            title: 'Utility Scale Solar Farms',
            description:
              'Funding large generation facilities backed by long-term power purchase agreements (PPAs).',
          },
          {
            icon: 'FaBuilding',
            title: 'Commercial & Industrial Installations',
            description:
              'Providing on-site solar systems for businesses seeking to lower energy costs and secure reliable power.',
          },
          {
            icon: 'FaBatteryFull',
            title: 'Solar Equipment & Battery Storage',
            description:
              'Investing in high-efficiency panel manufacturing and energy storage systems to store power for peak demand.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Stable, long-term contracted revenues backed by growing institutional demand for clean power.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'EV Charging Infrastructure',
        subtitle: 'Expanding Networks for Electric Mobility',
        description:
          'The rapid adoption of electric vehicles requires significant expansion of commercial charging networks. We invest in scalable, high-use charging sites along major transit routes and urban hubs.',
        opportunities: [
          {
            icon: 'FaBolt',
            title: 'Highway Fast Charging',
            description:
              'Installing high-power DC fast chargers along freight corridors and major highways.',
          },
          {
            icon: 'FaLocationDot',
            title: 'Commercial & Public Locations',
            description:
              'Equipping retail centers, business parks, and residential complexes with dedicated charging access.',
          },
          {
            icon: 'FaTruck',
            title: 'Fleet Charging Depots',
            description:
              'Building dedicated charging hubs for delivery vans, city vehicles, and transport trucks.',
          },
          {
            icon: 'FaMicrochip',
            title: 'Smart Energy Management',
            description:
              'Integrating software platforms and battery storage to balance grid demand and optimize charging costs.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'High utilization driven by vehicle fleet adoption, paired with steady revenue from power delivery and network services.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaChartPie',
        title: 'Sector Diversification',
        description:
          'Balancing steady cash flow from established industrial assets with growth opportunities in clean energy.',
      },
      {
        icon: 'FaRoute',
        title: 'Full Cycle Execution',
        description:
          'Managing projects through feasibility, site acquisition, permitting, and long-term asset management.',
      },
      {
        icon: 'FaShieldHalved',
        title: 'Long-Term Performance',
        description:
          'Building portfolios designed to perform across changing market conditions and regulatory standards.',
      },
    ],
    ctaLabel: 'Schedule an Energy Investment Consultation',
  },

  // ── REAL ESTATE ────────────────────────────────────────────────────────────
  // 📝 Placeholder — replace with final content
  'real-estate': {
    eyebrow: 'REAL ESTATE INVESTMENTS',
    headline: 'Building Lasting Wealth Through Tangible Property Assets',
    subheadline:
      'A curated approach spanning residential development, commercial real estate, and land acquisition — anchored in rigorous due diligence and long-term capital appreciation.',
    sections: [
      {
        title: 'Land Investment',
        subtitle: 'Securing High-Value Land Before the Market',
        description:
          'Land is a foundational asset for capital preservation and compounding value. Our real estate division focuses exclusively on sourcing, acquiring, and holding strategic land parcels positioned along emerging growth corridors, industrial zones, and developing infrastructure networks.',
        opportunities: [
          {
            icon: 'FaMapLocation',
            title: 'Strategic Land Banking',
            description:
              'Identifying and acquiring high potential acreage along upcoming expressways, transit corridors, and economic hubs ahead of peak market appreciation.',
          },
          {
            icon: 'FaFileContract',
            title: 'Industrial & Logistics Acreage',
            description:
              'Sourcing clear title land parcels optimized for warehousing, logistics parks, and manufacturing clusters near freight routes and highways.',
          },
          {
            icon: 'FaRoad',
            title: 'Plotted Development Parcels',
            description:
              'Securing land suitable for planned layout developments, boundary demarcated residential plots, and gated communities.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Title Integrity & Legal Verification',
            description:
              'Conducting comprehensive multi decade title searches, revenue record checks, and non encumbrance verifications to ensure 100% marketable land ownership.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Residential Projects',
        subtitle: 'Curated Living Spaces Built for Long-Term Value',
        description:
          'We structure and invest in modern residential developments designed around urban connectivity, architectural durability, and evolving lifestyle needs.',
        opportunities: [
          {
            icon: 'FaHouseChimney',
            title: 'Integrated Townships & Gated Communities',
            description:
              'Master planned developments offering a balance of private living, secure infrastructure, and shared recreational amenities.',
          },
          {
            icon: 'FaUsers',
            title: 'Urban Apartments & Condominiums',
            description:
              'High efficiency, multi family housing situated in high demand employment corridors and educational hubs.',
          },
          {
            icon: 'FaMoneyBillTrendUp',
            title: 'Plotted Housing Enclaves',
            description:
              'Legally verified, boundary demarcated residential layouts equipped with internal roads, power grids, and underground utilities.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Sustainable Building Standards',
            description:
              'mplementing energy efficient lighting, rainwater harvesting, and waste management systems to lower operating costs for residents.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Commercial Spaces',
        subtitle: 'Institutional Grade Assets for Enterprise & Retail',
        description:
          'Our commercial portfolio focuses on acquiring, developing, and managing revenue generating real estate in central business districts and high density retail corridors.',
        opportunities: [
          {
            icon: 'FaShop',
            title: 'Grade-A Office Developments',
            description:
              'Scalable, tech enabled floor plates built for corporate headquarters, IT/ITeS enterprises, and professional service firms.',
          },
          {
            icon: 'FaBuilding',
            title: 'High Street Retail & Showrooms',
            description:
              'Prominent frontage units along major thoroughfares offering high consumer visibility and strong footfall.',
          },
          {
            icon: 'FaWarehouse',
            title: 'Mixed Use Developments',
            description:
              'Integrated towers combining retail at the base with commercial workspace above to maximize foot traffic and space utility.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Institutional Lease Structuring',
            description:
              'Long term leases paired with periodic escalation clauses and established corporate tenants.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaScaleBalanced',
        title: 'High Growth Potential',
        description:
          'Capitalize on state infrastructure projects, new bypass networks, and rapid suburban expansion.',
      },
      {
        icon: 'FaHandshake',
        title: 'Tangible Asset Security',
        description:
          'Direct ownership of titled, physical land free from building depreciation costs.',
      },
      {
        icon: 'FaChartLine',
        title: 'Disciplined Due Diligence',
        description:
          'Strict scrutiny of land classification, local zoning regulations, and road access permissions before acquisition.',
      },
    ],
    ctaLabel: 'Schedule a Real Estate Consultation',
  },

  // ── SHARES & BONDS ─────────────────────────────────────────────────────────
  // 📝 Placeholder — replace with final content
  'shares-bonds': {
    eyebrow: 'SHARES & BONDS INVESTMENTS',
    headline: 'Market-Linked Wealth Built on Research and Discipline',
    subheadline:
      'A structured approach to equity and fixed-income markets — combining sector-driven equity selection with high-yield bond allocations for balanced, long-term portfolio growth.',
    sections: [
      {
        title: 'Listed Equities (Shares)',
        subtitle: 'Capital Growth in High Performing Enterprises',
        description:
          'Equities offer the highest long-term compounding potential across asset classes when managed with rigorous research and disciplined rebalancing. We construct customized equity baskets spanning large, mid, and small-cap segments.',
        opportunities: [
          {
            icon: 'FaChartLine',
            title: 'Blue Chip Equities',
            description:
              'Ownership stakes in established market leaders offering consistent balance sheets, regular dividends, and low volatility.',
          },
          {
            icon: 'FaArrowTrendUp',
            title: 'Growth & Mid Market Equities',
            description:
              'Strategic exposure to scalable companies driving innovation and operational expansion across key industrial sectors.',
          },
          {
            icon: 'FaGlobe',
            title: 'Sectoral & Thematic Portfolios',
            description:
              'Curated baskets positioned to capture structural shifts across manufacturing, banking, and infrastructure.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Diversified equity exposure with quarterly rebalancing delivers superior risk-adjusted returns over 5+ year horizons.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Corporate Bonds',
        subtitle: 'Capital Protection with Predictable Yields',
        description:
          'Corporate bonds and NCDs (Non-Convertible Debentures) provide predictable, above-FD returns with defined maturities. We source high-grade issuances from companies with strong credit ratings and transparent repayment schedules.',
        opportunities: [
          {
            icon: 'FaFileInvoiceDollar',
            title: 'Investment Grade Issues',
            description:
              'High credit rated bonds issued by solvent corporate houses delivering periodic coupon income.',
          },
          {
            icon: 'FaLandmark',
            title: 'Structured Debt Securities',
            description:
              'Medium to long term senior debt instruments designed to outpace standard deposit rates.',
          },
          {
            icon: 'FaMoneyBillWave',
            title: 'Fixed Income Stability',
            description:
              'Reliable cash flows insulated from day to day equity market fluctuations.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Predictable coupon income with defined maturity dates suits investors seeking stable, structured cash flows.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Sovereign & Government Securities (G-Secs)',
        subtitle: 'Sovereign Safety and Long-Term Reserves',
        description:
          'Initial Public Offerings represent a unique window to invest in high-growth companies at or near inception of their public market journey. Our advisory combines grey-market analysis with fundamental screening for optimal allotment strategy.',
        opportunities: [
          {
            icon: 'FaMagnifyingGlassChart',
            title: 'Treasury Bills & Sovereign Bonds',
            description:
              'Direct access to government backed debt instruments offering maximum capital safety.',
          },
          {
            icon: 'FaTicket',
            title: 'State Development Loans (SDLs)',
            description:
              'High yield sovereign instruments providing predictable returns for institutional and retail portfolios.',
          },
          {
            icon: 'FaCalendarCheck',
            title: 'Inflation Protected Yields',
            description:
              'Low risk foundational assets built to preserve real purchasing power.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Early market entry in fundamentally strong companies can deliver listing gains and long-term multi-bagger returns.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaMagnifyingGlass',
        title: 'Balanced Portfolio Risk',
        description:
          'Balance equity capital appreciation with the capital preservation of fixed income bonds.',
      },
      {
        icon: 'FaArrowsRotate',
        title: 'High Liquidity',
        description:
          'Trade standardized instruments with transparent price discovery and swift trade execution.',
      },
      {
        icon: 'FaLock',
        title: 'Institutional Governance',
        description:
          'Every asset class undergoes independent credit, valuation, and counter party risk assessment.',
      },
    ],
    ctaLabel: 'Start Your Market Investment Journey',
  },

  // ── AGRICULTURE ────────────────────────────────────────────────────────────
  // 📝 Placeholder — replace with final content
  agriculture: {
    eyebrow: 'AGRICULTURE INVESTMENTS',
    headline: "Investing in India's Food Security and Rural Growth",
    subheadline:
      'A diversified agricultural portfolio spanning aquaculture, horticulture, animal husbandry, and seed production — delivering steady returns with low correlation to equity markets.',
    sections: [
      {
        title: 'Aquaculture',
        subtitle: "Commercial Marine & Freshwater Production",
        description:
          'Global demand for animal protein is shifting rapidly toward seafood. We invest in commercial aquatic farming systems that optimize feed conversion ratios, biosecurity, and cold chain distribution.',
        opportunities: [
          {
            icon: 'FaFish',
            title: 'Intensive Shrimp & Finfish Farming',
            description:
              'Developing bio secure pond architectures, Recirculating Aquaculture Systems (RAS), and automated aeration networks.',
          },
          {
            icon: 'FaWater',
            title: 'Hatcheries & High Health Seed',
            description:
              'Backing specialized breeding units producing disease resistant, certified Specific Pathogen Free (SPF) post larvae and fingerlings.',
          },
          {
            icon: 'FaBoxOpen',
            title: 'Cold Chain & Processing Integration',
            description:
              'Deploying capital into temperature controlled logistics, IQF (Individually Quick Frozen) processing units, and export compliant packing facilities.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'High velocity production cycles, steady dollar denominated export revenues, and strong domestic consumption tailwinds.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Commercial Horticulture',
        subtitle: 'Protected Cultivation & High Value Crops',
        description:
          'Growing high value fruits and vegetables under protected, climate controlled conditions delivers far higher income per acre than traditional farming.',
        opportunities: [
          {
            icon: 'FaSeedling',
            title: 'Greenhouse & Polyhouse Setups',
            description:
              'Automated indoor farming for off season vegetables, berries, and exotic greens.',
          },
          {
            icon: 'FaAppleWhole',
            title: 'Orchards & Plantations',
            description:
              'Long term acreage for high demand fruits, nuts, and commercial crops.',
          },
          {
            icon: 'FaStore',
            title: 'Modern Packhouses',
            description:
              'Fast sorting, grading, and cold storage to prevent spoilage and secure top market rates.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Premium retail prices year round, protection from bad weather, and direct supply contracts with major supermarkets.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Animal Husbandry & Dairy Infrastructure',
        subtitle: 'Integrated Livestock & Commercial Supply Chains',
        description:
          'Rising disposable incomes continue to drive sustained demand for dairy, poultry, and animal derived proteins. We invest in organized breeding, modern farm automation, and processing assets.',
        opportunities: [
          {
            icon: 'FaCow',
            title: 'Commercial Dairy Farms',
            description:
              'High density, mechanized dairy units with computerized herd management, robotic milking, and automated dietary dispensing.',
          },
          {
            icon: 'FaEgg',
            title: 'Nutritional Feed & Silage Production',
            description:
              'Commercial processing plants producing total mixed rations (TMR), mineral enriched feed, and climate resilient forage.',
          },
          {
            icon: 'FaWheatAwn',
            title: 'Bio-Energy & Organic By Products',
            description:
              'Capturing secondary revenue through industrial biogas digesters and commercial organic fertilizer production.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Daily, predictable cash flows from off take agreements, supported by high local demand and expanding value added dairy markets.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaCloudSun',
        title: 'Biological Risk Mitigation',
        description:
          'Implementing modern bio security protocols, automated climate management, and multi location asset distribution.',
      },
      {
        icon: 'FaSeedling',
        title: 'End-to-End Value Integration',
        description:
          'Connecting primary production directly to established off takers, commercial food processors, and export terminals.',
      },
      {
        icon: 'FaLeaf',
        title: 'Asset Backed Security',
        description:
          'Portfolios anchored by titled agricultural acreage, civil infrastructure, and advanced processing assets.',
      },
    ],
    ctaLabel: 'Explore Agricultural Investment Opportunities',
  },

  // ── BULLION / GEMSTONES ────────────────────────────────────────────────────
  // 📝 Placeholder — replace with final content
  'bullion-gemstones': {
    eyebrow: 'BULLION & GEMSTONE INVESTMENTS',
    headline: 'Timeless Stores of Value in Precious Metals and Gemstones',
    subheadline:
      'Gold serves as a dependable hedge against systemic financial stress and inflationary pressure. We facilitate the acquisition, allocated vaulting, and trading of pure gold bullion meeting international Good Delivery standards.',
    sections: [
      {
        title: 'Gold Bullion',
        subtitle: 'Monetary Stability & Systemic Hedging',
        description:
          'Gold has preserved wealth for millennia and remains the most trusted hedge against inflation and geopolitical uncertainty. We facilitate physical, digital, and ETF-linked gold investment with BIS-hallmarked assurance and regulatory compliance.',
        opportunities: [
          {
            icon: 'FaStar',
            title: 'Sovereign Coins & Cast Bars',
            description:
              'High purity (.9999) investment grade bullion sourced directly from accredited global mints and refineries.',
          },
          {
            icon: 'FaMobileScreenButton',
            title: 'Allocated & Segregated Custody:',
            description:
              'Fully insured, third party vaulting solutions offering independent audit verification and complete legal title ownership.',
          },
          {
            icon: 'FaFileShield',
            title: 'Institutional Liquidity Desk',
            description:
              'Reliable buy back mechanisms and secondary market trading with tight spreads and transparent pricing.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'High global liquidity, counter party free asset security, and long term capital preservation across market downturns.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Silver Bullion',
        subtitle: 'Monetary Value Paired with Industrial Expansion',
        description:
          'Silver combines the wealth preservation traits of a monetary metal with growing demand from modern manufacturing. We structure physical silver holdings to capture upside from key industrial sectors alongside wealth protection.',
        opportunities: [
          {
            icon: 'FaCoins',
            title: 'Commercial & Investment Ingots',
            description:
              'Standardized 1-kilo and 100-ounce bars optimized for balance sheet allocation and competitive fabrication premiums.',
          },
          {
            icon: 'FaAtom',
            title: 'Industrial Demand Integration',
            description:
              'Strategic exposure tied directly to solar photovoltaic production, microelectronics, and electric vehicle component manufacturing.',
          },
          {
            icon: 'FaArrowTrendUp',
            title: 'Flexible Execution Options',
            description:
              'Options for physical delivery or insured, tax efficient bonded warehouse storage.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Lower capital entry barrier than gold, higher cyclical volatility for growth, and structural demand from clean technology industries.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Platinum Group Metals (PGM)',
        subtitle: 'Scarcity Value & Advanced Industrial Utility',
        description:
          'Significantly rarer than gold, platinum holds a unique position across global manufacturing, chemical processing, and emerging clean energy technologies.',
        opportunities: [
          {
            icon: 'FaGem',
            title: 'Standardized Mint Bars & Plates',
            description:
              'Physical platinum bars (.9995 purity) certified by London Platinum and Palladium Market (LPPM) refiners.',
          },
          {
            icon: 'FaPalette',
            title: 'Green Energy & Catalytic Exposure',
            description:
              'Direct alignment with industrial demand across automotive emission control, chemical refining, and hydrogen fuel cell production.',
          },
          {
            icon: 'FaShieldHalved',
            title: 'Supply Driven Capital Growth',
            description:
              'Structural supply concentration creates potential upside during global industrial expansions.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Much rarer than gold, heavily used in modern industry, and currently attractively priced compared to other precious metals.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaShieldHalved',
        title: 'Strict Chain of Custody',
        description:
          'Sourcing exclusively through verified mints, compliant refineries, and ethical mining channels to guarantee authenticity.',
      },
      {
        icon: 'FaCertificate',
        title: 'Transparent Execution',
        description:
          'Clear, market linked pricing based on live international spot rates without hidden brokerage markups.',
      },
      {
        icon: 'FaArrowRightArrowLeft',
        title: 'Dual Trade & Finance Capability',
        description:
          'Ability to leverage physical metal holdings for operational liquidity or trade settlement across our broader commercial verticals.',
      },
    ],
    ctaLabel: 'Explore Precious Metal Investment Options',
  },

  // ── CRYPTO ─────────────────────────────────────────────────────────────────
  // 📝 Placeholder — replace with final content
  crypto: {
    eyebrow: 'CRYPTO INVESTMENTS',
    headline: 'Disciplined Digital Asset Allocation for the Modern Portfolio',
    subheadline:
      'A measured, research-backed approach to cryptocurrency — covering Bitcoin, Ethereum, and diversified digital asset baskets with rigorous risk management and custody solutions.',
    sections: [
      {
        title: 'Bitcoin (BTC)',
        subtitle: "Decentralized Settlement & Digital Store of Value",
        description:
          'Bitcoin is the most established, liquid, and institutionally adopted digital asset. Its fixed supply, global liquidity, and growing institutional acceptance make it the foundational position for any crypto allocation.',
        opportunities: [
          {
            icon: 'FaBitcoin',
            title: 'Scarcity Model',
            description:
              'Fixed mathematical supply cap of 21 million units, offering programmatic resistance to monetary inflation.',
          },
          {
            icon: 'FaVault',
            title: 'Macroeconomic Hedge',
            description:
              'Functioning as non sovereign digital collateral and a liquid, counterparty free store of value.',
          },
          {
            icon: 'FaReceipt',
            title: 'Institutional Liquidity',
            description:
              'High daily trading depth enabling efficient execution and portfolio rebalancing across global markets.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Bitcoin\'s fixed 21M supply and growing ETF-driven institutional demand provide a compelling long-term asymmetric return profile.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Ethereum (ETH)',
        subtitle: 'Decentralized Compute & Programmable Financial Infrastructure',
        description:
          'Ethereum is the foundational blockchain for decentralized applications, DeFi, and tokenized assets. Its transition to Proof-of-Stake introduced yield-generating staking, creating a new income stream alongside price appreciation.',
        opportunities: [
          {
            icon: 'FaEthereum',
            title: 'Settlement Engine',
            description:
              'The foundational base layer securing decentralized finance (DeFi), real-world asset (RWA) tokenization, and enterprise smart contracts.',
          },
          {
            icon: 'FaNetworkWired',
            title: 'Economic Staking Model',
            description:
              'Yield bearing capability through native network validation without reliance on centralized lending intermediaries.',
          },
          {
            icon: 'FaCoins',
            title: 'Deflationary Supply Dynamics',
            description:
              'Fee burning mechanisms tied to direct network usage, reducing structural token dilution over time.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'ETH staking provides a yield floor on top of price appreciation in the world\'s leading smart contract platform.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Diversified Crypto Basket',
        subtitle: 'Managed Exposure Across the Digital Asset Ecosystem',
        description:
          'A diversified basket approach across the top 10 digital assets by market capitalization provides broad exposure while managing single-asset concentration risk. Our advisory covers rebalancing, allocation limits, and regulatory considerations.',
        opportunities: [
          {
            icon: 'FaChartPie',
            title: 'Top-10 Index Basket',
            description:
              'Market-cap weighted allocation across the 10 largest cryptocurrencies with quarterly rebalancing.',
          },
          {
            icon: 'FaShieldHalved',
            title: 'Risk-Position Sizing',
            description:
              'Allocation capped at 5–15% of overall portfolio value, with crypto sub-allocation limits per asset.',
          },
          {
            icon: 'FaFileLines',
            title: 'Regulatory Compliance',
            description:
              'Guidance on Indian VDA tax compliance, FEMA implications for crypto holdings, and exchange selection.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Investment Opportunity',
            description:
              'Diversified basket exposure captures digital asset growth while reducing single-coin volatility impact on overall portfolio.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaScaleBalanced',
        title: 'Segregated Cold Storage',
        description:
          'Digital assets are secured with qualified institutional custodians utilizing multi signature governance and hardware isolated private keys.',
      },
      {
        icon: 'FaVault',
        title: 'Deep Market Liquidity',
        description:
          'Direct execution across institutional OTC (Over-the-Counter) desks to ensure minimal slippage on high volume allocations.',
      },
      {
        icon: 'FaGavel',
        title: 'Regulatory Compliance',
        description:
          'Strict integration with Anti Money Laundering (AML) standards, Know Your Customer (KYC) frameworks, and clean origin block chain transaction tracing.',
      },
      {
        icon: 'FaChartLine',
        title: 'Measured Exposure',
        description:
          'Structured as an asymmetric, non correlated overlay (typically 1% to 5% of a total multi asset portfolio) to enhance risk adjusted returns.',
      },
      {
        icon: 'FaBalanceScale',
        title: 'Disciplined Rebalancing',
        description:
          'Periodic profit taking during market expansions and strategic deployment during cyclical consolidations.',
      },
      {
        icon: 'FaBitcoin',
        title: 'Direct Asset Focus',
        description:
          'Strict concentration on primary market cap networks (BTC/ETH) with proven liquidity, developer adoption, and structural permanence.',
      },
    ],
    ctaLabel: 'Schedule a Crypto Advisory Session',
  },
};
