import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/api';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser({ username, password }));
        return navigate('/user');
    };


  return (
    <main className="Signin">
        <section className="Signin__form">
          <i className="fa fa-user-circle Signin__icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>

            <div className="Signin__wrapper">
              <label htmlFor="email">Username</label>
              <input 
              type="email" 
              id="Username"
              name="Username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              />
            </div>

            <div className="Signin__wrapper">
              <label htmlFor="password">Password</label>
              <input 
              type="password"
              id="password"
              name="password"
              value={username} 
              onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div className="Signin__remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <i class="fa fa-circle-user"></i>
            <button className="Signin__btn" type="submit">Sign In</button>
      
          </form>
        </section>
      </main>
  );
};

export default LoginForm;