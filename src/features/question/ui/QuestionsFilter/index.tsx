import type { Skill } from "@/entities/skill";
import styles from "./styles.module.css";
import { useQueryParams } from "@/shared/lib";
import type { QuestionsRequest } from "@/entities/question";
import {
  QuestionsComplexityFilter,
  QuestionsRateFilter,
  QuestionsSkillsFilter,
} from "@/features/question/ui";
import { useFilterHandlers } from "@/features/question/lib";
import { memo } from "react";

interface QuestionFilterProps {
  skills: Skill[];
}

const QuestionsFilter = memo(({ skills }: QuestionFilterProps) => {
  const { params, updateParams } = useQueryParams<QuestionsRequest>();
  const { isActive, handleClick } = useFilterHandlers(params, updateParams);

  return (
    <div className={styles.filter}>
      <QuestionsSkillsFilter
        skills={skills}
        isActive={isActive}
        handleClick={handleClick}
      />
      <QuestionsComplexityFilter
        isActive={isActive}
        handleClick={handleClick}
      />
      <QuestionsRateFilter isActive={isActive} handleClick={handleClick} />
    </div>
  );
});

export default QuestionsFilter;
