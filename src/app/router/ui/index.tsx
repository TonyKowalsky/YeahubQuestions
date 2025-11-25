import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "@/app/layouts";
import {
  ErrorPage,
  MainPage,
  QuestionsListPage,
  QuestionPage,
  UserPage,
  InterviewPage,
  ResourcesPage,
  SettingsPage,
} from "@/pages";

const appRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <MainPage />,
          path: "/",
        },
        {
          element: <QuestionsListPage />,
          path: "/questions",
        },
        {
          element: <QuestionPage />,
          path: "/question/:id",
        },
        {
          element: <UserPage />,
          path: "/user/:userId",
        },
        {
          element: <InterviewPage />,
          path: "/interview",
        },
        {
          element: <ResourcesPage />,
          path: "/resources",
        },
        {
          element: <SettingsPage />,
          path: "/settings",
        },
        {
          element: <ErrorPage />,
          path: "/404",
        },
      ],
    },
  ]);

export default appRouter;
