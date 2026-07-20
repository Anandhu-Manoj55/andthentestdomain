import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { hotels } from "@/data/hotels";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

const includedItems = [
  "Handpicked accommodation",
  "Private vehicle and transfers",
  "English-speaking local experts",
  "Daily breakfast and select meals",
  "Entrance fees and experiences",
  "24-hour dedicated support",
];

const excludedItems = [
  "International flights",
  "Travel insurance",
  "Visa fees",
];



export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((item) => item.id === slug);

  if (!tour) return {};

  return {
    title: `${tour.title} — Itinerary | AndThen Travels`,
    description:
      tour.summary ??
      `A private, tailor-made ${tour.duration.nights} night journey to ${tour.destination} with AndThen Travels.`,
  };
}

export default async function ItinerarySlugPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((item) => item.id === slug);

  if (!tour) notFound();

  const routeStops = tour.route ?? [tour.destination];
  const duration = `${tour.duration.nights} nights / ${tour.duration.days} days`;
  const start = routeStops[0] ?? tour.destination;
  const end = routeStops.at(-1) ?? tour.destination;
  const heroImage = tour.images?.hero ?? tour.image ?? "/Assets/home/India.jpg";
  const heroSrc = encodeURI(heroImage);
  const findDest = (name: string) => tour.destinations.find(d => d.name === name);

  // Match hotels whose location includes any route stop city name
  const recommendedHotels = hotels
    .filter((hotel) =>
      routeStops.some((stop) =>
        hotel.location.toLowerCase().includes(stop.toLowerCase())
      )
    )
    .slice(0, 6);
  const title = tour.title ?? tour.name ?? "Untitled itinerary";
  const contactHref = `/contact/?trip=${encodeURIComponent(tour.id)}`;
  const relatedTours = tours
    .filter((item) => item.id !== tour.id)
    .sort((a, b) => {
      const score = (item: typeof a) =>
        Number(item.destination === tour.destination) * 2 +
        Number(item.type === tour.type);

      return score(b) - score(a);
    })
    .slice(0, 3);

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label={`${title} itinerary`}>
        <Image
          className={styles.heroImage}
          src={heroImage}
          alt={`${title} — ${tour.region ?? tour.destination}`}
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>
            {tour.destination} ·{" "}
            {tour.type ?? tour.typeBadge ?? "Private journey"}
          </span>
          <h1 className={styles.heroTitle}>{title}</h1>
          <div className={styles.heroPills} aria-label="Trip highlights">
            <span className={styles.heroPill}>{duration}</span>
            <span className={styles.heroPill}>
              {routeStops.length} destinations
            </span>
            <span className={styles.heroPill}>Private journey</span>
            <span className={styles.heroPill}>
              {start} to {end}
            </span>
          </div>
          <div className={styles.heroPrice}>
            <span className={styles.heroPriceLabel}>Starting from</span>
            <span className={styles.heroPriceValue}>{tour.price}</span>
          </div>
        </div>
      </section>

      <nav className={styles.jumpNav} aria-label="Page sections">
        <a className={styles.active} href="#overview">
          Overview
        </a>
        {/* <a href="#journey">The journey</a> */}
        <a href="#destinations">Destinations</a>
        <a href="#accommodation">Accommodation</a>
      </nav>

      <div className={styles.pageLayout}>
        <div className={styles.mainContent} id="overview">
          <div className={styles.overviewGrid} aria-label="Trip overview">
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>Duration</span>
              <span className={styles.overviewValue}>{duration}</span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>Destinations</span>
              <span className={styles.overviewValue}>
                {routeStops.length} route stops
              </span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>Journey style</span>
              <span className={styles.overviewValue}>
                {tour.type ?? tour.typeBadge ?? "Private"}
              </span>
            </div>
            <div className={styles.overviewItem}>
              <span className={styles.overviewLabel}>Departs</span>
              <span className={styles.overviewValue}>
                {tour.departure ?? tour.season ?? "Any date"}
              </span>
            </div>
          </div>

          <span className={styles.eyebrow}>About this journey</span>
          <h2 className={styles.sectionHeading}>
            A private journey through {tour.region ?? tour.destination}
          </h2>
          <div className={styles.rule} />
          <p className={styles.leadText}>{tour.summary ?? tour.description}</p>
          <p className={styles.bodyText}>
            This itinerary is a considered starting point, not a fixed group
            tour. We tailor the pace, stays and experiences around your
            interests while our team handles every detail on the ground.
          </p>

          {tour.highlights && tour.highlights.length > 0 && (
            <div className={styles.highlightBox}>
              <span className={styles.highlightLabel}>Journey highlights</span>
              <ul className={styles.highlightList}>
                {tour.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          <hr className={styles.separator} />

          {/* <section id="journey">
            <span className={styles.eyebrow}>The journey at a glance</span>
            <h2 className={styles.sectionHeading}>One seamless route</h2>
            <div className={styles.rule} />
            <div
              className={styles.journeyTrack}
              role="list"
              aria-label="Journey stops in order"
            >
              {routeStops.map((stop, index) => {
                const dest = findDest(stop);
                const rawSrc = dest ? dest.image : heroImage;
                const imageSrc = encodeURI(rawSrc);
                return (
                <div
                  className={styles.journeyStop}
                  role="listitem"
                  key={`${stop}-${index}`}
                >
                  <div
                    className={`${styles.stopImage} ${styles[`tone${index % 6}`]}`}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${stop} — ${title}`}
                      fill
                      className={styles.stopImageImage}
                    />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className={styles.stopInfo}>
                    <span className={styles.stopName}>{stop}</span>
                    <span className={styles.stopOrder}>Stop {index + 1}</span>
                  </div>
                </div>
              )})}
            </div>
          </section> */}
{/* 
          <hr className={styles.separator} /> */}

          <section id="destinations">
            <span className={styles.eyebrow}>Destinations</span>
            <h2 className={styles.sectionHeading}>Where you’ll go</h2>
            <div className={styles.rule} />
            <div className={styles.destinationCards}>
              {tour.destinations.map((dest, index) => (
                <article
                  className={styles.destinationCard}
                  key={`${dest.name}-${index}-card`}
                >
                  <div
                    className={`${styles.destinationVisual} ${styles[`tone${index % 6}`]}`}
                  >
                    <Image
                      src={encodeURI(dest.image)}
                      alt={`${dest.name} — ${title}`}
                      fill
                      className={styles.destinationImage}
                    />
                    <span className={styles.destinationBadge}>
                      Stop {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.destinationIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className={styles.destinationBody}>
                    <span className={styles.destinationMeta}>
                      {dest.region ?? tour.region ?? tour.destination}
                    </span>
                    <h3 className={styles.destinationName}>{dest.name}</h3>
                    <p className={styles.destinationText}>
                      {dest.description ?? `A considered stop on your ${title} route, arranged privately and paced around the experiences that matter most to you.`}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>


          <hr className={styles.separator} />

          <section id="accommodation">
            <span className={styles.eyebrow}>Suggested accommodation</span>
            <h2 className={styles.sectionHeading}>Where you'll stay</h2>
            <div className={styles.rule} />
            <p className={styles.bodyText}>
              Final properties are selected around availability, preferred style
              and budget. Your specialist will share a complete hotel proposal
              before anything is confirmed.
            </p>
            {recommendedHotels.length > 0 ? (
              <div className={styles.stayGrid}>
                {recommendedHotels.map((hotel, index) => (
                  <Link
                    href={`/places-to-stay/${hotel.id}/`}
                    className={styles.stayCard}
                    key={hotel.id}
                  >
                    <div className={`${styles.stayVisual} ${styles.stayVisualImage}`}>
                      <Image
                        src={encodeURI(hotel.image)}
                        alt={hotel.alt}
                        fill
                        className={styles.stayImageFill}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className={styles.stayImageBadge}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className={styles.stayBody}>
                      <span className={styles.stayLabel}>{hotel.location}</span>
                      <h3 className={styles.stayTitle}>{hotel.name}</h3>
                      <p className={styles.stayText}>
                        {hotel.why
                          ? hotel.why.slice(0, 110) + "…"
                          : `A handpicked stay in ${hotel.location}, selected for its setting, service and sense of place.`}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.stayGrid}>
                {["Handpicked stays", "Personally vetted", "Entirely flexible"].map((title, index) => (
                  <article className={styles.stayCard} key={title}>
                    <div className={`${styles.stayVisual} ${styles[`tone${index + 2}`]}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className={styles.stayBody}>
                      <h3 className={styles.stayTitle}>{title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            )}
            <div className={styles.accommodationFooter}>
              <p>
                All properties are subject to availability and confirmed as part
                of your final proposal.
              </p>
              <Link href="/places-to-stay/" className={styles.textLink}>
                Explore places to stay
              </Link>
            </div>
          </section>
        </div>

        <aside className={styles.sidebar} aria-label="Booking information">
          <div className={styles.sidebarCard}>
            <div className={styles.priceBlock}>
              <span className={styles.priceLabel}>Starting from</span>
              <span className={styles.priceValue}>{tour.price}</span>
              <span className={styles.priceNote}>per person · guide price</span>
            </div>
            <Link href={contactHref} className={styles.primaryButton}>
              Enquire about this trip
            </Link>
            <p className={styles.priceDisclaimer}>
              International flights are excluded. Contact us for solo, family or
              group pricing.
            </p>
          </div>

          <div className={styles.sidebarCard}>
            <span className={styles.sidebarTitle}>Trip at a glance</span>
            <ul className={styles.infoList}>
              <li>
                <span>Duration</span>
                <strong>{duration}</strong>
              </li>
              <li>
                <span>Starts in</span>
                <strong>{start}</strong>
              </li>
              <li>
                <span>Ends in</span>
                <strong>{end}</strong>
              </li>
              <li>
                <span>Journey type</span>
                <strong>Private</strong>
              </li>
              <li>
                <span>Departures</span>
                <strong>{tour.departure ?? tour.season ?? "Any date"}</strong>
              </li>
            </ul>
          </div>

          <div className={styles.sidebarCard}>
            <span className={styles.sidebarTitle}>What’s included</span>
            <ul className={styles.checklist}>
              {includedItems.map((item) => (
                <li className={styles.includedItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <hr className={styles.sidebarDivider} />
            <ul className={styles.checklist}>
              {excludedItems.map((item) => (
                <li className={styles.excludedItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.sidebarCard} ${styles.sidebarCardLinen}`}>
            <span className={styles.sidebarTitle}>Customise this trip</span>
            <p className={styles.customiseNote}>
              Add destinations, change hotels or slow the pace—we build the
              final journey around you.
            </p>
            <Link href="/contact/" className={styles.textLinkk}>
              Talk to a specialist
            </Link>
          </div>
        </aside>
      </div>

      <section className={styles.related} aria-label="Related itineraries">
        <div className={styles.relatedHeader}>
          <div>
            <span className={styles.eyebroww}>You may also like</span>
            <h2 className={styles.relatedHeading}>More journeys to consider</h2>
          </div>
          <Link href="/itineraries/" className={styles.textLinkk}>
            All itineraries
          </Link>
        </div>
        <div className={styles.relatedGrid}>
          {relatedTours.map((item) => (
            <Link className={styles.relatedCard} href={item.slug} key={item.id}>
              <span className={styles.relatedDestination}>
                {item.region ?? item.destination}
              </span>
              <h3 className={styles.relatedTitle}>{item.title ?? item.name}</h3>
              <p className={styles.relatedMeta}>
                {item.nights ?? `${item.duration.nights} nights`} ·{" "}
                {item.route.join(" → ")}
              </p>
              <span className={styles.relatedLink}>View itinerary →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.ctaBanner} aria-label="Plan this journey">
        <div>
          <h2 className={styles.ctaHeading}>
            Ready to explore {tour.destination}?
          </h2>
          <p className={styles.ctaText}>
            Speak to a specialist and we’ll shape this journey around your
            dates, interests and pace.
          </p>
        </div>
        <div className={styles.ctaButtons}>
          <Link href={contactHref} className={styles.ctaPrimary}>
            Enquire about this trip
          </Link>
          <Link href="/contact/#prize" className={styles.ctaSecondary}>
            Reveal my travel gift
          </Link>
        </div>
      </section>
    </div>
  );
}
