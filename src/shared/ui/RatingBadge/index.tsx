import { memo } from "react";
import styles from "./styles.module.css";

interface RatingBadgeProps {
  rating: number;
  label: string;
}

const RatingBadge = memo(({ rating, label }: RatingBadgeProps) => {
  return (
    <div className={styles.tab}>
      <p>{label}:</p>
      <p className={styles.value}>{rating}</p>
    </div>
  );
});

export default RatingBadge;
