/**
 * Thematic SVG illustrations for each investment and finance category page.
 * Each returns a self-contained SVG sized to fill its container.
 */

import React from "react";
import Image from "next/image";

interface IllustrationProps {
  className?: string;
}

export function EnergyIllustration({ className = '' }: IllustrationProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/energy.png"
        alt="Energy"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}


export function RealEstateIllustration({ className = '' }: IllustrationProps) {

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/realestate.png"
        alt="Real Estate"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

export function SharesBondsIllustration({ className = '' }: IllustrationProps) {

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/share.png"
        alt="Share & Bond"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

export function AgricultureIllustration({ className = '' }: IllustrationProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/agriculture.png"
        alt="Agriculture"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

export function BullionIllustration({ className = '' }: IllustrationProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/bullion.png"
        alt="Bullion"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

export function CryptoIllustration({ className = '' }: IllustrationProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/crypto.png"
        alt="Crypto"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

export function BankingIllustration({ className = '' }: IllustrationProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/banking.png"
        alt="Banking"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

export function InsuranceIllustration({ className = '' }: IllustrationProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/insurance.png"
        alt="Insurance"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

export function ProvidentFundIllustration({ className = '' }: IllustrationProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/provident.png"
        alt="Provident"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

export function AlternateInvestmentIllustration({ className = '' }: IllustrationProps) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/alternate.png"
        alt="Alternate"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      />
    </div>
  );
}

/** Returns the correct illustration component based on category slug */
export function CategoryIllustration({ slug, className }: { slug: string; className?: string }) {
  switch (slug) {
    case 'energy': return <EnergyIllustration className={className} />;
    case 'real-estate': return <RealEstateIllustration className={className} />;
    case 'shares-bonds': return <SharesBondsIllustration className={className} />;
    case 'agriculture': return <AgricultureIllustration className={className} />;
    case 'bullion-gemstones': return <BullionIllustration className={className} />;
    case 'crypto': return <CryptoIllustration className={className} />;
    case 'banking': return <BankingIllustration className={className} />;
    case 'insurance': return <InsuranceIllustration className={className} />;
    case 'provident-fund': return <ProvidentFundIllustration className={className} />;
    case 'alternate-investment': return <AlternateInvestmentIllustration className={className} />;
    default: return <EnergyIllustration className={className} />;
  }
}
