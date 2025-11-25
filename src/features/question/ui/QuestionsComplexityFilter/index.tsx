import { complexities, ComplexityTab, type Complexity } from "@/entities/question";
import styles from "./styles.module.css";
import { memo } from "react";

interface QuestionsComplexityFilterProps {
  isActive: (complexity: Complexity) => boolean;
  handleClick: (complexity: Complexity) => void;
}

const QuestionsComplexityFilter = memo(
  ({ isActive, handleClick }: QuestionsComplexityFilterProps) => {
    return (
      <div className={styles.complexitySection}>
        <p>Сложность вопроса</p>
        <div role="tablist" className={styles.complexity}>
          {complexities.map(c => (
            <ComplexityTab
              key={c}
              complexity={c}
              onClick={() => handleClick(c)}
              isActive={isActive(c)}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default QuestionsComplexityFilter;
