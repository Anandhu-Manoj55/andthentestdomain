import styles from "./Prize.module.css";
import Button from "@/components/common/Button/Button";

interface GiftItem {
  icon: string;
  label: string;
}

const GIFTS: GiftItem[] = [
  {
    icon: "☽",
    label: "1 night · Kerala heritage stay",
  },
  {
    icon: "⌂",
    label: "Taj hotel accommodation voucher",
  },
  {
    icon: "⬡",
    label: "Fujifilm camera, shipped to you",
  },
  {
    icon: "◈",
    label: "$200 AndThen travel credit",
  },
];

export const Prize = () => {
  return (
    <section className={styles.prize} aria-label="Guaranteed travel gift">
      <div>
        <span className="eyebrow" style={{color:"#fff",fontWeight:"bold",fontSize:"large"}}>
          A gift for every journey
        </span>
        <h2 className={styles.heading}>
          Every enquiry wins a guaranteed travel gift
        </h2>
        <p className={styles.bodyText}>
          Submit your travel interest and scratch to reveal your guaranteed gift
          — redeemed when you travel with us. No lottery. No catch. Our way of
          saying thank you.
        </p>
        <Button href="/contact/" variant="prizeBtn">
          Reveal my gift
        </Button>
      </div>

      <div className={styles.itemsGrid}>
        {GIFTS.map((gift, index) => (
          <div key={`gift-${index}`} className={styles.prizeItem}>
            <span className={styles.itemIcon} aria-hidden="true">
              {gift.icon}
            </span>
            <span className={styles.itemLabel}>{gift.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Prize;
