import styles from "./styles.module.css";
import { SkillTab } from "@/entities/skill";
import type { Question } from "@/entities/question";
import { RatingBadge } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

interface QuestionStatsSectionProps {
  question: Question;
}

const QuestionStatsSection = ({ question }: QuestionStatsSectionProps) => {
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
            <SkillTab
              key={skill.id}
              skill={skill}
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
};

export default QuestionStatsSection;
