import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SkillsRequest, SkillsResponse } from "@/entities/skill";
// import { API_CONFIG } from "@/shared/config";

// const { baseUrl } = API_CONFIG;

const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: headers => {
      headers.set("Accept", "application/json");
    },
  }),
  keepUnusedDataFor: 1200,
  endpoints: builder => ({
    getSkills: builder.query<SkillsResponse, SkillsRequest>({
      query: params => ({
        url: "skills",
        params,
      }),
    }),
  }),
});

export const { useGetSkillsQuery, reducerPath, reducer, middleware } =
  skillsApi;
