import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo, ITodosState } from './interfaces';

const initialState: ITodosState = {
  items: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    receivedTodos(state, action: PayloadAction<ITodo[]>) {
      state.items = action.payload;
    },
  },
});

export const { receivedTodos } = todosSlice.actions;
export default todosSlice.reducer;
