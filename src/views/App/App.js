import React from 'react';
import './App.css';
import AppNavBar from 'layouts/AppNavBar';
import AppFooter from 'layouts/AppFooter';
// import Home from 'views/Home/Home';
import Todo from 'views/Todo/Todo';

function App() {
  return (
    <div className="App">
        <AppNavBar></AppNavBar>
        {/* <Home></Home> */}
        <Todo></Todo>
        <AppFooter></AppFooter>
    </div>
  );
}

export default App;
