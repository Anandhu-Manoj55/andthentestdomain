"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { hotels } from "@/data/hotels";
import styles from "./page.module.css";

export default function HotelDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const hotel = hotels.find((h) => h.id === slug);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: "2",
    message: "",
  });

  if (!hotel) {
    return (
      <main style={{ padding: "8rem 2.5rem", textAlign: "center" }}>
        <p className="eyebrow" style={{ color: "var(--cb)" }}>404</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", margin: "1rem 0" }}>
          Property Not Found
        </h1>
        <Link href="/places-to-stay/" className="text-link">
          ← Back to hotel collection
        </Link>
      </main>
    );
  }

  // Related properties in the same country or category tag
  const relatedHotels = hotels
    .filter((h) => h.id !== hotel.id && (h.category === hotel.category || h.categoryTag === hotel.categoryTag))
    .slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Helper for gradient mapping
  const fallbackClass = hotel.accentClass
    ? styles[hotel.accentClass.replace("hi--", "hi").replace("-", " ").split(" ").map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1)).join("")]
    : styles.hiIndiaPalace;

  return (
    <div className={styles.detailPage}>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero} aria-label={`${hotel.name} hotel details`}>
        <div className={styles.heroBg}>
          {hotel.image ? (
            <Image
              src={hotel.image}
              alt={hotel.alt}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className={`${styles.heroBg} ${fallbackClass || ""}`} />
          )}
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroKicker}>
            Recommended Stays · {hotel.category.toUpperCase()}
          </span>
          <h1 className={styles.heroTitle}>{hotel.name}</h1>
          <div className={styles.heroMeta}>
            <span>{hotel.location}</span>
            <div className={styles.heroMetaSep} />
            <span>{hotel.categoryTag}</span>
          </div>
        </div>
      </section>

      {/* ── TWO COLUMN LAYOUT ────────────────────────────── */}
      <div className={styles.layout}>
        {/* Left column: editorial & stats */}
        <div className={styles.mainContent}>
          <div className={styles.editorialSection}>
            <span className={styles.sectionKicker}>Why we recommend it</span>
            <div className="rule" />
            <p className={styles.editorialText}>{hotel.why}</p>
          </div>

          {hotel.tags && hotel.tags.length > 0 && (
            <div className={styles.tagsSection}>
              <span className={styles.tagsTitle}>Key Highlights</span>
              <div className={styles.tagsGrid}>
                {hotel.tags.map((tag) => (
                  <span key={tag} className={styles.tagItem}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Details Table/Grid */}
          <div className={styles.detailsGrid}>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Destination</span>
              <span className={styles.detailValue}>
                {hotel.category.charAt(0).toUpperCase() + hotel.category.slice(1)}
              </span>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Location</span>
              <span className={styles.detailValue}>{hotel.location}</span>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Style</span>
              <span className={styles.detailValue}>{hotel.categoryTag}</span>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.detailLabel}>Curation status</span>
              <span className={styles.detailValue}>
                {hotel.isRecommended ? "AndThen Pick & Recommended" : "Recommended Stay"}
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Enquiry Sidebar */}
        <aside className={styles.sidebar}>
          {submitted ? (
            <div className={styles.successCard}>
              <h3 className={styles.successTitle}>Enquiry submitted successfully</h3>
              <p className={styles.successText}>
                Thank you for your interest in {hotel.name}. A travel specialist will contact you
                within 24 hours with custom options and pricing for your trip.
              </p>
              <Link href="/places-to-stay/" className="text-link text-link--light" style={{ marginTop: "1rem" }}>
                ← Browse other properties
              </Link>
            </div>
          ) : (
            <div className={styles.enquiryCard}>
              <h3 className={styles.enquiryTitle}>Plan a stay here</h3>
              <p className={styles.enquirySub}>
                Enquire about {hotel.name} as a standalone booking or integrated into a custom-designed itinerary.
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Your Name</label>
                  <input
                    type="text"
                    required
                    className={styles.input}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email Address</label>
                  <input
                    type="email"
                    required
                    className={styles.input}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Estimated dates</label>
                  <input
                    type="date"
                    required
                    className={styles.input}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Guests</label>
                  <select
                    className={styles.input}
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4+">4+ Guests</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Additional requests</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="E.g. preferred room category, active tour details..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Request Booking Options
                </button>
              </form>
            </div>
          )}
        </aside>
      </div>

      {/* ── RELATED RECOMMENDED PROPERTIES ───────────────── */}
      {relatedHotels.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedHead}>
            <span className={styles.sectionKicker}>More options</span>
            <h2 className={styles.relatedTitle}>Other stays you might like</h2>
          </div>
          <div className={styles.relatedGrid}>
            {relatedHotels.map((rel) => {
              const relFallback = rel.accentClass
                ? styles[rel.accentClass.replace("hi--", "hi").replace("-", " ").split(" ").map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1)).join("")]
                : styles.hiIndiaPalace;

              return (
                <div key={rel.id} className={styles.relatedCard}>
                  <Link href={`/places-to-stay/${rel.id}/`}>
                    <div className={styles.relatedImgWrap}>
                      {rel.image ? (
                        <Image
                          src={rel.image}
                          alt={rel.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className={`${styles.relatedImgPh} ${relFallback || ""}`} />
                      )}
                    </div>
                  </Link>
                  <div className={styles.relatedBody}>
                    <span className={styles.relatedLoc}>{rel.location}</span>
                    <h3 className={styles.relatedName}>
                      <Link href={`/places-to-stay/${rel.id}/`}>{rel.name}</Link>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}