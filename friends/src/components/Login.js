import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('')


  handleSubmit = e => {
    e.preventDefault();
    
    axiosWithAuth()
    .post('/login', this.state.credentials)
    .then(res => {
      // console.log("data", res);
      localStorage.setItem('token', res.data.payload) 
      this.props.history.push('/profile')
    })
    .catch(err => console.log(err))
  };

  handleChange = e => {
    this.setState({
      credentials: { ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  };

  render() {
    return(
      <div className='login-form'>
        <form onSubmit={this.handleSubmit}>
          <input 
            name='username'
            placeholder='Username'
            value={this.username}
            type='text'
            onChange={this.handleChange}
          />

          <input 
            name='password'
            placeholder='Password'
            value={this.password}
            type='password'
            onChange={this.handleChange}
          />

          <button className='login-btn'>Log In</button>
        </form>
      </div>
    )}
}

export default Login;