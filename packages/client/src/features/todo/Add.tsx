import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddTodo = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <>
      <Box>
        <TextField
          placeholder="Let's do something today..."
          sx={{ width: '80%' }}
          autoComplete='off'
        />
        <Button sx={{ ml: '16px', height: '55px' }} variant='contained'>
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
