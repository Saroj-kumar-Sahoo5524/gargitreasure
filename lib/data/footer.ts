import type { FooterColumn, SocialLink } from '@/types/content';

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Leaders', href: '/our-leaders' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  {
    heading: 'Financial Solutions',
    links: [
      { label: 'Personal Loan', href: '/loans' },
      { label: 'Vehicle Loan', href: '/loans' },
      { label: 'Business Finance', href: '/loans' },
      { label: 'Home Finance', href: '/loans' },
      { label: 'Investments', href: '/investments' },
      { label: 'Advisory', href: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Financial Guides', href: '/resources' },
      { label: 'Blog', href: '/resources' },
      { label: 'FAQs', href: '/resources' },
      { label: 'Calculators', href: '/loans' },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', href: '#', ariaLabel: 'LinkedIn', iconName: 'FaLinkedinIn' },
  { platform: 'Twitter', href: '#', ariaLabel: 'Twitter', iconName: 'FaXTwitter' },
  { platform: 'Instagram', href: '#', ariaLabel: 'Instagram', iconName: 'FaInstagram' },
  { platform: 'Facebook', href: '#', ariaLabel: 'Facebook', iconName: 'FaFacebookF' },
];

export const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Disclaimer', href: '#' },
  { label: 'Risk Disclosure', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];
