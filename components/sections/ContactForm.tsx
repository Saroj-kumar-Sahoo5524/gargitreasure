'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaCircleCheck, FaSpinner } from 'react-icons/fa6';
import { Button } from '@/components/ui/Button';
import { validateContactForm, isFormValid } from '@/lib/validation';
import { config } from '@/lib/config';
import type { ContactFormValues, ContactFormErrors, ContactFormStatus } from '@/types/forms';

const serviceOptions = [
  'Personal Loan',
  'Vehicle Loan',
  'Business Finance',
  'Home Finance',
  'Investment Solutions',
  'Financial Advisory',
];

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

/**
 * Contact enquiry form with client-side validation.
 * Submissions are sent to /api/contact which saves them to Google Sheets.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>('idle');
  const shouldReduce = useReducedMotion();

  const set = (field: keyof ContactFormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateContactForm(values);
    if (!isFormValid(newErrors)) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch(config.contactApiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = (field: keyof ContactFormErrors) =>
    `w-full px-[14px] py-3 rounded-[9px] border-[1.5px] text-[14.5px] text-ink outline-none transition-colors duration-200 bg-white ${
      errors[field] ? 'border-[#C63A3A]' : 'border-border-base focus:border-royal'
    }`;

  return (
    <div className="bg-white border border-border-base rounded-[20px] p-[34px] shadow-md">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            className="text-center py-10 px-5"
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <FaCircleCheck className="text-success mx-auto mb-4" size={44} />
            <h4 className="font-heading font-bold text-[19px] text-ink mb-2">Enquiry received!</h4>
            <p className="text-text-muted text-[14px]">
              Thank you! Your details have been saved and we will follow up shortly.
            </p>
            <button
              onClick={() => {
                setValues(INITIAL_VALUES);
                setErrors({});
                setStatus('idle');
              }}
              className="mt-6 text-[13.5px] font-semibold text-royal underline underline-offset-2 hover:opacity-70 transition-opacity duration-200"
            >
              Submit another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="mb-[18px]">
                <label className="block text-[13px] font-bold text-ink-soft mb-[7px]" htmlFor="cName">Full name</label>
                <input id="cName" type="text" name="name" autoComplete="name" value={values.name} onChange={set('name')} className={fieldClass('name')} />
                {errors.name && <p className="text-[12px] text-[#C63A3A] mt-[5px]">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-[18px]">
                <label className="block text-[13px] font-bold text-ink-soft mb-[7px]" htmlFor="cEmail">Email</label>
                <input id="cEmail" type="email" name="email" autoComplete="email" value={values.email} onChange={set('email')} className={fieldClass('email')} />
                {errors.email && <p className="text-[12px] text-[#C63A3A] mt-[5px]">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="mb-[18px]">
                <label className="block text-[13px] font-bold text-ink-soft mb-[7px]" htmlFor="cPhone">Phone</label>
                <input id="cPhone" type="tel" name="phone" autoComplete="tel" value={values.phone} onChange={set('phone')} className={fieldClass('phone')} />
                {errors.phone && <p className="text-[12px] text-[#C63A3A] mt-[5px]">{errors.phone}</p>}
              </div>

              {/* Service */}
              <div className="mb-[18px]">
                <label className="block text-[13px] font-bold text-ink-soft mb-[7px]" htmlFor="cService">Service interested in</label>
                <select id="cService" name="service" value={values.service} onChange={set('service')} className={fieldClass('service')}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="text-[12px] text-[#C63A3A] mt-[5px]">{errors.service}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="mb-[18px]">
              <label className="block text-[13px] font-bold text-ink-soft mb-[7px]" htmlFor="cMessage">Message</label>
              <textarea
                id="cMessage"
                name="message"
                value={values.message}
                onChange={set('message')}
                placeholder="Tell us a bit about what you're looking for..."
                className={`${fieldClass('message')} resize-y min-h-[100px]`}
              />
              {errors.message && <p className="text-[12px] text-[#C63A3A] mt-[5px]">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              variant="primary"
              block
              disabled={status === 'submitting'}
              id="submitBtn"
            >
              {status === 'submitting' ? (
                <>
                  <FaSpinner className="animate-spin" size={14} />
                  Submitting...
                </>
              ) : (
                'Submit Enquiry'
              )}
            </Button>

            {status === 'error' && (
              <p className="text-[13px] text-[#C63A3A] text-center mt-3">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
