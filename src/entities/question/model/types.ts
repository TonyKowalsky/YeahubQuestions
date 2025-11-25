import type { Skill } from "@/entities/skill";

export type Rate = "1" | "2" | "3" | "4" | "5";
export type Complexity = "1,2,3" | "4,5,6" | "7,8" | "9,10";

export interface Question {
  id: number;
  title: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  questionSkills: Skill[];
}

export interface QuestionsRequest {
  page: number;
  limit: number;
  title?: string;
  skills?: string;
  complexity?: Complexity;
  rate?: Rate;
}

export interface QuestionsResponse {
  page: number;
  limit: number;
  data: Question[];
  total: number;
}
