import Link from "next/link";
import Image from "next/image";
import styles from "./Tours.module.css";
import Divider from "@/components/common/Divider/Divider";

export const Tours = () => {
  return (
    <section className={styles.tours} aria-label="Handcrafted itineraries" id="itineraries">
      <div className={styles.content}>
        <span className="eyebrow">Our journeys</span>
        <h2 className={styles.heading}>
          Handcrafted itineraries, tailor-made for you
        </h2>
        <Divider />
        <p className={styles.bodyText}>
          Every journey we design is entirely private, departures are on the date of your choosing, and the routing is customized around your personal interests.
        </p>
        <p className={styles.bodyText}>
          Think of these itineraries as starting points, not rigid schedules. Tell us what moves you, and we will craft a seamless travel experience across India, Bhutan, Nepal, and Sri Lanka.
        </p>
        <div className={styles.actions}>
          <Link href="/itineraries/" className={styles.btnPrimary}>
            Explore all itineraries
          </Link>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/Assets/home/Bhutan.jpg"
          alt="Taktsang Monastery (Tiger's Nest) in Paro, Bhutan"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
        <span className={styles.imageLabel}>Tiger&apos;s Nest, Bhutan</span>
      </div>
    </section>
  );
};
export default Tours;
