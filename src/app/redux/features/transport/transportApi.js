"use client";
import { apiSlice } from "../../RootApi/apiSlice";

export const transportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTransport: builder.mutation({
      query: (formData) => ({
        url: "/transport/create",
        method: "POST",
        body: formData,
        headers: {},
      }),
      invalidatesTags: ["transport"],
    }),
    getTransports: builder.query({
      query: ({ search, from, to, date, transportType }) => {
        const params = new URLSearchParams();

        if (search) params.append("search", search);
        if (from) params.append("from", from);
        if (to) params.append("to", to);
        if (date) params.append("date", date);
        if (transportType) params.append("transportType", transportType);

        return {
          url: `/transport?${params.toString()}`,
        };
      },
      providesTags: ["transport"],
    }),

    getTransportById: builder.query({
      query: (id) => ({
        url: `/transport/${id}`,
      }),
      providesTags: ["transport"],
    }),

    updateTransport: builder.mutation({
      query: ({ id, body }) => ({
        url: `/transport/update-transport/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["transport"],
    }),

    deleteTransport: builder.mutation({
      query: (id) => ({
        url: `/delete-transport/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["transport"],
    }),
  }),
});

export const {
  useCreateTransportMutation,
  useGetTransportByIdQuery,
  useGetTransportsQuery,
  useDeleteTransportMutation,
  useUpdateTransportMutation,
} = transportApi;
