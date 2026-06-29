"use client";

import { useState } from "react";
import Link from "next/link";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import styles from "./page.module.css";

const DEST_TABS = [
  { id: "India",     label: "India" },
  { id: "Bhutan",   label: "Bhutan" },
  { id: "Nepal",    label: "Nepal" },
  { id: "Sri Lanka", label: "Sri Lanka" },
  { id: "multi",    label: "Multi-country" },
] as const;

type DestId = (typeof DEST_TABS)[number]["id"];

/** Per-destination section metadata */
const DEST_META: Record<DestId, { title: React.ReactNode; intro: string; stats: { value: string; label: string }[] }> = {
  India: {
    title: <>India — <em>nine journeys,<br />one subcontinent</em></>,
    intro: "From the Mughal monuments of the north to the temple towns of Tamil Nadu, the tiger reserves of central India and the backwaters of Kerala — each itinerary is fully private, departs on any date and can be extended, shortened or rerouted to suit your interests.",
    stats: [
      { value: "9", label: "Itineraries" },
      { value: "11–15", label: "Nights typical" },
      { value: "Any", label: "Departure date" },
    ],
  },
  Bhutan: {
    title: <>Bhutan — <em>the last<br />Himalayan kingdom</em></>,
    intro: "Bhutan measures progress in Gross National Happiness, not GDP. Every visit is limited by design — meaning your experience of the dzongs, sacred valleys and the legendary Tiger's Nest hike remains unhurried and deeply personal. All itineraries include a licensed Bhutanese guide and private vehicle throughout.",
    stats: [
      { value: "1", label: "Itinerary" },
      { value: "9", label: "Nights in Bhutan" },
      { value: "Any", label: "Departure date" },
    ],
  },
  Nepal: {
    title: <>Nepal — <em>the Himalayas,<br />up close</em></>,
    intro: "Nepal is the only place on earth where you can fly to within sight of Mount Everest, take a jungle safari for one-horned rhinos, walk through living medieval cities and visit the birthplace of the Buddha — all within a single two-week journey.",
    stats: [
      { value: "1", label: "Itinerary" },
      { value: "11", label: "Nights in Nepal" },
      { value: "Sep–May", label: "Best season" },
    ],
  },
  "Sri Lanka": {
    title: <>Sri Lanka — <em>pearl of<br />the Indian Ocean</em></>,
    intro: "A country small enough to cross in a day yet rich enough to fill a month — ancient rock fortresses, Kandyan dancers, tea estates at 4,000 feet, leopards at Yala and whales off the southern coast. Our Sri Lanka journey is fully private, moving at your pace between world-class small hotels and unique local experiences.",
    stats: [
      { value: "1", label: "Itinerary" },
      { value: "12", label: "Nights" },
      { value: "Any", label: "Departure date" },
    ],
  },
  multi: {
    title: <>Multi-country — <em>two countries,<br />one seamless journey</em></>,
    intro: "Our multi-country itineraries pair the best of two destinations — Bhutan with India's Mughal north, Nepal with Bhutan's sacred valleys, Nepal with India's heritage cities. Each combination is fully private, with a single team coordinating logistics across borders.",
    stats: [
      { value: "3", label: "Combinations" },
      { value: "10–16", label: "Nights typical" },
      { value: "Any", label: "Departure date" },
    ],
  },
};

export default function ItinerariesPage() {
  const [activeTab, setActiveTab] = useState<DestId>("India");

  const filteredTours = tours.filter((t) => t.destination === activeTab);
  const meta = DEST_META[activeTab];
  const isMulti = activeTab === "multi";

  return (
    <main>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className={styles.hero} aria-label="Itineraries and experiences">
        <div className={styles.heroImage} role="img" aria-label="Private journeys across India, Bhutan, Nepal and Sri Lanka" />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroTag}>Our journeys</span>
            <h1 className={styles.heroTitle}>
              Itineraries &amp;<br />experiences
            </h1>
            <p className={styles.heroSub}>
              Every journey is a starting point. Browse our private itineraries across four countries, then tell us what you'd like to change.
            </p>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroDestPills}>
              {destinations.map((d) => (
                <span key={d.id} className={styles.heroPill}>{d.name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DESTINATION TABS ════════════════════════════════ */}
      <nav className={styles.destTabs} role="tablist" aria-label="Browse by destination">
        {DEST_TABS.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`${styles.destTab} ${activeTab === tab.id ? styles.destTabActive : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* ═══ DESTINATION SECTION ═════════════════════════════ */}
      <section
        className={`${styles.destSection} ${isMulti ? styles.destSectionDark : ""}`}
        aria-live="polite"
      >
        {/* Destination header */}
        <div className={`${styles.destHeader} ${isMulti ? styles.destHeaderDark : ""}`}>
          <div>
            <span className={styles.destHeaderLabel}>Private itineraries</span>
            <h2 className={styles.destHeaderTitle}>{meta.title}</h2>
          </div>
          <div>
            <p className={styles.destHeaderIntro}>{meta.intro}</p>
            <div className={styles.destHeaderMeta}>
              {meta.stats.map((s) => (
                <div key={s.label} className={styles.destHeaderStat}>
                  <span className={`${styles.destHeaderStatNum} ${isMulti ? styles.destHeaderStatNumLight : ""}`}>{s.value}</span>
                  <span className={styles.destHeaderStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className={`${styles.itinsGridWrap} ${isMulti ? styles.itinsGridWrapDark : ""}`}>
          {filteredTours.length === 0 ? (
            <div className={styles.emptyState}>
              <p className="eyebrow">Coming soon</p>
              <p className="body-text">More itineraries for this destination are being added.</p>
              <Link href="/contact/" className="text-link" style={{ marginTop: "1.5rem" }}>
                Tell us what you need →
              </Link>
            </div>
          ) : (
            <div className={`${styles.itinsGrid} ${isMulti ? styles.itinsGridDark : ""}`}>
              {filteredTours.map((tour) => {
                const isWide = tour.isFeatured;
                const cardClass = [
                  styles.itinCard,
                  isWide ? styles.itinCardWide : "",
                  isMulti ? styles.itinCardDark : "",
                ].filter(Boolean).join(" ");

                return (
                  <article key={tour.id} className={cardClass}>
                    <Link href={tour.slug} className={styles.icImgLink}>
                      <div className={`${styles.icImg} ${tour.accentClass ? styles[tour.accentClass as keyof typeof styles] : ""}`}
                           role="img"
                           aria-label={`${tour.name} — ${tour.region ?? tour.destination}`}>
                        {tour.typeBadge && (
                          <span className={styles.icTypeBadge}>{tour.typeBadge}</span>
                        )}
                        <span className={styles.icImgPlaceholder}>{tour.name}</span>
                      </div>
                    </Link>
                    <div className={styles.icBody}>
                      <span className={styles.icRegion}>{tour.region ?? tour.destination}</span>
                      <h3 className={`${styles.icName} ${isMulti ? styles.icNameLight : ""}`}>
                        <Link href={tour.slug}>{tour.name}</Link>
                      </h3>
                      <p className={`${styles.icRoute} ${isMulti ? styles.icRouteDark : ""}`}>
                        {tour.description ?? tour.route}
                      </p>
                      <div className={`${styles.icMeta} ${isMulti ? styles.icMetaDark : ""}`}>
                        <div className={`${styles.icMetaItem} ${isMulti ? styles.icMetaItemDark : ""}`}>
                          <span className={styles.icMetaLabel}>Duration</span>
                          <span className={`${styles.icMetaValue} ${isMulti ? styles.icMetaValueLight : ""}`}>{tour.nights}</span>
                        </div>
                        <div className={`${styles.icMetaItem} ${isMulti ? styles.icMetaItemDark : ""}`}>
                          <span className={styles.icMetaLabel}>From</span>
                          <span className={`${styles.icMetaValue} ${isMulti ? styles.icMetaValueLight : ""}`}>{tour.price}</span>
                        </div>
                        <div className={`${styles.icMetaItem} ${isMulti ? styles.icMetaItemDark : ""}`}>
                          <span className={styles.icMetaLabel}>{activeTab === "Nepal" ? "Season" : "Departs"}</span>
                          <span className={`${styles.icMetaValue} ${isMulti ? styles.icMetaValueLight : ""}`}>{tour.season ?? "Any date"}</span>
                        </div>
                      </div>
                      <Link href={tour.slug} className={`${styles.icLink} ${isMulti ? styles.icLinkDark : ""}`}>
                        <span className={styles.icLinkLine} aria-hidden="true" />
                        View itinerary
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══ CTA BAND ════════════════════════════════════════ */}
      <div className={styles.ctaBand} aria-label="Build your own journey">
        <div>
          <h2 className={styles.ctaBandHeading}>Can't find exactly what you're looking for?</h2>
          <p className={styles.ctaBandSub}>
            Every itinerary here is a starting point. Tell us what you want — a different route, a different pace, a different focus — and we will build it from scratch. No fee for the consultation.
          </p>
        </div>
        <div className={styles.ctaBtns}>
          <Link href="/contact/" className={styles.btnPrimary}>Build my own journey</Link>
          <Link href="/destinations/" className={styles.btnSecondary}>Browse destinations</Link>
        </div>
      </div>
    </main>
  );
}
