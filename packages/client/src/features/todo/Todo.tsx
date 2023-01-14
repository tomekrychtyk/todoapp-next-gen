import { useState } from 'react';
import {
  ListItem,
  IconButton,
  ListItemText,
  Box,
  Chip,
  Typography,
  Button,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './Todo.module.css';

const Todo = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setAnchorEl(null);
  };

  return (
    <ListItem className={styles.todoContainer}>
      <ListItemText
        primary='Todo title Todo title Todo title Todo title Todo title'
        secondary='PROJECT NAME'
      />

      <Box
        sx={{
          pl: '16px',
        }}
      >
        <Typography>Web Development</Typography>
      </Box>

      <Box
        sx={{
          pl: '16px',
          pr: '16px',
        }}
      >
        <Button
          className={styles.statusButton}
          sx={{
            background: 'blueviolet',
            color: 'white',
          }}
          onClick={handleClick}
        >
          IN PROGRESS
        </Button>
        <Menu
          id='fade-menu'
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>
            <Chip
              label='DONE'
              sx={{ backgroundColor: 'rgb(0, 148, 49)' }}
              onClick={() => console.log('set as done')}
              className={styles.statusButton}
            />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Chip
              label='TO DO'
              sx={{ backgroundColor: 'gray' }}
              onClick={() => console.log('set as to do')}
              className={styles.statusButton}
            />
          </MenuItem>
        </Menu>
      </Box>

      <Box className={styles.iconsContainer}>
        <IconButton edge='end' aria-label='delete'>
          <DeleteIcon sx={{ color: 'crimson' }} />
        </IconButton>
        <IconButton edge='end' aria-label='edit'>
          <EditIcon />
        </IconButton>
        <IconButton edge='end' aria-label='complete'>
          <CheckCircleIcon sx={{ color: 'yellowgreen' }} />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default Todo;
