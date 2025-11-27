import { type Skill } from "@/entities/skill";
import styles from "./styles.module.css";
import { useToggle } from "@/shared/lib";
import { FilterChip } from "@/shared/ui";

const VISIBLE_SKILLS_COUNT = 4;

interface QuestionsSkillsFilterProps {
  skills: Skill[];
  isActive: (skill: Skill) => boolean;
  handleClick: (skill: Skill) => void;
}

const QuestionsSkillsFilter = ({
  skills,
  isActive,
  handleClick,
}: QuestionsSkillsFilterProps) => {
  const [isOpenSkills, toggleSkills] = useToggle(false);
  const displayedSkills = isOpenSkills
    ? skills
    : skills.slice(0, VISIBLE_SKILLS_COUNT);

  return (
    <div className={styles.skillsSection}>
      <p>Выберите навыки</p>
      <div className={styles.skills}>
        {displayedSkills.map(skill => (
          <FilterChip
            key={skill.id}
            label={skill.title}
            image={skill.title}
            onClick={() => handleClick(skill)}
            isActive={isActive(skill)}
          />
        ))}
      </div>
      <button className={styles.button} type="button" onClick={toggleSkills}>
        {isOpenSkills ? `Скрыть` : `Посмотреть все`}
      </button>
    </div>
  );
};
export default QuestionsSkillsFilter;
