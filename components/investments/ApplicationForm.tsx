'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

/* ─── tiny field primitives ─────────────────────────────────────────────── */

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label style={{
      display: 'block', fontSize: '11.5px', fontWeight: 700,
      color: '#374151', marginBottom: '5px',
      textTransform: 'uppercase', letterSpacing: '0.5px',
    }}>
      {children}
      {required && <span style={{ color: '#EF4444', marginLeft: '3px' }}>*</span>}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 13px',
  border: '1.5px solid #D1D5DB', borderRadius: '9px',
  fontSize: '14px', color: '#111827', background: '#FAFAFA',
  outline: 'none', transition: 'border-color 0.18s, box-shadow 0.18s',
  boxSizing: 'border-box',
};

function Field({
  label, id, type = 'text', placeholder = '', required = false, style = {},
}: {
  label: string; id: string; type?: string;
  placeholder?: string; required?: boolean; style?: React.CSSProperties;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        id={id} name={id} type={type} placeholder={placeholder} required={required}
        style={inputStyle}
        onFocus={e => { e.target.style.borderColor = '#2451D6'; e.target.style.boxShadow = '0 0 0 3px rgba(36,81,214,0.12)'; }}
        onBlur={e => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
      />
    </div>
  );
}

function SelectField({
  label, id, options, required = false, style = {},
}: {
  label: string; id: string; options: string[]; required?: boolean; style?: React.CSSProperties;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', ...style }}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <select
        id={id} name={id} defaultValue="" required={required}
        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '32px' }}
        onFocus={e => { e.target.style.borderColor = '#2451D6'; e.target.style.boxShadow = '0 0 0 3px rgba(36,81,214,0.12)'; }}
        onBlur={e => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
      >
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {/* chevron */}
      <span style={{
        position: 'absolute', right: '12px', top: '34px',
        pointerEvents: 'none', color: '#6B7280', fontSize: '11px',
      }}>▾</span>
    </div>
  );
}

function SectionCard({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff', borderRadius: '16px',
      border: '1.5px solid #E3E7EF',
      boxShadow: '0 4px 24px rgba(11,27,52,0.06)',
      overflow: 'hidden', marginBottom: '24px',
    }}>
      {/* Section header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        background: 'linear-gradient(90deg,#0B1B34 0%,#16294A 100%)',
        padding: '14px 22px',
      }}>
        <span style={{
          width: '28px', height: '28px', borderRadius: '50%',
          background: '#2451D6', color: '#fff', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '13px', fontWeight: 800,
        }}>{letter}</span>
        <span style={{
          color: '#fff', fontWeight: 700, fontSize: '13.5px',
          letterSpacing: '1px', textTransform: 'uppercase',
        }}>{title}</span>
      </div>
      {/* Section body */}
      <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {children}
      </div>
    </div>
  );
}

/* ─── grid helpers ──────────────────────────────────────────────────────── */
function Row({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${cols === 3 ? '140px' : '200px'}, 1fr))`,
      gap: '16px',
    }}>
      {children}
    </div>
  );
}

/* ─── helpers ───────────────────────────────────────────────────────────── */

/** Upload a base64 image to Cloudinary via our server-side API route. */
async function uploadImage(base64: string, folder: string): Promise<string | null> {
  try {
    const res = await fetch('/api/upload-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: base64, folder }),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json.url as string) ?? null;
  } catch {
    return null;
  }
}

/* ─── main form component ────────────────────────────────────────────────── */

export function ApplicationForm() {
  const router = useRouter();
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [signatureSrc, setSignatureSrc] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const sigRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setPhotoSrc(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setSignatureSrc(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    setSubmitError(null);

    try {
      // ── 1. Collect all text field values from the form ──────────────────
      const f = formRef.current;
      const val = (id: string) =>
        (f.querySelector<HTMLInputElement | HTMLSelectElement>(`#${id}`)?.value ?? '').trim();

      // ── 2. Upload images to Cloudinary (parallel) ───────────────────────
      const [photoUrl, signatureUrl] = await Promise.all([
        photoSrc     ? uploadImage(photoSrc,     'investment-applications/photos')     : Promise.resolve(null),
        signatureSrc ? uploadImage(signatureSrc, 'investment-applications/signatures') : Promise.resolve(null),
      ]);

      // ── 3. Submit all data to Google Sheets ─────────────────────────────
      const res = await fetch('/api/submit-investment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Identity
          applicantName:  val('applicant-name'),
          parentName:     val('parent-name'),
          gender:         val('gender'),
          maritalStatus:  val('marital-status'),
          dob:            val('dob'),
          nationality:    val('nationality'),
          residentStatus: val('res-status'),
          pan:            val('pan'),
          aadhaar:        val('aadhaar'),
          // Address
          resAddress:  val('res-address'),
          resCity:     val('res-city'),
          resPin:      val('res-pin'),
          resState:    val('res-state'),
          resCountry:  val('res-country'),
          // Contact
          telRes: val('tel-res'),
          telOff: val('tel-off'),
          mobile: val('mobile'),
          fax:    val('fax'),
          email:  val('email'),
          // Docs
          addressProof: val('address-proof'),
          // Permanent address
          permAddress: val('perm-address'),
          permCity:    val('perm-city'),
          permPin:     val('perm-pin'),
          permState:   val('perm-state'),
          permCountry: val('perm-country'),
          // Declaration
          declarationDate: val('decl-date'),
          // Images
          photoUrl,
          signatureUrl,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(err.error ?? 'Submission failed');
      }

      // ── 4. Show success screen ──────────────────────────────────────────
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div style={{
        background: '#fff', borderRadius: '20px',
        border: '1.5px solid #E3E7EF',
        boxShadow: '0 8px 40px rgba(11,27,52,0.08)',
        padding: '72px 40px', textAlign: 'center',
      }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎉</div>
        <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0B1B34', marginBottom: '10px' }}>
          Application Submitted!
        </h2>
        <p style={{ color: '#5A6478', fontSize: '15px', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 32px' }}>
          Thank you for your application. Our investment advisor will reach out within{' '}
          <strong style={{ color: '#0B1B34' }}>1–2 business days</strong> to discuss your investment journey.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => router.push('/investments')}
            style={{
              padding: '12px 28px', borderRadius: '10px',
              border: '1.5px solid #D1D5DB', background: '#fff',
              color: '#374151', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
            }}
          >
            ← Back to Investments
          </button>
          <button
            onClick={() => { setSubmitted(false); window.scrollTo({ top: 0 }); }}
            style={{
              padding: '12px 28px', borderRadius: '10px', border: 'none',
              background: 'linear-gradient(135deg,#2451D6,#0E7C7B)',
              color: '#fff', fontSize: '14px', fontWeight: 700, cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(36,81,214,0.3)',
            }}
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form ref={formRef} onSubmit={handleSubmit}>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION A — IDENTITY DETAILS
      ═══════════════════════════════════════════════════════════════ */}
      <SectionCard letter="A" title="Identity Details">

        {/* Name fields + Passport photo */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {/* Left column */}
          <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Field label="1. Name of the Applicant" id="applicant-name" required placeholder="Full name as per PAN card" />
            <Field label="2. Father's / Spouse Name" id="parent-name" required placeholder="As per official document" />
          </div>

          {/* Passport photo upload */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flexShrink: 0 }}>
            <FieldLabel>Photograph</FieldLabel>
            <div
              onClick={() => fileRef.current?.click()}
              title="Click to upload passport photo"
              style={{
                width: '120px', height: '148px',
                border: `2px dashed ${photoSrc ? '#2451D6' : '#D1D5DB'}`,
                borderRadius: '10px', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', textAlign: 'center',
                background: photoSrc ? 'transparent' : '#F9FAFB',
                transition: 'border-color 0.18s, background 0.18s',
                overflow: 'hidden', padding: '8px',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#2451D6')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = photoSrc ? '#2451D6' : '#D1D5DB')}
            >
              {photoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photoSrc} alt="Passport" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
              ) : (
                <>
                  <span style={{ fontSize: '28px', marginBottom: '6px' }}>📷</span>
                  <span style={{ fontSize: '10px', color: '#6B7280', lineHeight: 1.5 }}>
                    Affix passport size photo &amp; sign across it
                  </span>
                  <span style={{ fontSize: '10px', color: '#2451D6', marginTop: '6px', fontWeight: 700 }}>
                    Click to upload
                  </span>
                </>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handlePhotoChange}
              />
            </div>
            {photoSrc && (
              <button
                type="button"
                onClick={() => { setPhotoSrc(null); if (fileRef.current) fileRef.current.value = ''; }}
                style={{
                  marginTop: '4px', fontSize: '11px', color: '#EF4444',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: 0, textAlign: 'left',
                }}
              >
                × Remove photo
              </button>
            )}
          </div>
        </div>

        {/* Row 3: Gender / Marital Status / DOB */}
        <Row cols={3}>
          <SelectField label="3a. Gender" id="gender" required options={['Male', 'Female', 'Other']} />
          <SelectField label="3b. Marital Status" id="marital-status" options={['Single', 'Married', 'Divorced', 'Widowed']} />
          <Field label="3c. Date of Birth" id="dob" type="date" required />
        </Row>

        {/* Row 4: Nationality / Status */}
        <Row>
          <Field label="4a. Nationality" id="nationality" placeholder="e.g. Indian" />
          <SelectField label="4b. Resident Status" id="res-status" required
            options={['Resident Individual', 'Non Resident', 'Foreign National']} />
        </Row>

        {/* Row 5: PAN / Aadhaar */}
        <Row>
          <Field label="5a. PAN Number" id="pan" required placeholder="ABCDE1234F" />
          <Field label="5b. Aadhaar Number" id="aadhaar" placeholder="XXXX XXXX XXXX" />
        </Row>

      </SectionCard>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION B — ADDRESS DETAILS
      ═══════════════════════════════════════════════════════════════ */}
      <SectionCard letter="B" title="Address Details">

        {/* 1. Residence address */}
        <Field label="1. Residence Address" id="res-address" required
          placeholder="House No., Street, Area / Locality" />
        <Row cols={3}>
          <Field label="City / Town / Village" id="res-city" placeholder="City" />
          <Field label="Pin Code" id="res-pin" placeholder="000000" />
          <Field label="State" id="res-state" placeholder="State" />
          <Field label="Country" id="res-country" placeholder="India" />
        </Row>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #F0F2F5', margin: '4px 0' }} />

        {/* 2. Contact details */}
        <div>
          <FieldLabel>2. Contact Details</FieldLabel>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px', marginTop: '5px',
          }}>
            <Field label="Tel. (Residential)" id="tel-res" type="tel" placeholder="+91 00000 00000" />
            <Field label="Tel. (Office)" id="tel-off" type="tel" placeholder="+91 00000 00000" />
            <Field label="Mobile No." id="mobile" type="tel" required placeholder="+91 98765 43210" />
            <Field label="Fax" id="fax" placeholder="Fax number" />
            <Field label="Email ID" id="email" type="email" required placeholder="you@example.com" />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #F0F2F5', margin: '4px 0' }} />

        {/* 3. Proof of address */}
        <SelectField
          label="3. Proof of Address Submitted for Residence Address"
          id="address-proof"
          options={['Aadhaar Card', 'Passport', 'Voter ID', 'Utility Bill (Electricity/Water)', 'Bank Statement', 'Driving Licence']}
        />

        {/* Divider */}
        <div style={{ borderTop: '1px solid #F0F2F5', margin: '4px 0' }} />

        {/* 4. Permanent address */}
        <Field
          label="4. Permanent Address (if different / overseas — mandatory for Non-Resident Applicant)"
          id="perm-address"
          placeholder="Leave blank if same as residence address"
        />
        <Row cols={3}>
          <Field label="City / Town / Village" id="perm-city" placeholder="City" />
          <Field label="Pin Code" id="perm-pin" placeholder="000000" />
          <Field label="State" id="perm-state" placeholder="State" />
          <Field label="Country" id="perm-country" placeholder="Country" />
        </Row>

      </SectionCard>

      {/* ═══════════════════════════════════════════════════════════════
          DECLARATION
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        background: '#fff', borderRadius: '16px',
        border: '1.5px solid #E3E7EF',
        boxShadow: '0 4px 24px rgba(11,27,52,0.06)',
        overflow: 'hidden', marginBottom: '28px',
      }}>
        <div style={{
          background: 'linear-gradient(90deg,#0B1B34,#16294A)',
          padding: '14px 22px',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span style={{ fontSize: '16px' }}>📜</span>
          <span style={{
            color: '#fff', fontWeight: 700, fontSize: '13.5px',
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>Declaration</span>
        </div>

        <div style={{ padding: '22px' }}>
          <p style={{
            fontSize: '13.5px', color: '#4B5563', lineHeight: 1.85,
            margin: '0 0 22px',
            background: '#F8FAFC', borderRadius: '10px',
            padding: '16px 18px',
            borderLeft: '3px solid #2451D6',
          }}>
            I hereby declare that the details furnished above are true and correct to the best of my
            knowledge and belief and I undertake to inform you of any changes therein, immediately.
            In case any of the above information is found to be false or untrue or misleading or
            misrepresenting, I am aware that I may be held liable for it.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {/* Signature upload */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <FieldLabel required>Signature of the Applicant</FieldLabel>
              <div
                onClick={() => sigRef.current?.click()}
                title="Click to upload your signature"
                style={{
                  height: '80px',
                  border: `2px dashed ${signatureSrc ? '#2451D6' : '#D1D5DB'}`,
                  borderRadius: '9px',
                  background: signatureSrc ? '#EFF6FF' : '#FAFAFA',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '4px',
                  cursor: 'pointer',
                  transition: 'border-color 0.18s, background 0.18s',
                  overflow: 'hidden',
                  padding: '6px',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#2451D6')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = signatureSrc ? '#2451D6' : '#D1D5DB')}
              >
                {signatureSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={signatureSrc}
                    alt="Signature preview"
                    style={{ maxHeight: '68px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <>
                    <span style={{ fontSize: '20px' }}>✍️</span>
                    <span style={{ fontSize: '11.5px', color: '#6B7280' }}>Click to upload signature</span>
                    <span style={{ fontSize: '10.5px', color: '#9CA3AF' }}>PNG, JPG or JPEG</span>
                  </>
                )}
                <input
                  ref={sigRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  style={{ display: 'none' }}
                  onChange={handleSignatureChange}
                />
              </div>
              {signatureSrc && (
                <button
                  type="button"
                  onClick={() => { setSignatureSrc(null); if (sigRef.current) sigRef.current.value = ''; }}
                  style={{
                    marginTop: '5px', fontSize: '11px', color: '#EF4444',
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                  }}
                >
                  × Remove signature
                </button>
              )}
            </div>

            {/* Date */}
            <Field
              label="Date"
              id="decl-date"
              type="date"
              required
              style={{ width: '190px', flexShrink: 0 }}
            />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ERROR BANNER
      ═══════════════════════════════════════════════════════════════ */}
      {submitError && (
        <div style={{
          background: '#FEF2F2', border: '1.5px solid #FECACA',
          borderRadius: '12px', padding: '14px 18px',
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: '16px', color: '#DC2626', fontSize: '14px',
        }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>⚠️</span>
          <span>{submitError}</span>
          <button
            type="button"
            onClick={() => setSubmitError(null)}
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#DC2626', fontSize: '18px', lineHeight: 1 }}
            aria-label="Dismiss error"
          >×</button>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          ACTION ROW
      ═══════════════════════════════════════════════════════════════ */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '14px',
        background: '#fff', borderRadius: '14px',
        border: '1.5px solid #E3E7EF',
        padding: '18px 22px',
        boxShadow: '0 4px 20px rgba(11,27,52,0.05)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6B7280', fontSize: '13px' }}>
          <span style={{ color: '#22C55E', fontSize: '16px' }}>🔒</span>
          Your information is secure and confidential
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => router.back()}
            disabled={submitting}
            style={{
              padding: '12px 24px', borderRadius: '10px',
              border: '1.5px solid #D1D5DB', background: '#fff',
              color: '#374151', fontSize: '14px', fontWeight: 600,
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.5 : 1,
              transition: 'background 0.18s',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
            onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = '#F3F4F6'; }}
            onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
          >
            ← Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            style={{
              padding: '12px 32px', borderRadius: '10px', border: 'none',
              background: submitting
                ? 'linear-gradient(135deg,#93A8E8 0%,#6BC4C3 100%)'
                : 'linear-gradient(135deg,#2451D6 0%,#0E7C7B 100%)',
              color: '#fff', fontSize: '15px', fontWeight: 700,
              cursor: submitting ? 'not-allowed' : 'pointer',
              boxShadow: submitting ? 'none' : '0 8px 24px rgba(36,81,214,0.35)',
              transition: 'opacity 0.18s, transform 0.18s',
              display: 'flex', alignItems: 'center', gap: '8px',
              minWidth: '190px', justifyContent: 'center',
            }}
            onMouseEnter={e => { if (!submitting) { e.currentTarget.style.opacity = '0.92'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {submitting ? (
              <>
                <span style={{
                  width: '16px', height: '16px', border: '2.5px solid rgba(255,255,255,0.4)',
                  borderTop: '2.5px solid #fff', borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'spin 0.8s linear infinite',
                }} />
                Submitting…
              </>
            ) : (
              <><span>🚀</span> Submit Application</>
            )}
          </button>
        </div>
      </div>

      {/* Spinner keyframe (injected once) */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

    </form>
  );
}
