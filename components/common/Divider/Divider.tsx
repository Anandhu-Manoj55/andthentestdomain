import styles from "./Divider.module.css";

interface DividerProps {
  className?: string;
}

export const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div
      className={`${styles.divider} ${className}`.trim()}
      aria-hidden="true"
    />
  );
};
export default Divider;
