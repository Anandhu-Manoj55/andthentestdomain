import Link from "next/link";
import styles from "./About.module.css";
import Divider from "@/components/common/Divider/Divider";
import Image from "next/image";

export const About = () => {
  return (
    <section className={styles.about} aria-label="About AndThen Travels" id="About">
      {/* <div className={styles.sidebar} aria-hidden="true">
        <span className={styles.sidebarText}>About AndThen</span>
      </div> */}

      <div className={styles.imageArea}>
      <Image src="/Assets/home/About section.jpg" alt="Syam, Founder of AndThen Travels" fill style={{ objectFit: "cover" }} />
        
      </div>

      <div className={styles.content}>
        <span className="eyebrow">A different way to travel</span>
        <h2 className={styles.heading}>
          Journeys built around you, not a schedule
        </h2>
        <Divider />
        <p className={styles.bodyText}>
          AndThen is a boutique Destination Management Company. We design
          private journeys across India, Bhutan, Nepal and Sri Lanka for
          discerning US travelers who want to experience a place — not just
          visit it.
        </p>
        <p className={styles.bodyText}>
          No groups. No fixed departures. No compromises. Just you, your
          destination, and a team that knows every corner of it.
        </p>
        <blockquote className={styles.quote}>
          &ldquo;The best journeys happen when someone who truly knows a place
          puts it in your hands.&rdquo;
        </blockquote>
        <div>
          <Link href="/about/" className="text-link">
            Our story
          </Link>
        </div>
      </div>
    </section>
  );
};
export default About;

