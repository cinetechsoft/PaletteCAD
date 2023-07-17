import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const influencerAPI = createApi({
    reducerPath: 'influencerAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Influencer` }),
    endpoints: (builder) => ({
        getAllInfluencers: builder.query<AllInfluencers, void>({
            query: () => `/`,
        }),
        getInfluencerByinfluencerID: builder.query<Influencer, string | unknown>({
            query: (influencerID) => `/${influencerID}`,
        }),
        createinfluencer: builder.mutation<Influencer, Influencer>({
            query: (influencerDetails) => ({ url: `/`, method: "POST", body: influencerDetails }),
        }),
        updateinfluencer: builder.mutation<Influencer, Influencer>({
            query: (influencerDetails) => ({ url: `/${influencerDetails.influencer_Mast_id}`, method: "POST", body: influencerDetails }),
        }),
        deleteinfluencer: builder.mutation<Influencer, string>({
            query: (influencerID) => ({ url: `/${influencerID}`, method: "DELETE" }),
        }),
    }),
})

export const { useGetAllInfluencersQuery, useLazyGetInfluencerByinfluencerIDQuery } = influencerAPI