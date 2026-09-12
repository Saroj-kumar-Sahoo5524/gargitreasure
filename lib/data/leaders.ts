export interface Leader {
  name: string;
  title: string;
  role: string;
  bio: string;
  linkedin: string | null;
  initials: string;
  gradient: string;
  badge?: string;
  photo?: string; // path relative to /public
}

export const leadersData: Leader[] = [
  {
    name: 'Ar. Chiranjibee Behera',
    title: 'Founder & Chairman',
    role: 'Strategic Growth & Corporate Direction',
    bio: 'Ar. Chiranjibee Behera is the visionary founder driving the strategic growth and corporate direction of Gargi Treasure. Blending structural design expertise with commercial foresight, he guides high-level trading operations and financial initiatives across the organisation.',
    linkedin: 'https://www.linkedin.com/in/chiranjiv-behera-a14a91307/',
    initials: 'CB',
    gradient: 'from-[#2451D6] to-[#1B3DA6]',
    badge: 'Founder',
    photo: '/assets/founder&chairman.png',
  },
  {
    name: 'Er. Nirmalya Behera',
    title: 'Co-Founder',
    role: 'Executive Leadership & Corporate Governance',
    bio: 'Er. Nirmalya Behera partners in executive leadership to shape the technical foundation and corporate governance of Gargi Treasure. Her engineering background enables her to drive strategic market expansion, build trusted client relationships, and oversee operational compliance.',
    linkedin: null,
    initials: 'NB',
    gradient: 'from-[#2451D6] to-[#1B3DA6]',
    badge: 'Co-Founder',
    photo: '/assets/co-founder.png',
  },
  {
    name: 'Mr. Charak Ray',
    title: 'Chief Financial Officer',
    role: 'Financial Governance & Capital Strategy',
    bio: 'Mr. Charak Ray anchors corporate financial governance, capital allocation, and long-term economic strategy at Gargi Treasure. He leverages his extensive background in market research and corporate finance advisory to ensure robust fiscal discipline and sustainable asset growth.',
    linkedin: 'https://www.linkedin.com/in/charak-ray-3b910b71/',
    initials: 'CR',
    gradient: 'from-[#2451D6] to-[#1B3DA6]',
    badge: 'CFO',
    photo: '/assets/cfo.png',
  },
  {
    name: 'Mr. Asutosh Rout',
    title: 'Head of Operations',
    role: 'Supply Chain & Trade Execution',
    bio: 'Mr. Asutosh Rout steers the daily operational mechanics, supply chain workflows, and trade executions at Gargi Treasure. His focus on process optimization and cross-functional team alignment guarantees seamless project cycles and outstanding service delivery.',
    linkedin: null,
    initials: 'AR',
    gradient: 'from-[#2451D6] to-[#1B3DA6]',
    photo: '/assets/headofoperations.png',
  },
  {
    name: 'Mr. Bikram Aditya Ray',
    title: 'Chief Finance Consultant',
    role: 'Portfolio Management & Regulatory Alignment',
    bio: 'Mr. Bikram Aditya Ray brings nearly a decade of institutional financial expertise spanning banking, corporate investments, and strategic portfolio management. He specializes in market compliance, regulatory alignment, and risk-managed financial governance.',
    linkedin: 'https://www.linkedin.com/in/bikram-aditya-ray-34019b418/',
    initials: 'BR',
    gradient: 'from-[#2451D6] to-[#1B3DA6]',
    photo: '/assets/cfc.png',
  },
  {
    name: 'Er. Kirtan Chandra Patra',
    title: 'Finance Consultant',
    role: 'Regulatory Adherence & Fiscal Strategy',
    bio: 'Er. Kirtan Chandra Patra brings invaluable administrative expertise from his distinguished tenure as a Retired Sub-Divisional Officer (SDO). His rare combination of engineering discipline and public sector financial oversight ensures meticulous regulatory adherence and robust fiscal strategies.',
    linkedin: null,
    initials: 'KP',
    gradient: 'from-[#2451D6] to-[#1B3DA6]',
    photo: '/assets/financeconsultant.png',
  },
];
