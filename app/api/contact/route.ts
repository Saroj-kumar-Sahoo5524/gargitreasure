import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 *
 * Receives contact form data from the client and forwards it to the
 * Google Apps Script Web App, which appends a row to Google Sheets.
 *
 * Required server-side env var (never exposed to the browser):
 *   GOOGLE_SHEET_WEBHOOK_URL — the /exec URL of your deployed Apps Script
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Basic server-side guard — reject obviously incomplete payloads
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name and email.' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!webhookUrl) {
      // In local dev without the env var set, log a warning but still return success
      // so the form UX isn't broken. Remove this fallback in strict production if preferred.
      console.warn(
        '[contact/route] GOOGLE_SHEET_WEBHOOK_URL is not set. ' +
          'Submission was NOT saved to Google Sheets. ' +
          'Add it to .env.local (local) or your hosting env vars (production).'
      );
      return NextResponse.json({ ok: true, saved: false });
    }

    // Forward to Google Apps Script Web App
    const gsRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        service,
        message,
        submittedAt: new Date().toISOString(),
      }),
      // Apps Script redirects — follow them automatically
      redirect: 'follow',
    });

    if (!gsRes.ok) {
      const text = await gsRes.text().catch(() => '');
      console.error('[contact/route] Apps Script returned non-OK status:', gsRes.status, text);
      return NextResponse.json(
        { error: 'Failed to save to Google Sheets. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, saved: true });
  } catch (err) {
    console.error('[contact/route] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
