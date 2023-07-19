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
    getInfluencerByinfluencerID: builder.query<Influencer, string | unknown>({
      query: (influencerID) => `/${influencerID}`,
    }),
    createinfluencer: builder.mutation<Influencer, Influencer>({
      query: (influencerDetails) => ({
        url: `/`,
        method: "POST",
        body: influencerDetails,
      }),
      invalidatesTags: ["Influencer"],
    }),
    updateinfluencer: builder.mutation<Influencer, Influencer>({
      query: (influencerDetails) => ({
        url: `/${influencerDetails.influencer_Mast_id}`,
        method: "POST",
        body: influencerDetails,
      }),
      invalidatesTags: ["Influencer"],
    }),
    deleteinfluencer: builder.mutation<Influencer, string>({
      query: (influencerID) => ({ url: `/${influencerID}`, method: "DELETE" }),
      invalidatesTags: ["Influencer"],
    }),
  }),
});

export const {
  useGetAllInfluencersQuery,
  useLazyGetInfluencerByinfluencerIDQuery,
  useCreateinfluencerMutation,
} = influencerAPI;
