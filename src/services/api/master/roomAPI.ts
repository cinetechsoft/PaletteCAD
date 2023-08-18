import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// Define a service using a base URL and expected endpoints
export const roomAPI = createApi({
    reducerPath: 'roomAPI',
    tagTypes: ["Room"],
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Room` }),
    endpoints: (builder) => ({
        getAllRooms: builder.query<AllRooms, void>({
            query: () => `/`,
            providesTags: ["Room"]
        }),
        getRoomByroomID: builder.query<Room, string | unknown>({
            query: (roomId) => `/${roomId}`,
        }),
       
        createRoom: builder.mutation<Room, Room>({
            query: (roomDetails) => ({ url: `/`, method: "POST", body: roomDetails }),
            invalidatesTags: ["Room"]
        }),
        updateRoom: builder.mutation<Room, Room>({
            query: (roomDetails) => ({ url: `/${roomDetails.roomId}`, method: "PUT", body: roomDetails }),
            invalidatesTags: ["Room"]
        }),
        deleteRoom: builder.mutation<Room, string>({
            query: (roomId) => ({ url: `/?id=${roomId}`, method: "DELETE" }),
            invalidatesTags: ["Room"]

        }),
    }),
})

export const { useGetAllRoomsQuery, useLazyGetRoomByroomIDQuery, useCreateRoomMutation, useUpdateRoomMutation, useDeleteRoomMutation } = roomAPI