import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // Adjust path if needed

const store = configureStore({
  reducer: {
    tasks: taskReducer, // Register the tasks reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
