/**
 * Application configuration.
 * Environment-variable-friendly — swap NEXT_PUBLIC_CONTACT_API_URL in .env.local
 * to connect the contact form to a real backend with a one-line change.
 */
export const config = {
  /**
   * Contact form API endpoint.
   * When null, the form runs in demo mode (no data is sent).
   */
  contactApiEndpoint: process.env.NEXT_PUBLIC_CONTACT_API_URL ?? null,

  /** Submit simulation delay in ms (demo mode only) */
  submitSimulationDelayMs: 900,
} as const;
