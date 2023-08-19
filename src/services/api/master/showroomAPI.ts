import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const showroomAPI = createApi({
  reducerPath: "showroomAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Showroom`,
  }),
  endpoints: (builder) => ({
    getAllShowrooms: builder.query<AllShowrooms, void>({
      query: () => `/`,
    }),
    getShowroomByshowroomID: builder.query<Showroom, string | unknown>({
      query: (showroomID) => `/${showroomID}`,
    }),
    getAllShowroomsByCityID: builder.query<Showroom, string | unknown>({
      query: (cityID) => `/?id=${cityID}`,
    }),
    createShowroom: builder.mutation<Showroom, Showroom>({
      query: (showroomDetails) => ({
        url: `/`,
        method: "POST",
        body: showroomDetails,
      }),
      invalidatesTags: ["Showroom"],
    }),

    updateShowroom: builder.mutation<Showroom, Showroom>({
      query: (showroomDetails) => ({
        url: `/${showroomDetails.showroomId}`,
        method: "PUT",
        body: showroomDetails,
      }),
      invalidatesTags: ["Showroom"],
    }),
    deleteShowroom: builder.mutation<Showroom, string>({
      query: (showroomID) => ({ url: `/?id=${showroomID}`, method: "DELETE" }),
      invalidatesTags: ["Showroom"],
    }),
  }),
});

export const {
  useGetAllShowroomsQuery,
  useLazyGetShowroomByshowroomIDQuery,
  useLazyGetAllShowroomsByCityIDQuery,
  useCreateShowroomMutation,
  useUpdateShowroomMutation,
  useDeleteShowroomMutation,
} = showroomAPI;
