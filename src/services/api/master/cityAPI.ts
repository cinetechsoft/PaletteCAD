import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const cityAPI = createApi({
    reducerPath: 'cityAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/City` }),
    endpoints: (builder) => ({
        getAllCities: builder.query<AllCities, void>({
            query: () => `/`,
        }),
        getAllCitiesByStateID: builder.query<AllCities, string>({
            query: (stateID) => `/GetAllCitiesOfAState?id=${stateID}`,
        }),
        getCityByCityID: builder.query<City, string | unknown>({
            query: (cityID) => `/${cityID}`,
        }),
        createCity: builder.mutation<City, City>({
            query: (cityDetails) => ({ url: `/`, method: "POST", body: cityDetails }),
        }),
        updateCity: builder.mutation<City, City>({
            query: (cityDetails) => ({ url: `/${cityDetails.cityId}`, method: "POST", body: cityDetails }),
        }),
        deleteCity: builder.mutation<City, string>({
            query: (cityID) => ({ url: `/${cityID}`, method: "DELETE" }),
        }),
    }),
})

export const { useGetAllCitiesQuery, useLazyGetCityByCityIDQuery, useCreateCityMutation, useLazyGetAllCitiesByStateIDQuery } = cityAPI