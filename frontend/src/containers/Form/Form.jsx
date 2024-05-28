import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/api';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [rememberUser, setRememberUser] = useState (false);

    useEffect (() => {
      const rememberedEmail = localStorage.getItem('rememberedEmail');
      const rememberedPassword = localStorage.getItem('rememberedPassword');
      if (rememberedEmail) {
        setEmail(rememberedEmail);
        setPassword(rememberedPassword);
        setRememberUser(true);
      }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const userInformation = {email, password}
        
        try {
          const result = await dispatch (loginUser(userInformation))
          if (result.payload) {
    

            if (rememberUser) {
              localStorage.setItem('rememberedEmail', email);
              localStorage.setItem('rememberedPassword', password);
            }

            setEmail('');
            setPassword('');

            return navigate('/user');

          }
        } catch (error) {
          console.error(error);
        }
     
    };

    const handleRememberUserChange = (e) => {
      setRememberUser(e.target.checked);
  };


  return (
    <main className="signin">
        <section className="signin__form">
          <i className="fa fa-user-circle Signin__icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={handleLogin}>

            <div className="signin__wrapper">
              <label htmlFor="email">Username</label>
              <input 
              type="email" 
              id="email"
              name="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            <div className="signin__wrapper">
              <label htmlFor="password">Password</label>
              <input 
              type="password"
              id="password"
              name="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div className="signin__remember">
              <input 
              type="checkbox" 
              id="remember-me"
              checked={rememberUser}
              onChange={handleRememberUserChange} />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="signin__btn" type="submit">Sign In</button>
      
          </form>
        </section>
      </main>
  );
};

export default LoginForm;