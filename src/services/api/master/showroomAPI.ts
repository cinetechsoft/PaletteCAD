import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const showroomAPI = createApi({
    reducerPath: 'showroomAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Showroom` }),
    endpoints: (builder) => ({
        getAllShowrooms: builder.query<AllShowrooms, void>({
            query: () => `/`,
        }),
        getShowroomByshowroomID: builder.query<Showroom, string | unknown>({
            query: (showroomID) => `/${showroomID}`,
        }),
        createshowroom: builder.mutation<Showroom, Showroom>({
            query: (showroomDetails) => ({ url: `/`, method: "POST", body: showroomDetails }),
        }),
        updateshowroom: builder.mutation<Showroom, Showroom>({
            query: (showroomDetails) => ({ url: `/${showroomDetails.showroomId}`, method: "POST", body: showroomDetails }),
        }),
        deleteshowroom: builder.mutation<Showroom, string>({
            query: (showroomID) => ({ url: `/${showroomID}`, method: "DELETE" }),
        }),
    }),
})

export const { useGetAllShowroomsQuery, useLazyGetShowroomByshowroomIDQuery } = showroomAPI