import Link from "next/link";
import type { Metadata } from "next";
import { destinations } from "@/data/destinations";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Indian Subcontinent Tours — India, Bhutan, Nepal & Sri Lanka | AndThen Travels",
  description:
    "Private tailor-made journeys across the Indian Subcontinent — India, Bhutan, Nepal and Sri Lanka. Explore four extraordinary destinations with one specialist team. AndThen Travels.",
};

/* Static data for the experiences strip */
const experiences = [
  {
    num: "01",
    title: "Wildlife & Safaris",
    desc: "Bengal tigers in central India, one-horned rhinos in Chitwan, leopards in Yala and black-necked cranes in Bhutan's Phobjikha valley.",
    countries: ["India", "Nepal", "Sri Lanka", "Bhutan"],
    link: "/signature-experiences/",
    label: "Explore wildlife journeys",
  },
  {
    num: "02",
    title: "Wellness & Ayurveda",
    desc: "Kerala is the home of Ayurveda — the world's oldest continuously practiced wellness system. Sri Lanka's south coast offers some of the finest retreats in Asia.",
    countries: ["India · Kerala", "Sri Lanka"],
    link: "/signature-experiences/",
    label: "Explore wellness journeys",
  },
  {
    num: "03",
    title: "Trekking & Mountains",
    desc: "From Everest Base Camp in Nepal to the Druk Path in Bhutan and Adam's Peak in Sri Lanka. Private trekking for all levels.",
    countries: ["Nepal", "Bhutan", "India · Himalayas", "Sri Lanka"],
    link: "/signature-experiences/",
    label: "Explore trekking journeys",
  },
  {
    num: "04",
    title: "Spiritual & Cultural",
    desc: "Varanasi at dawn on the Ganges, Bhutan's working monasteries, Nepal's medieval Durbar squares, Sri Lanka's ancient capitals.",
    countries: ["India", "Bhutan", "Nepal", "Sri Lanka"],
    link: "/signature-experiences/",
    label: "Explore cultural journeys",
  },
];

/* Static card data mapped from design */
const destCardData: Record<
  string,
  {
    bgClass: string;
    image: string;
    regionLine: string;
    positioning: string;
    desc: string;
    stats: { label: string; value: string }[];
    highlights: string[];
  }
> = {
  india: {
    bgClass: styles.dciIndia,
    image: "/Assets/destinations/main/India .jpg",
    regionLine: "South Asia · 4 regions · 9 curated itineraries",
    positioning:
      "The subcontinent's greatest single destination — and the one that takes the longest to know.",
    desc: "From the Mughal monuments of the north to Kerala's backwaters in the south, from central India's tiger reserves to the sacred cities of the Ganges plain — India is a destination that rewards return visits as much as first ones.",
    stats: [
      { label: "UNESCO sites", value: "36" },
      { label: "Tiger reserves", value: "50+" },
      { label: "Coastline", value: "7,500 km" },
      { label: "Peak season", value: "Oct – Mar" },
      { label: "Visa required", value: "e-Visa available" },
    ],
    highlights: [
      "The Taj Mahal and Rajasthan palaces",
      "Private tiger safaris — Bandhavgarh, Kanha, Ranthambore",
      "Kerala Ayurveda and backwater houseboats",
      "Varanasi — India at its most ancient",
      "North East India — the undiscovered frontier",
    ],
  },
  bhutan: {
    bgClass: styles.dciBhutan,
    image: "/Assets/destinations/main/Bhutan .jpg",
    regionLine: "South Asia · 4 regions · 3 curated itineraries",
    positioning:
      "The only carbon-negative country on earth — and one that measures progress in happiness, not GDP.",
    desc: "Bhutan limits tourist numbers deliberately. The result is a country where the dzongs are genuinely ancient, the monasteries are working religious centres, and the landscape has not been altered for visitors.",
    stats: [
      { label: "Forest cover", value: "72%" },
      { label: "Protected territory", value: "51% of land" },
      { label: "Highest peak", value: "Gangkhar Puensum 7,570m" },
      { label: "Peak season", value: "Mar–May · Sep–Nov" },
      { label: "SDF fee", value: "$100 / person / night" },
    ],
    highlights: [
      "Taktsang — Tiger's Nest monastery, Paro",
      "Punakha Dzong at the river confluence",
      "Phobjikha valley — black-necked crane wintering",
      "Bumthang — 7th-century temples in the hills",
      "Spring rhododendron season",
    ],
  },
  nepal: {
    bgClass: styles.dciNepal,
    image: "/Assets/destinations/main/Nepal .jpg",
    regionLine: "South Asia · 4 regions · 3 curated itineraries",
    positioning:
      "Eight of the world's ten tallest peaks, ancient temples in the Kathmandu valley, and one of the finest wildlife parks in Asia.",
    desc: "Nepal is more varied than most visitors expect — the trekking routes are famous, but the medieval cities of the Kathmandu valley, the rhino safaris of Chitwan, and the lake city of Pokhara are equally compelling.",
    stats: [
      { label: "UNESCO sites", value: "7" },
      { label: "Highest point", value: "Everest 8,849m" },
      { label: "Tallest peaks", value: "8 of world's top 10" },
      { label: "Peak season", value: "Oct–Nov · Mar–Apr" },
      { label: "Visa required", value: "On arrival / online" },
    ],
    highlights: [
      "Everest Base Camp trek — Khumbu region",
      "Kathmandu valley — three medieval kingdoms",
      "Chitwan — one-horned rhino and tiger safaris",
      "Pokhara and the Annapurna range",
      "Boudhanath and Pashupatinath",
    ],
  },
  "sri-lanka": {
    bgClass: styles.dciSrilanka,
    image: "/Assets/destinations/main/Sri Lanka.jpg",
    regionLine: "Indian Ocean · 4 regions · 3 curated itineraries",
    positioning:
      "A compact island with 8 UNESCO World Heritage Sites, the highest leopard density in Asia, and two entirely different coastlines.",
    desc: "Sri Lanka fits more variety into 65,000 square kilometres than almost anywhere else — ancient capitals, a tea-covered highland, two UNESCO-listed natural reserves, Ayurveda on the south coast, and a blue whale corridor off Mirissa.",
    stats: [
      { label: "UNESCO sites", value: "8" },
      { label: "Coastline", value: "1,340 km" },
      { label: "Recorded history", value: "2,500 years" },
      { label: "Peak season", value: "Dec–Mar (south)" },
      { label: "Visa required", value: "ETA available online" },
    ],
    highlights: [
      "Sigiriya — 5th-century rock fortress",
      "Galle Fort and the south coast",
      "Yala — highest wild leopard density in Asia",
      "The Kandy to Ella train through tea country",
      "Blue whale watching off Mirissa (Dec–Apr)",
    ],
  },
};

export default function DestinationsPage() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="The Indian Subcontinent">
        <div className={styles.heroImage} role="img" aria-label="The Indian Subcontinent">
          <div
            className={styles.heroImageBg}
            style={{
              backgroundImage: "url('/Assets/destinations/main/banner.jpg')",
              backgroundPosition: "center 40%",
            }}
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Where we travel</span>
          <h1 className={styles.heroTitle}>The Indian Subcontinent</h1>
          <p className={styles.heroSub}>
            Four countries. One specialist team. Private journeys across India,
            Bhutan, Nepal and Sri Lanka — designed entirely around you.
          </p>
          <nav className={styles.heroDestLinks} aria-label="Jump to destination">
            {destinations.map((d) => (
              <Link
                key={d.id}
                href={`/destinations/${d.id}/`}
                className={styles.heroDestLink}
              >
                {d.name} →
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ── INTRODUCTION ─────────────────────────────────────── */}
      <section className={styles.intro} aria-label="About the Indian Subcontinent">
        <div>
          <span className="eyebrow">The region</span>
          <h2 className="section-heading">
            The most extraordinary region on earth, traveled privately
          </h2>
          <div className="rule" />
          <p className="body-text">
            The Indian Subcontinent is not a single destination — it is a
            collection of worlds. India alone contains more cultural, geographical
            and culinary variety than most continents. Add Bhutan's intact
            Himalayan kingdom, Nepal's mountain trails and ancient valley cities,
            and Sri Lanka's ancient ruins, hill country and two distinct
            coastlines, and the scope becomes almost impossible to summarise.
          </p>
          <p className="body-text">
            AndThen works exclusively in this region. We know it in depth, not in
            breadth — every guide, every hotel, every route we recommend has been
            assessed firsthand. That knowledge is what we bring to designing your
            journey.
          </p>
          <div className="rule" />
          <Link href="/about/" className="text-link">
            About how we work
          </Link>
          <div className={styles.introStatRow}>
            {[
              { value: "4", label: "Countries covered" },
              { value: "15+", label: "Curated itineraries" },
              { value: "100%", label: "Private, tailor-made" },
              { value: "Daily", label: "Departure dates" },
            ].map((s) => (
              <div key={s.label} className={styles.introStat}>
                <span className={styles.introStatValue}>{s.value}</span>
                <span className={styles.introStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.introPull}>
            "The subcontinent rewards the traveler who goes slowly — who gives a
            place the time to reveal itself rather than demanding it perform on a
            schedule."
          </p>
          <p className="body-text">
            Private travel suits the Indian Subcontinent particularly well. The
            region's depth is not accessible on a group tour timetable. A morning
            at Varanasi's ghats, an afternoon tracking tigers in Bandhavgarh, a
            week in Bhutan's hill country without another foreign visitor in sight
            — these things require flexibility, a trusted local network, and a
            guide who is there for you alone.
          </p>
          <p className="body-text">
            AndThen designs journeys that are built around what you want to do —
            not around what is convenient to operate. Every itinerary on this site
            is a starting point. Nothing is fixed until you say so.
          </p>
          <div className={styles.introNote}>
            <span className={styles.introNoteLabel}>
              A note on combining countries
            </span>
            <p className={styles.introNoteText}>
              Many of our best journeys cross borders — India and Nepal, Bhutan
              and India, Sri Lanka with a detour to South India. We handle all
              permit logistics and cross-border arrangements as part of your
              itinerary. Tell us where you want to go and we will make the routing
              work.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUR DESTINATION CARDS ────────────────────────────── */}
      <section className={styles.destinations} aria-label="Our four destinations">
        <div className={styles.destinationsHeader}>
          <div>
            <span className="eyebrow">Our destinations</span>
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              Four countries. Where would you like to go?
            </h2>
          </div>
          <Link href="/contact/" className="text-link text-link--muted">
            Talk to a specialist
          </Link>
        </div>

        {destinations.map((dest) => {
          const data = destCardData[dest.id];
          if (!data) return null;
          return (
            <article key={dest.id} className={styles.destCard} id={dest.id}>
              <Link href={`/destinations/${dest.id}/`}>
                <div
                  className={`${styles.dcImage} ${data.bgClass}`}
                  role="img"
                  aria-label={`${dest.name} destination`}
                >
                  <div
                    className={styles.dcImageBg}
                    style={{
                      backgroundImage: `url('${data.image}')`,
                    }}
                  />
                  <div className={styles.dcImageTitle}>
                    <span className={styles.dcImageNumber}>{dest.number}</span>
                    <span className={styles.dcImageName}>{dest.name}</span>
                    <span className={styles.dcImageRegion}>{data.regionLine}</span>
                  </div>
                </div>
              </Link>

              <div className={styles.dcBody}>
                <div>
                  <p className={styles.dcPositioning}>{data.positioning}</p>
                  <p className={styles.dcDesc}>{data.desc}</p>
                </div>

                <div>
                  <ul className={styles.dcStats}>
                    {data.stats.map((s) => (
                      <li key={s.label} className={styles.dcStat}>
                        <span className={styles.dcStatLabel}>{s.label}</span>
                        <span className={styles.dcStatValue}>{s.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className={styles.dcHighlightsLabel}>What draws people</span>
                  <ul className={styles.dcHighlights}>
                    {data.highlights.map((h) => (
                      <li key={h} className={styles.dcHighlight}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.dcCtaCol}>
                  <Link href={`/destinations/${dest.id}/`} className={styles.dcCta}>
                    Explore {dest.name}
                  </Link>
                  <Link
                    href={`/contact/?destination=${dest.id}`}
                    className={styles.dcCtaOutline}
                  >
                    Plan my {dest.name} trip
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* ── EXPERIENCES STRIP ─────────────────────────────────── */}
      <section className={styles.experiences} aria-label="Experiences across the subcontinent">
        <div className={styles.experiencesHeader}>
          <div>
            <span className="eyebrow" style={{ color: "var(--cb)" }}>
              Across all four destinations
            </span>
            <h2 className="section-heading section-heading--light">
              What brings people to the subcontinent
            </h2>
          </div>
          <Link href="/signature-experiences/" className="text-link text-link--light">
            All experiences
          </Link>
        </div>
        <div className={styles.expGrid}>
          {experiences.map((exp) => (
            <Link
              key={exp.num}
              href={exp.link}
              className={styles.expCard}
              aria-label={exp.title}
            >
              <span className={styles.expCardNum} aria-hidden="true">
                {exp.num}
              </span>
              <h3 className={styles.expCardTitle}>{exp.title}</h3>
              <p className={styles.expCardDesc}>{exp.desc}</p>
              <div className={styles.expCardCountries}>
                {exp.countries.map((c) => (
                  <span key={c} className={styles.expCardCountry}>
                    {c}
                  </span>
                ))}
              </div>
              <span className={styles.expCardLink}>
                <span className={styles.expCardLinkLine} aria-hidden="true" />
                {exp.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HOW TO CHOOSE ─────────────────────────────────────── */}
      <section className={styles.howTo} aria-label="How to choose your destination">
        <div className={styles.howToInner}>
          <div className={styles.howToLeft}>
            <span className="eyebrow">Planning your journey</span>
            <h2 className="section-heading">Not sure where to go?</h2>
            <div className="rule" />
            <p className="body-text">
              The four countries in our collection are very different from each
              other. This quick guide gives you a sense of who each one suits
              best. When in doubt, call us — this is exactly what we are here for.
            </p>
            <p className="body-text">
              Many of our most memorable journeys combine two countries in a
              single trip. Tell us how long you have, and we will tell you what is
              possible.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/contact/" className="text-link">
                Talk to a specialist
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.chooseGrid}>
              {[
                {
                  id: "india",
                  name: "India",
                  title: "Go to India if you want…",
                  items: [
                    "The greatest concentration of historical monuments in Asia",
                    "Private tiger safaris in world-class national parks",
                    "A first South Asia journey that covers the most ground",
                    "Royal palaces, Mughal forts and sacred river cities",
                    "Kerala — the most complete wellness destination in the region",
                  ],
                },
                {
                  id: "bhutan",
                  name: "Bhutan",
                  title: "Go to Bhutan if you want…",
                  items: [
                    "A country that genuinely feels untouched by mass tourism",
                    "Buddhist culture at its most intact — monasteries, dzongs, festivals",
                    "Himalayan scenery without the crowds of Nepal's popular trails",
                    "A short, high-quality journey — 7–10 days is ideal",
                    "Something most of your friends have not done",
                  ],
                },
                {
                  id: "nepal",
                  name: "Nepal",
                  title: "Go to Nepal if you want…",
                  items: [
                    "The world's greatest high-altitude trekking",
                    "Ancient cities — Kathmandu valley's three medieval kingdoms",
                    "Wildlife — one-horned rhinos and tigers in Chitwan",
                    "Mountain views without trekking — Pokhara and Nagarkot",
                    "Incredible value relative to other Himalayan destinations",
                  ],
                },
                {
                  id: "sri-lanka",
                  name: "Sri Lanka",
                  title: "Go to Sri Lanka if you want…",
                  items: [
                    "The most manageable first South Asian destination",
                    "Ancient history and beaches in a single two-week circuit",
                    "Leopard safaris — the highest wild leopard density in Asia",
                    "Ayurveda retreats on one of Asia's finest coastlines",
                    "Blue whale watching — among the best in the world",
                  ],
                },
              ].map((card) => (
                <article key={card.id} className={styles.chooseCard}>
                  <span className={styles.chooseCardDest}>{card.name}</span>
                  <h3 className={styles.chooseCardTitle}>{card.title}</h3>
                  <ul className={styles.chooseCardFor}>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/destinations/${card.id}/`}
                    className={styles.chooseCardLink}
                  >
                    Explore {card.name} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────── */}
      <div className={styles.ctaBand} aria-label="Start planning your journey">
        <div>
          <h2 className={styles.ctaBandHeading}>
            Not sure where to begin? That is what we are for.
          </h2>
          <p className={styles.ctaBandSub}>
            Tell us roughly when you want to travel, how long you have, and what
            kind of experience interests you. We will come back to you with a
            starting point — no obligation, no fee for the consultation.
          </p>
        </div>
        <div className={styles.ctaBtns}>
          <Link href="/contact/" className={styles.btnPrimary}>
            Start the conversation
          </Link>
          <Link href="/itineraries/" className={styles.btnSecondary}>
            Browse our itineraries
          </Link>
        </div>
      </div>
    </main>
  );
}
