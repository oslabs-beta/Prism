import React, { SyntheticEvent, useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LightDarkMode from './ClusterView/ClusterViewHeader/LighDarkMode';
interface Props {}

export default function Login<Props>(/* {setUser} */) {
  const navigate = useNavigate();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    // type assertions for username and password to ensure they've been entered .
    if (username.current === null || password.current === null) {
      alert(' You must enter a username and password! ');
      return;
    }
    const name: string = username.current.value;
    const pwd: string = password.current.value;
    const res = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        username: name,
        password: pwd,
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
    <div className='dark:bg-[var(--secondary)] dark:text-[var(--primary)]'>
      <div className='h-screen flex flex-col items-center justify-center'>
        <LightDarkMode />
        <form
          className='bg-[var(--primary-grey)] mt-5 px-5 pt-5 dark:bg-[var(--secondary)] pb-10 flex flex-col items-center dark:border-2 dark:border-[var(--primary)] rounded shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)]'
          onSubmit={handleSubmit}
        >
          <p className='pb-5'>Login Form</p>
          <input
            ref={username}
            id='login-username'
            onChange={(e) => (username.current = e.target)}
            name='username'
            type='text'
            placeholder='username'
          />
          <br></br>
          <input
            ref={password}
            id='login-password'
            onChange={(e) => (password.current = e.target)}
            name='password'
            type='password'
            placeholder='password'
          />
          <br></br>
          <button type='submit' className='bg-[var(--secondary)] px-6'>
            Login
          </button>
          <br></br>
          <button onClick={githubLogin}>Sign in with GitHub</button>
          <br></br>
          <div className='flex space-x-4'>
            <p className='text-sm text-slate-500 dark:text-[var(--primary-dark)]'>
              Don't Have an account?
            </p>
            <Link className='text-sm hover:font-bold' to='/signup'>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
