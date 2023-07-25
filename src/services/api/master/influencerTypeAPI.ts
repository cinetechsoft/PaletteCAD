import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const influencerTypeAPI = createApi({
  reducerPath: "influencerTypeAPI",
  tagTypes: ["InfluencerType"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/InfluencerType`,
  }),
  endpoints: (builder) => ({
    getAllInfluencerTypes: builder.query<getAllInfluencerTypes, void>({
      query: () => `/`,
      providesTags: ["InfluencerType"],
    }),
    getInfluencerTypeByInfluencerTypeID: builder.query<
      InfluencerType,
      string | unknown
    >({
      query: (influencerTypeID) => `/${influencerTypeID}`,
    }),
    createInfluencerType: builder.mutation<InfluencerType, InfluencerType>({
      query: (influencerTypeDetails) => ({
        url: `/`,
        method: "POST",
        body: influencerTypeDetails,
      }),
      invalidatesTags: ["InfluencerType"],
    }),
    updateInfluencerType: builder.mutation<InfluencerType, InfluencerType>({
      query: (influencerTypeDetails) => ({
        url: `/${influencerTypeDetails.influencerType_id}`,
        method: "PUT",
        body: influencerTypeDetails,
      }),
      invalidatesTags: ["InfluencerType"],
    }),
    deleteInfluencerType: builder.mutation<InfluencerType, string>({
      query: (influencerTypeID) => ({
        url: `/?id=${influencerTypeID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["InfluencerType"],
    }),
  }),
});

export const {
  useGetAllInfluencerTypesQuery,
  useLazyGetInfluencerTypeByInfluencerTypeIDQuery,
  useCreateInfluencerTypeMutation,
  useUpdateInfluencerTypeMutation,
  useDeleteInfluencerTypeMutation,
} = influencerTypeAPI;
