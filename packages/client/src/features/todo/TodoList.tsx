import { useEffect } from 'react';
import { List } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import Loading from '@/components/Loading/Loading';
import Todo from './Todo';
import { useGetTodosQuery } from './apiSlice';
import { receivedTodos, getCategoriesSummary } from './todoSlice';

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isUninitialized, isError, error } =
    useGetTodosQuery();
  const todos = useAppSelector((state) => state.todos.items);
  const items = useAppSelector(getCategoriesSummary);

  useEffect(() => {
    if (data) {
      dispatch(receivedTodos(data));
    }
  }, [data]);

  if (isLoading || isUninitialized) {
    return <Loading />;
  }

  if (isError) {
    return null;
  }

  return (
    <List>
      {todos.map((todo) => {
        return <Todo key={todo._id} data={todo} />;
      })}
    </List>
  );
};

export default TodoList;
