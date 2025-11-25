import {
  complexities,
  rates,
  type Complexity,
  type Rate,
} from "@/entities/question/model";

export const isComplexity = (value: unknown): value is Complexity => {
  return (
    typeof value === "string" && complexities.includes(value as Complexity)
  );
};

export const isRate = (value: unknown): value is Rate => {
  return typeof value === "string" && rates.includes(value as Rate);
};
