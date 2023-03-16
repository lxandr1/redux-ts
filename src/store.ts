import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todo";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
