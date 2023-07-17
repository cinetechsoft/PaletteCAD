import { configureStore } from "@reduxjs/toolkit";
import { authenticationAPI } from "../services/api/authenticationAPI";
import { quotationAPI } from "../services/api/quotationAPI";
import { projectAPI } from "../services/api/projectAPI";
import { influencerAPI } from "../services/api/master/influencerAPI";
import { customerAPI } from "../services/api/master/customerAPI";
import { showroomAPI } from "../services/api/master/showroomAPI";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [authenticationAPI.reducerPath]: authenticationAPI.reducer,
    [quotationAPI.reducerPath]: quotationAPI.reducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [projectAPI.reducerPath]: projectAPI.reducer,
    [influencerAPI.reducerPath]: influencerAPI.reducer,
    [customerAPI.reducerPath]: customerAPI.reducer,
    [showroomAPI.reducerPath]: showroomAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authenticationAPI.middleware)
      .concat(influencerAPI.middleware)
      .concat(customerAPI.middleware)
      .concat(showroomAPI.middleware)
      .concat(projectAPI.middleware)
      .concat(quotationAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
