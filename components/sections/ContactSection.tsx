'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  FaLocationDot, FaPhone, FaEnvelope, FaClock, FaMapLocationDot,
} from 'react-icons/fa6';
import { Kicker } from '@/components/ui/Kicker';
import { ContactForm } from './ContactForm';

const contactDetails = [
  { icon: FaLocationDot, label: 'Office address', value: 'Plot No. 46/2163/4108, Lane 2, Infront of Utpal Residency, Patrapada, Bhubaneswar, Odisha – 751019, India' },
  { icon: FaPhone, label: 'Phone', value: '06744119039 / 7438968674' },
  { icon: FaEnvelope, label: 'Email', value: 'gargitreasures26@gmail.com' },
  { icon: FaClock, label: 'Business hours', value: 'Mon – Sat, 9:30 AM – 6:30 PM' },
];

/**
 * Contact section — info card + enquiry form.
 */
export function ContactSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section id="contact" className="section">
      <div className="max-w-content mx-auto px-8">
        <motion.div
          className="max-w-[640px] mb-[56px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Kicker>Contact</Kicker>
          <h2 className="font-heading font-extrabold text-ink mb-4" style={{ fontSize: 'clamp(28px,3.4vw,40px)' }}>
            Get in touch
          </h2>
          <p className="text-text-muted text-[17px]">
            Have a question about a loan or investment option? Send us an enquiry and our team will follow up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12">
          {/* Info card */}
          <motion.div
            className="rounded-[20px] p-[34px] text-white"
            style={{ background: '#0B1B34' }}
            initial={shouldReduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-white font-heading font-bold text-[20px] mb-6">Contact details</h3>
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-[14px] mb-[22px]">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-[12px] text-white/50 font-semibold mb-[3px]">{label}</div>
                  <div className="text-[14px] font-semibold text-white">{value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-6 h-[150px] rounded-[12px] bg-white/[0.06] border border-dashed border-white/20 flex flex-col items-center justify-center gap-2 text-white/40 text-[13px]">
              <FaMapLocationDot size={22} />
              Map placeholder — embed on integration
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
