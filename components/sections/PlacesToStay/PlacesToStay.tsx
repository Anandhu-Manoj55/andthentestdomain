import Image from "next/image";
import Link from "next/link";
import styles from "./PlacesToStay.module.css";
import { hotels } from "@/data/hotels";
import Button from "@/components/common/Button/Button";

export const PlacesToStay = () => {
  return (
    <section className={styles.stays} aria-label="Places to stay" id="hotels">
      <div className={styles.header}>
        <div>
          <span className="eyebrow">Places to stay</span>
          <h2 className={styles.heading}>
            Where you rest matters as much as where you go
          </h2>
        </div>
        <div>
          <p className={styles.intro}>
            Every property in our collection is personally inspected — from
            intimate heritage havelis and wilderness lodges to iconic landmark
            hotels. We recommend only what we would stay in ourselves.
          </p>
          <Link href="/places-to-stay/" className="text-link">
            Explore our hotel collection
          </Link>
        </div>
      </div>

      <div className={styles.staysGrid}>
        <div className={styles.stayFeature}>
          <div>
            <span className={styles.featureEyebrow}>Our hotel booklet</span>
            <h3 className={styles.featureHeading}>
              A curated guide to the finest stays across South Asia
            </h3>
            {/* <p className={styles.featureBody}>
              From intimate tented camps in Rajasthan to iconic lake palaces in
              Udaipur and mountain lodges in Bhutan — our handpicked collection,
              yours to keep.
            </p> */}
          </div>
          <Button href="places-to-stay" variant="solidLight">
            View all recommended properties
          </Button>
        </div>

        {hotels.slice(0, 3).map((hotel) => (
          <Link
            key={hotel.id}
            href={`/places-to-stay/${hotel.id}/`}
            className={styles.stayCard}
          >
            <div className={styles.imageContainer}>
              <Image
                src={hotel.image}
                alt={hotel.alt}
                fill
                sizes="(max-width: 1024px) 50vw, (max-width: 768px) 100vw, 25vw"
                style={{ objectFit: "cover" }}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.meta}>
              <span className={styles.category}>{hotel.category}</span>
              <span className={styles.name}>{hotel.name}</span>
              <span className={styles.location}>{hotel.location}</span>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        {/* <Link href="/places-to-stay/" className="text-link">
          View all recommended properties
        </Link> */}
      </div>
    </section>
  );
};
export default PlacesToStay;
