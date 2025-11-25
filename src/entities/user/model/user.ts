import { avatarImage } from "@/shared/assets";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "Участник сообщества" | "Гость";
}

export const user: UserProfile = {
  id: "1",
  name: "Антон Ковалев",
  email: "antonkovalev@yeahub.net",
  avatar: avatarImage,
  role: "Участник сообщества",
};
