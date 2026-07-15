import styles from "./Prize.module.css";
import Button from "@/components/common/Button/Button";
import { FiMail, FiCheck } from "react-icons/fi";
import { LuGift } from "react-icons/lu";

export interface GiftItem {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}

export const GIFTS: GiftItem[] = [
  {
    icon: <FiMail />,
    step: "Step 1",
    title: "Enquire",
    description: "Tell us where you'd like to go",
  },
  {
    icon: <FiCheck />,
    step: "Step 2",
    title: "Confirm",
    description: "Your itinerary and trip are finalized",
  },
  {
    icon: <LuGift />,
    step: "Step 3",
    title: "Choose your gift",
    description: "Pick from options matched to your destination",
  },
];

export const Prize = () => {
  return (
    <section className={styles.prize} aria-label="Guaranteed travel gift">
      <div>
        <span
          className="eyebrow"
          style={{ color: "#fff", fontWeight: "bold", fontSize: "large" }}
        >
          A gift, chosen for your journey
        </span>
        <h2 className={styles.heading}>
          Every enquiry comes with a gift, made for your trip
        </h2>
        <p className={styles.bodyText}>
          Submit your travel interest and scratch to reveal your guaranteed gift
          — redeemed when you travel with us. No lottery. No catch. Our way of
          saying thank you.
        </p>
        <Button href="/contact/" variant="prizeBtn">
          enquire now
        </Button>
      </div>

      <div className={styles.itemsGrid}>
        {GIFTS.map((gift, index) => (
          <div key={`gift-${index}`} className={styles.prizeItem}>
            <span className={styles.itemIcon} aria-hidden="true">
              {gift.icon}
            </span>
            <p className={styles.itemStep}>{gift.step}</p>
            <h3 className={styles.itemTitle}>{gift.title}</h3>
            <p className={styles.itemDescription}>{gift.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Prize;
