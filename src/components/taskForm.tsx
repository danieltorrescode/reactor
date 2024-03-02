import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Task } from '../types';

type TaskFormProps = {
  open: boolean;
  handleClose: () => void;
  task?: Task;
};

const TaskForm = function ({ open, handleClose, task }: TaskFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseUrl}/tasks`;

  const update = () => {
    const updates: Task = {
      name: name,
      description: description,
    };

    const content = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(updates),
    };

    fetch(`${baseUrl}/tasks/${task?._id}`, content)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        handleClose();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task?._id) {
      update();
      return;
    }

    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get('name'),
      description: data.get('description'),
    };
    console.log({ formData });

    const content = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(formData),
    };

    fetch(url, content)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        handleClose();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    if (task?._id) {
      console.log(task);
      setName(task.name);
      setDescription(task.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [task]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>Task Form</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="description"
                label="Description"
                id="description"
                autoComplete="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="warning" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
