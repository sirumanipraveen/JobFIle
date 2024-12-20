//* eslint-disable no-undef */
//* eslint-disable no-undef */
// //* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67592c8860576a194d136506.mockapi.io/user/id/",
  }),
  tagTypes: ["Details"],
  endpoints: (builder) => ({
    users: builder.query({
      query: () => "/usersDetail/",
      providesTags: [{ type: "Details", id: "LIST" }],
    }),
    adddetails: builder.mutation({
      query: (usersDetail) => ({
        url: "/usersDetail/",
        method: "POST",
        body: usersDetail,
      }),
      invalidatesTags: [{ type: "Details", id: "LIST" }],
    }),
    delete: builder.mutation({
      query: (id) => ({
        url: `/usersDetail/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:  [{ type: "Details", id: "LIST" }],
    }),
    editDetails: builder.mutation({
      query: ({ id, ...updatedDetail }) => ({
        url: `/usersDetail/${id}`,
        method: "PUT",
        body: updatedDetail,
    }),
    invalidatesTags: [{ type: "Details", id: "LIST" }],
}),
}),
});

export const {
  useUsersQuery,
  useAdddetailsMutation,
  useDeleteMutation,
  useEditDetailsMutation,
} = api;
