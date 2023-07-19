import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const customerAPI = createApi({
    reducerPath: 'customerAPI',
    tagTypes: ["Customer"],
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Customer` }),
    endpoints: (builder) => ({
        getAllCustomers: builder.query<AllCustomers, void>({
            query: () => `/`,
            providesTags: ["Customer"]
        }),
        getCustomerByCustomerID: builder.query<Customer, string | unknown>({
            query: (customerID) => `/${customerID}`,
        }),
        createCustomer: builder.mutation<Customer, Customer>({
            query: (customerDetails) => ({ url: `/`, method: "POST", body: customerDetails }),
            invalidatesTags: ["Customer"]
        }),
        updateCustomer: builder.mutation<Customer, Customer>({
            query: (customerDetails) => ({ url: `/${customerDetails.custID}`, method: "PUT", body: customerDetails }),
            invalidatesTags: ["Customer"]
        }),
        deleteCustomer: builder.mutation<Customer, string>({
            query: (customerID) => ({ url: `/?id=${customerID}`, method: "DELETE" }),
            invalidatesTags: ["Customer"]

        }),
    }),
})

export const { useGetAllCustomersQuery, useLazyGetCustomerByCustomerIDQuery, useCreateCustomerMutation, useUpdateCustomerMutation, useDeleteCustomerMutation } = customerAPI