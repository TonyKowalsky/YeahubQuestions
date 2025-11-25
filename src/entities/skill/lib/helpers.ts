import type { Skill } from "@/entities/skill/model";

const TITLES_TO_CORRECT: Record<string, string> = {
  golang: "go",
  css: "css3",
  postgres: "postgresql",
  networks: "networkx",
  "c#": "cplusplus",
  "c++": "cplusplus",
  net: "dot-net",
  html: "html5",
};

export const imageSrcGenerator = (rawTitle: string | undefined) => {
  if (!rawTitle) return undefined;

  const title = rawTitle.toLowerCase().replace(/[\s.-]/g, "");

  return TITLES_TO_CORRECT[title]
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${TITLES_TO_CORRECT[title]}/${TITLES_TO_CORRECT[title]}-original.svg
  `
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${title}/${title}-original.svg
  `;
};

export const isSkill = (skill: Skill | string): boolean => {
  return (
    typeof skill !== "string" &&
    "id" in skill &&
    "title" in skill &&
    "description" in skill
  );
};
