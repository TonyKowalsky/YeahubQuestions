import type { Skill } from "@/entities/skill/model";

export const isSkill = (skill: Skill | string): boolean => {
  return (
    typeof skill !== "string" &&
    "id" in skill &&
    "title" in skill &&
    "description" in skill
  );
};
