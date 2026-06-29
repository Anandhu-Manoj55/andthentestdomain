import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  italicTitle?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  italicTitle = false,
  light = false,
  className = "",
}: SectionHeadingProps) => {
  const titleClass = `${styles.title} ${italicTitle ? styles.titleItalic : ""}`.trim();
  const themeClass = light ? styles.light : "";
  const combinedClassName = `${styles.sectionHeading} ${themeClass} ${className}`.trim();

  return (
    <div className={combinedClassName}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={titleClass}>{title}</h2>
    </div>
  );
};
export default SectionHeading;
