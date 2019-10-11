import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  
  return (
    <div className="App">
      <h1>Token Authentication</h1>
      <PrivateRoute 
        exact 
        path='/profile'
        component={UserProfile}
      />
      <Route 
        // exact
        path='/'
        component={Login}
      />
      {/* <Login /> */}
    </div>
  );
}

export default App;
