import { QuestionsAPI } from "@/entities/question";
import { SkillsAPI } from "@/entities/skill";
import { sideBarReducer } from "@/shared/model";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [QuestionsAPI.reducerPath]: QuestionsAPI.reducer,
    [SkillsAPI.reducerPath]: SkillsAPI.reducer,
    sideBar: sideBarReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(QuestionsAPI.middleware)
      .concat(SkillsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
