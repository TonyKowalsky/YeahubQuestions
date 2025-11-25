import { isComplexity, isRate, type QuestionsRequest } from "@/entities/question";
import { isSkill, type Skill } from "@/entities/skill";

export const updateCsvList = (
  current: string | undefined,
  value: string,
  isActive: boolean
): string => {
  const list = (current?.split(",") ?? []).filter(Boolean);
  const updated = isActive
    ? list.filter(item =>
        isComplexity(value) ? !value.split(",").includes(item) : item !== value
      )
    : [...list, value];
  return updated.join(",");
};

export const getValueFromFilterItem = (item: Skill | string): string | null => {
  if (typeof item !== "string" && isSkill(item)) {
    return String(item.id);
  }
  if (typeof item === "string") {
    if (isComplexity(item) || isRate(item)) return item;
  }
  return null;
};

export const getParamKey = (
  item: Skill | string
): keyof Pick<QuestionsRequest, "skills" | "complexity" | "rate"> | null => {
  if (typeof item !== "string" && isSkill(item)) return "skills";
  if (typeof item === "string") {
    if (isComplexity(item)) return "complexity";
    if (isRate(item)) return "rate";
  }
  return null;
};
