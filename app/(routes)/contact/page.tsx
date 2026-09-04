import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact — Gargi Treasure',
  description:
    'Get in touch with Gargi Treasure. Have a question about a loan or investment option? Send us an enquiry and our team will follow up.',
};

export default function ContactPage() {
  return (
    <div className="pt-[80px]">
      <ContactSection />
    </div>
  );
}
