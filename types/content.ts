// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ── Goal Picker ───────────────────────────────────────────────────────────────
export type GoalKey = 'vehicle' | 'home' | 'business' | 'wealth' | 'expenses' | 'future';

export interface GoalData {
  title: string;
  desc: string;
  recs: string[];
  iconName: string; // FA6 icon name string, e.g. 'FaCar'
}

export type GoalPickerData = Record<GoalKey, GoalData>;

// ── Stats ─────────────────────────────────────────────────────────────────────
export interface StatItem {
  /** Numeric target for count-up animation. Null for non-numeric stats like "24/7". */
  count: number | null;
  prefix: string;
  suffix: string;
  label: string;
  /** Display value used when count is null */
  staticValue?: string;
}

// ── Timeline ──────────────────────────────────────────────────────────────────
export interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

// ── Services / Solutions ──────────────────────────────────────────────────────
export interface ServiceCard {
  iconName: string;
  iconGradient: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  loanTab?: string;
}

// ── Why Choose ────────────────────────────────────────────────────────────────
export interface WhyItem {
  iconName: string;
  title: string;
  description: string;
}

// ── Investments ───────────────────────────────────────────────────────────────
export type InvestmentTerm = 'short' | 'long';

export interface InvestmentMeta {
  label: string;
  value: string;
}

export interface InvestmentCard {
  term: InvestmentTerm;
  badge: string;
  title: string;
  description: string;
  meta: InvestmentMeta[];
  riskNote: string;
  ctaLabel: string;
  href: string;
  gradientClass: string;
}

export type BadgeVariant = 'short' | 'medium' | 'long' | 'moderate' | 'higher';

export interface InvestmentTableRow {
  type: string;
  horizon: string;
  horizonBadge: BadgeVariant;
  minimum: string;
  returnStructure: string;
  liquidity: string;
  risk: string;
  riskBadge: BadgeVariant;
  suitableFor: string;
}

// ── Loans ─────────────────────────────────────────────────────────────────────
export type LoanTabKey = 'personal' | 'vehicle' | 'business';

export interface LoanMeta {
  label: string;
  value: string;
}

export interface LoanDocSection {
  title: string;
  items: string[];
}

export interface LoanTab {
  key: LoanTabKey;
  label: string;
  title: string;
  description: string;
  meta: LoanMeta[];
  docs: LoanDocSection[];
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
export type FAQCategory = 'loans' | 'investments' | 'general';

export interface FAQItem {
  category: FAQCategory;
  question: string;
  answer: string;
}

// ── Resources ─────────────────────────────────────────────────────────────────
export interface ResourceCard {
  iconName: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
}

// ── Footer ────────────────────────────────────────────────────────────────────
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
  iconName: string;
}

// ── Dashboard Demo ────────────────────────────────────────────────────────────
export interface DashCard {
  label: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
}

export interface ContactInfoItem {
  iconName: string;
  label: string;
  value: string;
}
