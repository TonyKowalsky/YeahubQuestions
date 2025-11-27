import { complexities, type Complexity } from "@/entities/question";
import styles from "./styles.module.css";
import { FilterChip } from "@/shared/ui";

interface QuestionsComplexityFilterProps {
  isActive: (complexity: Complexity) => boolean;
  handleClick: (complexity: Complexity) => void;
}

const QuestionsComplexityFilter = ({
  isActive,
  handleClick,
}: QuestionsComplexityFilterProps) => {
  return (
    <div className={styles.complexitySection}>
      <p>Сложность вопроса</p>
      <div role="tablist" className={styles.complexity}>
        {complexities.map(c => (
          <FilterChip
            key={c}
            label={`${c.split(",")[0]}-${c.split(",").slice(-1)}`}
            onClick={() => handleClick(c)}
            isActive={isActive(c)}
          />
        ))}
      </div>
    </div>
  );
};
export default QuestionsComplexityFilter;
