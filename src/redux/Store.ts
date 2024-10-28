import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./reducers/DashboardSlice";

export const Store = configureStore({
    reducer: {
        dashboard: DashboardSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: true })
})

export type AppDispatch = typeof Store.dispatch
export type RootState = ReturnType<typeof Store.getState>