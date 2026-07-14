import styles from "./Hero.module.css";
import Button from "@/components/common/Button/Button";

export const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.left}>
        <span className={styles.destTag}>
          India · Bhutan · Nepal · Sri Lanka
        </span>

        <h1 className={styles.heading}>
          Travel that stays
          <br />
          with you <em>forever</em>
        </h1>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>4</span>
            <span className={styles.statLabel}>Destinations</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Private</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>Daily</span>
            <span className={styles.statLabel}>Departures</span>
          </div>
        </div>

        <div>
          <Button href="/contact/" variant="inlineCta">
            Begin your journey
            <svg viewBox="0 0 24 24" strokeWidth="1.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Button>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.videoContainer}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.backgroundVideo}
            poster="/Assets/home/poster.png"
          >
            <source src="/Assets/home/banner-video.mp4" type="video/mp4" />
           
          </video>
          <div className={styles.overlay}></div>

        </div>
        {/* <p className={styles.caption}>
          Private journeys · Tailor-made · Departs daily
        </p> */}
      </div>
    </section>
  );
};
export default Hero;
