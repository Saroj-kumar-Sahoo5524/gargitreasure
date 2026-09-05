/**
 * Application configuration.
 *
 * Contact form submissions are sent to the internal Next.js API route
 * `/api/contact`, which securely forwards them to a Google Apps Script
 * Web App that appends rows to Google Sheets.
 *
 * Required server-side env var (add to .env.local or your host's dashboard):
 *   GOOGLE_SHEET_WEBHOOK_URL — the /exec URL of your deployed Apps Script
 */
export const config = {
  /**
   * Contact form API endpoint — always points to the internal API route.
   * The Google Sheets webhook URL is kept server-side (GOOGLE_SHEET_WEBHOOK_URL)
   * and is never exposed to the browser.
   */
  contactApiEndpoint: '/api/contact',

  /** Submit simulation delay in ms (kept for reference, no longer used in production path) */
  submitSimulationDelayMs: 900,
} as const;
