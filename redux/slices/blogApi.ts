import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi", // Unique key for this API
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/blog" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: ({ category = "All", page = 1 }) =>
        `get?category=${encodeURIComponent(category)}&page=${page}`,
    }),
  }),
});

export const { useGetBlogsQuery } = blogApi;
