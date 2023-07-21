import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const influencerAPI = createApi({
  reducerPath: "influencerAPI",
  tagTypes: ["Influencer"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Influencer`,
  }),
  endpoints: (builder) => ({
    getAllInfluencers: builder.query<AllInfluencers, void>({
      query: () => `/`,
      providesTags: ["Influencer"],
    }),
    getInfluencerByInfluencerID: builder.query<Influencer, string | unknown>({
      query: (influencerID) => `/${influencerID}`,
    }),
    createInfluencer: builder.mutation<Influencer, Influencer>({
      query: (influencerDetails) => ({
        url: `/`,
        method: "POST",
        body: influencerDetails,
      }),
      invalidatesTags: ["Influencer"],
    }),
    updateInfluencer: builder.mutation<Influencer, Influencer>({
      query: (influencerDetails) => ({
        url: `/${influencerDetails.influencer_Mast_id}`,
        method: "PUT",
        body: influencerDetails,
      }),
      invalidatesTags: ["Influencer"],
    }),
    deleteInfluencer: builder.mutation<Influencer, string>({
      query: (influencerID) => ({
        url: `/?id=${influencerID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Influencer"],
    }),
  }),
});

export const {
  useGetAllInfluencersQuery,
  useLazyGetInfluencerByInfluencerIDQuery,
  useCreateInfluencerMutation,
  useUpdateInfluencerMutation,
  useDeleteInfluencerMutation,
} = influencerAPI;
