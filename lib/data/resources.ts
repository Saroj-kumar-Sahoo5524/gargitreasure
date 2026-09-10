import type { ResourceCard } from '@/types/content';

export const resourcesData: ResourceCard[] = [
  {
    iconName: 'FaWallet',
    category: 'Personal Finance',
    readTime: '6 min read',
    title: 'How to Plan Your Monthly Budget',
    description: 'A simple framework for allocating income across needs, goals, and savings.',
    slug: 'how-to-plan-your-monthly-budget',
    content: [
      {
        heading: 'Balancing Living Expenses, Savings, and Statutory Funds',
        body: 'Managing household income effectively is not about extreme austerity; it is about building a predictable cash flow rhythm. A dependable foundation begins with the classical 50/30/20 framework, customized for Indian household expenditure realities:',
        bullets: [
          '50% for Non-Discretionary Necessities: Essential living costs, groceries, utility bills, school fees, and mandatory health insurance premiums under Section 80D.',
          '30% for Lifestyle & Discretionary Outlays: Family leisure, dining, electronics, and personal lifestyle choices.',
          '20% for Capital Compounding & Reserves: Systematic investment plans (SIPs), recurring deposits, and sovereign instruments.',
        ],
      },
      {
        heading: 'Integrating Statutory Deductions',
        body: 'Before budgeting take-home pay, account for employer-deducted statutory instruments. Under the Employees\' Provident Funds and Miscellaneous Provisions Act, 1952, salaried employees contribute 12% of basic wages and dearness allowance toward their EPF. Because EPF forms an involuntary fixed-income safety net, you can balance the remaining 20% savings bucket with voluntary options like the Public Provident Fund (PPF) or market-linked equity instruments to outpace headline inflation.',
      },
      {
        heading: 'Tracking Expenses With Precision',
        body: 'A budget is only as good as the data feeding it. Use a dedicated notebook, spreadsheet, or app to log every transaction within 24 hours of making it. Categorise expenditure weekly and compare it against your allocated buckets. The act of recording alone reduces unnecessary spending by making costs visible and conscious rather than reflexive.',
      },
      {
        heading: 'Building a Zero-Based Budget',
        body: 'Zero-based budgeting assigns your entire income to specific categories so that income minus all allocations equals zero. This does not mean spending everything — the surplus is intentionally directed to savings or investments. This method forces you to justify every expense each month rather than carrying forward the same spending patterns from the previous period.',
      },
      {
        heading: 'Common Budgeting Mistakes to Avoid',
        body: 'The most frequent pitfall is ignoring irregular expenses: annual insurance premiums, vehicle servicing, festival gifts, and medical costs. Divide these by twelve and set aside that amount each month into a sinking fund. A second mistake is setting targets too restrictively, which triggers abandonment. Begin with modest adjustments and tighten the budget gradually as discipline builds.',
      },
    ],
  },
  {
    iconName: 'FaFileInvoiceDollar',
    category: 'Loans & Credit',
    readTime: '5 min read',
    title: 'Understanding Loan EMI',
    description: 'How EMIs are calculated and what affects your monthly repayment amount.',
    slug: 'understanding-loan-emi',
    content: [
      {
        heading: 'Understanding Your Loan EMI: Calculations, Amortization, and the RBI Fair Practices Code',
        body: 'An Equated Monthly Installment (EMI) represents a fixed repayment figure distributed across your agreed loan tenure. Every installment combines two components:',
        numbered: [
          'Interest Payment: Charged on the outstanding principal balance.',
          'Principal Amortization: The actual repayment portion that reduces your total debt balance.',
        ],
      },
      {
        heading: 'How Amortization Works Over Time',
        body: 'In the initial years of a retail loan (such as a 20-year housing facility), interest constitutes the vast majority of your monthly installment. Over time, as the principal balance shrinks, the interest portion declines, accelerating the reduction of the remaining debt.',
      },
      {
        heading: 'Retail vs. Commercial Credit Realities',
        table: {
          headers: ['Financial Element', 'Retail Credit (Home / Vehicle)', 'Commercial Finance (Business Debt)'],
          rows: [
            [
              'Underwriting Focus',
              'Personal regular income, CIBIL score, personal obligations',
              'Business Cash Flows, Debt Service Coverage Ratio (DSCR), business vintage',
            ],
            [
              'Repayment Structure',
              'Standard monthly amortizing EMI',
              'Structured terms, flexible EMIs, or overdraft lines',
            ],
            [
              'Prepayment Clauses',
              'Zero penalty on floating rate loans for individuals',
              'Foreclosure terms governed by the explicit corporate credit agreement',
            ],
          ],
        },
      },
      {
        heading: 'Your Rights Under the RBI Fair Practices Code',
        body: 'Under Reserve Bank of India directives on retail lending transparency, regulated entities must adhere to specific borrower protection mandates:',
        bullets: [
          'The Key Fact Statement (KFS): Lenders must provide a standardized KFS prior to agreement execution. This clearly details the Annual Percentage Rate (APR), processing charges, legal inspection fees, and total cost of borrowing.',
          'Zero Prepayment Penalties on Floating Rate Loans: In accordance with RBI circulars, individual retail borrowers taking floating rate term loans (like home loans) cannot be charged foreclosure or prepayment penalties, allowing you to pay off debt faster without extra fees.',
        ],
      },
    ],
  },
  {
    iconName: 'FaScaleBalanced',
    category: 'Investments',
    readTime: '7 min read',
    title: 'Short-Term vs Long-Term Investments',
    description: 'Comparing time horizons, liquidity, and risk to help match a plan to your goal.',
    slug: 'short-term-vs-long-term-investments',
    content: [
      {
        heading: 'Short-Term vs. Long-Term Capital Allocation: Balancing Liquidity and Tax Efficiency',
        body: 'Allocating capital requires matching financial goals with the right investment horizon.',
        bullets: [
          'Short-Term Horizons (Under 3 Years): Primary objectives are capital safety and liquidity. Ideal instruments include liquid mutual funds, bank fixed deposits, and sovereign Treasury Bills.',
          'Long-Term Horizons (5 to 10+ Years): Focused on beating inflation through compound real asset growth, such as listed equities, physical real estate, and strategic commodities.',
        ],
      },
      {
        heading: 'Tax Structure Under the Income Tax Act, 1961',
        body: 'Returns on capital investments are categorized into two primary statutory brackets:',
        bullets: [
          'Short-Term Capital Gains (STCG): Governed under section 111A for listed equities (taxed at 20%), while unlisted assets and fixed deposits are added directly to your standard taxable income slab.',
          'Long-Term Capital Gains (LTCG): Governed under section 112A for listed equity securities (taxed at 12.5% for gains exceeding the statutory exemption limit of ₹1.25 Lakhs per financial year), rewarding patient capital over short-term market speculation.',
        ],
      },
      {
        heading: 'Protecting Net Annual Returns',
        body: 'Understanding this tax framework prevents unexpected liabilities and protects net annual returns. Structuring redemptions across financial years, harvesting LTCG up to the exemption limit annually, and choosing growth over dividend options in mutual funds are all strategies that improve after-tax outcomes without altering your core investment thesis.',
      },
    ],
  },

  {
    iconName: 'FaChartLine',
    category: 'Wealth Planning',
    readTime: '4 min read',
    title: 'How Compounding Works',
    description: 'Why time in the market matters, illustrated with a simple example.',
    slug: 'how-compounding-works',
    content: [
      {
        heading: 'The Mathematics of Compounding: Why Time in the Market Outperforms Market Timing',
        body: 'Compounding occurs when investment returns generate their own earnings over consecutive holding cycles. The mathematical principle operates exponentially rather than linearly:',
        formula: {
          expression: 'A = P(1 + r/n)^(nt)',
          legend: 'Where principal (P) multiplies based on annual rate (r), compounding frequency (n), and total duration in years (t).',
        },
      },
      {
        heading: 'The Power of Holding Horizons',
        body: 'Consider an investor deploying ₹10,000 every month into an asset delivering an annualized return of 12%:',
        bullets: [
          'At Year 10: Total capital contributed is ₹12 Lakhs; the portfolio value reaches roughly ₹23.2 Lakhs.',
          'At Year 20: Total capital contributed is ₹24 Lakhs; the portfolio value reaches roughly ₹99.9 Lakhs.',
          'At Year 30: Total capital contributed is ₹36 Lakhs; the portfolio value scales to approximately ₹3.53 Crores.',
        ],
      },
      {
        heading: 'Time vs. Timing',
        body: 'Over three decades, personal contributions account for only ~10% of total wealth; compounding accounts for the other ~90%. Attempting to time market dips often leads to missed recovery phases, reducing compounding velocity. Consistent, disciplined deployment — regardless of short-term market noise — is the most reliable path to exponential wealth accumulation.',
      },
    ],
  },
  {
    iconName: 'FaPiggyBank',
    category: 'Financial Literacy',
    readTime: '5 min read',
    title: 'How to Build an Emergency Fund',
    description: 'A practical starting point for setting aside a financial safety net.',
    slug: 'how-to-build-an-emergency-fund',
    content: [
      {
        heading: 'Building a Resilient Emergency Fund: Structuring a 6-Month Liquidity Safety Net',
        body: 'An emergency reserve is capital set aside strictly for unforeseen life events: sudden medical expenses, unexpected vehicle repairs, or business disruptions.',
      },
      {
        heading: 'The Golden Rule: Six Months of Outflows',
        body: 'Calculate your non-negotiable monthly outflow — including rent, EMIs, grocery expenses, insurance premiums, and school fees — and maintain 3 to 6 months\' worth of this baseline in highly liquid reserves.',
      },
      {
        heading: 'Where to Park Emergency Reserves',
        body: 'Emergency funds should prioritize capital preservation and immediate access over high yields:',
        bullets: [
          'Auto Sweep Bank Deposits: Linked to your savings account, maintaining liquidity while earning standard term deposit interest.',
          'High-Quality Overnight or Liquid Funds: Regulated under SEBI mutual fund guidelines, offering T+1 business day redemption with low credit risk.',
          'Sovereign Capital Defense: Backed by the Reserve Bank of India\'s Deposit Insurance and Credit Guarantee Corporation (DICGC), which guarantees principal and interest deposits up to ₹5 Lakhs per individual bank entity.',
        ],
      },
    ],
  },
  {
    iconName: 'FaCircleQuestion',
    category: 'Borrower Rights & Due Diligence',
    readTime: '6 min read',
    title: 'Things to Consider Before Taking a Loan',
    description: 'Key questions to ask yourself before committing to any financing.',
    slug: 'things-to-consider-before-taking-a-loan',
    content: [
      {
        heading: 'What to Review Before Signing a Credit Agreement: A Borrower\'s Checklist',
        body: 'Signing a loan agreement creates a legally binding contract under the Indian Contract Act, 1872. Never execute credit documentation without checking these critical parameters:',
        bullets: [
          'Annual Percentage Rate (APR) vs. Nominal Rate: Confirm the total annual borrowing cost, including processing fees, administrative charges, and mandatory documentation expenses, rather than relying solely on the advertised interest rate.',
          'Reset Frequency on Floating Loans: Understand how the benchmark rate (such as the RBI External Benchmark Lending Rate / Repo Rate) updates your tenure or installment figure when interest rates adjust.',
          'CIBIL / Credit Information Reporting: Default terms dictate how repayment delays are reported to credit bureaus (such as TransUnion CIBIL or Experian) under the Credit Information Companies (Regulation) Act, 2005, directly impacting future borrowing capability.',
          'End Use Restrictions: Review specific loan covenants to confirm capital is utilized in strict accordance with the sanctions memorandum (especially across business term credit and secured property financing).',
        ],
      },
    ],
  },
  {
    iconName: 'FaMoneyBillTrendUp',
    category: 'Business Finance',
    readTime: '8 min read',
    title: 'Corporate Cash Flow',
    description: 'Optimize enterprise treasury. Learn to compress your Cash Conversion Cycle, monitor DSCR parameters, and deploy corporate liquidity safely.',
    slug: 'corporate-cash-flow',
    content: [
      {
        heading: 'Optimizing Corporate Cash Flow: Working Capital Cycles, DSCR, and Treasury Management',
        body: 'For corporate enterprises and growing businesses, cash flow is the primary metric of operational survival and scalability. Unlike personal budgeting, which focuses on fixed categorical allocations, corporate treasury management requires a precise balance between operational liquidity, active leverage, and capital deployment.',
      },
      {
        heading: '1. Deconstructing the Cash Conversion Cycle (CCC)',
        body: 'A business can be highly profitable on an accrual accounting basis while simultaneously facing a structural cash crunch. Managing cash flow requires continuous optimization of the Cash Conversion Cycle (CCC), which measures the time (in days) it takes for a company to convert its investments in inventory and other resources into cash flows from sales.',
        formula: {
          expression: 'CCC = DIO + DSO − DPO',
          legend: 'To optimize operational cash, corporate management must safely compress DIO and DSO while strategically lengthening DPO without compromising credit vendor relationships.',
        },
        bullets: [
          'Days Inventory Outstanding (DIO): The average time cash remains locked up in raw materials and finished goods inventory.',
          'Days Sales Outstanding (DSO): The average collection period required to turn credit invoices into liquid cash from receivables.',
          'Days Payable Outstanding (DPO): The timeline your business utilizes to settle invoices with credit suppliers.',
        ],
      },
      {
        heading: '2. Debt Service Capability and the Role of DSCR',
        body: 'When structured commercial credit — such as working capital facilities, equipment financing, or growth term loans — is integrated into a corporate balance sheet, financial institutions monitor the Debt Service Coverage Ratio (DSCR) closely. The DSCR acts as a core underwriting anchor to ensure your business generates sufficient operational earnings to sustain its fixed debt repayment liabilities.',
        formula: {
          expression: 'DSCR = Net Operating Income ÷ Total Debt Service',
          legend: 'Where Net Operating Income represents earnings before interest, taxes, depreciation, and amortization (EBITDA), and Total Debt Service includes all upcoming annual principal and interest obligations.',
        },
        bullets: [
          'DSCR < 1.0: The business faces a cash shortfall and cannot cover its current debt obligations out of operating cash flow alone.',
          'DSCR = 1.25 to 1.50: The standard benchmark range required by institutional lenders to maintain comfortable safety buffers.',
        ],
      },
      {
        heading: '3. Strategic Corporate Treasury Under Indian Regulations',
        body: 'Idle corporate reserves represent an opportunity cost. Businesses must deploy surplus liquidity across secure, yield-generating corporate treasury instruments while ensuring availability matches operational needs.',
        bullets: [
          'Statutory Liquid Surpluses: Funds required for statutory dues (Advance Tax, GST compliance, and monthly payroll obligations) should be retained in high-quality overnight funds or corporate bank accounts featuring structured auto sweep mechanisms.',
          'Operating Liquidity Allocations: Short-term corporate capital reserves can be allocated across highly liquid commercial papers (CPs), certificates of deposit (CDs), and sovereign Treasury Bills (91-day and 182-day tenures) to maximize post-tax yields while prioritizing capital preservation.',
        ],
      },
    ],
  },
];
