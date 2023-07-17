import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const customerAPI = createApi({
    reducerPath: 'customerAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Customer` }),
    endpoints: (builder) => ({
        getAllCustomers: builder.query<AllCustomers, void>({
            query: () => `/`,
        }),
        getCustomerByCustomerID: builder.query<Customer, string | unknown>({
            query: (customerID) => `/${customerID}`,
        }),
        createCustomer: builder.mutation<Customer, Customer>({
            query: (customerDetails) => ({ url: `/`, method: "POST", body: customerDetails }),
        }),
        updateCustomer: builder.mutation<Customer, Customer>({
            query: (customerDetails) => ({ url: `/${customerDetails.custID}`, method: "POST", body: customerDetails }),
        }),
        deleteCustomer: builder.mutation<Customer, string>({
            query: (customerID) => ({ url: `/${customerID}`, method: "DELETE" }),
        }),
    }),
})

export const { useGetAllCustomersQuery, useLazyGetCustomerByCustomerIDQuery, useCreateCustomerMutation } = customerAPI