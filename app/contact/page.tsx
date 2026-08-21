"use client";

import { useState } from "react";
import { toast, Toaster } from "sonner";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import styles from "./page.module.css";

const destinations = ["India", "Bhutan", "Nepal", "Sri Lanka"];
const experienceTypes = [
  "Wildlife & Safaris",
  "Wellness & Ayurveda",
  "Trekking & Mountains",
  "Spiritual & Cultural",
  "Honeymoon",
  "Family",
  "Photography",
  "Culinary",
];
const budgets = [
  "Under $5,000 pp",
  "$5,000–$10,000 pp",
  "$10,000–$20,000 pp",
  "$20,000+ pp",
];

// ── Validation helpers ────────────────────────────────────────────────────────

function validateEmail(email: string): string | null {
  if (!email.trim()) return "Email address is required.";
  // RFC-5322 simplified pattern
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!re.test(email.trim())) return "Please enter a valid email address.";
  return null;
}

function validatePhone(phone: string): string | null {
  if (!phone.trim()) return null; // optional field
  // Try to parse internationally; fall back to a raw digit-count check
  const parsed = parsePhoneNumberFromString(phone.trim());
  if (parsed && parsed.isValid()) return null;
  // Accept if it looks like a number with 7–15 digits after stripping spaces/dashes
  const digits = phone.replace(/[\s\-().+]/g, "");
  if (/^\d{7,15}$/.test(digits)) return null;
  return "Please enter a valid phone number (e.g. +1 212 000 0000).";
}

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  travelDates: string;
  groupSize: string;
  budget: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  travelDates: "",
  groupSize: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [selectedDests, setSelectedDests] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const toggleDest = (d: string) =>
    setSelectedDests((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );

  const toggleExp = (e: string) =>
    setSelectedExp((prev) =>
      prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]
    );

  // Live-validate a single field after it has been touched
  const validateField = (name: keyof FormState, value: string): string | null => {
    switch (name) {
      case "firstName":
        return value.trim() ? null : "First name is required.";
      case "lastName":
        return value.trim() ? null : "Last name is required.";
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      default:
        return null;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormState]) {
      const err = validateField(name as keyof FormState, value);
      setErrors((prev) => ({ ...prev, [name]: err ?? undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name as keyof FormState, value);
    setErrors((prev) => ({ ...prev, [name]: err ?? undefined }));
  };

  // Full validation before submit
  const validateAll = (): boolean => {
    const newErrors: FieldErrors = {};
    const fields: (keyof FormState)[] = ["firstName", "lastName", "email", "phone"];
    let valid = true;
    fields.forEach((f) => {
      const err = validateField(f, form[f]);
      if (err) {
        newErrors[f] = err;
        valid = false;
      }
    });
    setErrors(newErrors);
    setTouched({ firstName: true, lastName: true, email: true, phone: true });
    return valid;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    if (!validateAll()) {
      toast.warning("Please fix the highlighted fields before submitting.", {
        description: "Check the form for validation errors.",
        duration: 4000,
      });
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Sending your enquiry…");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          destinations: selectedDests,
          experiences: selectedExp,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      toast.success("Enquiry sent — we'll be in touch shortly!", {
        id: toastId,
        description: "A specialist will respond swiftly.",
        duration: 6000,
      });
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      toast.error("Failed to send enquiry", {
        id: toastId,
        description: message,
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      num: "01",
      title: "We read your enquiry",
      text: "A specialist reviews your message and begins researching your ideal journey.",
    },
    {
      num: "02",
      title: "We send a starting point",
      text: "Within 24–48 hours, we respond with an outline itinerary and initial pricing.",
    },
    {
      num: "03",
      title: "We refine together",
      text: "We iterate until the journey is exactly right. No fees, no obligation.",
    },
    {
      num: "04",
      title: "We handle everything",
      text: "Once you confirm, we manage every detail — flights, hotels, guides, transfers.",
    },
  ];

  return (
    <main>
      {/* Sonner toast container */}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: {
            fontFamily: "var(--fb, sans-serif)",
            fontSize: "0.875rem",
          },
        }}
      />

      <div className={styles.page}>
        {/* ── LEFT — FORM ─────────────────────────────────── */}
        <div className={styles.formCol}>
          <span className={styles.formColKicker}>Get in touch</span>
          <h1 className={styles.formColTitle}>
            Tell us about your{" "}
            <em className={styles.formColTitleEm}>ideal journey</em>
          </h1>
          <p className={styles.formColSub}>
            Share your travel interests and we will design a private, tailor-made
            itinerary around them. No fees for the consultation. We respond within
            24 hours.
          </p>

          {submitted ? (
            <div className={styles.formSuccess} aria-live="polite">
              <h2 className={styles.formSuccessTitle}>
                Thank you — we&apos;ll be in touch shortly.
              </h2>
              <p className={styles.formSuccessText}>
                One of our travel specialists has received your enquiry and will
                respond with an initial outline for your journey.
                We look forward to designing something extraordinary together.
              </p>
            </div>
          ) : (
            <form
              className={styles.form}
              onSubmit={handleSubmit}
              aria-label="Travel enquiry form"
              noValidate
            >
              {/* Name row */}
              <div className={styles.formRow}>
                <div className={`${styles.formField} ${errors.firstName ? styles.formFieldError : ""}`}>
                  <label className={styles.formLabel} htmlFor="firstName">
                    First name <span aria-hidden="true" className={styles.required}>*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    className={styles.formInput}
                    type="text"
                    placeholder="Alexandra"
                    value={form.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <span id="firstName-error" className={styles.errorMsg} role="alert">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className={`${styles.formField} ${errors.lastName ? styles.formFieldError : ""}`}>
                  <label className={styles.formLabel} htmlFor="lastName">
                    Last name <span aria-hidden="true" className={styles.required}>*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    className={styles.formInput}
                    type="text"
                    placeholder="Mitchell"
                    value={form.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <span id="lastName-error" className={styles.errorMsg} role="alert">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              {/* Email / Phone row */}
              <div className={styles.formRow}>
                <div className={`${styles.formField} ${errors.email ? styles.formFieldError : ""}`}>
                  <label className={styles.formLabel} htmlFor="email">
                    Email address <span aria-hidden="true" className={styles.required}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className={styles.formInput}
                    type="email"
                    placeholder="alex@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-required="true"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.errorMsg} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className={`${styles.formField} ${errors.phone ? styles.formFieldError : ""}`}>
                  <label className={styles.formLabel} htmlFor="phone">
                    Phone <span className={styles.optionalTag}>(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className={styles.formInput}
                    type="tel"
                    placeholder="+1 212 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <span id="phone-error" className={styles.errorMsg} role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Destinations */}
              <div className={styles.formChecksWrap}>
                <span className={styles.formChecksLabel}>
                  Destination(s) of interest
                </span>
                <div className={styles.formChecks} role="group" aria-label="Select destinations">
                  {destinations.map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={`${styles.formCheckLabel} ${selectedDests.includes(d) ? styles.formCheckLabelActive : ""}`}
                      onClick={() => toggleDest(d)}
                      aria-pressed={selectedDests.includes(d)}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience type */}
              <div className={styles.formExpWrap}>
                <span className={styles.formExpLabel}>
                  Type of experience (select all that apply)
                </span>
                <div className={styles.formExpPills} role="group" aria-label="Select experiences">
                  {experienceTypes.map((e) => (
                    <button
                      key={e}
                      type="button"
                      className={`${styles.formExpPill} ${selectedExp.includes(e) ? styles.formExpPillActive : ""}`}
                      onClick={() => toggleExp(e)}
                      aria-pressed={selectedExp.includes(e)}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates / Group size row */}
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="travelDates">
                    Approximate travel dates
                  </label>
                  <input
                    id="travelDates"
                    name="travelDates"
                    className={styles.formInput}
                    type="text"
                    placeholder="e.g. November 2025, 3 weeks"
                    value={form.travelDates}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="groupSize">
                    Group size
                  </label>
                  <input
                    id="groupSize"
                    name="groupSize"
                    className={styles.formInput}
                    type="text"
                    placeholder="e.g. 2 adults, 1 child"
                    value={form.groupSize}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Budget */}
              <div className={styles.formRowFull}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="budget">
                    Approximate budget per person
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className={styles.formSelect}
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select a range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className={styles.formRowFull}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="message">
                    Tell us more about your dream trip
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.formTextarea}
                    placeholder="Share anything that helps us understand what you're looking for — dream experiences, places you've been, things you want to avoid..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className={styles.formSubmitRow}>
                <p className={styles.formNote}>
                  We respond shortly. No fees charged for the
                  consultation. Your information is kept strictly confidential.
                </p>
                <button
                  type="submit"
                  className={`${styles.formSubmit} ${loading ? styles.formSubmitLoading : ""}`}
                  id="contact-submit"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? "Sending…" : "Send my enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ── RIGHT — SIDEBAR ──────────────────────────────── */}
        <aside className={styles.sidebar} aria-label="Contact information">
          {/* Contact info */}
          <div className={styles.sbContact}>
            <span className={styles.sbKicker}>Reach us directly</span>
            <div className={styles.sbOffices}>
              <div className={styles.sbOffice}>
                <span className={styles.sbOfficeName}>US Office</span>
                <p className={styles.sbOfficeLine}>
                  <a href="mailto:travel@andthentravels.com">
                    travel@andthentravels.com
                  </a>
                </p>
                <p className={styles.sbOfficeLine}>
                  <a href="tel:+918129271155">+91 8129271155</a>
                </p>
              </div>
              <div className={styles.sbOffice}>
                <span className={styles.sbOfficeName}>India Office</span>
                <p className={styles.sbOfficeLine}>
                  Kawaakari Lifestyle Pvt Ltd
                </p>
                <p className={styles.sbOfficeLine}>
                  <a href="mailto:travel@andthentravels.com">
                    travel@andthentravels.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Response promise */}
          <div className={styles.sbPromise}>
            <h2 className={styles.sbPromiseTitle}>
              We respond swiftly — always.
            </h2>
            <p className={styles.sbPromiseText}>
              Every enquiry is read by a travel specialist, not a call centre.
              You will hear from a real person who knows the region firsthand.
            </p>
          </div>

          {/* What happens next */}
          <div className={styles.sbNext}>
            <span className={styles.sbNextLabel}>What happens next</span>
            <div className={styles.sbSteps}>
              {steps.map((step) => (
                <div key={step.num} className={styles.sbStep}>
                  <span className={styles.sbStepNum} aria-hidden="true">
                    {step.num}
                  </span>
                  <div>
                    <p className={styles.sbStepTitle}>{step.title}</p>
                    <p className={styles.sbStepText}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div className={styles.sbDests}>
            <span className={styles.sbDestsLabel}>Destinations we cover</span>
            <div className={styles.sbDestList}>
              {destinations.map((d) => (
                <span key={d} className={styles.sbDestTag}>
                  {d}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
