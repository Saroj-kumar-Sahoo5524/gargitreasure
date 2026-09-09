/**
 * Finance Detail Page Content
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all /finance/[category]/details pages.
 *
 * ✏️  To update content:
 *   • Edit the values in `financeDetails[slug]` below.
 *   • No UI component changes are required.
 *
 * Slug keys match the category slugs in lib/data/megamenu.ts (financeMegaMenu):
 *   banking | insurance | provident-fund | alternate-investment
 */

// ─── Re-use the same types from investmentDetails ─────────────────────────────
export type {
  InvestmentOpportunity as FinanceOpportunity,
  InvestmentSection    as FinanceSection,
  InvestmentAdvantage  as FinanceAdvantage,
} from './investmentDetails';

import type {
  InvestmentOpportunity,
  InvestmentSection,
  InvestmentAdvantage,
} from './investmentDetails';

export interface FinanceDetailData {
  /** ALL-CAPS eyebrow label */
  eyebrow: string;
  headline: string;
  subheadline: string;
  /** Eligibility block — shown as a separate highlighted panel after the sections */
  eligibilitySections?: EligibilitySection[];
  sections: InvestmentSection[];
  advantages: InvestmentAdvantage[];
  ctaLabel: string;
}

export interface EligibilityItem {
  label: string;
  value?: string;
}

export interface EligibilitySection {
  /** e.g. "Eligibility Criteria — Mutual Funds" */
  title: string;
  items: EligibilityItem[];
  minimumNote?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const financeDetails: Record<string, FinanceDetailData> = {

  // ── BANKING ─────────────────────────────────────────────────────────────────
  // ✅ Real content supplied by client
  banking: {
    eyebrow: 'BANKING SOLUTIONS',
    headline: 'Comprehensive Banking & Credit Solutions Built Around You',
    subheadline:
      'More than standard deposits. We pair personalised loan structures and high-growth mutual fund portfolios with community microfinance — delivering dependable capital whenever life or business demands it.',
    sections: [
      {
        title: 'Mutual Funds',
        subtitle: 'Disciplined Wealth Compounding Through Professionally Managed Portfolios',
        description:
          'Mutual funds offer an accessible route to participate in capital markets without the guesswork of stock picking. Whether you are building an emergency reserve, funding a child\'s education, or compounding long-term wealth, our desk aligns your capital with regulated, diversified asset portfolios.',
        opportunities: [
          {
            icon: 'FaArrowsRotate',
            title: 'Systematic Investment Plans (SIPs)',
            description:
              'Automated monthly investing that leverages rupee cost averaging across market cycles.',
          },
          {
            icon: 'FaChartPie',
            title: 'Diversified Equity Baskets',
            description:
              'Exposure to large-cap, mid-cap, and multi-cap enterprises to capture broad economic expansion.',
          },
          {
            icon: 'FaShieldHalved',
            title: 'Liquid & Short-Term Debt Funds',
            description:
              'Low-volatility capital preservation instruments offering fast redemption access.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Balanced Advantage & Hybrid Funds',
            description:
              'Dynamically managed equity-debt blends designed to mitigate market downturns.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Loans & Credit Facilities',
        subtitle: 'Transparent, Structured Capital Built Around Your Real Cash Flow',
        description:
          'Accessing credit should be predictable, fast, and completely free of hidden charges. We structure retail and enterprise borrowing solutions tailored to your income profile, ensuring clear repayment tenures and competitive processing margins.',
        opportunities: [
          {
            icon: 'FaUser',
            title: 'Personal Loans',
            description:
              'Unsecured, fast-disbursing funds for home improvements, family milestones, or medical emergencies.',
          },
          {
            icon: 'FaCar',
            title: 'Vehicle Loans',
            description:
              'Flexible financing covering private cars, two-wheelers, and commercial logistics transport with direct dealership settlement.',
          },
          {
            icon: 'FaHouseChimney',
            title: 'Home Loans & Plot-Plus-Build',
            description:
              'Long-term residential loans featuring clear title legal verification and custom amortisation schedules.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Business & Working Capital Loans',
            description:
              'Structured credit lines, machinery loans, and invoice financing to support business expansion.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Micro Finance',
        subtitle: 'Accessible Working Capital for Local Merchants and Grassroots Enterprises',
        description:
          'Microfinance fuels grassroots enterprise and self-reliance. We provide collateral-free, small-ticket loans to local shopkeepers, women entrepreneurs, artisans, and small trade units — offering fair terms to help informal businesses transition into the formal financial fold.',
        opportunities: [
          {
            icon: 'FaStore',
            title: 'Micro Enterprise Working Loans',
            description:
              'Immediate working capital to replenish seasonal shop inventory, raw materials, or tools.',
          },
          {
            icon: 'FaUsers',
            title: 'Joint Liability & Group Loans (JLG/SHG)',
            description:
              'Community-backed peer credit structures built on mutual accountability, removing traditional collateral barriers.',
          },
          {
            icon: 'FaSeedling',
            title: 'Livestock & Agri-Allied Credit',
            description:
              'Dedicated micro facilities for dairy farming, poultry setups, and local agro-processing activities.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Doorstep Verification & Support',
            description:
              'On-the-ground relationship managers who assist with paperwork and transparent weekly or monthly collection cycles.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    eligibilitySections: [
      {
        title: 'Mutual Fund Eligibility',
        items: [
          { label: 'Age', value: '18 years and above (investments on behalf of minors permitted with a legal guardian).' },
          { label: 'KYC Compliance', value: 'Valid PAN card and Aadhaar (or approved officially valid document).' },
          { label: 'Banking Linkage', value: 'Active savings or current bank account with net banking or auto debit (NACH) facility.' },
          { label: 'Investor Status', value: 'Resident individuals, HUFs, registered trusts, and NRIs (via NRE/NRO accounts).' },
        ],
        minimumNote: 'Minimum Investment: Flexible entry starting from ₹500/month for SIPs or ₹1,000 for one-time lump sum deposits.',
      },
      {
        title: 'Loan Eligibility',
        items: [
          { label: 'Age Profile', value: '21 to 60 years (salaried); up to 65 years (self-employed/business owners).' },
          { label: 'Salaried', value: 'Minimum 1 year total employment, at least 6 months at current employer.' },
          { label: 'Self-Employed', value: 'Minimum 2 years of active business continuity with verified tax filings.' },
          { label: 'Income Threshold', value: 'Minimum net monthly income of ₹20,000 (varies by city tier and loan type).' },
          { label: 'Credit Profile', value: 'Preferred credit bureau score of 700+ for rapid approval and optimal interest rates.' },
          { label: 'Documentation', value: 'Identity/address proof, last 3–6 months bank statements, and recent salary slips or ITRs.' },
        ],
      },
      {
        title: 'Micro Finance Eligibility',
        items: [
          { label: 'Age Profile', value: '18 to 59 years.' },
          { label: 'Target Profile', value: 'Women entrepreneurs, local retail vendors, cottage industry operators, and small agricultural producers.' },
          { label: 'Household Income', value: 'Annual household income within statutory microfinance benchmarks (typically up to ₹3,00,000 annually).' },
          { label: 'Collateral', value: 'Zero physical collateral required.' },
          { label: 'Documentation', value: 'Simplified KYC — Aadhaar card, voter ID, active local address verification, and an operational bank account.' },
          { label: 'Credit Discipline', value: 'Valid credit bureau record with no active write-offs or delinquent balances.' },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaLandmark',
        title: 'Regulated & Compliant',
        description:
          'All products operate within SEBI, RBI, and NABARD regulatory frameworks ensuring full investor protection.',
      },
      {
        icon: 'FaHandshake',
        title: 'Personalised Advisory',
        description:
          'Dedicated relationship managers assess your income profile and financial goals before any recommendation.',
      },
      {
        icon: 'FaRoute',
        title: 'End-to-End Support',
        description:
          'From application and documentation to disbursement and ongoing review — we manage the entire process.',
      },
    ],
    ctaLabel: 'Schedule a Banking Consultation',
  },

  // ── INSURANCE ───────────────────────────────────────────────────────────────────────────
  // ✅ Real content supplied by client
  insurance: {
    eyebrow: 'INSURANCE SOLUTIONS',
    headline: 'Comprehensive Protection — Life, Health, Assets & Modern Risks',
    subheadline:
      "True financial security isn't just about growing your wealth — it's about defending it. Unexpected medical emergencies, accidents, or property losses can quickly deplete years of hard-earned savings. We help you identify real risks and build the right protective safety net.",
    sections: [
      {
        title: 'Life & Keyman Insurance',
        subtitle: 'Securing the People and Partnerships Who Rely on You',
        description:
          "A life insurance policy is a sacred promise. Unlike bank representatives who push complicated endowment products with low cover and high fees, we focus on maximising your real financial safety net — calculated against your actual Human Life Value (HLV).",
        opportunities: [
          {
            icon: 'FaShieldHalved',
            title: 'Pure Term Life Plans',
            description:
              'High-value income replacement at modest premiums — ensuring your family stays debt-free and financially independent.',
          },
          {
            icon: 'FaBuilding',
            title: 'Keyman Insurance Cover',
            description:
              'Vital corporate life policies taken out on essential business leaders to insulate company balance sheets from sudden operational shocks.',
          },
          {
            icon: 'FaStar',
            title: 'Child Education & Milestone Cover',
            description:
              'Dedicated funds structured to finance higher education and career starts, even in your absence.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Retirement & Whole Life Annuities',
            description:
              'Predictable, lifelong pension flows to preserve your dignity and independence after retirement.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Health Insurance',
        subtitle: 'Medical Protection Without the Cash Traps',
        description:
          'A medical crisis should be about recovery, not your bank balance. We help you navigate complex waiting periods, room rent caps, and exclusions so you never face a rejected claim at the hospital billing desk. Our desk works directly with TPAs to accelerate cashless approvals.',
        opportunities: [
          {
            icon: 'FaHospital',
            title: 'Comprehensive Family Floaters',
            description:
              'Single policy cashless hospitalisation covering parents, spouse, and children across premier hospital networks.',
          },
          {
            icon: 'FaUserShield',
            title: 'Senior Citizen & Pre-Existing Illness Plans',
            description:
              'Compassionate, dedicated healthcare cover designed for ageing parents with shorter waiting windows.',
          },
          {
            icon: 'FaHeart',
            title: 'Critical Illness & Cancer Shields',
            description:
              'Upfront lump-sum payouts upon diagnosis to cover specialised treatment and income loss during recovery.',
          },
          {
            icon: 'FaCircleCheck',
            title: '24/7 Claim Assistance Advantage',
            description:
              'Our desk works directly with Third Party Administrators (TPAs) to accelerate cashless approvals — while banks leave you on automated phone trees.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Property, Fire & Marine Insurance',
        subtitle: 'Total Protection for Physical & Transit Assets',
        description:
          'You spent years building your home, acquiring your vehicles, and growing your business. Our general insurance policies protect your physical capital from accidents, weather hazards, and transit perils — with independent, transparent damage assessment on every claim.',
        opportunities: [
          {
            icon: 'FaCar',
            title: 'Motor & Fleet Cover',
            description:
              'Cashless accident repairs, instant digital renewals, and zero-depreciation coverage for personal vehicles and commercial fleets.',
          },
          {
            icon: 'FaHouseChimney',
            title: 'Home & Structural Protection',
            description:
              'Safeguards against fire, flooding, earthquakes, and burglary for physical properties and household contents.',
          },
          {
            icon: 'FaWarehouse',
            title: 'Commercial Property & Warehousing',
            description:
              'Comprehensive industrial risk cover protecting manufacturing facilities, machinery, and inventory warehouses from fire and special perils.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Marine & Transit Insurance',
            description:
              'Complete loss, damage, and liability protection for cargo moving globally by road, rail, air, or sea.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'Miscellaneous Insurance',
        subtitle: 'Specialised Coverage for Modern, Real-World Risks',
        description:
          'Modern risks rarely fit into standard bank boxes. We structure bespoke coverage for specialised trade activities, legal liabilities, global mobility, and digital vulnerabilities — customised risk engineering built around your unique operational and lifestyle needs.',
        opportunities: [
          {
            icon: 'FaShieldHalved',
            title: 'Cyber Fraud & Identity Protection',
            description:
              'Financial safety nets guarding individuals and firms against online banking scams, data leaks, and digital extortion.',
          },
          {
            icon: 'FaUsers',
            title: "Workmen's Compensation",
            description:
              'Critical statutory protection covering medical costs and legal compensation for on-duty employee injuries or accidents.',
          },
          {
            icon: 'FaScaleBalanced',
            title: 'Public & Professional Liability',
            description:
              'Robust legal defence and compensation structures shielding your business from third-party injury or operational negligence claims.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'International Travel & Student Cover',
            description:
              'Global medical emergency protection, trip cancellation compensation, and lost luggage support for travellers and students abroad.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaScaleBalanced',
        title: 'Human Life Value Assessment',
        description:
          "We calculate your actual HLV instead of selling off-the-shelf packages — ensuring your cover truly matches your family's future expenses.",
      },
      {
        icon: 'FaCertificate',
        title: 'Multi-Insurer Comparison',
        description:
          'We compare policies across all leading insurers to find the best combination of cover, premium, and claim settlement track record.',
      },
      {
        icon: 'FaHandshake',
        title: 'TPA & Claim Advocacy',
        description:
          'Our team works directly with Third Party Administrators and surveyors to ensure full, honest, and fast claim compensation.',
      },
    ],
    ctaLabel: 'Get Your Insurance Advisory',
  },

  // ── PROVIDENT FUND ──────────────────────────────────────────────────────────
  // ✅ Real content supplied by client
  'provident-fund': {
    eyebrow: 'PROVIDENT FUND PLANNING',
    headline: 'EPF, PPF & NPS — Engineered for Maximum Retirement Wealth',
    subheadline:
      'Turn statutory deductions into an optimised wealth engine. We go beyond account opening — actively managing VPF contributions, consolidating UANs, structuring PPF extension windows, and maximising exclusive NPS tax deductions banks never explain.',
    sections: [
      {
        title: 'EPF Advisory',
        subtitle: 'Turn Statutory Salary Deductions into an Optimized Wealth Engine',
        description:
          'Most salaried professionals treat the EPF as an automatic payroll deduction they rarely check. Banks provide zero help with employer compliance or portal glitches. We turn your EPF into an active wealth asset — optimizing voluntary contributions (VPF) for higher guaranteed returns, resolving employer transfer bottlenecks, and helping you avoid common tax trap thresholds on interest.',
        opportunities: [
          {
            icon: 'FaArrowTrendUp',
            title: 'Voluntary PF (VPF) Maximisation',
            description:
              'Scale your contributions beyond the mandatory 12% to lock in attractive, government-backed interest yields.',
          },
          {
            icon: 'FaArrowsRotate',
            title: 'UAN Consolidation',
            description:
              'End-to-end support merging fragmented member IDs across job switches into one clean Universal Account Number.',
          },
          {
            icon: 'FaScaleBalanced',
            title: 'Tax Trap Navigation',
            description:
              'Clear strategies to keep annual employee contributions optimised within statutory tax-free interest ceilings.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Claim Settlement & Withdrawal Desk',
            description:
              'Direct assistance handling Form 19, 10C, and 31 filings for medical, housing, or retirement withdrawals — without endless portal rejections.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'PPF Planning',
        subtitle: '15-Year Sovereign Security with Complete EEE Tax Freedom',
        description:
          'Banks open your PPF account and forget you, leaving you to manage deposit deadlines and extension windows alone. We treat your PPF as the risk-free anchor of your net worth — ensuring timely annual deposits, optimising compounding schedules before the 5th of every month, and structuring 5-year block extensions so your money compounds uninterrupted.',
        opportunities: [
          {
            icon: 'FaLandmark',
            title: '100% Sovereign Safety',
            description:
              'Direct government-backed capital guarantee with zero equity market volatility or credit default risk.',
          },
          {
            icon: 'FaFileShield',
            title: 'True EEE Tax Advantage',
            description:
              'Tax deduction at investment (Section 80C), tax-exempt yearly interest accumulation, and 100% tax-free maturity payouts.',
          },
          {
            icon: 'FaCalendarCheck',
            title: 'Deposit Timing Strategy',
            description:
              'Automated planning to deposit funds before the 5th of each month, capturing a full month\'s extra interest compounding.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Maturity & Extension Management',
            description:
              'Timely advisory on 5-year extension blocks (with or without fresh contributions) to keep funds earning tax-free returns indefinitely.',
            isOpportunityCallout: true,
          },
        ],
      },
      {
        title: 'NPS Allocation',
        subtitle: 'Low-Cost, Market-Linked Compounding with Exclusive Tax Deductions',
        description:
          'Banks frequently push expensive commercial pension policies with high distributor commissions. We guide you through the National Pension System — the lowest-cost retirement product in India — customizing your exposure across equities, corporate debt, and government bonds to beat inflation while maximising exclusive tax exemptions.',
        opportunities: [
          {
            icon: 'FaMoneyBillTrendUp',
            title: 'Exclusive ₹50,000 Tax Deduction',
            description:
              'Claim an additional deduction under Section 80CCD(1B) over and above the standard ₹1.5 lakh 80C limit.',
          },
          {
            icon: 'FaChartPie',
            title: 'Active vs. Auto Choice Structuring',
            description:
              'Custom asset allocation balancing equity (up to 75% under Active Choice) for wealth compounding with high-grade debt for capital preservation.',
          },
          {
            icon: 'FaCoins',
            title: 'Ultra-Low Fund Management Cost',
            description:
              'Institutional fund management fees capped under 0.09% — leaving significantly more capital invested for your retirement.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Tier I & Tier II Architecture',
            description:
              'Combine a locked retirement account (Tier I) with a flexible, no lock-in investment account (Tier II) that acts as a low-cost mutual fund alternative.',
            isOpportunityCallout: true,
          },
        ],
      },
    ],
    eligibilitySections: [
      {
        title: 'EPF Eligibility',
        items: [
          { label: 'Target Profile', value: 'Salaried employees working in establishments registered with EPFO (minimum 20 employees).' },
          { label: 'Wage Baseline', value: 'Mandatory for basic pay up to ₹15,000/month; voluntary and widely standard for higher salary brackets.' },
          { label: 'Contribution Benchmark', value: '12% of Basic + Dearness Allowance (matched by employer); VPF allows up to 100% of basic pay.' },
          { label: 'Documentation', value: 'Linked UAN, Aadhaar, PAN card, and verified active bank account details.' },
          { label: 'Regulatory Governance', value: 'Employees\' Provident Funds and Miscellaneous Provisions Act, 1952 (Administered by EPFO).' },
        ],
      },
      {
        title: 'PPF Eligibility',
        items: [
          { label: 'Target Profile', value: 'Any Indian resident individual (salaried, self-employed, freelancer, or professional); accounts can be opened for minor children by legal guardians.' },
          { label: 'Non-Eligibility', value: 'Non-Resident Indians (NRIs) and HUFs cannot open new PPF accounts.' },
          { label: 'Deposit Limits', value: 'Minimum ₹500 per financial year; maximum ₹1,50,000 per financial year.' },
          { label: 'Tenure', value: 'Mandatory 15-year initial tenure, extendable indefinitely in 5-year blocks.' },
          { label: 'Documentation', value: 'Standard KYC — Aadhaar, PAN card, passport size photographs, and savings bank linkage.' },
          { label: 'Regulatory Governance', value: 'Public Provident Fund Scheme, 2019 (Ministry of Finance / Government Savings Promotion Act, 1873).' },
        ],
      },
      {
        title: 'NPS Eligibility',
        items: [
          { label: 'Age Profile', value: 'Any Indian citizen (resident or non-resident) aged 18 to 70 years at the time of joining.' },
          { label: 'Account Models', value: 'Individual subscribers (All Citizens Model), corporate employees, or government sector entrants.' },
          { label: 'Tier I Minimum', value: 'Opening deposit ₹500; minimum annual contribution ₹1,000.' },
          { label: 'Tier II Minimum', value: 'Opening deposit ₹1,000 (requires an active Tier I account).' },
          { label: 'Documentation', value: 'PRAN registration requiring PAN, Aadhaar, bank proof, and nominee details.' },
          { label: 'Regulatory Governance', value: 'Pension Fund Regulatory and Development Authority (PFRDA) Act, 2013.' },
        ],
      },
    ],
    advantages: [
      {
        icon: 'FaLock',
        title: 'Sovereign Guarantee',
        description:
          'EPF and PPF instruments carry direct government backing — providing capital safety no private product can match.',
      },
      {
        icon: 'FaChartLine',
        title: 'Maximum Tax Capture',
        description:
          'Integrated 80C, 80CCD(1B), and EEE planning across EPF, PPF, and NPS to capture every available deduction simultaneously.',
      },
      {
        icon: 'FaGavel',
        title: 'Active Portfolio Management',
        description:
          'We don\'t just open accounts — we monitor contribution timings, extension windows, and allocation shifts to keep your corpus growing optimally.',
      },
    ],
    ctaLabel: 'Optimise My Retirement Plan',
  },

  // ── ALTERNATE INVESTMENT ─────────────────────────────────────────────────────
  // ✅ Real content supplied by client
  'alternate-investment': {
    eyebrow: 'ALTERNATE INVESTMENTS',
    headline: 'Museum-Grade Art, Blue-Chip Watches & Sovereign Antiques',
    subheadline:
      'True portfolio diversification goes beyond standard stocks and fixed deposits. Fine art, luxury timepieces, and historical collectibles hold intrinsic value, deliver uncorrelated returns, and hedge against inflation. We take the speculation out of luxury assets through verified provenance, institutional authentication, and structured resale exits.',
    sections: [
      {
        title: 'Paintings & Fine Art',
        subtitle: 'Museum-Grade Art with Proven Provenance',
        description:
          'Fine art offers steady capital appreciation that doesn\'t follow daily stock market crashes. We eliminate counterfeit risks through rigorous provenance checks, institutional gallery sourcing, and structured private sales — targeting high-conviction works by Modern Indian Masters and established contemporary artists.',
        opportunities: [
          {
            icon: 'FaPalette',
            title: 'Target Sourcing',
            description:
              'High-conviction works by Modern Indian Masters and established contemporary artists with institutional collector demand.',
          },
          {
            icon: 'FaMagnifyingGlass',
            title: 'Forensic Authentication',
            description:
              'Complete chain of custody verification, catalogue raisonné validation, and detailed condition reports before any acquisition.',
          },
          {
            icon: 'FaWarehouse',
            title: 'Storage & Insurance',
            description:
              'Climate-controlled private storage guidance and specialised transit insurance to preserve physical condition and insured value.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Private Exits',
            description:
              'Discreet liquidation through established collector networks and premier domestic and international auction houses.',
            isOpportunityCallout: true,
          },
        ],
        investorSnapshot: {
          entrySize: '₹5 Lakhs to ₹10+ Lakhs per work',
          holdingHorizon: '5 to 10 years',
          legalShield: 'Sale of Goods Act, 1930 (clear title guarantee) & Income Tax Act, 1961 (capital asset gains)',
        },
      },
      {
        title: 'Luxury Watches',
        subtitle: 'Portable, Globally Liquid Engineering',
        description:
          'Blue-chip mechanical timepieces consistently retain value and hedge against inflation. We source scarce, high-demand references with complete documentation to ensure immediate liquidity and portfolio upside — focusing on brands with deep, proven secondary market depth.',
        opportunities: [
          {
            icon: 'FaStar',
            title: 'Blue Chip Focus',
            description:
              'High-demand references from Rolex, Patek Philippe, and Audemars Piguet — brands with documented secondary market liquidity and global collector demand.',
          },
          {
            icon: 'FaCertificate',
            title: 'Full Set Verification',
            description:
              'Original box, matching serial papers, chronometer cards, and full service logs verified before acquisition.',
          },
          {
            icon: 'FaArrowTrendUp',
            title: 'Market Analytics',
            description:
              'Secondary market price tracking to optimise buy windows and identify profitable exit timing based on auction trend data.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Asset Vaulting',
            description:
              'Secure personal vaulting, winder advisory, and high-value personal asset insurance to preserve condition and insured value.',
            isOpportunityCallout: true,
          },
        ],
        investorSnapshot: {
          entrySize: '₹3 Lakhs to ₹15+ Lakhs depending on reference',
          holdingHorizon: '3 to 7 years',
          legalShield: 'Sale of Goods Act, 1930 & verified customs/GST compliance for clean ownership',
        },
      },
      {
        title: 'Antiques & Collectibles',
        subtitle: 'Tangible Heritage with Sovereign Protection',
        description:
          'Historical artefacts, colonial furniture, and certified numismatics represent permanent, inflation-proof stores of value. We handle all legal authentications and registrations — ensuring your investment is 100% ASI-compliant, scientifically verified, and dispute-free for generational wealth transfer.',
        opportunities: [
          {
            icon: 'FaGem',
            title: 'Curated Selection',
            description:
              'Certified 100+ year old historical artefacts, ancient bronzes, and colonial heirlooms with full heritage documentation.',
          },
          {
            icon: 'FaFileLines',
            title: 'Statutory ASI Registration',
            description:
              'End-to-end documentation with the Archaeological Survey of India (ASI) to ensure full legal compliance and title protection.',
          },
          {
            icon: 'FaFlask',
            title: 'Scientific Testing',
            description:
              'Radiocarbon dating and metallurgical test reports confirming historical era and material authenticity.',
          },
          {
            icon: 'FaCircleCheck',
            title: 'Estate Liquidation',
            description:
              'Private catalogue valuation and compliant estate asset transfers for seamless generational succession.',
            isOpportunityCallout: true,
          },
        ],
        investorSnapshot: {
          entrySize: '₹2 Lakhs to ₹10+ Lakhs (rare statutory treasures)',
          holdingHorizon: '7 to 15+ years (generational wealth)',
          legalShield: 'The Antiquities and Art Treasures Act, 1972 (mandatory domestic legal registration)',
        },
      },
    ],
    advantages: [
      {
        icon: 'FaChartLine',
        title: 'Non-Correlated Returns',
        description:
          'Fine art, watches, and collectibles appreciate independently of equity or bond market cycles — true diversification.',
      },
      {
        icon: 'FaCertificate',
        title: 'Forensic Authentication',
        description:
          'Every asset is independently authenticated — provenance, chain of custody, scientific testing — before any purchase commitment.',
      },
      {
        icon: 'FaArrowRightArrowLeft',
        title: 'Structured Exit Facilitation',
        description:
          'Dedicated resale support through auction partnerships, private collector networks, and international buyer access for smooth liquidation.',
      },
    ],
    ctaLabel: 'Discover Alternate Asset Opportunities',
  },
};

