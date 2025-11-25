import type { Complexity, QuestionsRequest, Rate } from "@/entities/question";
import { isSkill, type Skill } from "@/entities/skill";
import { useCallback } from "react";
import {
  getParamKey,
  getValueFromFilterItem,
  updateCsvList,
} from "@/features/question/lib";

const useFilterHandlers = (
  params: QuestionsRequest,
  updateParams: (p: Partial<QuestionsRequest>) => void
) => {
  const { skills, complexity, rate } = params;
  const isActive = useCallback(
    (item: Skill | Rate | Complexity): boolean => {
      const value = getValueFromFilterItem(item);
      const paramKey = getParamKey(item);
      if (!value || !paramKey) return false;
      const currentList =
        (paramKey === "skills"
          ? skills
          : paramKey === "complexity"
          ? complexity
          : rate
        )
          ?.split(",")
          .filter(Boolean) ?? [];
      return isSkill(item)
        ? currentList.includes(value)
        : currentList.includes(value[0]);
    },
    [skills, complexity, rate]
  );

  const handleClick = useCallback(
    (item: Skill | Rate | Complexity): void => {
      const value = getValueFromFilterItem(item);
      const paramKey = getParamKey(item);
      if (!value || !paramKey) return;

      const active = isActive(item);
      const current =
        paramKey === "skills"
          ? skills
          : paramKey === "complexity"
          ? complexity
          : rate;
      const newParamValue = updateCsvList(current, value, active);

      updateParams({
        [paramKey]: newParamValue || undefined,
        page: 1,
        limit: 10,
      });
    },
    [skills, complexity, rate, updateParams, isActive]
  );

  return { isActive, handleClick };
};

export default useFilterHandlers;
