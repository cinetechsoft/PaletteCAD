import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const stateAPI = createApi({
    reducerPath: 'stateAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/State` }),
    endpoints: (builder) => ({
        getAllStates: builder.query<AllStates, void>({
            query: () => `/`,
        }),
        getStateByStateID: builder.query<State, string | unknown>({
            query: (stateID) => `/${stateID}`,
        }),
        createState: builder.mutation<State, State>({
            query: (stateDetails) => ({ url: `/`, method: "POST", body: stateDetails }),
        }),
        updateState: builder.mutation<State, State>({
            query: (stateDetails) => ({ url: `/${stateDetails.stateId}`, method: "POST", body: stateDetails }),
        }),
        deleteState: builder.mutation<State, string>({
            query: (stateID) => ({ url: `/${stateID}`, method: "DELETE" }),
        }),
    }),
})

export const { useGetAllStatesQuery, useLazyGetStateByStateIDQuery, useCreateStateMutation } = stateAPI