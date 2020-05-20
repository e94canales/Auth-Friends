import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend';
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Nav />
      
      <Switch>
        <PrivateRoute exact path='/profile' component={Profile}/>
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <PrivateRoute exact path='/addfriend' component={AddFriend} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
