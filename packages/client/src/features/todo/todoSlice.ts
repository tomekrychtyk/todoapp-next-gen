import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit';
import { ITodo, ITodosState } from './interfaces';
import { RootState } from '@/app/store';

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

export const getCategoriesSummary = createSelector(
  (state: RootState) => state.todos.items,
  (items) => {
    const results: { [id: string]: { name: string; counter: number } } = {};
    for (const todo of items) {
      for (const cat of todo.categories) {
        if (results[cat.id]) {
          results[cat.id].counter++;
        } else {
          results[cat.id] = {
            name: cat.name,
            counter: 1,
          };
        }
      }
    }

    return results;
  }
);

export const { receivedTodos } = todosSlice.actions;
export default todosSlice.reducer;
