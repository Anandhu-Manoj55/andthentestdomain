"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { faqItems } from "@/data/faq";

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.faq} aria-label="Frequently asked questions">
      <div className={styles.inner}>
        <span className="eyebrow">Questions answered</span>
        <h2 className={styles.heading}>Things people ask</h2>

        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          const answerId = `${item.id}-answer`;

          return (
            <div key={item.id} className={styles.faqItem}>
              <button
                className={styles.trigger}
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span className={styles.question}>{item.question}</span>
                <span
                  className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`.trim()}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              <p
                id={answerId}
                className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`.trim()}
                role="region"
                aria-labelledby={item.id}
              >
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default FAQ;
