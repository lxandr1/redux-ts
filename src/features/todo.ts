import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Todo {
  id: string;
  text: string;
  status: boolean;
}

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: [
    {
      id: crypto.randomUUID(),
      text: "Morning Running",
      status: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          text: action.payload,
          status: false,
        },
      ];
    },
    update: (state, action: PayloadAction<number>) => {
      state.todos.map((data, index) => {
        if (index === action.payload) {
          data.status = !data.status;
        }
      });
    },
    remove: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { add, update, remove } = todoSlice.actions;

export const selectTodo = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
