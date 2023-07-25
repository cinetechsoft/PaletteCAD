import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const itemAPI = createApi({
  reducerPath: "ItemAPI",
  tagTypes: ["Item"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/Item`,
  }),
  endpoints: (builder) => ({
    getAllItems: builder.query<getAllItems, void>({
      query: () => `/`,
      providesTags: ["Item"],
    }),
    getItemGroups: builder.query<Item, string | unknown>({
      query: () => `/GetItemGroups`,
    }),
    getBrands: builder.query<Item, string | unknown>({
      query: () => `/GetBrand`,
    }),
    getProducts: builder.query<Item, string | unknown>({
      query: () => `/GetProduct`,
    }),
    getColorShades: builder.query<Item, string | unknown>({
      query: () => `/GetEdgeBandColor`,
    }),
    getUnits: builder.query<Item, string | unknown>({
      query: () => `/GetUnit`,
    }),
    getThickness: builder.query<Item, string | unknown>({
      query: () => `/GetThickness`,
    }),
    getItemByItemID: builder.query<Item, string | unknown>({
      query: (ItemID) => `/${ItemID}`,
    }),
    getItemGroupsByItemGroupIdLevel1: builder.query<Item, string | unknown>({
      query: (ItemGroupId) =>
        `/GetItemGroupsByItemGroupIdLevel1?itemGroupId=${ItemGroupId}`,
    }),
    getItemGroupsByItemGroupIdLevel2: builder.query<Item, string | unknown>({
      query: (ItemGroupId1) =>
        `/GetItemGroupsByItemGroupIdLevel2?itemGroupId=${ItemGroupId1}`,
    }),

    createItem: builder.mutation<Item, Item>({
      query: (ItemDetails) => ({
        url: `/`,
        method: "POST",
        body: ItemDetails,
      }),
      invalidatesTags: ["Item"],
    }),
    updateItem: builder.mutation<Item, Item>({
      query: (ItemDetails) => ({
        url: `/${ItemDetails.itemid}`,
        method: "PUT",
        body: ItemDetails,
      }),
      invalidatesTags: ["Item"],
    }),
    deleteItem: builder.mutation<Item, string>({
      query: (ItemID) => ({
        url: `/?id=${ItemID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Item"],
    }),
  }),
});

export const {
  useGetAllItemsQuery,
  useLazyGetItemByItemIDQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
  useGetItemGroupsQuery,
  useLazyGetItemGroupsByItemGroupIdLevel1Query,
  useLazyGetItemGroupsByItemGroupIdLevel2Query,
  useGetBrandsQuery,
  useGetColorShadesQuery,
  useGetProductsQuery,
  useGetThicknessQuery,
  useGetUnitsQuery,
} = itemAPI;
