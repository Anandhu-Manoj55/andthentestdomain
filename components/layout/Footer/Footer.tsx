import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div>
          <Link href="/" aria-label="AndThen Travels — Home" className={styles.logo}>
            <Image
              src="/Assets/logo/logo.png"
              alt="ANDTHEN"
              width={120}
              height={23}
              priority
              className={styles.logoImage}
            />
            <span className={styles.logoSub}>travels</span>
          </Link>
          <p className={styles.desc}>
            A boutique DMC crafting private, tailor-made journeys across India,
            Bhutan, Nepal and Sri Lanka for discerning US travelers.
          </p>
          <div className={styles.contact}>
            <a href="mailto:travel@andthentravels.com">
              travel@andthentravels.com
            </a>
            <a href="tel:+18000000000">+1 800 000 0000</a>
          </div>
        </div>

        <div className={styles.col}>
          <span className={styles.colHeading}>Destinations</span>
          <Link href="/india/">India</Link>
          <Link href="/bhutan/">Bhutan</Link>
          <Link href="/nepal/">Nepal</Link>
          <Link href="/sri-lanka/">Sri Lanka</Link>
        </div>

        <div className={styles.col}>
          <span className={styles.colHeading}>Experiences</span>
          <Link href="/experiences/wellness-ayurveda/">
            Wellness &amp; Ayurveda
          </Link>
          <Link href="/experiences/wildlife-safaris/">Wildlife &amp; Safaris</Link>
          <Link href="/experiences/trekking-adventure/">Trekking</Link>
          <Link href="/experiences/spiritual-journeys/">Spiritual journeys</Link>
          <Link href="/experiences/leisure-culture/">Leisure &amp; culture</Link>
        </div>

        <div className={styles.col}>
          <span className={styles.colHeading}>Company</span>
          <Link href="/about/">About us</Link>
          <Link href="/places-to-stay/">Places to stay</Link>
          <Link href="/journal/">Journal</Link>
          <Link href="/journal/podcast/">Podcast</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/login/">Agent login</Link>
          <Link href="/privacy-policy/">Privacy policy</Link>
          <Link href="/privacy-policy/">Terms &amp; conditions</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © 2026 AndThen Travels · Kawaakari Lifestyle Pvt Ltd · GST
          32AAHCK6672N1Z1 · India &amp; USA
        </p>
        <div className={styles.social} aria-label="Social media links">
          <a
            href="https://instagram.com/andthentravels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <span className={styles.socialIcon} aria-hidden="true">
              ■
            </span>
          </a>
          <a
            href="https://facebook.com/andthentravels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <span className={styles.socialIcon} aria-hidden="true">
              □
            </span>
          </a>
          <a
            href="https://linkedin.com/company/andthentravels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <span className={styles.socialIcon} aria-hidden="true">
              ◇
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
