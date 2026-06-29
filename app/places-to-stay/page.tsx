"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hotels } from "@/data/hotels";
import type { Hotel } from "@/types/hotel";
import styles from "./page.module.css";
import Button from "@/components/common/Button/Button";

const filterButtons = [
  { id: "all", label: "All" },
  { id: "india", label: "India" },
  { id: "bhutan", label: "Bhutan" },
  { id: "nepal", label: "Nepal" },
  { id: "srilanka", label: "Sri Lanka" },
  { id: "palace", label: "Palace & Heritage" },
  { id: "wildlife", label: "Wildlife" },
  { id: "wellness", label: "Wellness" },
  { id: "boutique", label: "Boutique" },
  { id: "beach", label: "Beach & Coast" },
];

const destinationsList = [
  {
    id: "india",
    name: "India",
    subtitle: "From desert forts to <em>backwater houseboats</em>",
  },
  {
    id: "bhutan",
    name: "Bhutan",
    subtitle: "Lodges that match <em>the landscape's silence</em>",
  },
  {
    id: "nepal",
    name: "Nepal",
    subtitle: "Where comfort meets <em>the Himalayas</em>",
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    subtitle: "Ancient kingdoms, <em>dunes and tea country</em>",
  },
];

export default function PlacesToStayPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const matchesCategory = (hotel: Hotel, filter: string) => {
    if (filter === "all") return true;
    if (["india", "bhutan", "nepal", "srilanka"].includes(filter)) {
      return hotel.category === filter;
    }

    const tag = hotel.categoryTag?.toLowerCase() || "";
    if (filter === "palace") {
      return tag.includes("palace") || tag.includes("heritage");
    }
    if (filter === "wildlife") {
      return tag.includes("wild") || tag.includes("nature") || tag.includes("safari");
    }
    if (filter === "wellness") {
      return tag.includes("well") || tag.includes("ayur");
    }
    if (filter === "boutique") {
      return tag.includes("boutique");
    }
    if (filter === "beach") {
      return tag.includes("beach") || tag.includes("coast") || tag.includes("sea");
    }
    return false;
  };

  // Check if a destination section should be visible
  const isDestVisible = (destId: string) => {
    if (activeFilter === "all") return true;
    if (["india", "bhutan", "nepal", "srilanka"].includes(activeFilter)) {
      return activeFilter === destId;
    }
    // If a category filter is active, show the section if it contains at least one matching hotel
    const hotelsInDest = hotels.filter((h) => h.category === destId);
    return hotelsInDest.some((h) => matchesCategory(h, activeFilter));
  };

  // Filtered hotels in a destination
  const getFilteredHotels = (destId: string) => {
    const hotelsInDest = hotels.filter((h) => h.category === destId);
    return hotelsInDest.filter((h) => matchesCategory(h, activeFilter));
  };

  const totalVisibleCount = hotels.filter((h) => matchesCategory(h, activeFilter)).length;

  return (
    <div className={styles.staysPage}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroKicker}>AndThen — Recommended stays</span>
          <h1 className={styles.heroTitle}>
            Places we<br />trust you to<br /><em>sleep well.</em>
          </h1>
          <p className={styles.heroDesc}>
            Every property here has been visited, vetted or used by our team. No
            affiliate deals, no paid listings — just the hotels, lodges and
            retreats we'd book for ourselves across India, Bhutan, Nepal and Sri
            Lanka.
          </p>
        </div>
      </header>

      {/* ── EDITORIAL NOTE ──────────────────────────────── */}
      <div className={styles.editorialNote}>
        <div className={styles.enRule}></div>
        <p className={styles.enText}>
          <strong>How we choose.</strong> These are properties we have personally
          experienced or rigorously vetted through our network. We categorise them
          by what they do best — <strong>Palace &amp; Heritage, Luxury Lodge,
          Wellness, Wildlife, Boutique</strong> and <strong>Beach &amp; Coast</strong> —
          so you can find the right match for your journey, not just the most famous name.
        </p>
      </div>

      {/* ── FILTER BAR ──────────────────────────────────── */}
      <nav className={styles.filterBar} role="toolbar" aria-label="Filter by destination">
        <span className={styles.fLabel}>Filter</span>
        {filterButtons.map((btn, index) => (
          <div key={btn.id} style={{ display: "flex", height: "100%", alignItems: "center" }}>
            {index > 1 && <div className={styles.fSep}></div>}
            {btn.id === "palace" && <div className={styles.fSep}></div>}
            <button
              className={`${styles.fBtn} ${activeFilter === btn.id ? styles.fBtnActive : ""}`}
              onClick={() => setActiveFilter(btn.id)}
            >
              {btn.label}
            </button>
          </div>
        ))}
      </nav>

      {/* ── DESTINATION SECTIONS ────────────────────────── */}
      {destinationsList.map((dest, index) => {
        if (!isDestVisible(dest.id)) return null;

        const visibleHotels = getFilteredHotels(dest.id);
        if (visibleHotels.length === 0) return null;

        return (
          <div key={dest.id}>
            {index > 0 && <div className={styles.sectionGap} />}
            <section className={styles.destSection} data-dest={dest.id}>
              <div className={styles.destHead}>
                <div className={styles.destHeadLeft}>
                  <span className={styles.destHeadDest}>{dest.name}</span>
                  <h2
                    className={styles.destHeadName}
                    dangerouslySetInnerHTML={{ __html: dest.subtitle }}
                  />
                </div>
                <div className={styles.destHeadRight}>
                  <span className={styles.destHeadCount}>{visibleHotels.length}</span>
                  <span className={styles.destHeadCountLabel}>Properties</span>
                </div>
              </div>

              <div className={styles.hotelGrid}>
                {visibleHotels.map((hotel) => {
                  const isFeatured = hotel.isFeatured;
                  const cardClass = `${styles.hc} ${isFeatured ? styles.hcFeatured : ""}`.trim();
                  
                  // Mapping fallback classes
                  const fallbackClass = hotel.accentClass
                    ? styles[hotel.accentClass.replace("hi--", "hi").replace("-", " ").split(" ").map((w, i) => i === 0 ? w : w[0].toUpperCase() + w.slice(1)).join("")]
                    : styles.hiIndiaPalace;

                  return (
                    <article key={hotel.id} className={cardClass}>
                      <Link href={`/places-to-stay/${hotel.id}/`}>
                        <div className={styles.hcImgWrap}>
                          {hotel.image ? (
                            <Image
                              src={hotel.image}
                              alt={hotel.alt}
                              fill
                              sizes={isFeatured ? "100vw" : "(max-width: 1024px) 50vw, 33vw"}
                              style={{ objectFit: "cover" }}
                            />
                          ) : (
                            <div className={`${styles.hcImgPh} ${fallbackClass || ""}`} />
                          )}
                          {hotel.categoryTag && <span className={styles.hcType}>{hotel.categoryTag}</span>}
                          {hotel.isRecommended && <span className={styles.hcPick}>AndThen Pick</span>}
                        </div>
                      </Link>
                      <div className={styles.hcBody}>
                        <span className={styles.hcLocation}>{hotel.location}</span>
                        <h3 className={styles.hcName}>
                          <Link href={`/places-to-stay/${hotel.id}/`}>{hotel.name}</Link>
                        </h3>
                        {hotel.why && <p className={styles.hcWhy}>{hotel.why}</p>}
                        {hotel.tags && hotel.tags.length > 0 && (
                          <div className={styles.hcTags}>
                            {hotel.tags.map((tag) => (
                              <span key={tag} className={styles.hcTag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className={styles.hcFoot}>
                          <Link href={`/places-to-stay/${hotel.id}/`} className={styles.hcLink}>
                            <span className={styles.hcLinkLine}></span>View property
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        );
      })}

      {/* ── NO RESULTS ──────────────────────────────────── */}
      {totalVisibleCount === 0 && (
        <div className={styles.noResults}>
          <p>
            No properties match that filter.{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); setActiveFilter("all"); }}>
              Show all properties
            </a>{" "}
            or <Link href="/contact/">speak to a specialist</Link>.
          </p>
        </div>
      )}

      {/* ── ENQUIRY STRIP ───────────────────────────────── */}
      <div className={styles.enquiryStrip}>
        <div>
          <h2 className={styles.esTitle}>Not sure which property is right for your journey?</h2>
          <p className={styles.esSub}>
            Tell us where you're going, when and for how long — we'll match you to
            the right combination of hotels for your itinerary, often at rates you
            won't find online, and always with the personal service that comes from
            knowing these properties directly.
          </p>
        </div>
        <div className={styles.esBtns}>
          <Button href="/contact/" variant="solidLight">
            Speak to a specialist
          </Button>
          <Link href="/itineraries/" className={styles.btnGhost}>
            Browse itineraries
          </Link>
        </div>
      </div>
    </div>
  );
}
