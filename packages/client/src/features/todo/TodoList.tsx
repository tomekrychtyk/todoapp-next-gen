import { useEffect } from 'react';
import { List } from '@mui/material';
import Todo from './Todo';
import { getTodos } from './api/getTodos';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { receivedTodos, getCategoriesSummary } from './todoSlice';

const TodoList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getTodos().then((todos) => {
      dispatch(receivedTodos(todos));
    });
  }, []);

  const todos = useAppSelector((state) => state.todos.items);
  const items = useAppSelector(getCategoriesSummary);

  return (
    <List>
      {todos.map((todo) => {
        return <Todo key={todo._id} data={todo} />;
      })}
    </List>
  );
};

export default TodoList;
