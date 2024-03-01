import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import TaskForm from '../components/taskForm';

import { Task } from '../types';

export default function Tasks() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseUrl}/tasks`;
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const [open, setOpen] = useState(false);
  const [task, setTask] = useState<Task>({ name: '', description: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTask({ name: '', description: '' });
  };

  function getList() {
    const content = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
    };

    const status = null;
    fetch(url, content)
      .then((response) => {
        // const status = response.status;
        return response.json();
      })
      .then((json) => setTasksList(json))
      .catch((error) => {
        console.error('Error:', error);
        console.error('Error:', status);
      });
  }

  const selectItem = (id: string | undefined) => {
    if (!id) return;
    // let message = `Updated Item: ${id}`;
    // let title = 'updateItem';
    // let type = 'warning';
    // console.log(`${message} ${title} ${type}`);
    // this.state.listData.map(item => console.log(item));
    const item: Task | undefined = tasksList.find((item) => item._id === id);
    if (item) {
      setTask(item);
      setOpen(true);
    }
  };

  const deleteItem = (id: string | undefined) => {
    if (!id) return;
    const message = `Deleted Item: ${id}`;
    const title = 'delteItem';
    const type = 'warning';
    const resource = `${url}/${id}`;

    const content = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('token')}`,
      },
    };
    fetch(resource, content)
      .then((response) => response.json())
      .then((json) => {
        if (json.task._id) {
          console.log(json);
          // this.showMessage(json.text, 'success');
        }
        getList();
        // alert(`${message} - ${title} -  ${type}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    getList();
  }, [open]);

  return (
    <>
      <Fab color="primary" aria-label="add" onClick={() => handleClickOpen()}>
        <AddIcon />
      </Fab>
      <TaskForm open={open} handleClose={handleClose} task={task} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasksList.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" onClick={() => selectItem(row?._id)}>
                  {row._id}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteItem(row?._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
