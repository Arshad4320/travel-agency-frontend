"use client";

import { apiSlice } from "../../RootApi/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth", "User"],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/user/login-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth", "User"],
    }),

    // Admin dashboard data (protected route)
    getAdminDashboard: builder.query({
      query: () => ({
        url: "/auth/admin/dashboard",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,

  useGetVideosQuery,
  useGetAdminDashboardQuery,
} = authApi;
