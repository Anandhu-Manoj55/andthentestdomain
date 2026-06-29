"use client";

import { useState } from "react";
import Link from "next/link";
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

export default function ContactPage() {
  const [selectedDests, setSelectedDests] = useState<string[]>([]);
  const [selectedExp, setSelectedExp] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelDates: "",
    groupSize: "",
    budget: "",
    message: "",
  });

  const toggleDest = (d: string) =>
    setSelectedDests((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );

  const toggleExp = (e: string) =>
    setSelectedExp((prev) =>
      prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]
    );

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setSubmitted(true);
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
                respond within 24 hours with an initial outline for your journey.
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
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="firstName">
                    First name
                  </label>
                  <input
                    id="firstName"
                    className={styles.formInput}
                    type="text"
                    placeholder="Alexandra"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    className={styles.formInput}
                    type="text"
                    placeholder="Mitchell"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Email / Phone row */}
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    className={styles.formInput}
                    type="email"
                    placeholder="alex@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="phone">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    className={styles.formInput}
                    type="tel"
                    placeholder="+1 212 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
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
                    className={styles.formInput}
                    type="text"
                    placeholder="e.g. November 2025, 3 weeks"
                    value={form.travelDates}
                    onChange={(e) => setForm({ ...form, travelDates: e.target.value })}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="groupSize">
                    Group size
                  </label>
                  <input
                    id="groupSize"
                    className={styles.formInput}
                    type="text"
                    placeholder="e.g. 2 adults, 1 child"
                    value={form.groupSize}
                    onChange={(e) => setForm({ ...form, groupSize: e.target.value })}
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
                    className={styles.formSelect}
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
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
                    className={styles.formTextarea}
                    placeholder="Share anything that helps us understand what you're looking for — dream experiences, places you've been, things you want to avoid..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className={styles.formSubmitRow}>
                <p className={styles.formNote}>
                  We respond within 24 hours. No fees charged for the
                  consultation. Your information is kept strictly confidential.
                </p>
                <button
                  type="submit"
                  className={styles.formSubmit}
                  id="contact-submit"
                >
                  Send my enquiry
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
                  <a href="tel:+18000000000">+1 800 000 0000</a>
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
              We respond within 24 hours — always.
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
