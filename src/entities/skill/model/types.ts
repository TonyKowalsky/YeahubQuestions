export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc?: string | undefined;
  createdAt?: string;
  updatedAt?: string;
}

export interface SkillsRequest {
  page?: number;
  limit?: number;
  authorId?: string;
  title?: string;
}

export interface SkillsResponse {
  page: number;
  limit: number;
  data: Skill[];
  total: number;
}