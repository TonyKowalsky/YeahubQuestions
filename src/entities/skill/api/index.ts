import { API_CONFIG } from "@/shared/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SkillsRequest, SkillsResponse } from "@/entities/skill";

const { baseUrl } = API_CONFIG;

const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
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
