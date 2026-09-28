import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

/**
 * POST /api/upload-image
 *
 * Accepts a base64-encoded image and uploads it to Cloudinary
 * using a signed request (credentials stay server-side).
 *
 * Body: { data: string (base64 dataURL), folder: string }
 * Returns: { url: string } — the Cloudinary secure URL
 *
 * Required env vars:
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 */
export async function POST(req: NextRequest) {
  try {
    const { data, folder } = await req.json();

    if (!data || typeof data !== 'string') {
      return NextResponse.json({ error: 'Missing image data.' }, { status: 400 });
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey    = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.warn('[upload-image] Cloudinary env vars are not set. Returning placeholder.');
      return NextResponse.json({ url: null, saved: false });
    }

    const timestamp  = Math.round(Date.now() / 1000).toString();
    const uploadFolder = folder ?? 'investment-applications';

    // Build the signature string — params must be alphabetically sorted
    const paramsToSign = `folder=${uploadFolder}&timestamp=${timestamp}&type=private`;
    const signature = crypto
      .createHash('sha256')
      .update(paramsToSign + apiSecret)
      .digest('hex');

    // Build multipart form data for Cloudinary REST API
    const formData = new FormData();
    formData.append('file',      data);          // base64 dataURL accepted directly
    formData.append('folder',    uploadFolder);
    formData.append('type',      'private');     // private = requires signed URL to view
    formData.append('timestamp', timestamp);
    formData.append('api_key',   apiKey);
    formData.append('signature', signature);

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: 'POST', body: formData }
    );

    if (!uploadRes.ok) {
      const errText = await uploadRes.text().catch(() => '');
      console.error('[upload-image] Cloudinary error:', uploadRes.status, errText);
      return NextResponse.json(
        { error: 'Cloudinary upload failed.' },
        { status: 502 }
      );
    }

    const result = await uploadRes.json();
    // Return the secure URL of the uploaded image
    return NextResponse.json({ url: result.secure_url as string, saved: true });
  } catch (err) {
    console.error('[upload-image] Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
