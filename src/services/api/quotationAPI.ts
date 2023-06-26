import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const quotationAPI = createApi({
  reducerPath: 'quotationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Quotation` }),
  endpoints: (builder) => ({
    getQuotationByProjectID: builder.query<Quotation, string>({
      query: (projectID) => `/GetQuotationbyProjectId/${projectID}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetQuotationByProjectIDQuery } = quotationAPI