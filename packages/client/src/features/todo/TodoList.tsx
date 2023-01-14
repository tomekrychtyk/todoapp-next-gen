import { List } from '@mui/material';
import Todo from './Todo';
import { useGetTodosQuery } from '../../app/api/todo';
import Loading from '@/components/Loading/Loading';

const TodoList = () => {
  const { data, error, isLoading, isUninitialized } = useGetTodosQuery();
  if (isLoading || isUninitialized) {
    return <Loading />;
  }

  if (error) {
    // TODO: Show a nice error message
    return null;
  }

  return (
    <List dense={false}>
      {data.map((todo) => {
        return <Todo key={todo._id} />;
      })}
    </List>
  );
};

export default TodoList;
