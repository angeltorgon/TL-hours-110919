import React from 'react';
import './App.css';
import UserList from './components/UserList';
import User from './components/User'
import { Route, Link } from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Route exact path="/users" component={UserList} />
      <Route path="/users/:id" component={User} />
    </div>
  );
}

export default App;
