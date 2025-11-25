import type { Rate } from "@/entities/question/model";
import styles from "./styles.module.css";
import { cn } from "@/shared/utils";

interface RateTabProps {
  rate: Rate;
  isActive?: boolean;
  onClick?: () => void;
}

const RateTab = ({ rate, isActive, onClick }: RateTabProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.rate, isActive && styles.active)}
    >
      {rate}
    </button>
  );
};

export default RateTab;
