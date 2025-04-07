import React from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react';
import { useContext } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

     const handleSubmit = (e) => {
      e.preventDefault();
      setUser({username, password})
     }
  return (
    <div>
        <h1> Login </h1>
        <input type='text' value={username} style={{fontSize: 20, marginBottom: 10}} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
        <br/>
        <input type='text' value={password} style={{fontSize: 20, marginBottom: 15}} onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>
        <br/>
        <button onClick={handleSubmit} style={{color: 'black', backgroundColor: 'yellow'}}> Submit </button>
    </div>
  )
}

export default Login;