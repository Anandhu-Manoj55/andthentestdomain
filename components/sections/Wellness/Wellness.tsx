import Link from "next/link";
import styles from "./Wellness.module.css";
import Divider from "@/components/common/Divider/Divider";
import Image from "next/image";

const WELLNESS_TAGS = ["Ayurveda", "Yoga", "Meditation", "Detox", "Healing"];

export const Wellness = () => {
  return (
    <section className={styles.wellness} aria-label="Wellness travel" id="wellness">
      <div className={styles.imageContainer}>
         <Image src="/Assets/home/wellness section.jpg" alt="Ayurveda wellness retreat in Kerala, India" fill style={{ objectFit: 'cover' }} />
        <span>Wellness photography</span>
      </div>
      <div className={styles.content}>
        <span className="eyebrow">Restore &amp; renew</span>
        <h2 className={styles.heading}>Wellness travel, deeply considered</h2>
        <Divider />
        <p className={styles.bodyText}>
          From authentic Ayurveda in Kerala to meditation retreats in
          Bhutan&apos;s monasteries — AndThen crafts wellness journeys that go
          far beyond a spa break. Handpicked properties, curated treatments,
          genuine restoration.
        </p>
        <div className={styles.tags}>
          {WELLNESS_TAGS.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div>
          <Link href="/wellness/" className="text-link">
            Explore wellness journeys
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Wellness;

