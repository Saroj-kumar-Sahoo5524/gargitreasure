'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

/* ─── reusable field components ──────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      display: 'block', fontSize: '11.5px', fontWeight: 600,
      color: '#4B5563', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px',
    }}>
      {children}
    </label>
  );
}

function Field({
  label, id, type = 'text', placeholder = '', required = false, style = {},
}: { label: string; id: string; type?: string; placeholder?: string; required?: boolean; style?: React.CSSProperties }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', ...style }}>
      <Label>{label}</Label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        style={{
          width: '100%', padding: '9px 12px',
          border: '1.5px solid #D1D5DB', borderRadius: '8px',
          fontSize: '14px', color: '#111827', background: '#FAFAFA',
          outline: 'none', transition: 'border-color 0.18s', boxSizing: 'border-box',
        }}
        onFocus={e => (e.target.style.borderColor = '#2451D6')}
        onBlur={e => (e.target.style.borderColor = '#D1D5DB')}
      />
    </div>
  );
}

function SelectField({
  label, id, options, style = {},
}: { label: string; id: string; options: string[]; style?: React.CSSProperties }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', ...style }}>
      <Label>{label}</Label>
      <select
        id={id}
        defaultValue=""
        style={{
          width: '100%', padding: '9px 12px',
          border: '1.5px solid #D1D5DB', borderRadius: '8px',
          fontSize: '14px', color: '#111827', background: '#FAFAFA',
          outline: 'none', transition: 'border-color 0.18s', boxSizing: 'border-box',
          appearance: 'none', cursor: 'pointer',
        }}
        onFocus={e => (e.target.style.borderColor = '#2451D6')}
        onBlur={e => (e.target.style.borderColor = '#D1D5DB')}
      >
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function SectionHeading({ letter, title }: { letter: string; title: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      background: 'linear-gradient(90deg,#0B1B34,#16294A)',
      borderRadius: '8px', padding: '10px 16px', marginBottom: '20px',
    }}>
      <span style={{
        width: '26px', height: '26px', borderRadius: '50%',
        background: '#2451D6', color: '#fff', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '13px', fontWeight: 700,
      }}>{letter}</span>
      <span style={{
        color: '#fff', fontWeight: 700, fontSize: '13.5px',
        letterSpacing: '0.8px', textTransform: 'uppercase',
      }}>{title}</span>
    </div>
  );
}

/* ─── main modal ─────────────────────────────────────────────────────────── */

export function ApplicationFormModal({ open, onClose }: Props) {
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setPhotoSrc(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(11,27,52,0.72)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          padding: '20px 16px', overflowY: 'auto',
          animation: 'modalFadeIn 0.22s ease',
        }}
      >
        {/* ── Modal card ── */}
        <div style={{
          background: '#fff', borderRadius: '20px',
          width: '100%', maxWidth: '780px',
          boxShadow: '0 32px 80px rgba(11,27,52,0.35)',
          animation: 'modalSlideUp 0.28s cubic-bezier(0.22,1,0.36,1)',
          position: 'relative', margin: 'auto',
        }}>

          {/* ── Modal Header ── */}
          <div style={{
            background: 'linear-gradient(135deg,#0B1B34 0%,#16294A 60%,#0E7C7B 100%)',
            borderRadius: '20px 20px 0 0',
            padding: '22px 28px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10.5px', letterSpacing: '1.8px', textTransform: 'uppercase', marginBottom: '4px' }}>
                Gargi Treasure · Investment
              </div>
              <h2 style={{ color: '#fff', fontSize: '19px', fontWeight: 800, margin: 0 }}>
                Application Form
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '4px 0 0' }}>
                Fill in <strong style={{ color: 'rgba(255,255,255,0.8)' }}>ENGLISH</strong> · Use <strong style={{ color: 'rgba(255,255,255,0.8)' }}>BLOCK LETTERS</strong>
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                width: '34px', height: '34px', borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.1)', color: '#fff',
                fontSize: '18px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.18s', flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.24)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >×</button>
          </div>

          {/* ── Body ── */}
          {submitted ? (
            /* Success state */
            <div style={{ padding: '60px 28px', textAlign: 'center' }}>
              <div style={{ fontSize: '52px', marginBottom: '16px' }}>🎉</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0B1B34', marginBottom: '8px' }}>
                Application Submitted!
              </h3>
              <p style={{ color: '#5A6478', fontSize: '15px', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto 28px' }}>
                Thank you. Our advisor will contact you within 1–2 business days to begin your investment journey.
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: '12px 32px', borderRadius: '10px', border: 'none',
                  background: 'linear-gradient(135deg,#2451D6,#0E7C7B)',
                  color: '#fff', fontWeight: 700, fontSize: '15px', cursor: 'pointer',
                }}
              >Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ padding: '24px 28px 28px' }}>

              {/* ═══ SECTION A — IDENTITY DETAILS ═══ */}
              <SectionHeading letter="A" title="Identity Details" />

              {/* Name fields + photo upload */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '14px', flexWrap: 'wrap' }}>
                {/* Left: names */}
                <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Field label="1. Name of the Applicant *" id="applicant-name" required placeholder="Full name as per PAN card" />
                  <Field label="2. Father's / Spouse Name *" id="parent-name" required placeholder="As per official document" />
                </div>

                {/* Right: passport photo */}
                <div
                  onClick={() => fileRef.current?.click()}
                  title="Click to upload passport photo"
                  style={{
                    width: '110px', flexShrink: 0, alignSelf: 'flex-start',
                    border: '2px dashed #D1D5DB', borderRadius: '10px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', padding: '10px 6px', cursor: 'pointer',
                    textAlign: 'center', background: photoSrc ? 'transparent' : '#F9FAFB',
                    transition: 'border-color 0.18s', minHeight: '120px', overflow: 'hidden',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#2451D6')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#D1D5DB')}
                >
                  {photoSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photoSrc} alt="Passport" style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '6px' }} />
                  ) : (
                    <>
                      <span style={{ fontSize: '26px', marginBottom: '5px' }}>📷</span>
                      <span style={{ fontSize: '9.5px', color: '#6B7280', lineHeight: 1.4 }}>
                        Affix passport size photo &amp; sign across it
                      </span>
                      <span style={{ fontSize: '9.5px', color: '#2451D6', marginTop: '5px', fontWeight: 600 }}>Click to upload</span>
                    </>
                  )}
                  <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoChange} />
                </div>
              </div>

              {/* Row 3: Gender / Marital Status / DOB */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '12px' }}>
                <SelectField label="3a. Gender *" id="gender" options={['Male', 'Female', 'Other']} />
                <SelectField label="3b. Marital Status" id="marital-status" options={['Single', 'Married', 'Divorced', 'Widowed']} />
                <Field label="3c. Date of Birth *" id="dob" type="date" required />
              </div>

              {/* Row 4: Nationality / Resident Status */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px', marginBottom: '12px' }}>
                <Field label="4a. Nationality" id="nationality" placeholder="e.g. Indian" />
                <SelectField label="4b. Status *" id="res-status" options={['Resident Individual', 'Non Resident', 'Foreign National']} />
              </div>

              {/* Row 5: PAN / Aadhaar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px', marginBottom: '28px' }}>
                <Field label="5a. PAN Number *" id="pan" required placeholder="ABCDE1234F" />
                <Field label="5b. Aadhaar Number" id="aadhaar" placeholder="XXXX XXXX XXXX" />
              </div>

              {/* ═══ SECTION B — ADDRESS DETAILS ═══ */}
              <SectionHeading letter="B" title="Address Details" />

              {/* 1. Residence address */}
              <Field
                label="1. Residence Address *"
                id="res-address"
                required
                placeholder="House No., Street, Area / Locality"
                style={{ marginBottom: '12px' }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: '12px', marginBottom: '16px' }}>
                <Field label="City / Town / Village" id="res-city" placeholder="City" />
                <Field label="Pin Code" id="res-pin" placeholder="000000" />
                <Field label="State" id="res-state" placeholder="State" />
                <Field label="Country" id="res-country" placeholder="India" />
              </div>

              {/* 2. Contact details */}
              <div style={{ marginBottom: '6px' }}><Label>2. Contact Details</Label></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '16px' }}>
                <Field label="Tel. (Residential)" id="tel-res" type="tel" placeholder="+91 00000 00000" />
                <Field label="Tel. (Office)" id="tel-off" type="tel" placeholder="+91 00000 00000" />
                <Field label="Mobile No. *" id="mobile" type="tel" required placeholder="+91 98765 43210" />
                <Field label="Fax" id="fax" placeholder="Fax number" />
                <Field label="Email ID *" id="email" type="email" required placeholder="you@example.com" />
              </div>

              {/* 3. Proof of address */}
              <SelectField
                label="3. Proof of Address Submitted for Residence"
                id="address-proof"
                options={['Aadhaar Card', 'Passport', 'Voter ID', 'Utility Bill', 'Bank Statement', 'Driving Licence']}
                style={{ marginBottom: '16px' }}
              />

              {/* 4. Permanent address */}
              <Field
                label="4. Permanent Address (if different / overseas — mandatory for Non-Resident Applicant)"
                id="perm-address"
                placeholder="Leave blank if same as residence address"
                style={{ marginBottom: '12px' }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: '12px', marginBottom: '28px' }}>
                <Field label="City / Town / Village" id="perm-city" placeholder="City" />
                <Field label="Pin Code" id="perm-pin" placeholder="000000" />
                <Field label="State" id="perm-state" placeholder="State" />
                <Field label="Country" id="perm-country" placeholder="Country" />
              </div>

              {/* ═══ DECLARATION ═══ */}
              <div style={{
                background: '#F8FAFC', border: '1.5px solid #E3E7EF',
                borderRadius: '10px', padding: '18px 20px', marginBottom: '24px',
              }}>
                <h3 style={{
                  fontSize: '12.5px', fontWeight: 800, color: '#0B1B34',
                  textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px',
                }}>Declaration</h3>
                <p style={{ fontSize: '13px', color: '#5A6478', lineHeight: 1.75, margin: '0 0 18px' }}>
                  I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief and I undertake to inform you of any changes therein, immediately. In case any of the above information is found to be false or untrue or misleading or misrepresenting, I am aware that I may be held liable for it.
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                  <div style={{ flex: 1, minWidth: '180px' }}>
                    <Label>Signature of the Applicant</Label>
                    <div style={{
                      height: '50px', border: '1.5px dashed #D1D5DB', borderRadius: '8px',
                      background: '#fff', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', color: '#9CA3AF', fontSize: '13px',
                    }}>✍️ &nbsp;Sign here</div>
                  </div>
                  <Field label="Date *" id="decl-date" type="date" required style={{ width: '170px', flexShrink: 0 }} />
                </div>
              </div>

              {/* ═══ Actions ═══ */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    padding: '11px 22px', borderRadius: '10px',
                    border: '1.5px solid #D1D5DB', background: '#fff',
                    color: '#374151', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                    transition: 'background 0.18s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#F3F4F6')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
                >Cancel</button>

                <button
                  type="submit"
                  style={{
                    padding: '11px 30px', borderRadius: '10px', border: 'none',
                    background: 'linear-gradient(135deg,#2451D6 0%,#0E7C7B 100%)',
                    color: '#fff', fontSize: '14px', fontWeight: 700, cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(36,81,214,0.35)',
                    transition: 'opacity 0.18s, transform 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >🚀 &nbsp;Submit Application</button>
              </div>

            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes modalSlideUp { from { opacity:0; transform:translateY(30px) scale(0.97) }
                                   to  { opacity:1; transform:translateY(0)    scale(1)    } }
      `}</style>
    </>
  );
}

