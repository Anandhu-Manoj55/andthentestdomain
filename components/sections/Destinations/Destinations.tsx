import Image from "next/image";
import Link from "next/link";
import styles from "./Destinations.module.css";
import { destinations } from "@/data/destinations";

export const Destinations = () => {
  return (
    <section className={styles.destinations} aria-label="Destinations we offer" id="destinations">
      <div className={styles.header}>
        <h2 className={styles.heading}>Where we take you</h2>
        <Link href="/destinations/" className="text-link text-link--muted">
          All destinations
        </Link>
      </div>

      <ul className={styles.cards} role="list">
        {destinations.map((dest) => (
          <li key={dest.id} className={styles.cardItem} role="listitem">
            <Link
              href={dest.slug}
              className={styles.card}
              aria-label={`Explore ${dest.name}`}
            >
              <div className={styles.cardImage}>
                <Image
                  src={dest.heroImage ?? "/Assets/home/india.jpg"}
                  alt={`Destination ${dest.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={false}
                />
              </div>
              <div className={styles.cardOverlay} aria-hidden="true" />
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>{dest.number}</span>
                <h3 className={styles.cardName}>{dest.name}</h3>
                <div className={styles.cardTags} aria-hidden="true">
                  {dest.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={styles.cardArrow}>Explore →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Destinations;
