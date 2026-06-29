import Image from "next/image";
import Link from "next/link";
import styles from "./SignatureExperiences.module.css";

interface SignatureCard {
  id: string;
  category: string;
  title: string;
  expert: string;
  desc: string;
  dates: string;
  price: string;
  badge: string;
  badgeFixed: boolean;
  image: string;
  imageClass: keyof typeof styles;
}

const SIGNATURES: SignatureCard[] = [
  {
    id: "plated-south",
    category: "India · Culinary",
    title: "Culinary Trail with Chef Bobby Geetha",
    expert: "Led by Chef Bobby Geetha",
    desc: "An intimate culinary journey through India's most storied food cultures — spice markets, home kitchens, heritage recipes and private cooking sessions with one of the UK's most celebrated Indian chefs.",
    dates: "Next departure · Oct 2026",
    price: "$6,800 per person",
    badge: "Fixed departures",
    badgeFixed: true,
    image: "/Assets/signature exp/Plated South.jpg",
    imageClass: "imageCulinary",
  },
  {
    id: "art-of-feeling-well",
    category: "India · Wellness & Movement",
    title: "The Art of Feeling Well with Methil Devika",
    expert: "Led by Methil Devika",
    desc: "A transformative wellness journey through India with one of its most celebrated classical dancers and wellness practitioners — exploring movement, breath, Ayurveda and the deep traditions of Indian well-being.",
    dates: "Next departure · Nov 2026",
    price: "$5,900 per person",
    badge: "Fixed departures",
    badgeFixed: true,
     image: "/Assets/signature exp/Art of Feeling Well.png",
    imageClass: "imageWellness",
  },
  {
    id: "fairways-wonders",
    category: "India · Golf",
    title: "The India Golf Trail",
    expert: "Curated by AndThen",
    desc: "India's most scenic and storied golf courses, played privately. From the colonial heritage courses of Kolkata and Delhi to the hill station greens of Ooty and Coorg — a golfing journey unlike any other.",
    dates: "Private · Departs on request",
    price: "$7,200 per person",
    badge: "Private group",
    badgeFixed: false,
    image: "/Assets/signature exp/Fairways and Wonders.png",
    imageClass: "imageGolf",
  },
];

export const SignatureExperiences = () => {
  return (
    <section className={styles.signature} aria-label="Signature experiences">
      <div className={styles.header}>
        <div>
          <span className="eyebrow">Signature experiences</span>
          <h2 className={styles.heading}>Journeys led by the extraordinary</h2>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.intro}>
            A curated series of expert-led journeys — small groups, rare access,
            and the company of people who have devoted their lives to their craft.
          </p>
          <Link
            href="/signature-experiences/"
            className="text-link text-link--muted"
          >
            All signature experiences
          </Link>
        </div>
      </div>

      <div className={styles.sigCards}>
        {SIGNATURES.map((sig) => {
          const badgeClass = `${styles.badge} ${
            sig.badgeFixed ? styles.badgeFixed : styles.badgePrivate
          }`.trim();

          const fallbackBgClass = styles[sig.imageClass] || "";
          const imageAreaClass = `${styles.imageArea} ${fallbackBgClass}`.trim();

          return (
            <article key={sig.id} className={styles.sigCard}>
              <div className={imageAreaClass}>
                <span className={badgeClass}>{sig.badge}</span>
                <Image
                  src={sig.image}
                  alt={sig.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, (max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.body}>
                <span className={styles.category}>{sig.category}</span>
                <h3 className={styles.title}>{sig.title}</h3>
                <span className={styles.expert}>{sig.expert}</span>
                <p className={styles.desc}>{sig.desc}</p>

                <div className={styles.meta}>
                  <div>
                    <span className={styles.dates}>{sig.dates}</span>
                    <span className={styles.priceLabel}>From</span>
                    <span className={styles.price}>{sig.price}</span>
                  </div>
                  <Link href={`/experiences/${sig.id}`} className={styles.link}>
                    View experience →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.sigNote}>
        <p className={styles.noteText}>
          Signature experiences run as <strong>fixed small-group departures</strong>{" "}
          (max 10 guests) or as <strong>fully private journeys</strong> for your
          group. Contact us to discuss either format.
        </p>
        <Link href="/contact/" className="text-link text-link--muted">
          Enquire about a signature experience
        </Link>
      </div>
    </section>
  );
};
export default SignatureExperiences;
