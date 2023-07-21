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
    getInfluencerTypeByinfluencerTypeID: builder.query<
      InfluencerType,
      string | unknown
    >({
      query: (influencerTypeID) => `/${influencerTypeID}`,
    }),
    createinfluencerType: builder.mutation<InfluencerType, InfluencerType>({
      query: (influencerTypeDetails) => ({
        url: `/`,
        method: "POST",
        body: influencerTypeDetails,
      }),
      invalidatesTags: ["InfluencerType"],
    }),
    updateinfluencerType: builder.mutation<Influencer, Influencer>({
      query: (influencerTypeDetails) => ({
        url: `/${influencerTypeDetails.influencer_Mast_id}`,
        method: "PUT",
        body: influencerTypeDetails,
      }),
      invalidatesTags: ["InfluencerType"],
    }),
    deleteinfluencerType: builder.mutation<Influencer, string>({
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
  useLazyGetInfluencerTypeByinfluencerTypeIDQuery,
  useCreateinfluencerTypeMutation,
  useUpdateinfluencerTypeMutation,
  useDeleteinfluencerTypeMutation,
} = influencerTypeAPI;
