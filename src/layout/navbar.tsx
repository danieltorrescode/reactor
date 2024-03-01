import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <AppBar>
          <Toolbar sx={{ justifyContent: 'space-around' }}>
            <Box display={'inherit'}>
              <NavLink className="noNav" to="/">
                <Typography sx={{ mt: 1 }} variant="h6" noWrap>
                  Reactor
                </Typography>
              </NavLink>
            </Box>
            <Box>
              <NavLink className="noNav" to="/tasks">
                <Typography sx={{ mt: 1 }} variant="h6" noWrap>
                  Tasks
                </Typography>
              </NavLink>
            </Box>
            <Box>
              <NavLink className="noNav" to="/signup">
                <Typography sx={{ mt: 1 }} variant="h6" noWrap>
                  Sign up
                </Typography>
              </NavLink>
            </Box>
            <Box>
              <NavLink className="noNav" to="/login">
                <Typography sx={{ mt: 1 }} variant="h6" noWrap>
                  login
                </Typography>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
        <Outlet />
      </>
    );
  }
}

export default NavBar;
