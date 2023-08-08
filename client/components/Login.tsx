import React, { SyntheticEvent, useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
interface Props {}

export default function Login<Props>(/* {setUser} */) {
  const navigate = useNavigate();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const Button = () => {
    return (
      <div>
        <button type='button' onClick={() => navigate('/dashboard')}>
          Close
        </button>
      </div>
    );
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(username?.current.value);
    // const res = await fetch('http://localhost:3333/user/login', {
    const res = await fetch('/user/login', {
      method: 'POST',
      // mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        username: username?.current.value,
        password: password?.current.value,
      }),
    }).then((response) => response.json());
    console.log(res);
    if (res.auth) {
      // const user = await res.json();
      // setUser(user);
      navigate('/dashboard');
    } else {
      alert('incorrect username or password');
    }
  };

  const CLIENT_ID = 'a62670300c9169ebd3b3';
  const githubLogin = () => {
    window.location.assign(
      'https://www.github.com/login/oauth/authorize?client_id=' + CLIENT_ID
    );
  };

  // <NavLink to='/dashboard'></NavLink>
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Login Form</p>
          <label htmlFor='login-username'>username</label>
          <input
            ref={username}
            id='login-username'
            onChange={(e) => (username.current = e.target)}
            name='username'
            type='text'
            placeholder='Username'
          />
          <label htmlFor='login-password'>password</label>
          <input
            ref={password}
            id='login-password'
            onChange={(e) => (password.current = e.target)}
            name='password'
            type='password'
            placeholder='Password'
          />
          <br></br>
          <button type='submit' value='Login'>
            Login
          </button>
          <br></br>
          <Button />
        </form>

        <hr />
        <br />
        <hr />

        <div>
          <div>
            <button onClick={githubLogin}>Sign in with GitHub here</button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
