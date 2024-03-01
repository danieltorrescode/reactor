import { BrowserRouter, Route, Routes } from 'react-router-dom';

import theme from '../assets/theme.ts';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

// import reactLogo from '@/assets/react.svg';
// import viteLogo from '/vite.svg';
import '../styles.css';

import Home from './home.tsx';
import Login from './login.tsx';
import SignUp from './signup.tsx';
import Tasks from './tasks.tsx';
import Error from './error.tsx';
import NavBar from '../layout/navbar.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
