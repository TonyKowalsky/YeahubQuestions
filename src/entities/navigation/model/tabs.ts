import homeIcon from "./assets/home.png";
import educationIcon from "./assets/education.png";
import knowledgeIcon from "./assets/knowledge.png";
import interviewIcon from "./assets/interview.png";
import questionsIcon from "./assets/questions.png";
import resourcesIcon from "./assets/resources.png";
import profileIcon from "./assets/profile.png";
import settingsIcon from "./assets/settings.png";

export interface navTab {
  label: string;
  link: string;
  icon: string;
  isMobileView: boolean;
  dropDown?: navTab[];
}

export const navTabs: navTab[] = [
  {
    label: "Главная",
    link: "/",
    icon: homeIcon,
    isMobileView: false,
  },
  {
    label: "Мой профиль",
    link: "/user/1",
    icon: profileIcon,
    isMobileView: true,
  },
  {
    label: "Настройки",
    link: "/settings",
    icon: settingsIcon,
    isMobileView: true,
  },
  {
    label: "Обучение",
    link: "/education",
    icon: educationIcon,
    isMobileView: false,
    dropDown: [
      {
        label: "Собеседование",
        link: "/interview",
        icon: interviewIcon,
        isMobileView: false,
      },
      {
        label: "Список вопросов",
        link: "/questions",
        icon: questionsIcon,
        isMobileView: false,
      },
    ],
  },
  {
    label: "База знаний",
    link: "/knowledge",
    icon: knowledgeIcon,
    isMobileView: false,
    dropDown: [
      {
        label: "Ресурсы",
        link: "/resources",
        icon: resourcesIcon,
        isMobileView: false,
      },
    ],
  },
];
