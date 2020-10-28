import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AppNavBar from 'layouts/AppNavBar';
import AppFooter from 'layouts/AppFooter';
import Home from 'views/Home/Index';
import Todo from 'views/Todo/Index';
import SignUp from 'views/Auth/SignUp/Index';
import Login from 'views/Auth/Login/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavBar></AppNavBar>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
