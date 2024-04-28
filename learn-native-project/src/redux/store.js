import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/slice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    // auth: persistReducer(authPersistConfig, authReducer),
    // [noticesApi.reducerPath]: noticesApi.reducer,
    // pets: petsReducer,
    // [userPetsApi.reducerPath]: userPetsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
});
