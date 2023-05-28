import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const authenticationAPI = createApi({
  reducerPath: 'authenticationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTODOs: builder.query<todo, string>({
      query: (phone) => `OTP/${phone}`,
    }),
    verifyOTP: builder.mutation<unknown, string>({
      query: (phone) => `OTP/${phone}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTODOsQuery,useLazyGetTODOsQuery, useVerifyOTPMutation } = authenticationAPI