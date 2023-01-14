import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useAppDispatch } from '@/app/hooks';
import { add } from '../todo/todoSlice';

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTodoTitle(e.target.value);
  };

  const handleAdd = () => {
    dispatch(
      add({
        title: todoTitle,
        _id: 'random-id-hardcoded',
        status: 'Done (hardcoded)',
        categories: [],
      })
    );
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
