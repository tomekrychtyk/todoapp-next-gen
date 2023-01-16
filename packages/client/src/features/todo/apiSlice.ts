import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from './interfaces';

const apiUrl = import.meta.env.VITE_API_URL;

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => ({
        url: 'todo',
      }),
    }),
    addNewTodo: builder.mutation({
      query: (payload: ITodo) => ({
        url: 'todo',
        method: 'post',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddNewTodoMutation } = todosApi;
