import Link from "next/link";
import styles from "./Testimonials.module.css";
import { testimonials } from "@/data/testimonials";

export const Testimonials = () => {
  return (
    <section className={styles.testimonials} aria-label="Traveller testimonials">
      <div className={styles.header}>
        <div>
          <span className="eyebrow">Traveller stories</span>
          <h2 className={styles.heading}>In their words</h2>
        </div>
        <Link href="/testimonials/" className="text-link">
          All reviews
        </Link>
      </div>

      <div className={styles.testiGrid}>
        {testimonials.map((testi) => (
          <article key={testi.id} className={styles.testiCard}>
            <div className={styles.testiRule} aria-hidden="true" />
            <blockquote className={styles.quote}>
              &ldquo;{testi.quote}&rdquo;
            </blockquote>
            <span className={styles.name}>{testi.name}</span>
            <span className={styles.trip}>{testi.trip}</span>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
