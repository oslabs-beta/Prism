import React, { SyntheticEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
interface Props {}

export default function Login<Props>(/* {setUser} */) {
  const navigate = useNavigate();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      // mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username?.current.value,
        password: password?.current.value,
      }),
    });

    if (res.ok) {
      // const user = await res.json();
      // setUser(user);
      // navigate('/')
    }
  };

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
          <button type='button'>Login</button>
          <br></br>
          <button type='button' onClick={() => navigate('/dashboard')}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
