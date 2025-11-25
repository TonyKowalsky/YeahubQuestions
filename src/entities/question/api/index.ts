import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Question,
  QuestionsRequest,
  QuestionsResponse,
} from "@/entities/question/model";
// import { API_CONFIG } from "@/shared/config";

// const { baseUrl } = API_CONFIG;

const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: headers => {
      headers.set("Accept", "application/json");
    },
  }),
  keepUnusedDataFor: 1200,
  endpoints: builder => ({
    getQuestions: builder.query<QuestionsResponse, QuestionsRequest>({
      query: params => ({
        url: "questions",
        params,
      }),
    }),
    getQuestionById: builder.query<Question, number>({
      query: id => ({
        url: `questions`,
        params: { id },
      }),
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useGetQuestionByIdQuery,
  reducerPath,
  reducer,
  middleware,
} = questionsApi;
