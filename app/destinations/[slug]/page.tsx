"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { destinations } from "@/data/destinations";
import { hotels } from "@/data/hotels";
import { tours } from "@/data/tours";
import styles from "./page.module.css";

/* accent-class → CSS module class map for regions */
const regionAccentMap: Record<string, string> = {
  "rci--north": styles.rciNorth,
  "rci--south": styles.rciSouth,
  "rci--central": styles.rciCentral,
  "rci--northeast": styles.rciNortheast,
};

const jumpSections = [
  { id: "about", label: "About" },
  { id: "regions", label: "Regions" },
  { id: "places", label: "Popular places" },
  { id: "hotels", label: "Hotels" },
  { id: "best-time", label: "Best time" },
  { id: "itineraries", label: "Itineraries" },
];

export default function DestinationSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const destination = destinations.find((d) => d.id === slug);
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 130;
      let current = jumpSections[0].id;
      jumpSections.forEach(({ id }) => {
        const el = sectionRefs.current[id];
        if (el && el.offsetTop <= scrollPos) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!destination) {
    return (
      <main style={{ padding: "8rem 2.5rem", textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1 className="section-heading">Destination not found</h1>
        <Link
          href="/destinations/"
          className="text-link"
          style={{ marginTop: "2rem", display: "inline-block" }}
        >
          ← Back to destinations
        </Link>
      </main>
    );
  }

  const destHotels = hotels.filter((h) =>
    destination.recommendedHotels?.includes(h.id),
  );
  const destTours = tours.filter((t) => destination.tours?.includes(t.id));

  /* Split places for the asymmetric grid */
  const [featuredPlace, ...otherPlaces] = destination.popularPlaces ?? [];
  const stackedPlaces = otherPlaces.slice(0, 3);
  const bottomPlaces = otherPlaces.slice(3, 5);

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className={styles.hero}
        aria-label={`${destination.name} destination hero`}
      >
        <div
          className={styles.heroImage}
          role="img"
          aria-label={destination.name}
        >
          <div
            className={styles.heroImageBg}
            style={{
              backgroundImage: destination.heroImage
                ? `url('${destination.heroImage}')`
                : undefined,
            }}
          />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroContentLeft}>
            <span className={styles.heroDestLabel}>Destination guide</span>
            <h1 className={styles.heroTitle}>{destination.name}</h1>
            <p className={styles.heroTagline}>{destination.heroTagline}</p>
            <div className={styles.heroPills} aria-label="Key facts">
              {destination.tags.map((tag) => (
                <span key={tag} className={styles.heroPill}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
{/* 
          {destination.stats && destination.stats.length > 0 && (
            <div
              className={styles.heroStats}
              aria-label={`${destination.name} at a glance`}
            >
              {destination.stats.map((s) => (
                <div key={s.label} className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{s.value}</span>
                  <span className={styles.heroStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          )} */}
        </div>

        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollLabel}>Explore</span>
          <div className={styles.heroScrollLine} />
        </div>
      </section>

      {/* ── JUMP NAVIGATION ─────────────────────────────────── */}
      <nav className={styles.jumpNav} aria-label="Page sections">
        {jumpSections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${styles.jumpNavLink} ${activeSection === id ? styles.jumpNavLinkActive : ""}`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section
        className={styles.about}
        id="about"
        aria-label={`About ${destination.name}`}
        ref={(el) => {
          sectionRefs.current["about"] = el;
        }}
      >
        <div className={styles.aboutText}>
          <span className="eyebrow">About {destination.name}</span>
          <h2 className="section-heading">{destination.overviewTitle}</h2>
          <div className="rule" />
          <p className="body-text">{destination.overviewIntro}</p>
          <div className="rule" />
          <Link
            href={`/contact/?destination=${destination.id}`}
            className="text-link"
          >
            Start planning your {destination.name} journey
          </Link>
        </div>

        <div className={styles.aboutPull}>
          {destination.overviewQuote && (
            <blockquote className={styles.aboutQuote}>
              &ldquo;{destination.overviewQuote}&rdquo;
            </blockquote>
          )}
          {destination.overviewCite && (
            <cite className={styles.aboutCite}>{destination.overviewCite}</cite>
          )}

          {destination.facts && destination.facts.length > 0 && (
            <div
              className={styles.aboutFacts}
              aria-label={`${destination.name} facts`}
            >
              {destination.facts.map((f) => (
                <div key={f.label} className={styles.fact}>
                  <span className={styles.factValue}>{f.value}</span>
                  <span className={styles.factLabel}>{f.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── REGIONS ──────────────────────────────────────────── */}
      {destination.regions && destination.regions.length > 0 && (
        <section
          className={styles.regions}
          id="regions"
          aria-label={`${destination.name} regions`}
          ref={(el) => {
            sectionRefs.current["regions"] = el;
          }}
        >
          <div className={styles.regionsHeader}>
            <div>
              <span className="eyebrow" style={{ color: "#fff" }}>
                Explore by region
              </span>
              <h2 className="section-heading section-heading--light">
                {destination.regions.length > 1
                  ? `${destination.regions.length} distinct ${destination.name === "India" ? "Indias" : "regions"}`
                  : `${destination.name} regions`}
              </h2>
            </div>
            <p className={styles.regionsIntro}>
              {destination.name}&apos;s regions are each a world unto themselves
              — distinct landscapes and cultural rhythms. We design journeys
              that go deep into one, or weave several together.
            </p>
          </div>

          <div className={styles.regionsGrid}>
            {destination.regions.map((region) => (
              <article
                key={region.title}
                className={styles.regionCard}
                aria-label={`${region.title} region`}
              >
                <div
                  className={`${styles.rcImage} ${regionAccentMap[region.accentClass ?? ""] ?? ""}`}
                  role="img"
                  aria-label={region.title}
                >
                  {region.image && (
                    <div
                      className={styles.rcImageBg}
                      style={{ backgroundImage: `url('${region.image}')` }}
                    />
                  )}
                  <span className={styles.rcImageName}>{region.title}</span>
                </div>
                <div className={styles.rcBody}>
                  <p className={styles.rcDesc}>{region.description}</p>
                  <div className={styles.rcTags}>
                    {region.tags.map((tag) => (
                      <span key={tag} className={styles.rcTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={styles.rcLink}>
                    <span className={styles.rcLinkLine} aria-hidden="true" />
                    Explore {region.title}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── POPULAR PLACES ───────────────────────────────────── */}
      {destination.popularPlaces && destination.popularPlaces.length > 0 && (
        <section
          className={styles.places}
          id="places"
          aria-label={`Popular places in ${destination.name}`}
          ref={(el) => {
            sectionRefs.current["places"] = el;
          }}
        >
          <div className={styles.placesHeader}>
            <div>
              <span className="eyebrow">Highlights</span>
              <h2 className="section-heading">Places that stay with you</h2>
            </div>
            <Link
              href={`/contact/?destination=${destination.id}`}
              className="text-link text-link--muted"
            >
              Plan my journey
            </Link>
          </div>

          <div className={styles.placesGrid}>
            {/* Feature card */}
            {featuredPlace && (
              <article className={styles.placeCardFeature}>
                <div className={styles.pcImageFeature}>
                  {featuredPlace.image && (
                    <div
                      className={styles.pcImageBg}
                      style={{
                        backgroundImage: `url('${featuredPlace.image}')`,
                      }}
                    />
                  )}
                </div>
                <div className={styles.pcBody}>
                  <span className={styles.pcRegion}>
                    {featuredPlace.region}
                  </span>
                  <h3 className={styles.pcName}>{featuredPlace.name}</h3>
                  <p className={styles.pcDesc}>{featuredPlace.description}</p>
                </div>
              </article>
            )}

            {/* Stacked right column */}
            {stackedPlaces.length > 0 && (
              <div className={styles.placesRight}>
                {stackedPlaces.map((place) => (
                  <article key={place.name} className={styles.placeCardSmall}>
                    <div className={styles.pcImageSmall}>
                      {place.image && (
                        <div
                          className={styles.pcImageBg}
                          style={{ backgroundImage: `url('${place.image}')` }}
                        />
                      )}
                    </div>
                    <div
                      className={styles.pcBody}
                      style={{ padding: "1.25rem" }}
                    >
                      <span className={styles.pcRegion}>{place.region}</span>
                      <h3 className={styles.pcName}>{place.name}</h3>
                      <p className={styles.pcDesc}>{place.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Bottom row */}
            {bottomPlaces.length > 0 && (
              <div className={styles.placesBottom}>
                {bottomPlaces.map((place) => (
                  <article key={place.name} className={styles.placeCardBottom}>
                    <div className={styles.pcImageBottom}>
                      {place.image && (
                        <div
                          className={styles.pcImageBg}
                          style={{ backgroundImage: `url('${place.image}')` }}
                        />
                      )}
                    </div>
                    <div className={styles.pcBody}>
                      <span className={styles.pcRegion}>{place.region}</span>
                      <h3 className={styles.pcName}>{place.name}</h3>
                      <p className={styles.pcDesc}>{place.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── HOTELS ───────────────────────────────────────────── */}
      {destHotels.length > 0 && (
        <section
          className={styles.hotels}
          id="hotels"
          aria-label={`Recommended hotels in ${destination.name}`}
          ref={(el) => {
            sectionRefs.current["hotels"] = el;
          }}
        >
          <div className={styles.hotelsHeader}>
            <div>
              <span className="eyebrow">Places to stay</span>
              <h2 className="section-heading">
                Recommended hotels in {destination.name}
              </h2>
            </div>
            <Link
              href="/places-to-stay/"
              className="text-link text-link--muted"
            >
              View all hotels
            </Link>
          </div>

          <div className={styles.hotelsGrid}>
            {destHotels.slice(0, 6).map((hotel) => (
              <article key={hotel.id} className={styles.hotelCard}>
                <Link href={`/places-to-stay/${hotel.id}/`}>
                  <div
                    className={styles.hcImage}
                    role="img"
                    aria-label={hotel.name}
                  >
                    <div
                      className={styles.hcImageBg}
                      style={{
                        backgroundImage: hotel.image
                          ? `url('${hotel.image}')`
                          : undefined,
                      }}
                    />
                  </div>
                  <div className={styles.hcBody}>
                    <span className={styles.hcRegion}>
                      {hotel.location.split(",")[0]}
                    </span>
                    <h3 className={styles.hcName}>{hotel.name}</h3>
                    <p className={styles.hcLocation}>
                      {hotel.location} · {hotel.why?.slice(0, 80)}…
                    </p>
                    <span className={styles.hcLink}>View hotel →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── BEST TIME TO VISIT ───────────────────────────────── */}
      {destination.bestTime && (
        <section
          className={styles.bestTime}
          id="best-time"
          aria-label={`Best time to visit ${destination.name}`}
          ref={(el) => {
            sectionRefs.current["best-time"] = el;
          }}
        >
          <div className={styles.bestTimeInner}>
            <div>
              <span className="eyebrow">When to visit</span>
              <h2 className="section-heading">
                Best time to travel to {destination.name}
              </h2>
              <div className="rule" />
              <p className="body-text">{destination.bestTime.description}</p>

              <div
                className={styles.monthGrid}
                role="list"
                aria-label={`Best months to visit ${destination.name}`}
              >
                {destination.bestTime.months.map((m) => (
                  <div
                    key={m.month}
                    role="listitem"
                    className={`${styles.monthCell} ${
                      m.type === "peak"
                        ? styles.monthCellPeak
                        : m.type === "good"
                          ? styles.monthCellGood
                          : ""
                    }`}
                  >
                    <span className={styles.monthLabel}>{m.month}</span>
                  </div>
                ))}
              </div>

              <div className={styles.legend} aria-label="Calendar legend">
                <div className={styles.legendItem}>
                  <span
                    className={styles.legendSwatch}
                    style={{ background: "var(--cb)" }}
                  />
                  Peak season
                </div>
                <div className={styles.legendItem}>
                  <span
                    className={styles.legendSwatch}
                    style={{ background: "var(--cs)" }}
                  />
                  Good season
                </div>
                <div className={styles.legendItem}>
                  <span
                    className={styles.legendSwatch}
                    style={{
                      background: "var(--cr)",
                      border: "0.5px solid var(--cs)",
                    }}
                  />
                  Not recommended
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">Season guide</span>
              <div className={styles.seasons}>
                {destination.bestTime.seasons.map((s) => (
                  <div key={s.name} className={styles.seasonCard}>
                    <span className={styles.seasonName}>{s.name}</span>
                    <span className={styles.seasonMonths}>{s.months}</span>
                    <p className={styles.seasonDesc}>{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ITINERARIES ──────────────────────────────────────── */}
      {destTours.length > 0 && (
        <section
          className={styles.itineraries}
          id="itineraries"
          aria-label={`${destination.name} itineraries`}
          ref={(el) => {
            sectionRefs.current["itineraries"] = el;
          }}
        >
          <div className={styles.itinsHeader}>
            <div>
              <span className="eyebrow">{destination.name} journeys</span>
              <h2 className="section-heading" style={{ marginBottom: 0 }}>
                Our {destination.name} itineraries
              </h2>
            </div>
            <Link href="/itineraries/" className="text-link text-link--muted">
              All itineraries
            </Link>
          </div>

          {destTours.map((tour) => (
            <Link
              key={tour.id}
              href={tour.slug}
              className={styles.itinRow}
              aria-label={`${tour.name} — ${tour.nights}`}
            >
              <div className={styles.irImage}>
                {(tour.images?.hero || tour.image) && (
                  <div
                    className={styles.irImageBg}
                    style={{
                      backgroundImage: `url('${tour.images?.hero || tour.image}')`,
                    }}
                  />
                )}
              </div>
              <div>
                <span className={styles.irName}>{tour.title ?? tour.name}</span>
                <span className={styles.irDest}>
                  {Array.isArray(tour.route)
                    ? tour.route.join(" → ")
                    : tour.route}
                </span>
              </div>
              <span className={styles.irNights}>{tour.nights}</span>
              <span className={styles.irPrice}>{tour.price}</span>
              <span className={styles.irLink}>View →</span>
            </Link>
          ))}
        </section>
      )}

      {/* ── CTA BAND ──────────────────────────────────────────── */}
      <div
        className={styles.ctaBand}
        aria-label={`Plan your ${destination.name} trip`}
      >
        <div>
          <h2 className={styles.ctaBandHeading}>
            Ready to explore {destination.name}?
          </h2>
          <p className={styles.ctaBandSub}>
            Tell us what moves you — wildlife, culture, wellness, history or all
            of the above — and we&apos;ll design your private {destination.name}{" "}
            journey around it.
          </p>
        </div>
        <div className={styles.ctaBtns}>
          <Link
            href={`/contact/?destination=${destination.id}`}
            className={styles.btnPrimary}
          >
            Start planning my trip
          </Link>
          <Link href="/itineraries/" className={styles.btnSecondary}>
            Browse all itineraries
          </Link>
        </div>
      </div>
    </main>
  );
}
