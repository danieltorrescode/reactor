import { Navigate } from 'react-router-dom';

interface LayoutProps {
  nav?: React.ReactNode;
  children: React.ReactNode;
}

const LoggedIn = ({ children }: LayoutProps) => {
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    return children;
  }
  return <Navigate to="/" />;
};
export default LoggedIn;
