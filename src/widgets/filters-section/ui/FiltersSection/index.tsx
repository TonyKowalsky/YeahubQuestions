import { QuestionsFilter, QuestionsSearchBar } from "@/features/question";
import styles from "./styles.module.css";
import { SkillsAPI } from "@/entities/skill";
import { ErrorMessage, Skeleton } from "@/shared/ui";
import { memo } from "react";

const DISPLAYED_SKILLS_COUNT = 44;
const { useGetSkillsQuery } = SkillsAPI;

const FiltersSection = memo(() => {
  const {
    data: skillsResponse,
    isLoading,
    isError,
  } = useGetSkillsQuery({ limit: DISPLAYED_SKILLS_COUNT });

  const skills = skillsResponse?.data;

  return (
    <div className={styles.filter}>
      {isError && <ErrorMessage />}
      {isLoading && <Skeleton height={`70px`} count={4} />}
      {skills && (
        <>
          <QuestionsSearchBar />
          <QuestionsFilter skills={skills} />
        </>
      )}
    </div>
  );
});

export default FiltersSection;
