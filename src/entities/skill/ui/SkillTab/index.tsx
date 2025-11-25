import styles from "./styles.module.css";
import { imageSrcGenerator } from "@/entities/skill/lib";
import { noImageIcon } from "@/shared/assets";
import type { Skill } from "@/entities/skill/model";
import { cn } from "@/shared/utils";
import { memo } from "react";

interface SkillTabProps {
  skill: Skill;
  isActive?: boolean;
  onClick?: () => void;
}

const SkillTab = memo(({ skill, isActive, onClick }: SkillTabProps) => {
  return (
    <button
      type="button"
      className={cn(styles.skill, isActive && styles.active)}
      onClick={onClick}
    >
      <img
        alt={skill.title}
        src={imageSrcGenerator(skill.title)}
        width={20}
        height={20}
        onError={e => {
          if (e.target instanceof HTMLImageElement) {
            e.target.src = noImageIcon;
          }
        }}
      />
      <span>{skill.title}</span>
    </button>
  );
});

export default SkillTab;
