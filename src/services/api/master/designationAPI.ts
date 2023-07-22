import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const designationAPI = createApi({
  reducerPath: "designationAPI",
  tagTypes: ["Designation"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Designation`,
  }),
  endpoints: (builder) => ({
    getAllDesignations: builder.query<getAllDesignation, void>({
      query: () => `/`,
      providesTags: ["Designation"],
    }),
    getDesignationByDesignationID: builder.query<Designation, string | unknown>(
      {
        query: (designationID) => `/${designationID}`,
      }
    ),

    createDesignation: builder.mutation<Designation, Designation>({
      query: (designationDetails) => ({
        url: `/`,
        method: "POST",
        body: designationDetails,
      }),
      invalidatesTags: ["Designation"],
    }),
    updateDesignation: builder.mutation<Designation, Designation>({
      query: (designationDetails) => ({
        url: `/${designationDetails.designationId}`,
        method: "PUT",
        body: designationDetails,
      }),
      invalidatesTags: ["Designation"],
    }),
    deleteDesignation: builder.mutation<Designation, string>({
      query: (designationID) => ({
        url: `/?id=${designationID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Designation"],
    }),
  }),
});

export const {
  useGetAllDesignationsQuery,
  useLazyGetDesignationByDesignationIDQuery,
  useCreateDesignationMutation,
  useUpdateDesignationMutation,
  useDeleteDesignationMutation,
} = designationAPI;
