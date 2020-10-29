import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AppNavBar from 'layouts/AppNavBar';
import AppFooter from 'layouts/AppFooter';
import Home from 'views/Home/Index';
import Todo from 'views/Todo/Index';
import SignUp from 'views/Auth/SignUp/Index';
import Login from 'views/Auth/Login/Index';

function App() {
  // const isAuthenticated = false;

  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('token') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavBar></AppNavBar>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <PrivateRoute path="/todo">
            <Todo />
          </PrivateRoute>

          {/* <Route path="/todo" component={Todo} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <AppFooter></AppFooter>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.any,
};

export default App;
