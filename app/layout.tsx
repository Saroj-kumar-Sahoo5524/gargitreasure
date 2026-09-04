import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gargi Treasure — Smarter Financial Solutions. Stronger Futures.',
  description:
    'Gargi Treasure offers personal, vehicle, business and home financing alongside structured investment solutions — built around transparent, goal-oriented financial planning.',
  openGraph: {
    title: 'Gargi Treasure — Your Financial Journey, Our Commitment',
    description:
      'Flexible loan solutions, structured investment opportunities, and financial advisory designed around your goals.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-bg text-text-base overflow-x-hidden">
        <SkipLink />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
