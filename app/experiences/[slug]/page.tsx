import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Button from "@/components/common/Button/Button";
import styles from "./page.module.css";

type ExperienceSlug = "art-of-feeling-well" | "plated-south" | "fairways-wonders";

const experiences: Record<ExperienceSlug, {
  id: string;
  num: string;
  type: string;
  nights: string;
  kicker: string;
  name: string;
  nameHtml: string;
  subtitle: string;
  tagline: string;
  intro: string;
  imgClass: string;
  price: string;
  priceLabel: string;
  duration: string;
  groupSize: string;
  groupLabel: string;
  route: { city: string; nights: string }[];
  highlights: string[];
  includes: string[];
  specialist: {
    name: string;
    title: string;
    bio: string;
    awards: string[];
    imgClass: string;
  };
  stays: { city: string; nights: string; hotel: string }[];
  metaTitle: string;
  metaDesc: string;
}> = {
  "art-of-feeling-well": {
    id: "art-of-feeling-well",
    num: "01",
    type: "Wellness · Kerala",
    nights: "13 nights / 14 days",
    kicker: "Signature Experience · 01",
    name: "Art of Feeling Well",
    nameHtml: "Art of<br /><em>Feeling Well</em>",
    subtitle: "Art. Ayurveda. Kerala. — 10 Oct to 23 Oct 2026",
    tagline: "Where classical movement meets ancient healing.",
    intro: "Thirteen nights moving through three distinct faces of Kerala — the colonial harbour town of Cochin, the backwater stillness of Kumarakom and the cliff-top coast of Kovalam — held together by a single thread: the connection between physical healing and classical movement. The programme weaves daily Ayurvedic treatment (personalised by a resident physician at Surya Samudra) with Mohiniyattam sessions led by Dr. Methil Devika — not as performance, but as a movement practice for body and mind. The final night is spent in Trivandrum, with a Kalari performance at Agasthyam and a curated dinner at Villa Maya.",
    imgClass: "imgWellness",
    price: "USD 9,852",
    priceLabel: "From",
    duration: "13 nights / 14 days",
    groupSize: "8–12 guests",
    groupLabel: "Group size",
    route: [
      { city: "Cochin", nights: "3 nights" },
      { city: "Kumarakom", nights: "2 nights" },
      { city: "Kovalam", nights: "7 nights" },
      { city: "Trivandrum", nights: "1 night" },
    ],
    highlights: [
      "Daily 90-min Ayurvedic therapy at Surya Samudra Beach Resort",
      "Personalised Ayurvedic consultation & treatment plan with resident physician",
      "3 Mohiniyattam workshops with Dr. Methil Devika",
      "1 private Mohiniyattam performance by Dr. Methil Devika",
      "Daily 60-min guided yoga session",
      "Houseboat cruise with curated lunch, Kumarakom backwaters",
      "Kalari performance at Agasthyam, Trivandrum",
      "Curated dinner at Villa Maya, Trivandrum",
      "Documentary screening — Sarpatatwam by Dr. Devika",
    ],
    includes: [
      "Personalised Ayurvedic consultation & treatment plan",
      "Daily 90-min Ayurvedic therapy at Surya Samudra",
      "Daily 60-min guided yoga session",
      "3 Mohiniyattam workshops with Dr. Methil Devika",
      "1 private performance by Dr. Methil Devika",
      "Documentary screening",
      "Houseboat cruise with lunch, Kumarakom",
      "Kalari performance at Agasthyam, Trivandrum",
      "Curated dinner at Villa Maya, Trivandrum",
      "Prescribed herbal medications throughout",
      "Ayurvedic diet plan — all meals in Kovalam",
      "All accommodation, transfers and sightseeing",
    ],
    specialist: {
      name: "Dr. Methil Devika",
      title: "Mohiniyattam Exponent, Scholar and Performing Artist",
      bio: "Dr. Methil Devika is one of India's most celebrated classical dancers, a Mohiniyattam exponent whose work has taken her from the temple stages of Kerala to performance halls across the United States, Southeast Asia and Australia. She has received some of India's most prestigious arts honours, including the Ustad Bismillah Yuva Puraskar and the Dakshinamurthy Puraskar, an award shared with maestros Pandit Hariprasad Chaurasia and Sivamani. Her short documentary Sarpatatwam made the Academy Awards Contention List in 2018, and her film The Crossover screened at the Mumbai International Film Festival in 2024.",
      awards: [
        "Ustad Bismillah Yuva Puraskar",
        "Dakshinamurthy Puraskar",
        "Academy Awards Contention List 2018",
        "Mumbai International Film Festival 2024",
      ],
      imgClass: "spDevika",
    },
    stays: [
      { city: "Cochin", nights: "3N", hotel: "Eighth Bastion / similar" },
      { city: "Kumarakom", nights: "2N", hotel: "Zuri Kumarakom / similar" },
      { city: "Kovalam", nights: "7N", hotel: "Surya Samudra" },
      { city: "Trivandrum", nights: "1N", hotel: "Vivanta / similar" },
    ],
    metaTitle: "Art of Feeling Well — Wellness & Mohiniyattam Kerala | AndThen Travels",
    metaDesc: "A 13-night private Kerala retreat combining Ayurvedic treatment at Surya Samudra with Mohiniyattam sessions led by Dr. Methil Devika.",
  },
  "plated-south": {
    id: "plated-south",
    num: "02",
    type: "Food & Culture",
    nights: "12 nights / 13 days",
    kicker: "Signature Experience · 02",
    name: "Plated South",
    nameHtml: "<em>Plated</em><br />South",
    subtitle: "A South Indian culinary sojourn with Chef Bobby Geetha",
    tagline: "Six regions. One chef. The real South India on a plate.",
    intro: "South Indian cuisine is one of the world's most complex and misunderstood culinary traditions. This programme moves through it properly — from Bengaluru's artisanal café scene and Mysore's royal kitchen heritage, through the bold Kodava flavours of Coorg's coffee hills, into the fragrant biryanis of Malabar Calicut, Fort Kochi's colonial-era spice trade and finally the backwaters of Kumarakom, where the journey ends on a houseboat with a traditional Kerala Sadya feast. Chef Bobby leads every culinary session: market visits, masterclasses, home kitchen experiences and curated restaurant meals.",
    imgClass: "imgCulinary",
    price: "On request",
    priceLabel: "Pricing",
    duration: "12 nights / 13 days",
    groupSize: "Private groups",
    groupLabel: "For",
    route: [
      { city: "Bengaluru", nights: "2 nights" },
      { city: "Mysore", nights: "2 nights" },
      { city: "Coorg", nights: "2 nights" },
      { city: "Calicut", nights: "2 nights" },
      { city: "Cochin", nights: "2 nights" },
      { city: "Kumarakom", nights: "2 nights" },
    ],
    highlights: [
      "Iconic eatery visits & bar-hopping tour, Bengaluru",
      "Mysore Palace visit & Masala Dosa masterclass with Chef Bobby",
      "Kodava lunch & gourmet coffee session in Coorg's plantations",
      "Dubare Elephant Camp experience, Coorg",
      "Paragon Biryani kitchen visit & morning market tour, Calicut",
      "Kochi-Muziris Biennale & Kerala food culture deep-dive",
      "Traditional Sadya feast on a houseboat, Kumarakom",
    ],
    includes: [
      "Iconic eatery visits & bar-hopping, Bengaluru",
      "Mysore Palace & Masala Dosa masterclass",
      "Kodava lunch & gourmet coffee session, Coorg",
      "Dubare Elephant Camp, Coorg",
      "Paragon Biryani visit & market tour, Calicut",
      "Kochi-Muziris Biennale & Kerala food introduction",
      "Houseboat cruise & traditional Sadya, Kumarakom",
      "Chef Bobby Geetha masterclasses at each stop",
      "All accommodation, meals, transfers and guides",
      "Group leader complimentary accommodation",
    ],
    specialist: {
      name: "Chef Bobby Geetha",
      title: "Culinary Expert, BBC MasterChef Finalist, Founder of Kerala Canteen",
      bio: "Chef Bobby Geetha is a globally acclaimed culinary expert known for his innovative approach to Indian cuisine. A finalist on BBC's MasterChef: The Professionals, he has carved a unique space by blending traditional Indian flavours with contemporary global techniques. Bobby is the founder of the award-winning Kerala Canteen in Leeds, UK — a celebrated destination for modern South Indian cuisine. He has worked in some of the world's most prestigious kitchens, including Noma (2*), Dinner by Heston Blumenthal (2*) and Le Manoir aux Quat'Saisons (2*). On Plated South, he leads every session personally.",
      awards: [
        "BBC MasterChef: The Professionals finalist",
        "Noma · Heston · Le Manoir",
        "Founder, Kerala Canteen Leeds",
      ],
      imgClass: "spBobby",
    },
    stays: [
      { city: "Bengaluru", nights: "2N", hotel: "Oberoi / similar" },
      { city: "Mysore", nights: "2N", hotel: "Grand Mercure / similar" },
      { city: "Coorg", nights: "2N", hotel: "Evolve Back" },
      { city: "Calicut", nights: "2N", hotel: "Kadavu Resort" },
      { city: "Cochin", nights: "2N", hotel: "Brunton Boatyard / similar" },
      { city: "Kumarakom", nights: "2N", hotel: "Coconut Lagoon / similar" },
    ],
    metaTitle: "Plated South — South Indian Culinary Journey with Chef Bobby Geetha | AndThen Travels",
    metaDesc: "A 12-night private South Indian culinary sojourn through Bengaluru, Mysore, Coorg, Calicut, Cochin and Kumarakom with acclaimed chef Bobby Geetha.",
  },
  "fairways-wonders": {
    id: "fairways-wonders",
    num: "03",
    type: "Golf · Golden Triangle",
    nights: "9 nights / 10 days",
    kicker: "Signature Experience · 03",
    name: "Fairways & Wonders",
    nameHtml: "Fairways &amp;<br /><em>Wonders</em>",
    subtitle: "The Elite Indian Golf Experience — Delhi, Agra & Jaipur",
    tagline: "Five rounds. Four legendary courses. India's greatest monuments.",
    intro: "Golf in India is not just a sport — it is a walk through history. Since 1829, when the Royal Calcutta Golf Club became the first outside Great Britain, the country has been home to some of the world's most storied fairways. Tee off amid Mughal ruins at the Delhi Golf Club, play the Gary Player–designed championship course at DLF Gurgaon, take a round on Jaipur's royal Rambagh Golf Club, and finish on the Jack Nicklaus Signature layout at ITC Grand Bharat. Between rounds: Old Delhi's bazaars, the Taj Mahal at sunrise, Jaipur's pink-hued forts and palaces.",
    imgClass: "imgGolf",
    price: "€7,500",
    priceLabel: "From",
    duration: "9 nights / 10 days",
    groupSize: "5 rounds included",
    groupLabel: "Golf sessions",
    route: [
      { city: "Delhi", nights: "4 nights" },
      { city: "Agra", nights: "1 night" },
      { city: "Jaipur", nights: "3 nights" },
      { city: "Gurgaon", nights: "1 night" },
    ],
    highlights: [
      "Golf at Delhi Golf Club — historic Mughal-era fairways",
      "Golf at DLF Golf & Country Club (Gary Player design)",
      "Golf at Rambagh Golf Club — former royal course, Jaipur",
      "Golf at Classic Golf & Country Club (Jack Nicklaus Signature)",
      "Taj Mahal at sunrise with private guide",
      "Old Delhi bazaars, Red Fort, Humayun's Tomb, Qutab Minar",
      "Amer Fort, Jantar Mantar, City Palace, Jaipur",
    ],
    includes: [
      "5 golf sessions across 4 premier courses",
      "Red Fort, Humayun's Tomb, Qutab Minar",
      "Taj Mahal & Agra Fort sightseeing",
      "Amer Fort, Jantar Mantar, City Palace",
      "In-vehicle Wi-Fi throughout",
      "English-speaking guide for all sightseeing",
      "All accommodation, meals as planned",
      "All transfers in air-conditioned vehicle",
      "Monument entrance fees",
      "All applicable government taxes",
    ],
    specialist: {
      name: "AndThen Golf Concierge",
      title: "Dedicated golf logistics, tee-time booking and on-ground support",
      bio: "Fairways & Wonders is handled end-to-end by our specialist golf concierge team with direct relationships with every course on the itinerary. From tee-time booking and equipment logistics to on-course caddies and post-round arrangements at some of India's finest hotels, we ensure the experience is seamless from arrival to departure.",
      awards: [
        "Delhi Golf Club · DLF Golf",
        "Rambagh Golf Club · ITC Grand Bharat",
        "Oberoi & Taj Hotels",
      ],
      imgClass: "spGolf",
    },
    stays: [
      { city: "Delhi", nights: "4N", hotel: "The Oberoi New Delhi" },
      { city: "Agra", nights: "1N", hotel: "Oberoi Amarvilas" },
      { city: "Jaipur", nights: "3N", hotel: "Rambagh Palace" },
      { city: "Gurgaon", nights: "1N", hotel: "ITC Grand Bharat" },
    ],
    metaTitle: "Fairways & Wonders — Elite Golf Journey India | AndThen Travels",
    metaDesc: "A 9-night private golf journey through the Golden Triangle — 5 rounds at Delhi Golf Club, DLF, Rambagh Golf Club and ITC Grand Bharat's Jack Nicklaus course.",
  },
};

export async function generateStaticParams() {
  return Object.keys(experiences).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exp = experiences[slug as ExperienceSlug];
  if (!exp) return { title: "Not Found" };
  return {
    title: exp.metaTitle,
    description: exp.metaDesc,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = experiences[slug as ExperienceSlug];

  if (!exp) notFound();

  return (
    <div className={styles.detailPage}>
      {/* ── HERO ───────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className={`${styles.heroBg} ${styles[exp.imgClass]}`}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroTopBar}>
            <Link href="/experiences/" className={styles.backLink}>
              <span className={styles.backLine}></span>All experiences
            </Link>
            <span className={styles.heroNum}>{exp.num}</span>
          </div>
          <span className={styles.heroKicker}>{exp.kicker}</span>
          <h1
            className={styles.heroTitle}
            dangerouslySetInnerHTML={{ __html: exp.nameHtml }}
          />
          <p className={styles.heroSubtitle}>{exp.subtitle}</p>
          <div className={styles.heroMeta}>
            <span className={styles.heroMetaItem}>{exp.type}</span>
            <span className={styles.heroMetaSep}>·</span>
            <span className={styles.heroMetaItem}>{exp.nights}</span>
          </div>
        </div>
      </header>

      {/* ── INTRO + DETAILS ─────────────────────────────── */}
      <section className={styles.introSection}>
        <div className={styles.introLeft}>
          <span className={styles.introKicker}>Overview</span>
          <p className={styles.introCopy}>{exp.intro}</p>
          <p className={styles.introTagline}>&ldquo;{exp.tagline}&rdquo;</p>
        </div>
        <div className={styles.introRight}>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Duration</span>
              <span className={styles.detailValue}>{exp.duration}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>{exp.priceLabel}</span>
              <span className={styles.detailValue}>{exp.price}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>{exp.groupLabel}</span>
              <span className={styles.detailValue}>{exp.groupSize}</span>
            </div>
          </div>
          <div className={styles.enquiryCta}>
            <Button
              href={`/contact/?experience=${exp.id}`}
              variant="solidDark"
            >
              Enquire about this experience
            </Button>
          </div>
        </div>
      </section>

      {/* ── ROUTE ──────────────────────────────────────── */}
      <div className={styles.routeStrip} role="complementary" aria-label="Programme route">
        <span className={styles.routeLabel}>Your route</span>
        <div className={styles.routeStops}>
          {exp.route.map((stop, i) => (
            <div key={i} className={styles.routeStopWrap}>
              {i > 0 && <span className={styles.routeArrow}>→</span>}
              <div className={styles.routeStop}>
                <strong>{stop.city}</strong>
                <span className={styles.routeNights}>{stop.nights}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── HIGHLIGHTS ─────────────────────────────────── */}
      <section className={styles.highlightsSection}>
        <div className={styles.highlightsHead}>
          <span className={styles.hlKicker}>Experience highlights</span>
          <h2 className={styles.hlTitle}>What makes this <em>different</em></h2>
        </div>
        <div className={styles.highlightsList}>
          {exp.highlights.map((item, i) => (
            <div key={i} className={styles.highlightItem}>
              <span className={styles.hlNum}>{String(i + 1).padStart(2, "0")}</span>
              <p className={styles.hlText}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INCLUDES ───────────────────────────────────── */}
      <div className={styles.includesSection}>
        <span className={styles.includesLabel}>What&apos;s included</span>
        <ul className={styles.includesList}>
          {exp.includes.map((item, i) => (
            <li key={i} className={styles.includesItem}>{item}</li>
          ))}
        </ul>
      </div>

      {/* ── SPECIALIST ─────────────────────────────────── */}
      <div className={styles.specialistSection} aria-label={`Programme specialist — ${exp.specialist.name}`}>
        <div className={styles.spImgWrap}>
          <div className={`${styles.spImgPh} ${styles[exp.specialist.imgClass]}`}></div>
        </div>
        <div className={styles.spBody}>
          <span className={styles.spKicker}>Programme specialist</span>
          <h2 className={styles.spName}>{exp.specialist.name}</h2>
          <p className={styles.spTitle}>{exp.specialist.title}</p>
          <p className={styles.spBio}>{exp.specialist.bio}</p>
          <div className={styles.spAwards}>
            {exp.specialist.awards.map((award, i) => (
              <span key={i} className={styles.spAward}>{award}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHERE YOU STAY ─────────────────────────────── */}
      <section className={styles.staysSection}>
        <span className={styles.staysLabel}>Where you stay</span>
        <div className={styles.staysGrid}>
          {exp.stays.map((stay, i) => (
            <div key={i} className={styles.stayCard}>
              <span className={styles.stayCity}>{stay.city} · {stay.nights}</span>
              <span className={styles.stayHotel}>{stay.hotel}</span>
            </div>
          ))}
        </div>
        <p className={styles.staysNote}>
          All properties are personally vetted by the AndThen team. Exact accommodation confirmed at time of booking based on availability and group size. Like-for-like alternatives used where stated.
        </p>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <div className={styles.finalCta}>
        <div>
          <h2 className={styles.fcTitle}>
            Ready to start<br />your <em>{exp.name}</em> journey?
          </h2>
          <p className={styles.fcSub}>
            Tell us who&apos;s travelling, how many and when. We&apos;ll come back within 24 hours with an outline and a fee estimate. No obligation — just the right information to help you decide.
          </p>
        </div>
        <div className={styles.fcBtns}>
          <Button href={`/contact/?experience=${exp.id}`} variant="solidDark">
            Start the conversation
          </Button>
          <Link href="/experiences/" className={styles.fcLink}>
            <span className={styles.fcLinkLine}></span>All experiences
          </Link>
        </div>
      </div>
    </div>
  );
}
