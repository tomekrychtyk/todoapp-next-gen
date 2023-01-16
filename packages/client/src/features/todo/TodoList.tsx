import { List } from '@mui/material';
import Todo from './Todo';
import { useGetTodosQuery } from './apiSlice';
import Loading from '@/components/Loading/Loading';

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isUninitialized,
    isError,
  } = useGetTodosQuery();

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
