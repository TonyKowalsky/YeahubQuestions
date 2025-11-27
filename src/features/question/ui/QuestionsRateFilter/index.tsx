import { rates, type Rate } from "@/entities/question";
import styles from "./styles.module.css";
import { memo } from "react";
import { FilterChip } from "@/shared/ui";

interface QuestionsRateFilterProps {
  isActive: (rate: Rate) => boolean;
  handleClick: (rate: Rate) => void;
}

const QuestionsRateFilter = memo(
  ({ isActive, handleClick }: QuestionsRateFilterProps) => {
    return (
      <div className={styles.rateSection}>
        <p>Рейтинг вопроса</p>
        <div className={styles.rate}>
          {rates.map(rate => (
            <FilterChip
              key={rate}
              label={rate}
              onClick={() => handleClick(rate)}
              isActive={isActive(rate)}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default QuestionsRateFilter;
