import styles from "./Marquee.module.css";

const MARQUEE_ITEMS = [
  "India",
  "Bhutan",
  "Nepal",
  "Sri Lanka",
  "Wellness & Ayurveda",
  "Wildlife Safaris",
  "Trekking & Adventure",
  "Spiritual Journeys",
  "Leisure & Culture",
  "Private & Tailor-made",
];

export const Marquee = () => {
  // We duplicate the list to ensure seamless looping in CSS
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {displayItems.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item}
            {index < displayItems.length - 1 && (
              <span className={styles.dot}> ● </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Marquee;
