import { List } from '@mui/material';
import Todo from './Todo';

const TodoList = () => {
  return (
    <List dense={false}>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </List>
  );
};

export default TodoList;
