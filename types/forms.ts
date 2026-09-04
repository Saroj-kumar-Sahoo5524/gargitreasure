// ── Contact Form ──────────────────────────────────────────────────────────────
export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ContactFormState {
  values: ContactFormValues;
  errors: ContactFormErrors;
  status: ContactFormStatus;
}
