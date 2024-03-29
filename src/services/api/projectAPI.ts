import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const projectAPI = createApi({
  reducerPath: 'projectAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/ProjectMstDet` }),
  endpoints: (builder) => ({
    getAllProjects: builder.query<AllProjects, void>({
      query: () => `/`,
    }),
    getProjectByProjectID: builder.query<Project, string | unknown>({
      query: (projectID) => `/${projectID}`,
    }),
    createProject: builder.mutation<Project, Project>({
      query: (project) => ({ url: `/`, method: "POST", body: project,}),
    }),
  }),
})

export const { useGetAllProjectsQuery, useLazyGetProjectByProjectIDQuery, useCreateProjectMutation } = projectAPI