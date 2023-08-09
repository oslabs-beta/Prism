import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LightDarkMode from './ClusterView/ClusterViewHeader/LighDarkMode';

interface Props {}

export default function Signup<Props>(/*{setUser} */) {
  const navigate = useNavigate();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // type assertions for username and password
    if (username.current === null || password.current === null) {
      alert(' You must enter a username and password! ');
      return;
    }
    const name: string = username.current.value;
    const pwd: string = password.current.value;
    const res = await fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: name,
        password: pwd,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.created) navigate('/dashboard');
        else alert('Username is taken!');
      });
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // codeParam is the access token
    const codeParam = urlParams.get('code');
    console.log(codeParam);
  }, []);

  const CLIENT_ID = 'a62670300c9169ebd3b3';
  const githubLogin = () => {
    window.location.assign(
      'https://www.github.com/login/oauth/authorize?client_id=' + CLIENT_ID
    );
  };

  return (
    <div className='dark:bg-[var(--secondary)] dark:text-[var(--primary)]'>
      <div className='h-screen flex flex-col items-center justify-center drop-shadow '>
        <LightDarkMode />
        <form
          className='bg-[var(--primary-grey)] mt-5 px-5 pt-5 pb-10 flex flex-col items-center rounded dark:bg-[var(--secondary)] dark:border-2 dark:border-[var(--primary)] rounded shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)]'
          onSubmit={handleSubmit}
        >
          <p>Signup</p>
          <br></br>
          <input
            ref={username}
            id='signup-username'
            onChange={(e) => (username.current = e.target)}
            name='username'
            type='text'
            placeholder='Username'
          />
          <br></br>
          <input
            ref={password}
            id='signup-password'
            onChange={(e) => (password.current = e.target)}
            name='password'
            type='password'
            placeholder='Password'
          />
          <br></br>
          <button>Sign Up</button>
          <br></br>
          <button onClick={githubLogin}>Sign up with GitHub</button>
          <br></br>
          <div className='flex space-x-4'>
            <p className='text-sm text-slate-500 dark:text-[var(--primary-dark)] '>
              Already have an account?
            </p>
            <Link className='text-sm hover:font-bold' to='/login'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
