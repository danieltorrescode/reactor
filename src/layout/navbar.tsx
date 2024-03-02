import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  const isLoggedIn = localStorage.getItem('token') ? true : false;
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
                <AssignmentIcon />
              </Typography>
            </NavLink>
          </Box>
          <Box>
            <NavLink className="noNav" to="/signup">
              <Typography sx={{ mt: 1 }} variant="h6" noWrap>
                <AssignmentIndIcon />
              </Typography>
            </NavLink>
          </Box>
          {isLoggedIn ? (
            <Box>
              <NavLink className="noNav" to="">
                <Typography sx={{ mt: 1 }} variant="h6" noWrap>
                  <LogoutIcon onClick={() => logout()} />
                </Typography>
              </NavLink>
            </Box>
          ) : (
            <Box>
              <NavLink className="noNav" to="/login">
                <Typography sx={{ mt: 1 }} variant="h6" noWrap>
                  <LoginIcon />
                </Typography>
              </NavLink>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default NavBar;
