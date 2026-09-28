'use client';

export function StartApplicationButton() {
  return (
    <div className="mt-8 flex items-center gap-4 flex-wrap">
      <div className="relative inline-flex">
        {/* Pulsing glow ring */}
        <span
          className="absolute inset-0 rounded-[14px] pointer-events-none"
          style={{
            boxShadow: '0 0 0 0 rgba(36,81,214,0.7)',
            animation: 'ctaPulse 2.2s ease-out infinite',
          }}
        />

        <button
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 28px',
            borderRadius: '14px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '0.3px',
            color: '#fff',
            background: 'linear-gradient(135deg,#2451D6 0%,#1B3DA6 50%,#0E7C7B 100%)',
            backgroundSize: '200% 200%',
            animation: 'ctaGradientShift 4s ease infinite',
            boxShadow: '0 8px 32px rgba(36,81,214,0.45), 0 2px 8px rgba(0,0,0,0.18)',
            overflow: 'hidden',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            const btn = e.currentTarget;
            btn.style.transform = 'translateY(-2px) scale(1.03)';
            btn.style.boxShadow = '0 14px 48px rgba(36,81,214,0.60), 0 4px 12px rgba(0,0,0,0.22)';
          }}
          onMouseLeave={e => {
            const btn = e.currentTarget;
            btn.style.transform = 'translateY(0) scale(1)';
            btn.style.boxShadow = '0 8px 32px rgba(36,81,214,0.45), 0 2px 8px rgba(0,0,0,0.18)';
          }}
        >
          {/* Shimmer sweep */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: '-75%',
              width: '50%',
              height: '100%',
              background:
                'linear-gradient(120deg,transparent 0%,rgba(255,255,255,0.22) 50%,transparent 100%)',
              transform: 'skewX(-20deg)',
              animation: 'ctaShimmer 3s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          {/* Rocket icon */}
          <span style={{ fontSize: '18px', lineHeight: 1 }}>🚀</span>

          <span>Start Your Application</span>

          {/* Animated arrow */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              animation: 'ctaArrow 1.4s ease-in-out infinite',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Trust badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '40px',
          padding: '8px 16px',
          fontSize: '12.5px',
          color: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <span style={{ color: '#4ADE80', fontSize: '14px' }}>✓</span>
        Free consultation · No obligation
      </div>

      {/* Keyframe definitions */}
      <style>{`
        @keyframes ctaPulse {
          0%   { box-shadow: 0 0 0 0px rgba(36,81,214,0.55); }
          70%  { box-shadow: 0 0 0 14px rgba(36,81,214,0); }
          100% { box-shadow: 0 0 0 0px rgba(36,81,214,0); }
        }
        @keyframes ctaGradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes ctaShimmer {
          0%   { left: -75%; }
          60%  { left: 125%; }
          100% { left: 125%; }
        }
        @keyframes ctaArrow {
          0%,100% { transform: translateX(0); }
          50%      { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
