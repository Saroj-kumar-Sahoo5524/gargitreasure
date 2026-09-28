import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/submit-investment
 *
 * Receives the full investment application payload (all text fields
 * + Cloudinary URLs for photo and signature) and forwards it to the
 * Google Apps Script webhook that appends a row to Google Sheets.
 *
 * Required env var:
 *   INVESTMENT_SHEET_WEBHOOK_URL — /exec URL of your Apps Script deployment
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      // Section A — Identity
      applicantName,
      parentName,
      gender,
      maritalStatus,
      dob,
      nationality,
      residentStatus,
      pan,
      aadhaar,
      // Section B — Address
      resAddress,
      resCity,
      resPin,
      resState,
      resCountry,
      telRes,
      telOff,
      mobile,
      fax,
      email,
      addressProof,
      permAddress,
      permCity,
      permPin,
      permState,
      permCountry,
      // Declaration
      declarationDate,
      // Images (Cloudinary URLs)
      photoUrl,
      signatureUrl,
    } = body;

    // Basic guard
    if (!applicantName || !mobile || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: applicantName, mobile, email.' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.INVESTMENT_SHEET_WEBHOOK_URL;

    if (!webhookUrl || webhookUrl === 'PASTE_YOUR_INVESTMENT_APPS_SCRIPT_URL_HERE') {
      console.warn(
        '[submit-investment] INVESTMENT_SHEET_WEBHOOK_URL is not set. ' +
          'Submission was NOT saved to Google Sheets.'
      );
      return NextResponse.json({ ok: true, saved: false });
    }

    const gsRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // ── Identity ──
        applicantName,
        parentName,
        gender,
        maritalStatus,
        dob,
        nationality,
        residentStatus,
        pan,
        aadhaar,
        // ── Address ──
        resAddress,
        resCity,
        resPin,
        resState,
        resCountry,
        // ── Contact ──
        telRes,
        telOff,
        mobile,
        fax,
        email,
        // ── Docs ──
        addressProof,
        // ── Permanent address ──
        permAddress,
        permCity,
        permPin,
        permState,
        permCountry,
        // ── Declaration ──
        declarationDate,
        // ── Images ──
        photoUrl:     photoUrl     ?? '—',
        signatureUrl: signatureUrl ?? '—',
        // ── Meta ──
        submittedAt: new Date().toISOString(),
      }),
      redirect: 'follow',
    });

    if (!gsRes.ok) {
      const text = await gsRes.text().catch(() => '');
      console.error('[submit-investment] Apps Script error:', gsRes.status, text);
      return NextResponse.json(
        { error: 'Failed to save to Google Sheets. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, saved: true });
  } catch (err) {
    console.error('[submit-investment] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
