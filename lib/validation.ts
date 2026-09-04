import type { ContactFormValues, ContactFormErrors } from '@/types/forms';

/**
 * Validates a contact form submission.
 * Returns an errors object; empty object means the form is valid.
 */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!/^[0-9+\-\s]{7,15}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (values.service.trim().length === 0) {
    errors.service = 'Please select a service.';
  }

  if (values.message.trim().length < 4) {
    errors.message = 'Please enter a message.';
  }

  return errors;
}

/** Returns true if the errors object has no keys (form is valid). */
export function isFormValid(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
