"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { hotels } from "@/data/hotels";
import { tours } from "@/data/tours";
import styles from "./page.module.css";

export default function HotelDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const hotel = hotels.find((h) => h.id === slug);

  if (!hotel) {
    return (
      <main style={{ padding: "8rem 2.5rem", textAlign: "center", minHeight: "100vh" }}>
        <p style={{ color: "var(--cb)", fontSize: "0.5625rem", letterSpacing: "0.3rem", textTransform: "uppercase" }}>404</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", margin: "1rem 0" }}>
          Property Not Found
        </h1>
        <Link href="/places-to-stay/" className={styles.textLink}>
          ← Back to hotel collection
        </Link>
      </main>
    );
  }

  // Related itineraries based on location match
  const hotelCity = hotel.location.split(',')[0].trim();
  const relatedTours = tours
    .filter((t) => t.route.includes(hotelCity))
    .slice(0, 3); // max 3

  return (
    <div className={styles.detailPage}>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero} aria-label={`${hotel.name} details`}>
        <div className={styles.heroImage} role="img" aria-label={hotel.alt}>
          {hotel.image ? (
            <Image
              src={hotel.image}
              alt={hotel.alt}
              quality={100}
              sizes="100vw"
              fill
              priority
              style={{ objectFit: "cover" ,objectPosition:"center"}}
            />
          ) : (
            <span className={styles.heroPlaceholder}>Hotel hero photography</span>
          )}
        </div>
      </section>

      {/* ── HOTEL IDENTITY STRIP ────────────────────────────── */}
      <div className={styles.identity}>
        <div className={styles.identityLeft}>
          <span className={styles.identityCategory}>
            {hotel.categoryTag} &middot; {hotel.location}
          </span>
          <h1 className={styles.identityName}>{hotel.name}</h1>
        </div>
        <div className={styles.identityRight}>
          {hotel.isRecommended && (
            <span className={styles.identityBadge}>AndThen recommended</span>
          )}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.identityWebsite}
            aria-label="Official hotel website (opens in new tab)"
            onClick={(e) => {
              e.preventDefault();
              alert('Website link would go here');
            }}
          >
            Hotel website
            <svg viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true" width="10" height="10" stroke="currentColor" fill="none">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── DESCRIPTION ─────────────────────────────────────── */}
      <section className={styles.description} aria-label="About the hotel">
        <div>
          <span className={styles.descEyebrow}>About the hotel</span>
          <h2 className={styles.descHeading}>{hotel.name}</h2>
          <div className={styles.descRule} />
          {hotel.intro && hotel.intro.split('\n\n')?.map((para, i) => (
            <p key={`intro-${i}`} className={styles.descBody}>{para}</p>
          ))}
          {hotel.why?.split('\n\n')?.map((para, i) => (
            <p key={`why-${i}`} className={styles.descBody}>{para}</p>
          ))}
        </div>
        <div>
          {hotel.tags && hotel.tags.length > 0 && (
            <div className={styles.experiences}>
              <span className={styles.experiencesLabel}>Destination experiences</span>
              <div className={styles.experiencesTags}>
                {hotel.tags.map((tag) => (
                  <span key={tag} className={styles.expTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className={styles.note} role="note">
            <span className={styles.noteLabel}>AndThen insider note</span>
            <p className={styles.noteText}>
              "Speak to our travel specialists to discover how we weave this property into a seamless journey, including the best room allocations and exclusive experiences."
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCATION ────────────────────────────────────────── */}
      <section className={styles.location} aria-label="Location">
        <div>
          <span className={styles.locEyebrow}>Location</span>
          <h2 className={styles.locHeading}>{hotel.location}</h2>
          <p className={styles.locOneliner}>
            Experience the essence of {hotelCity} from this exceptional property, hand-picked by our specialists.
          </p>
          <div className={styles.locRule} />
          {/* <div className={styles.locAirport}>
            <svg className={styles.locAirportIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <div className={styles.locAirportText}>
              <span className={styles.locAirportLabel}>Nearest airport</span>
              <span className={styles.locAirportValue}>Contact us for detailed travel logistics</span>
            </div>
          </div> */}
        </div>

        <div style={{backgroundColor:""}}>
          <div className={styles.map} role="img" aria-label={`Map — ${hotel.name}, ${hotel.location}`}>
            <iframe
              title={`Map of ${hotel.name}, ${hotel.location}`}
              src={hotel.mapEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(hotel.name + ' ' + hotel.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── ITINERARIES ─────────────────────────────────────── */}
      {relatedTours.length > 0 && (
        <section className={styles.itins} aria-label="Itineraries featuring this hotel">
          <div className={styles.itinsHeader}>
            <div>
              <span className={styles.itinsEyebrow}>Stay here on</span>
              <h2 className={styles.itinsHeading}>Itineraries featuring this hotel</h2>
            </div>
            <Link href="/tours/" className={styles.textLink}>All itineraries</Link>
          </div>

          {relatedTours.map((tour) => (
            <Link key={tour.id} href={`/tours/${tour.id}/`} className={styles.itinRow}>
              <div className={styles.irImg}>
                {tour.images?.card ? (
                  <Image src={tour.images.card} alt={tour.title} fill style={{objectFit: "cover"}} />
                ) : (
                  <span className={styles.irImgPlaceholder}>{tour.title.substring(0, 2).toUpperCase()}</span>
                )}
              </div>
              <div>
                <span className={styles.irName}>{tour.title}</span>
                <span className={styles.irDest}>{tour.region}</span>
              </div>
              <span className={styles.irNights}>{tour.duration.nights} nights</span>
              <span className={styles.irPrice}>{tour.price}</span>
              <span className={styles.irLink}>View →</span>
            </Link>
          ))}
        </section>
      )}

      {/* ── CTA BAND ────────────────────────────────────────── */}
      <div className={styles.ctaBand}>
        <div>
          <h2 className={styles.ctaBandHeading}>Stay at the {hotel.name} on your {hotel.category.charAt(0).toUpperCase() + hotel.category.slice(1)} journey</h2>
          <p className={styles.ctaBandSub}>Tell us when you're travelling and we'll build a private itinerary with this hotel at its heart.</p>
        </div>
        <div className={styles.ctaBtns}>
          <Link href={`/contact/?hotel=${hotel.id}`} className={styles.btnP}>Enquire about this hotel</Link>
          <Link href={`/places-to-stay/${hotel.category}/`} className={styles.btnS}>View all {hotel.category.charAt(0).toUpperCase() + hotel.category.slice(1)} hotels</Link>
        </div>
      </div>
    </div>
  );
}