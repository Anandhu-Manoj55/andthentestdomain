import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "outline" | "inlineCta" | "solidLight" | "solidDark" | "prizeBtn";
  onClick?: () => void;
  download?: boolean;
}

export const Button = ({
  children,
  href,
  className = "",
  variant = "outline",
  onClick,
  download,
}: ButtonProps) => {
  const variantClass = styles[variant] || "";
  const combinedClassName = `${styles.button} ${variantClass} ${className}`.trim();

  if (href) {
    if (download) {
      return (
        <a href={href} className={combinedClassName} download onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
