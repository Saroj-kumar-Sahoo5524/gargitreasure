import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { footerColumns, socialLinks, legalLinks } from '@/lib/data/footer';
import type { SocialLink } from '@/types/content';

const iconMap: Record<string, React.ElementType> = {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
};

function SocialIcon({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.iconName];
  if (!Icon) return null;
  return (
    <a
      href={link.href}
      aria-label={link.ariaLabel}
      className="w-9 h-9 rounded-[9px] bg-white/[0.06] flex items-center justify-center transition-colors duration-200 hover:bg-white/[0.14]"
    >
      <Icon size={14} />
    </a>
  );
}

/** Site footer with brand, columns, social links, disclaimer, and legal links. */
export function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-[80px]">
      <div className="max-w-content mx-auto px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-[52px] border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/assets/logo.png"
                alt="Gargi Treasure"
                height={60}
                width={160}
                className="h-[60px] w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] text-white/50 max-w-[280px] mb-5">
              Financial solutions built around your goals — with transparent terms and professional guidance at every step.
            </p>
            <div className="flex gap-[10px]">
              {socialLinks.map((sl) => (
                <SocialIcon key={sl.platform} link={sl} />
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h5 className="text-white text-[13.5px] font-bold mb-[18px]">{col.heading}</h5>
              <ul className="space-y-[11px]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/55 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-white/[0.04] border-t border-white/[0.08] border-b border-white/[0.08] py-[22px]">
        <div className="max-w-content mx-auto px-8">
          <p className="text-[12.5px] text-white/42 leading-[1.7] max-w-[900px]">
            Financial products and investment opportunities involve applicable terms, conditions, eligibility requirements, and risks. Figures, rates, and examples shown on this site are illustrative and for demonstration purposes only, unless explicitly stated as verified. Please review the relevant documentation and seek professional advice where appropriate. Gargi Treasure does not guarantee loan approval or investment returns.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-content mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-[14px] py-[26px] pb-[34px]">
          <p className="text-[13px] text-white/40">© 2026 Gargi Treasure. All rights reserved.</p>
          <div className="flex gap-5 flex-wrap">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-white/55 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
