'use client';

import { useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

/* --- Validation helpers --- */
const PAN_REGEX     = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const EMAIL_REGEX   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX  = /^[6-9]\d{9}$/;
const PIN_REGEX     = /^\d{6}$/;
const AADHAAR_REGEX = /^\d{4} \d{4} \d{4}$/;

function validateField(id: string, value: string): string {
  const v = value.trim();
  switch (id) {
    case 'pan':
      if (!v) return 'PAN number is required';
      if (!PAN_REGEX.test(v)) return 'Invalid PAN \u2014 must be 5 letters, 4 digits, 1 letter (e.g. ABCDE1234F)';
      return '';
    case 'aadhaar':
      if (v && !AADHAAR_REGEX.test(v)) return 'Invalid Aadhaar \u2014 must be 12 digits (XXXX XXXX XXXX)';
      return '';
    case 'mobile':
      if (!v) return 'Mobile number is required';
      if (!MOBILE_REGEX.test(v.replace(/\s|-/g, ''))) return 'Enter a valid 10-digit Indian mobile number';
      return '';
    case 'email':
      if (!v) return 'Email is required';
      if (!EMAIL_REGEX.test(v)) return 'Enter a valid email address';
      return '';
    case 'res-pin':
    case 'perm-pin':
      if (v && !PIN_REGEX.test(v)) return 'Pin code must be 6 digits';
      return '';
    case 'dob': {
      if (!v) return 'Date of birth is required';
      const age = (Date.now() - new Date(v).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      if (age < 18) return 'Applicant must be at least 18 years old';
      if (age > 120) return 'Enter a valid date of birth';
      return '';
    }
    case 'applicant-name':
      if (!v) return 'Applicant name is required';
      if (v.length < 2) return 'Name must be at least 2 characters';
      return '';
    case 'parent-name':
      if (!v) return "Father's / Spouse name is required";
      return '';
    case 'gender':
      if (!v) return 'Gender is required';
      return '';
    case 'res-status':
      if (!v) return 'Resident status is required';
      return '';
    case 'res-address':
      if (!v) return 'Residence address is required';
      return '';
    default:
      return '';
  }
}

/* --- Style helpers --- */
function getInputBorderColor(error: string, touched: boolean, value: string) {
  if (!touched) return '#D1D5DB';
  if (error) return '#EF4444';
  if (value.trim()) return '#16A34A';
  return '#D1D5DB';
}
function getInputShadow(error: string, touched: boolean, value: string) {
  if (!touched) return 'none';
  if (error) return '0 0 0 3px rgba(239,68,68,0.12)';
  if (value.trim()) return '0 0 0 3px rgba(22,163,74,0.12)';
  return 'none';
}

const baseInputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 13px',
  borderRadius: '9px', fontSize: '14px',
  color: '#111827', background: '#FAFAFA',
  outline: 'none', transition: 'border-color 0.18s, box-shadow 0.18s',
  boxSizing: 'border-box',
};

/* --- Tiny primitives --- */
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

function ValidationMsg({ error, touched, value }: { error: string; touched: boolean; value: string }) {
  if (!touched) return null;
  if (error) return (
    <span style={{ fontSize: '11px', color: '#DC2626', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
      <span>&#9888;</span> {error}
    </span>
  );
  if (value.trim()) return (
    <span style={{ fontSize: '11px', color: '#16A34A', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
      <span>&#10003;</span> Looks good
    </span>
  );
  return null;
}

/* --- Validated Field --- */
function ValidatedField({
  label, id, type = 'text', placeholder = '', required = false,
  style = {}, errors, touched, values, onChange, onBlur,
  maxLength, inputMode,
}: {
  label: string; id: string; type?: string;
  placeholder?: string; required?: boolean; style?: React.CSSProperties;
  errors: Record<string, string>; touched: Record<string, boolean>;
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
  onBlur: (id: string) => void;
  maxLength?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}) {
  const error = errors[id] ?? '';
  const isTouched = touched[id] ?? false;
  const value = values[id] ?? '';
  const borderColor = getInputBorderColor(error, isTouched, value);
  const shadow = getInputShadow(error, isTouched, value);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        id={id} name={id} type={type} placeholder={placeholder}
        value={value} maxLength={maxLength} inputMode={inputMode}
        style={{ ...baseInputStyle, border: `1.5px solid ${borderColor}`, boxShadow: shadow }}
        onChange={e => onChange(id, e.target.value)}
        onBlur={() => onBlur(id)}
        onFocus={e => { e.target.style.borderColor = '#2451D6'; e.target.style.boxShadow = '0 0 0 3px rgba(36,81,214,0.12)'; }}
      />
      <ValidationMsg error={error} touched={isTouched} value={value} />
    </div>
  );
}

/* --- Validated Select --- */
function ValidatedSelect({
  label, id, options, required = false,
  errors, touched, values, onChange, onBlur,
}: {
  label: string; id: string; options: string[]; required?: boolean;
  errors: Record<string, string>; touched: Record<string, boolean>;
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
  onBlur: (id: string) => void;
}) {
  const error = errors[id] ?? '';
  const isTouched = touched[id] ?? false;
  const value = values[id] ?? '';
  const borderColor = getInputBorderColor(error, isTouched, value);
  const shadow = getInputShadow(error, isTouched, value);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <select
        id={id} name={id} required={required} value={value}
        style={{ ...baseInputStyle, border: `1.5px solid ${borderColor}`, boxShadow: shadow, appearance: 'none', cursor: 'pointer', paddingRight: '32px' }}
        onChange={e => onChange(id, e.target.value)}
        onBlur={() => onBlur(id)}
        onFocus={e => { e.target.style.borderColor = '#2451D6'; e.target.style.boxShadow = '0 0 0 3px rgba(36,81,214,0.12)'; }}
      >
        <option value="" disabled>Select&hellip;</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <span style={{ position: 'absolute', right: '12px', top: '34px', pointerEvents: 'none', color: '#6B7280', fontSize: '11px' }}>&#9662;</span>
      <ValidationMsg error={error} touched={isTouched} value={value} />
    </div>
  );
}

/* --- Plain Field & Select --- */
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 13px',
  border: '1.5px solid #D1D5DB', borderRadius: '9px',
  fontSize: '14px', color: '#111827', background: '#FAFAFA',
  outline: 'none', transition: 'border-color 0.18s, box-shadow 0.18s',
  boxSizing: 'border-box',
};

function Field({ label, id, type = 'text', placeholder = '', required = false, style = {} }: {
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

function SelectField({ label, id, options, required = false }: {
  label: string; id: string; options: string[]; required?: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <select
        id={id} name={id} defaultValue="" required={required}
        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '32px' }}
        onFocus={e => { e.target.style.borderColor = '#2451D6'; e.target.style.boxShadow = '0 0 0 3px rgba(36,81,214,0.12)'; }}
        onBlur={e => { e.target.style.borderColor = '#D1D5DB'; e.target.style.boxShadow = 'none'; }}
      >
        <option value="" disabled>Select&hellip;</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <span style={{ position: 'absolute', right: '12px', top: '34px', pointerEvents: 'none', color: '#6B7280', fontSize: '11px' }}>&#9662;</span>
    </div>
  );
}

/* --- Layout helpers --- */
function SectionCard({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff', borderRadius: '16px',
      border: '1.5px solid #E3E7EF',
      boxShadow: '0 4px 24px rgba(11,27,52,0.06)',
      overflow: 'hidden', marginBottom: '24px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(90deg,#0B1B34 0%,#16294A 100%)', padding: '14px 22px' }}>
        <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#2451D6', color: '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800 }}>{letter}</span>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '13.5px', letterSpacing: '1px', textTransform: 'uppercase' }}>{title}</span>
      </div>
      <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>{children}</div>
    </div>
  );
}

function Row({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${cols === 3 ? '140px' : '200px'}, 1fr))`, gap: '16px' }}>
      {children}
    </div>
  );
}

/* --- Image upload helper --- */
async function uploadImage(base64: string, folder: string): Promise<string | null> {
  try {
    const res = await fetch('/api/upload-image', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: base64, folder }),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json.url as string) ?? null;
  } catch { return null; }
}

const VALIDATED_IDS = ['pan', 'aadhaar', 'mobile', 'email', 'res-pin', 'perm-pin', 'dob', 'applicant-name', 'parent-name', 'gender', 'res-status', 'res-address'];

/* --- Main form --- */
export function ApplicationForm() {
  const router = useRouter();
  const [photoSrc, setPhotoSrc] = useState<string | null>(null);
  const [signatureSrc, setSignatureSrc] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const sigRef  = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries(VALIDATED_IDS.map(id => [id, ''])));
  const [errors, setErrors] = useState<Record<string, string>>(() => Object.fromEntries(VALIDATED_IDS.map(id => [id, ''])));
  const [touched, setTouched] = useState<Record<string, boolean>>(() => Object.fromEntries(VALIDATED_IDS.map(id => [id, false])));

  const handleChange = useCallback((id: string, raw: string) => {
    let value = raw;
    if (id === 'pan') value = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
    if (id === 'aadhaar') {
      const digits = raw.replace(/\D/g, '').slice(0, 12);
      value = digits.replace(/(\d{4})(\d{0,4})(\d{0,4})/, (_: string, a: string, b: string, c: string) => [a, b, c].filter(Boolean).join(' '));
    }
    if (id === 'mobile') value = raw.replace(/\D/g, '').slice(0, 10);
    if (id === 'res-pin' || id === 'perm-pin') value = raw.replace(/\D/g, '').slice(0, 6);
    setValues(prev => ({ ...prev, [id]: value }));
    setErrors(prev => ({ ...prev, [id]: touched[id] ? validateField(id, value) : prev[id] }));
  }, [touched]);

  const handleBlur = useCallback((id: string) => {
    setTouched(prev => ({ ...prev, [id]: true }));
    setErrors(prev => ({ ...prev, [id]: validateField(id, values[id] ?? '') }));
  }, [values]);

  const validateAll = () => {
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    for (const id of VALIDATED_IDS) { newTouched[id] = true; newErrors[id] = validateField(id, values[id] ?? ''); }
    setTouched(newTouched); setErrors(newErrors);
    return Object.values(newErrors).every(e => !e);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { const r = new FileReader(); r.onload = ev => setPhotoSrc(ev.target?.result as string); r.readAsDataURL(file); }
  };
  const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { const r = new FileReader(); r.onload = ev => setSignatureSrc(ev.target?.result as string); r.readAsDataURL(file); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!validateAll()) { setSubmitError('Please fix the highlighted errors before submitting.'); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    setSubmitting(true); setSubmitError(null);
    try {
      const f = formRef.current;
      const val = (id: string) => values[id] !== undefined ? values[id] : (f.querySelector<HTMLInputElement | HTMLSelectElement>(`#${id}`)?.value ?? '').trim();
      const [photoUrl, signatureUrl] = await Promise.all([
        photoSrc ? uploadImage(photoSrc, 'investment-applications/photos') : Promise.resolve(null),
        signatureSrc ? uploadImage(signatureSrc, 'investment-applications/signatures') : Promise.resolve(null),
      ]);
      const res = await fetch('/api/submit-investment', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          applicantName: val('applicant-name'), parentName: val('parent-name'), gender: val('gender'),
          maritalStatus: val('marital-status'), dob: val('dob'), nationality: val('nationality'),
          residentStatus: val('res-status'), pan: val('pan'), aadhaar: val('aadhaar'),
          resAddress: val('res-address'), resCity: val('res-city'), resPin: val('res-pin'),
          resState: val('res-state'), resCountry: val('res-country'),
          telRes: val('tel-res'), telOff: val('tel-off'), mobile: val('mobile'), fax: val('fax'), email: val('email'),
          addressProof: val('address-proof'),
          permAddress: val('perm-address'), permCity: val('perm-city'), permPin: val('perm-pin'),
          permState: val('perm-state'), permCountry: val('perm-country'),
          declarationDate: val('decl-date'), photoUrl, signatureUrl,
        }),
      });
      if (!res.ok) { const err = await res.json().catch(() => ({ error: 'Unknown error' })); throw new Error(err.error ?? 'Submission failed'); }
      setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally { setSubmitting(false); }
  };

  if (submitted) {
    return (
      <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid #E3E7EF', boxShadow: '0 8px 40px rgba(11,27,52,0.08)', padding: '72px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '20px' }}>&#127881;</div>
        <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0B1B34', marginBottom: '10px' }}>Application Submitted!</h2>
        <p style={{ color: '#5A6478', fontSize: '15px', lineHeight: 1.75, maxWidth: '480px', margin: '0 auto 32px' }}>
          Thank you for your application. Our investment advisor will reach out within{' '}
          <strong style={{ color: '#0B1B34' }}>1&ndash;2 business days</strong> to discuss your investment journey.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => router.push('/investments')} style={{ padding: '12px 28px', borderRadius: '10px', border: '1.5px solid #D1D5DB', background: '#fff', color: '#374151', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
            &larr; Back to Investments
          </button>
          <button onClick={() => { setSubmitted(false); window.scrollTo({ top: 0 }); }} style={{ padding: '12px 28px', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg,#2451D6,#0E7C7B)', color: '#fff', fontSize: '14px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 6px 20px rgba(36,81,214,0.3)' }}>
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  const vp = { errors, touched, values, onChange: handleChange, onBlur: handleBlur };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>

      <SectionCard letter="A" title="Identity Details">
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ValidatedField label="1. Name of the Applicant" id="applicant-name" required placeholder="Full name as per PAN card" {...vp} />
            <ValidatedField label="2. Father's / Spouse Name" id="parent-name" required placeholder="As per official document" {...vp} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flexShrink: 0 }}>
            <FieldLabel>Photograph</FieldLabel>
            <div
              onClick={() => fileRef.current?.click()} title="Click to upload passport photo"
              style={{ width: '120px', height: '148px', border: `2px dashed ${photoSrc ? '#2451D6' : '#D1D5DB'}`, borderRadius: '10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: photoSrc ? 'transparent' : '#F9FAFB', transition: 'border-color 0.18s', overflow: 'hidden', padding: '8px' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#2451D6')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = photoSrc ? '#2451D6' : '#D1D5DB')}
            >
              {photoSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photoSrc} alt="Passport" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
              ) : (
                <>
                  <span style={{ fontSize: '28px', marginBottom: '6px' }}>&#128247;</span>
                  <span style={{ fontSize: '10px', color: '#6B7280', lineHeight: 1.5 }}>Affix passport size photo &amp; sign across it</span>
                  <span style={{ fontSize: '10px', color: '#2451D6', marginTop: '6px', fontWeight: 700 }}>Click to upload</span>
                </>
              )}
              <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handlePhotoChange} />
            </div>
            {photoSrc && (
              <button type="button" onClick={() => { setPhotoSrc(null); if (fileRef.current) fileRef.current.value = ''; }}
                style={{ marginTop: '4px', fontSize: '11px', color: '#EF4444', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                &times; Remove photo
              </button>
            )}
          </div>
        </div>

        <Row cols={3}>
          <ValidatedSelect label="3a. Gender" id="gender" required options={['Male', 'Female', 'Other']} {...vp} />
          <SelectField label="3b. Marital Status" id="marital-status" options={['Single', 'Married', 'Divorced', 'Widowed']} />
          <ValidatedField label="3c. Date of Birth" id="dob" type="date" required {...vp} />
        </Row>

        <Row>
          <Field label="4a. Nationality" id="nationality" placeholder="e.g. Indian" />
          <ValidatedSelect label="4b. Resident Status" id="res-status" required options={['Resident Individual', 'Non Resident', 'Foreign National']} {...vp} />
        </Row>

        <Row>
          <div>
            <ValidatedField label="5a. PAN Number" id="pan" required placeholder="ABCDE1234F" maxLength={10} {...vp} />
            {values['pan'] && !errors['pan'] && touched['pan'] && (
              <span style={{ fontSize: '10.5px', color: '#6B7280', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                &#128289; Auto-converted to uppercase
              </span>
            )}
          </div>
          <ValidatedField label="5b. Aadhaar Number" id="aadhaar" placeholder="XXXX XXXX XXXX" maxLength={14} inputMode="numeric" {...vp} />
        </Row>
      </SectionCard>

      <SectionCard letter="B" title="Address Details">
        <ValidatedField label="1. Residence Address" id="res-address" required placeholder="House No., Street, Area / Locality" {...vp} />
        <Row cols={3}>
          <Field label="City / Town / Village" id="res-city" placeholder="City" />
          <ValidatedField label="Pin Code" id="res-pin" placeholder="000000" inputMode="numeric" maxLength={6} {...vp} />
          <Field label="State" id="res-state" placeholder="State" />
          <Field label="Country" id="res-country" placeholder="India" />
        </Row>

        <div style={{ borderTop: '1px solid #F0F2F5', margin: '4px 0' }} />

        <div>
          <FieldLabel>2. Contact Details</FieldLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginTop: '5px' }}>
            <Field label="Tel. (Residential)" id="tel-res" type="tel" placeholder="+91 00000 00000" />
            <Field label="Tel. (Office)" id="tel-off" type="tel" placeholder="+91 00000 00000" />
            <ValidatedField label="Mobile No." id="mobile" type="tel" required placeholder="9876543210" inputMode="numeric" maxLength={10} {...vp} />
            <Field label="Fax" id="fax" placeholder="Fax number" />
            <ValidatedField label="Email ID" id="email" type="email" required placeholder="you@example.com" {...vp} />
          </div>
        </div>

        <div style={{ borderTop: '1px solid #F0F2F5', margin: '4px 0' }} />

        <SelectField label="3. Proof of Address Submitted for Residence Address" id="address-proof"
          options={['Aadhaar Card', 'Passport', 'Voter ID', 'Utility Bill (Electricity/Water)', 'Bank Statement', 'Driving Licence']} />

        <div style={{ borderTop: '1px solid #F0F2F5', margin: '4px 0' }} />

        <Field label="4. Permanent Address (if different / overseas &mdash; mandatory for Non-Resident Applicant)" id="perm-address" placeholder="Leave blank if same as residence address" />
        <Row cols={3}>
          <Field label="City / Town / Village" id="perm-city" placeholder="City" />
          <ValidatedField label="Pin Code" id="perm-pin" placeholder="000000" inputMode="numeric" maxLength={6} {...vp} />
          <Field label="State" id="perm-state" placeholder="State" />
          <Field label="Country" id="perm-country" placeholder="Country" />
        </Row>
      </SectionCard>

      {/* Declaration */}
      <div style={{ background: '#fff', borderRadius: '16px', border: '1.5px solid #E3E7EF', boxShadow: '0 4px 24px rgba(11,27,52,0.06)', overflow: 'hidden', marginBottom: '28px' }}>
        <div style={{ background: 'linear-gradient(90deg,#0B1B34,#16294A)', padding: '14px 22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '16px' }}>&#128220;</span>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: '13.5px', letterSpacing: '1px', textTransform: 'uppercase' }}>Declaration</span>
        </div>
        <div style={{ padding: '22px' }}>
          <p style={{ fontSize: '13.5px', color: '#4B5563', lineHeight: 1.85, margin: '0 0 22px', background: '#F8FAFC', borderRadius: '10px', padding: '16px 18px', borderLeft: '3px solid #2451D6' }}>
            I hereby declare that the details furnished above are true and correct to the best of my knowledge and belief
            and I undertake to inform you of any changes therein, immediately. In case any of the above information is
            found to be false or untrue or misleading or misrepresenting, I am aware that I may be held liable for it.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <FieldLabel required>Signature of the Applicant</FieldLabel>
              <div
                onClick={() => sigRef.current?.click()} title="Click to upload your signature"
                style={{ height: '80px', border: `2px dashed ${signatureSrc ? '#2451D6' : '#D1D5DB'}`, borderRadius: '9px', background: signatureSrc ? '#EFF6FF' : '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '4px', cursor: 'pointer', transition: 'border-color 0.18s', overflow: 'hidden', padding: '6px' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#2451D6')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = signatureSrc ? '#2451D6' : '#D1D5DB')}
              >
                {signatureSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={signatureSrc} alt="Signature preview" style={{ maxHeight: '68px', maxWidth: '100%', objectFit: 'contain' }} />
                ) : (
                  <>
                    <span style={{ fontSize: '20px' }}>&#9997;&#65039;</span>
                    <span style={{ fontSize: '11.5px', color: '#6B7280' }}>Click to upload signature</span>
                    <span style={{ fontSize: '10.5px', color: '#9CA3AF' }}>PNG, JPG or JPEG</span>
                  </>
                )}
                <input ref={sigRef} type="file" accept="image/png,image/jpeg,image/jpg" style={{ display: 'none' }} onChange={handleSignatureChange} />
              </div>
              {signatureSrc && (
                <button type="button" onClick={() => { setSignatureSrc(null); if (sigRef.current) sigRef.current.value = ''; }}
                  style={{ marginTop: '5px', fontSize: '11px', color: '#EF4444', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  &times; Remove signature
                </button>
              )}
            </div>
            <Field label="Date" id="decl-date" type="date" required style={{ width: '190px', flexShrink: 0 }} />
          </div>
        </div>
      </div>

      {submitError && (
        <div style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: '12px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: '#DC2626', fontSize: '14px' }}>
          <span style={{ fontSize: '18px', flexShrink: 0 }}>&#9888;&#65039;</span>
          <span>{submitError}</span>
          <button type="button" onClick={() => setSubmitError(null)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#DC2626', fontSize: '18px', lineHeight: 1 }} aria-label="Dismiss error">&times;</button>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', background: '#fff', borderRadius: '14px', border: '1.5px solid #E3E7EF', padding: '18px 22px', boxShadow: '0 4px 20px rgba(11,27,52,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6B7280', fontSize: '13px' }}>
          <span style={{ color: '#22C55E', fontSize: '16px' }}>&#128274;</span>
          Your information is secure and confidential
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => router.back()} disabled={submitting}
            style={{ padding: '12px 24px', borderRadius: '10px', border: '1.5px solid #D1D5DB', background: '#fff', color: '#374151', fontSize: '14px', fontWeight: 600, cursor: submitting ? 'not-allowed' : 'pointer', opacity: submitting ? 0.5 : 1, transition: 'background 0.18s', display: 'flex', alignItems: 'center', gap: '6px' }}
            onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = '#F3F4F6'; }}
            onMouseLeave={e => (e.currentTarget.style.background = '#fff')}>
            &larr; Cancel
          </button>
          <button type="submit" disabled={submitting}
            style={{ padding: '12px 32px', borderRadius: '10px', border: 'none', background: submitting ? 'linear-gradient(135deg,#93A8E8 0%,#6BC4C3 100%)' : 'linear-gradient(135deg,#2451D6 0%,#0E7C7B 100%)', color: '#fff', fontSize: '15px', fontWeight: 700, cursor: submitting ? 'not-allowed' : 'pointer', boxShadow: submitting ? 'none' : '0 8px 24px rgba(36,81,214,0.35)', transition: 'opacity 0.18s, transform 0.18s', display: 'flex', alignItems: 'center', gap: '8px', minWidth: '190px', justifyContent: 'center' }}
            onMouseEnter={e => { if (!submitting) { e.currentTarget.style.opacity = '0.92'; e.currentTarget.style.transform = 'translateY(-1px)'; } }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            {submitting ? (
              <>
                <span style={{ width: '16px', height: '16px', border: '2.5px solid rgba(255,255,255,0.4)', borderTop: '2.5px solid #fff', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                Submitting&hellip;
              </>
            ) : (
              <><span>&#128640;</span> Submit Application</>
            )}
          </button>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  );
}
