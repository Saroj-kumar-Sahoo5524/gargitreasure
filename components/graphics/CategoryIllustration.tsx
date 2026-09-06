/**
 * Thematic SVG illustrations for each investment and finance category page.
 * Each returns a self-contained SVG sized to fill its container.
 */

interface IllustrationProps {
  className?: string;
}

export function EnergyIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sky background */}
      <rect width="480" height="320" fill="#EFF6FF" rx="12"/>
      <rect width="480" height="160" fill="url(#sky)" rx="12"/>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#BFDBFE"/>
          <stop offset="1" stopColor="#EFF6FF"/>
        </linearGradient>
        <linearGradient id="sun-g" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FDE68A"/>
          <stop offset="1" stopColor="#F59E0B"/>
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1D4ED8"/>
          <stop offset="1" stopColor="#1E40AF"/>
        </linearGradient>
      </defs>

      {/* Sun */}
      <circle cx="390" cy="70" r="52" fill="url(#sun-g)" opacity="0.9"/>
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <line key={i}
          x1={390 + 58 * Math.cos(deg * Math.PI/180)}
          y1={70 + 58 * Math.sin(deg * Math.PI/180)}
          x2={390 + 72 * Math.cos(deg * Math.PI/180)}
          y2={70 + 72 * Math.sin(deg * Math.PI/180)}
          stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round"/>
      ))}

      {/* Wind turbine */}
      <line x1="130" y1="280" x2="130" y2="100" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round"/>
      <ellipse cx="130" cy="100" rx="6" ry="6" fill="#CBD5E1"/>
      {/* Blades */}
      <path d="M130 100 L118 60 Q116 52 124 56 L130 100Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
      <path d="M130 100 L162 118 Q170 122 165 130 L130 100Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
      <path d="M130 100 L98 118 Q90 122 93 130 L130 100Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>

      {/* Ground */}
      <rect x="0" y="270" width="480" height="50" fill="#D1FAE5" rx="0"/>
      <rect x="0" y="285" width="480" height="35" fill="#A7F3D0"/>

      {/* Solar panels (3) */}
      {[0, 1, 2].map(i => (
        <g key={i} transform={`translate(${210 + i * 80}, 240)`}>
          <rect x="0" y="-60" width="60" height="40" rx="3" fill="url(#panel)" transform="skewX(-10)"/>
          <line x1="10" y1="-60" x2="10" y2="-20" stroke="#3B82F6" strokeWidth="1" opacity="0.5" transform="skewX(-10)"/>
          <line x1="20" y1="-60" x2="20" y2="-20" stroke="#3B82F6" strokeWidth="1" opacity="0.5" transform="skewX(-10)"/>
          <line x1="30" y1="-60" x2="30" y2="-20" stroke="#3B82F6" strokeWidth="1" opacity="0.5" transform="skewX(-10)"/>
          <line x1="40" y1="-60" x2="40" y2="-20" stroke="#3B82F6" strokeWidth="1" opacity="0.5" transform="skewX(-10)"/>
          <line x1="0" y1="-40" x2="60" y2="-40" stroke="#3B82F6" strokeWidth="1" opacity="0.5" transform="skewX(-10)"/>
          {/* Support pole */}
          <line x1="30" y1="-20" x2="30" y2="0" stroke="#94A3B8" strokeWidth="3" transform="skewX(-10)"/>
        </g>
      ))}

      {/* Power lines */}
      <path d="M130 140 Q200 130 240 200" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 4" opacity="0.6"/>
      <path d="M390 130 Q360 160 340 200" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 4" opacity="0.6"/>

      {/* Lightning bolt */}
      <path d="M40 100 L60 60 L52 100 L72 60" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="56" cy="80" r="28" fill="#FEF3C7" opacity="0.3"/>
    </svg>
  );
}

export function RealEstateIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="480" height="320" fill="#F0FDF4" rx="12"/>
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#BAE6FD"/>
          <stop offset="1" stopColor="#E0F2FE"/>
        </linearGradient>
      </defs>
      <rect width="480" height="200" fill="url(#sky2)" rx="12"/>
      <rect x="0" y="270" width="480" height="50" fill="#D1FAE5"/>

      {/* Cloud */}
      <ellipse cx="80" cy="55" rx="40" ry="22" fill="white" opacity="0.9"/>
      <ellipse cx="110" cy="48" rx="30" ry="18" fill="white" opacity="0.9"/>
      <ellipse cx="55" cy="62" rx="28" ry="16" fill="white" opacity="0.9"/>

      {/* Building 1 (tall center) */}
      <rect x="180" y="90" width="120" height="190" fill="#1E40AF"/>
      <rect x="180" y="90" width="120" height="8" fill="#2563EB"/>
      {/* Windows */}
      {[0,1,2,3,4,5,6,7].map(row => [0,1,2].map(col => (
        <rect key={`${row}-${col}`} x={190 + col * 38} y={108 + row * 22} width="22" height="14" rx="2"
          fill={row === 7 ? '#FEF3C7' : '#BFDBFE'} opacity={row === 7 ? 1 : 0.8}/>
      )))}

      {/* Building 2 (left) */}
      <rect x="60" y="130" width="100" height="150" fill="#0E7C7B"/>
      <rect x="60" y="130" width="100" height="6" fill="#0D9488"/>
      {[0,1,2,3,4,5].map(row => [0,1].map(col => (
        <rect key={`${row}-${col}`} x={72 + col * 46} y={145 + row * 22} width="26" height="14" rx="2"
          fill="#99F6E4" opacity="0.7"/>
      )))}

      {/* Building 3 (right) */}
      <rect x="320" y="155" width="100" height="125" fill="#7C3AED"/>
      <rect x="320" y="155" width="100" height="6" fill="#8B5CF6"/>
      {[0,1,2,3,4].map(row => [0,1].map(col => (
        <rect key={`${row}-${col}`} x={330 + col * 46} y={168 + row * 22} width="26" height="14" rx="2"
          fill="#DDD6FE" opacity="0.7"/>
      )))}

      {/* Building 4 (far right, small) */}
      <rect x="430" y="200" width="50" height="80" fill="#A87C34"/>

      {/* Road */}
      <rect x="0" y="276" width="480" height="44" fill="#CBD5E1"/>
      <rect x="0" y="290" width="480" height="4" fill="#64748B" opacity="0.3"/>
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={20 + i * 64} y="294" width="36" height="3" rx="2" fill="white" opacity="0.5"/>
      ))}

      {/* Moon */}
      <circle cx="410" cy="50" r="25" fill="#FEF9C3"/>
      <circle cx="420" cy="43" r="20" fill="#E0F2FE"/>
    </svg>
  );
}

export function SharesBondsIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="480" height="320" fill="#F8FAFC" rx="12"/>
      {/* Grid lines */}
      {[60,120,180,240,300].map(y => (
        <line key={y} x1="60" y1={y} x2="440" y2={y} stroke="#E2E8F0" strokeWidth="1"/>
      ))}
      {[120,200,280,360,440].map(x => (
        <line key={x} x1={x} y1="40" x2={x} y2="300" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4"/>
      ))}

      {/* Axes */}
      <line x1="60" y1="300" x2="440" y2="300" stroke="#CBD5E1" strokeWidth="2"/>
      <line x1="60" y1="40" x2="60" y2="300" stroke="#CBD5E1" strokeWidth="2"/>

      {/* Y-axis labels */}
      {['40K','30K','20K','10K','0'].map((label, i) => (
        <text key={label} x="50" y={60 + i * 60} fontSize="11" fill="#94A3B8" textAnchor="end">{label}</text>
      ))}

      {/* Candlesticks */}
      {[
        { x: 120, high: 200, low: 250, open: 240, close: 210, up: true },
        { x: 200, high: 210, low: 270, open: 215, close: 265, up: false },
        { x: 280, high: 160, low: 230, open: 225, close: 170, up: true },
        { x: 360, high: 130, low: 200, open: 195, close: 140, up: true },
        { x: 440, high: 100, low: 160, open: 155, close: 110, up: true },
      ].map((c, i) => (
        <g key={i}>
          <line x1={c.x} y1={c.high} x2={c.x} y2={c.low} stroke={c.up ? '#10B981' : '#EF4444'} strokeWidth="2"/>
          <rect x={c.x - 14} y={Math.min(c.open, c.close)} width="28" height={Math.abs(c.open - c.close) || 4}
            rx="2" fill={c.up ? '#10B981' : '#EF4444'} opacity="0.85"/>
        </g>
      ))}

      {/* Trend line (ascending) */}
      <path d="M80 270 Q150 240 200 220 Q280 190 360 155 Q400 140 440 110"
        stroke="#2563EB" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Trend fill */}
      <path d="M80 270 Q150 240 200 220 Q280 190 360 155 Q400 140 440 110 L440 300 L80 300Z"
        fill="#2563EB" opacity="0.06"/>

      {/* Data points */}
      {[[80,270],[200,220],[360,155],[440,110]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#2563EB" stroke="white" strokeWidth="2"/>
      ))}

      {/* Legend */}
      <circle cx="100" cy="30" r="5" fill="#2563EB"/>
      <text x="112" y="34" fontSize="12" fill="#475569" fontWeight="600">Portfolio Growth</text>
      <rect x="220" y="23" width="14" height="14" rx="2" fill="#10B981" opacity="0.8"/>
      <text x="240" y="34" fontSize="12" fill="#475569" fontWeight="600">Gain</text>
      <rect x="290" y="23" width="14" height="14" rx="2" fill="#EF4444" opacity="0.8"/>
      <text x="310" y="34" fontSize="12" fill="#475569" fontWeight="600">Loss</text>

      {/* Up arrow badge */}
      <rect x="360" y="15" width="70" height="26" rx="13" fill="#D1FAE5"/>
      <text x="368" y="32" fontSize="13" fill="#059669" fontWeight="700">↑ 18.4%</text>
    </svg>
  );
}

export function AgricultureIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ag-sky" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FEF9C3"/>
          <stop offset="1" stopColor="#FEF3C7"/>
        </linearGradient>
        <linearGradient id="ag-ground" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#86EFAC"/>
          <stop offset="1" stopColor="#4ADE80"/>
        </linearGradient>
      </defs>
      <rect width="480" height="320" fill="url(#ag-sky)" rx="12"/>
      <rect x="0" y="220" width="480" height="100" fill="url(#ag-ground)" rx="0"/>
      <path d="M0 220 Q120 200 240 215 Q360 230 480 210 L480 320 L0 320Z" fill="#86EFAC"/>

      {/* Sun */}
      <circle cx="400" cy="70" r="45" fill="#FDE68A"/>
      <circle cx="400" cy="70" r="35" fill="#FCD34D"/>
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
        <line key={i}
          x1={400 + 50 * Math.cos(deg * Math.PI/180)}
          y1={70 + 50 * Math.sin(deg * Math.PI/180)}
          x2={400 + 64 * Math.cos(deg * Math.PI/180)}
          y2={70 + 64 * Math.sin(deg * Math.PI/180)}
          stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
      ))}

      {/* Wheat stalks */}
      {[60,120,180,240,300,360].map((x, i) => (
        <g key={i} transform={`translate(${x}, 0)`}>
          {/* Stem */}
          <line x1="0" y1="220" x2="0" y2="120" stroke="#65A30D" strokeWidth="4" strokeLinecap="round"/>
          {/* Grain head */}
          <ellipse cx="0" cy="105" rx="10" ry="22" fill="#A16207" opacity="0.9"/>
          <ellipse cx="-8" cy="118" rx="7" ry="14" fill="#CA8A04" opacity="0.8"/>
          <ellipse cx="8" cy="118" rx="7" ry="14" fill="#CA8A04" opacity="0.8"/>
          {/* Leaves */}
          <path d={`M0 ${160} Q${20} ${145} ${30} ${150}`} stroke="#65A30D" strokeWidth="3" fill="none"/>
          <path d={`M0 ${180} Q${-20} ${165} ${-30} ${170}`} stroke="#65A30D" strokeWidth="3" fill="none"/>
        </g>
      ))}

      {/* Water drops */}
      {[[150, 80], [200, 50], [260, 90]].map(([x, y], i) => (
        <g key={i}>
          <path d={`M${x} ${y+12} Q${x-8} ${y} ${x} ${y-8} Q${x+8} ${y} ${x} ${y+12}Z`}
            fill="#38BDF8" opacity="0.8"/>
        </g>
      ))}

      {/* Small farmhouse */}
      <rect x="30" y="195" width="60" height="35" fill="#FBBF24"/>
      <polygon points="20,195 90,195 55,170" fill="#F97316"/>
      <rect x="52" y="210" width="16" height="20" fill="#92400E"/>

      {/* Field rows */}
      {[0,1,2,3].map(i => (
        <line key={i} x1="0" y1={230 + i*15} x2="480" y2={230 + i*15} stroke="#4ADE80" strokeWidth="2" opacity="0.4"/>
      ))}
    </svg>
  );
}

export function BullionIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="480" height="320" fill="#FFFBEB" rx="12"/>
      <defs>
        <linearGradient id="gold1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FDE68A"/>
          <stop offset="0.5" stopColor="#F59E0B"/>
          <stop offset="1" stopColor="#B45309"/>
        </linearGradient>
        <linearGradient id="gold2" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#FCD34D"/>
          <stop offset="1" stopColor="#D97706"/>
        </linearGradient>
        <linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#F1F5F9"/>
          <stop offset="1" stopColor="#94A3B8"/>
        </linearGradient>
      </defs>

      {/* Gold bar 1 (large, center-left) */}
      <g transform="translate(80, 140)">
        <path d="M20 0 L160 0 L180 20 L0 20Z" fill="#F59E0B"/>
        <path d="M0 20 L180 20 L180 80 L0 80Z" fill="url(#gold2)"/>
        <path d="M180 20 L200 0 L200 60 L180 80Z" fill="#B45309"/>
        <path d="M20 0 L200 0 L180 20 L0 20Z" fill="url(#gold1)"/>
        <text x="70" y="58" fontSize="16" fontWeight="800" fill="#78350F" opacity="0.7">GOLD</text>
        <text x="55" y="40" fontSize="11" fill="#92400E" opacity="0.6">999.9 FINE</text>
      </g>

      {/* Gold bar 2 (small, top) */}
      <g transform="translate(100, 100) scale(0.65)">
        <path d="M20 0 L160 0 L180 20 L0 20Z" fill="#F59E0B"/>
        <path d="M0 20 L180 20 L180 80 L0 80Z" fill="url(#gold2)"/>
        <path d="M180 20 L200 0 L200 60 L180 80Z" fill="#B45309"/>
        <path d="M20 0 L200 0 L180 20 L0 20Z" fill="url(#gold1)"/>
      </g>

      {/* Silver bar */}
      <g transform="translate(80, 230)">
        <path d="M20 0 L160 0 L180 20 L0 20Z" fill="#CBD5E1"/>
        <path d="M0 20 L180 20 L180 60 L0 60Z" fill="url(#silver)"/>
        <path d="M180 20 L200 0 L200 40 L180 60Z" fill="#64748B"/>
        <path d="M20 0 L200 0 L180 20 L0 20Z" fill="#E2E8F0"/>
        <text x="55" y="45" fontSize="14" fontWeight="700" fill="#475569" opacity="0.7">SILVER</text>
      </g>

      {/* Diamond gemstone */}
      <g transform="translate(330, 80)">
        <polygon points="60,0 110,50 60,120 10,50" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2"/>
        <polygon points="60,0 110,50 60,50" fill="#7DD3FC" opacity="0.8"/>
        <polygon points="60,0 10,50 60,50" fill="#93C5FD" opacity="0.8"/>
        <polygon points="10,50 60,50 60,120" fill="#60A5FA" opacity="0.6"/>
        <polygon points="110,50 60,50 60,120" fill="#3B82F6" opacity="0.6"/>
        {/* Sparkles */}
        {[[20,20],[100,10],[120,70],[30,100]].map(([sx,sy],i) => (
          <g key={i}>
            <line x1={sx} y1={sy-8} x2={sx} y2={sy+8} stroke="#FDE68A" strokeWidth="2"/>
            <line x1={sx-8} y1={sy} x2={sx+8} y2={sy} stroke="#FDE68A" strokeWidth="2"/>
          </g>
        ))}
      </g>

      {/* Platinum coin */}
      <circle cx="380" cy="250" r="40" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="3"/>
      <circle cx="380" cy="250" r="32" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1"/>
      <text x="380" y="244" fontSize="14" fontWeight="800" fill="#475569" textAnchor="middle">Pt</text>
      <text x="380" y="260" fontSize="10" fill="#94A3B8" textAnchor="middle">PLATINUM</text>

      {/* Sparkles */}
      {[[290, 50], [450, 150], [40, 280]].map(([sx,sy],i) => (
        <g key={i}>
          <line x1={sx} y1={sy-10} x2={sx} y2={sy+10} stroke="#F59E0B" strokeWidth="2"/>
          <line x1={sx-10} y1={sy} x2={sx+10} y2={sy} stroke="#F59E0B" strokeWidth="2"/>
          <line x1={sx-7} y1={sy-7} x2={sx+7} y2={sy+7} stroke="#F59E0B" strokeWidth="1.5"/>
          <line x1={sx+7} y1={sy-7} x2={sx-7} y2={sy+7} stroke="#F59E0B" strokeWidth="1.5"/>
        </g>
      ))}
    </svg>
  );
}

export function CryptoIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="480" height="320" fill="#1E1B4B" rx="12"/>
      {/* Hex grid bg */}
      {[0,1,2,3,4,5,6].map(r => [0,1,2,3,4,5].map(c => (
        <circle key={`${r}-${c}`} cx={c * 80 + (r%2)*40} cy={r * 55} r="1.5" fill="#4338CA" opacity="0.4"/>
      )))}

      {/* Network lines */}
      <line x1="240" y1="160" x2="100" y2="80" stroke="#4338CA" strokeWidth="1.5" opacity="0.5"/>
      <line x1="240" y1="160" x2="380" y2="70" stroke="#4338CA" strokeWidth="1.5" opacity="0.5"/>
      <line x1="240" y1="160" x2="120" y2="260" stroke="#4338CA" strokeWidth="1.5" opacity="0.5"/>
      <line x1="240" y1="160" x2="380" y2="260" stroke="#4338CA" strokeWidth="1.5" opacity="0.5"/>
      <line x1="100" y1="80" x2="380" y2="70" stroke="#6366F1" strokeWidth="1" opacity="0.3"/>
      <line x1="120" y1="260" x2="380" y2="260" stroke="#6366F1" strokeWidth="1" opacity="0.3"/>

      {/* Central Bitcoin */}
      <circle cx="240" cy="160" r="70" fill="#3730A3" opacity="0.5"/>
      <circle cx="240" cy="160" r="60" fill="#4338CA"/>
      <circle cx="240" cy="160" r="55" fill="url(#btc-g)" stroke="#6366F1" strokeWidth="1.5"/>
      <defs>
        <radialGradient id="btc-g" cx="40%" cy="35%">
          <stop stopColor="#818CF8"/>
          <stop offset="1" stopColor="#4338CA"/>
        </radialGradient>
      </defs>
      {/* Bitcoin B symbol */}
      <path d="M222 128 L222 192 M230 128 L230 192 M230 128 L248 128 Q262 128 262 143 Q262 157 248 157 M230 157 L250 157 Q264 157 264 172 Q264 192 246 192 L222 192"
        stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Node circles */}
      {[[100,80,'#F59E0B'],[380,70,'#10B981'],[120,260,'#EC4899'],[380,260,'#38BDF8']].map(([nx,ny,nc],i) => (
        <g key={i}>
          <circle cx={nx as number} cy={ny as number} r="28" fill="#1E1B4B" stroke={nc as string} strokeWidth="2"/>
          <circle cx={nx as number} cy={ny as number} r="20" fill="#312E81"/>
          <text x={nx as number} y={(ny as number)+5} fontSize="14" fill={nc as string} textAnchor="middle" fontWeight="700">
            {['BTC','ETH','BNB','SOL'][i]}
          </text>
        </g>
      ))}

      {/* Glow dots */}
      {[[40,40],[440,120],[60,200],[420,290],[240,30]].map(([dx,dy],i) => (
        <circle key={i} cx={dx} cy={dy} r="3" fill="#818CF8" opacity="0.6"/>
      ))}

      {/* Price tag */}
      <rect x="280" y="20" width="130" height="32" rx="16" fill="#4338CA" stroke="#6366F1" strokeWidth="1"/>
      <text x="296" y="40" fontSize="13" fill="white" fontWeight="700">₿ +5.2% today</text>
    </svg>
  );
}

export function BankingIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="480" height="320" fill="#EFF6FF" rx="12"/>
      {/* Sky gradient */}
      <rect width="480" height="200" fill="#DBEAFE" rx="12" opacity="0.5"/>

      {/* Bank building */}
      {/* Pediment / roof */}
      <polygon points="100,80 380,80 240,30" fill="#1E40AF"/>
      {/* Frieze */}
      <rect x="100" y="80" width="280" height="20" fill="#1D4ED8"/>
      {/* Columns */}
      {[120, 170, 220, 270, 320, 360].map(x => (
        <rect key={x} x={x} y="100" width="24" height="130" rx="3" fill="#2563EB"/>
      ))}
      {/* Base */}
      <rect x="85" y="230" width="310" height="20" fill="#1E40AF"/>
      <rect x="70" y="248" width="340" height="15" fill="#1D4ED8"/>
      {/* Door */}
      <rect x="212" y="170" width="56" height="60" rx="4" fill="#1E3A8A"/>
      <circle cx="240" cy="200" r="3" fill="#93C5FD"/>

      {/* "GT" on building */}
      <text x="240" y="168" fontSize="18" fontWeight="800" fill="#BFDBFE" textAnchor="middle">GT</text>

      {/* Coin stacks on right */}
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <ellipse cx="420" cy={270 - i*16} rx="22" ry="7" fill={i%2 === 0 ? '#F59E0B' : '#FCD34D'}/>
          <rect x="398" y={256 - i*16} width="44" height="16" fill={i%2 === 0 ? '#D97706' : '#F59E0B'}/>
        </g>
      ))}
      <ellipse cx="420" cy="270" rx="22" ry="7" fill="#FDE68A"/>

      {/* Coin stack on left */}
      {[0,1,2].map(i => (
        <g key={i}>
          <ellipse cx="60" cy={285 - i*14} rx="18" ry="6" fill={i%2===0?'#94A3B8':'#CBD5E1'}/>
          <rect x="42" y={273 - i*14} width="36" height="14" fill={i%2===0?'#64748B':'#94A3B8'}/>
        </g>
      ))}

      {/* Stars */}
      {[[50, 50], [430, 50], [450, 150]].map(([sx,sy],i) => (
        <text key={i} x={sx} y={sy} fontSize="18" fill="#FCD34D" textAnchor="middle">★</text>
      ))}

      {/* Ground */}
      <rect x="0" y="263" width="480" height="57" fill="#BFDBFE" opacity="0.4"/>
    </svg>
  );
}

export function InsuranceIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="480" height="320" fill="#F0FDF4" rx="12"/>
      <defs>
        <radialGradient id="shield-glow" cx="50%" cy="50%" r="50%">
          <stop stopColor="#34D399" stopOpacity="0.2"/>
          <stop offset="1" stopColor="#34D399" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Radiating protection rings */}
      {[130, 100, 70].map((r, i) => (
        <circle key={i} cx="240" cy="160" r={r + 60} stroke="#34D399" strokeWidth="1.5"
          strokeDasharray="8 8" opacity={0.15 + i * 0.1}/>
      ))}
      <circle cx="240" cy="160" r="160" fill="url(#shield-glow)"/>

      {/* Shield */}
      <path d="M240 40 L340 80 L340 170 Q340 240 240 280 Q140 240 140 170 L140 80 Z"
        fill="#059669" opacity="0.15"/>
      <path d="M240 55 L330 90 L330 168 Q330 230 240 268 Q150 230 150 168 L150 90 Z"
        fill="#10B981" opacity="0.25"/>
      <path d="M240 70 L320 102 L320 168 Q320 224 240 258 Q160 224 160 168 L160 102 Z"
        fill="#0E7C7B"/>
      <path d="M240 70 L320 102 L320 168 Q320 224 240 258 Q160 224 160 168 L160 102 Z"
        fill="url(#sh-grad)" stroke="#34D399" strokeWidth="2"/>
      <defs>
        <linearGradient id="sh-grad" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop stopColor="#0D9488"/>
          <stop offset="1" stopColor="#065F46"/>
        </linearGradient>
      </defs>

      {/* Checkmark */}
      <path d="M195 160 L225 192 L292 128" stroke="white" strokeWidth="10"
        strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Small category icons floating */}
      {[
        { x: 60, y: 80, label: 'Life', color: '#2563EB', bg: '#DBEAFE' },
        { x: 380, y: 80, label: 'Health', color: '#059669', bg: '#D1FAE5' },
        { x: 60, y: 240, label: 'General', color: '#D97706', bg: '#FEF3C7' },
        { x: 380, y: 240, label: 'Misc', color: '#7C3AED', bg: '#EDE9FE' },
      ].map(({ x, y, label, color, bg }) => (
        <g key={label}>
          <rect x={x - 30} y={y - 20} width="60" height="36" rx="10" fill={bg}/>
          <text x={x} y={y + 4} fontSize="12" fontWeight="700" fill={color} textAnchor="middle">{label}</text>
        </g>
      ))}

      {/* "Protected" badge */}
      <rect x="175" y="285" width="130" height="28" rx="14" fill="#D1FAE5" stroke="#34D399" strokeWidth="1.5"/>
      <text x="240" y="303" fontSize="13" fontWeight="700" fill="#059669" textAnchor="middle">✓ Fully Protected</text>
    </svg>
  );
}

export function ProvidentFundIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="480" height="320" fill="#FFFBEB" rx="12"/>
      {/* Grid */}
      {[80,160,240].map(y => (
        <line key={y} x1="60" y1={y} x2="440" y2={y} stroke="#E2E8F0" strokeWidth="1"/>
      ))}

      {/* Bar chart */}
      {[
        { x: 80,  h: 60,  label: 'Year 1', color: '#FDE68A' },
        { x: 160, h: 100, label: 'Year 2', color: '#FCD34D' },
        { x: 240, h: 150, label: 'Year 3', color: '#F59E0B' },
        { x: 320, h: 200, label: 'Year 4', color: '#D97706' },
        { x: 400, h: 240, label: 'Year 5', color: '#B45309' },
      ].map(({ x, h, label, color }) => (
        <g key={x}>
          <rect x={x - 24} y={280 - h} width="48" height={h} rx="6" fill={color} opacity="0.9"/>
          <text x={x} y={296} fontSize="10" fill="#92400E" textAnchor="middle">{label}</text>
          <text x={x} y={280 - h - 8} fontSize="11" fill="#78350F" textAnchor="middle" fontWeight="700">
            {['5L','8L','12L','18L','26L'][Math.round((h - 60)/36)]}
          </text>
        </g>
      ))}

      {/* Trend line */}
      <path d="M80 220 L160 180 L240 130 L320 80 L400 40"
        stroke="#2563EB" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {[[80,220],[160,180],[240,130],[320,80],[400,40]].map(([px,py],i) => (
        <circle key={i} cx={px} cy={py} r="5" fill="#2563EB" stroke="white" strokeWidth="2"/>
      ))}

      {/* Piggy bank */}
      <ellipse cx="60" cy="230" rx="35" ry="28" fill="#FCA5A5"/>
      <circle cx="80" cy="215" r="15" fill="#FCA5A5"/>
      <rect x="30" y="250" width="10" height="20" rx="4" fill="#F87171"/>
      <rect x="50" y="255" width="10" height="18" rx="4" fill="#F87171"/>
      <rect x="68" y="255" width="10" height="18" rx="4" fill="#F87171"/>
      <rect x="86" y="252" width="10" height="20" rx="4" fill="#F87171"/>
      <circle cx="84" cy="212" r="3" fill="#1F2937"/>
      <rect x="50" y="202" width="18" height="5" rx="2" fill="#1F2937"/>
      {/* coin slot */}
      <rect x="42" y="204" width="22" height="4" rx="2" fill="#DC2626"/>

      {/* Axis */}
      <line x1="60" y1="280" x2="440" y2="280" stroke="#CBD5E1" strokeWidth="2"/>
      <line x1="60" y1="40" x2="60" y2="280" stroke="#CBD5E1" strokeWidth="2"/>

      {/* Goal badge */}
      <rect x="310" y="15" width="140" height="28" rx="14" fill="#DBEAFE"/>
      <text x="380" y="33" fontSize="12" fontWeight="700" fill="#2563EB" textAnchor="middle">🎯 Retirement Goal</text>
    </svg>
  );
}

export function AlternateInvestmentIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="480" height="320" fill="#FAF5FF" rx="12"/>

      {/* Painting frame */}
      <rect x="60" y="40" width="200" height="240" rx="4" fill="#92400E" stroke="#78350F" strokeWidth="4"/>
      <rect x="72" y="52" width="176" height="216" rx="2" fill="white"/>
      {/* Abstract art inside */}
      <circle cx="160" cy="160" r="60" fill="#C4B5FD" opacity="0.6"/>
      <rect x="90" y="90" width="70" height="50" rx="4" fill="#FDE68A" opacity="0.8"/>
      <polygon points="160,80 200,150 120,150" fill="#F9A8D4" opacity="0.7"/>
      <circle cx="200" cy="200" r="35" fill="#6EE7B7" opacity="0.6"/>
      <rect x="100" y="190" width="50" height="50" rx="4" fill="#93C5FD" opacity="0.7" transform="rotate(20, 125, 215)"/>
      {/* Frame corners */}
      {[[64,44],[252,44],[64,276],[252,276]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="7" fill="#B45309"/>
      ))}
      <text x="160" y="285" fontSize="11" fill="#92400E" textAnchor="middle" fontWeight="600">Fine Art • 2024</text>

      {/* Watch */}
      <circle cx="360" cy="160" r="80" fill="#1F2937" stroke="#4B5563" strokeWidth="6"/>
      <circle cx="360" cy="160" r="70" fill="#111827"/>
      <circle cx="360" cy="160" r="64" fill="#1E293B" stroke="#374151" strokeWidth="1"/>
      {/* Watch face markings */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
        <line key={i}
          x1={360 + 52 * Math.cos((deg-90) * Math.PI/180)}
          y1={160 + 52 * Math.sin((deg-90) * Math.PI/180)}
          x2={360 + 60 * Math.cos((deg-90) * Math.PI/180)}
          y2={160 + 60 * Math.sin((deg-90) * Math.PI/180)}
          stroke={i % 3 === 0 ? '#F59E0B' : '#4B5563'} strokeWidth={i % 3 === 0 ? 3 : 1.5}/>
      ))}
      {/* Hour hand */}
      <line x1="360" y1="160" x2="360" y2="120" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
      {/* Minute hand */}
      <line x1="360" y1="160" x2="392" y2="148" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      {/* Second hand */}
      <line x1="360" y1="160" x2="345" y2="120" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Center */}
      <circle cx="360" cy="160" r="5" fill="#F59E0B"/>

      {/* Brand badge */}
      <rect x="320" y="152" width="80" height="16" rx="3" fill="#111827"/>
      <text x="360" y="164" fontSize="9" fill="#F59E0B" textAnchor="middle" fontWeight="700" letterSpacing="1">PREMIUM</text>

      {/* Value badge */}
      <rect x="280" y="258" width="160" height="28" rx="14" fill="#EDE9FE"/>
      <text x="360" y="277" fontSize="12" fontWeight="700" fill="#7C3AED" textAnchor="middle">↑ 22% Appreciation</text>
    </svg>
  );
}

/** Returns the correct illustration component based on category slug */
export function CategoryIllustration({ slug, className }: { slug: string; className?: string }) {
  switch (slug) {
    case 'energy':               return <EnergyIllustration className={className}/>;
    case 'real-estate':          return <RealEstateIllustration className={className}/>;
    case 'shares-bonds':         return <SharesBondsIllustration className={className}/>;
    case 'agriculture':          return <AgricultureIllustration className={className}/>;
    case 'bullion-gemstones':    return <BullionIllustration className={className}/>;
    case 'crypto':               return <CryptoIllustration className={className}/>;
    case 'banking':              return <BankingIllustration className={className}/>;
    case 'insurance':            return <InsuranceIllustration className={className}/>;
    case 'provident-fund':       return <ProvidentFundIllustration className={className}/>;
    case 'alternate-investment': return <AlternateInvestmentIllustration className={className}/>;
    default:                     return <EnergyIllustration className={className}/>;
  }
}
