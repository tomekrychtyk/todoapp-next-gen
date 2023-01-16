import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useAddNewTodoMutation } from './apiSlice';
import { v4 as uuid } from 'uuid';

const AddTodo = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [addNewTodo, response] = useAddNewTodoMutation();

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTodoTitle(e.target.value);
  };

  const handleAdd = () => {
    addNewTodo({
      _id: uuid(),
      title: todoTitle,
      status: 'todo',
      categories: [],
    })
      .unwrap()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box>
        <TextField
          placeholder="Let's do something today..."
          sx={{ width: '80%' }}
          autoComplete='off'
          value={todoTitle}
          onChange={handleChange}
        />
        <Button
          sx={{ ml: '16px', height: '55px' }}
          variant='contained'
          onClick={handleAdd}
        >
          Add
        </Button>
      </Box>
      <Box>
        <Button onClick={toggleAdvanced}>
          {!showAdvanced ? (
            <Typography>+ SHOW ADVANCED OPTIONS</Typography>
          ) : (
            <Typography>- HIDE ADVANCED OPTIONS</Typography>
          )}
        </Button>
      </Box>
      {showAdvanced ? <Box>Advanced</Box> : null}
    </>
  );
};

export default AddTodo;
