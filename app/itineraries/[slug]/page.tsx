import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((t) => t.id === slug);
  if (!tour) return {};
  return {
    title: `${tour.name} — Itinerary | AndThen Travels`,
    description: tour.description ?? `A private, tailor-made ${tour.nights} journey to ${tour.destination} with AndThen Travels.`,
  };
}

export default async function ItinerarySlugPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((t) => t.id === slug);

  if (!tour) notFound();

  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label={`${tour.name} itinerary`}>
        <div
          className={`${styles.heroImage} ${tour.accentClass ? styles[tour.accentClass as keyof typeof styles] : ""}`}
          role="img"
          aria-label={`${tour.name} — ${tour.region ?? tour.destination}`}
        />
        <div className={styles.heroContent}>
          <div>
            <span className={styles.heroTag}>{tour.region ?? tour.destination}</span>
            <h1 className={styles.heroTitle}>{tour.name}</h1>
            <p className={styles.heroRoute}>{tour.route}</p>
          </div>
          <div className={styles.heroMeta}>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Duration</span>
              <span className={styles.heroMetaValue}>{tour.nights}</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Starting from</span>
              <span className={styles.heroMetaValue}>{tour.price}</span>
            </div>
            <div className={styles.heroMetaItem}>
              <span className={styles.heroMetaLabel}>Departs</span>
              <span className={styles.heroMetaValue}>{tour.season ?? "Any date"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewGrid}>
          {/* Left: description */}
          <div className={styles.overviewLeft}>
            <span className="eyebrow">Overview</span>
            <h2 className={styles.overviewTitle}>About this journey</h2>
            <div className={styles.overviewRule} aria-hidden="true" />
            <p className={styles.overviewText}>{tour.description}</p>

            <div className={styles.overviewFacts}>
              <div className={styles.overviewFact}>
                <span className={styles.overviewFactLabel}>Route</span>
                <span className={styles.overviewFactValue}>{tour.route}</span>
              </div>
              <div className={styles.overviewFact}>
                <span className={styles.overviewFactLabel}>Category</span>
                <span className={styles.overviewFactValue}>{tour.typeBadge ?? "Private journey"}</span>
              </div>
              <div className={styles.overviewFact}>
                <span className={styles.overviewFactLabel}>Departure</span>
                <span className={styles.overviewFactValue}>{tour.season ?? "Any date"}</span>
              </div>
            </div>
          </div>

          {/* Right: highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div className={styles.highlights}>
              <span className={styles.highlightsLabel}>Highlights</span>
              <ul className={styles.highlightsList}>
                {tour.highlights.map((h, i) => (
                  <li key={i} className={styles.highlightsItem}>
                    <span className={styles.highlightsDot} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ── WHAT'S INCLUDED BAND ─────────────────────────── */}
      <section className={styles.included} aria-label="What's included">
        <div className={styles.includedGrid}>
          {[
            { icon: "◈", label: "Private vehicle", desc: "100% private — no sharing with other travelers" },
            { icon: "◉", label: "Expert guides", desc: "English-speaking, licensed local expert throughout" },
            { icon: "◇", label: "Handpicked hotels", desc: "Vetted heritage properties and boutique stays" },
            { icon: "◎", label: "24/7 support", desc: "Dedicated on-ground team throughout your journey" },
          ].map((item) => (
            <div key={item.label} className={styles.includedItem}>
              <span className={styles.includedIcon} aria-hidden="true">{item.icon}</span>
              <span className={styles.includedLabel}>{item.label}</span>
              <span className={styles.includedDesc}>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className={styles.cta} aria-label="Plan your journey">
        <div className={styles.ctaInner}>
          <div>
            <span className="eyebrow" style={{ color: "var(--cb)" }}>Ready to go?</span>
            <h2 className={styles.ctaHeading}>
              Start building your {tour.name} journey
            </h2>
            <p className={styles.ctaSub}>
              This itinerary is a starting point — not a fixed tour. Tell us what you'd like to change, and we'll design it from scratch around you.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/contact/" className={styles.btnPrimary}>
              Enquire about this itinerary
            </Link>
            <Link href="/itineraries/" className={styles.btnSecondary}>
              ← All itineraries
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
