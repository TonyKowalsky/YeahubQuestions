import styles from "./styles.module.css";
import type { Question } from "@/entities/question";
import { FilterChip, RatingBadge } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";

interface QuestionStatsSectionProps {
  question: Question;
}

const QuestionStatsSection = memo(({ question }: QuestionStatsSectionProps) => {
  const navigate = useNavigate();
  const handleClick = useCallback(
    (skillId: number) => {
      navigate(`/questions?skills=${skillId}`);
    },
    [navigate]
  );
  return (
    <div className={styles.stats}>
      <div className={styles.level}>
        <span>Уровень:</span>
        <div className={styles.ratings}>
          <RatingBadge rating={question.rate} label="Рейтинг" />
          <RatingBadge rating={question.complexity} label="Сложность" />
        </div>
      </div>
      <div className={styles.skills}>
        <span>Навыки:</span>
        <div className={styles.skillsList}>
          {question.questionSkills.map(skill => (
            <FilterChip
              key={skill.id}
              label={skill.title}
              image={skill.title}
              onClick={() => handleClick(skill.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.keywords}>
        <span>Ключевые слова:</span>
        <ul className={styles.keywordsList}>
          {question.keywords.map(keyword => (
            <li key={keyword} className={styles.keyword}>
              #{keyword}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default QuestionStatsSection;
