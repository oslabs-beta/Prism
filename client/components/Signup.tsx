import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {}

export default function Signup<Props>(/*{setUser} */) {
  const navigate = useNavigate();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const res = await fetch('/signup', {
      method: 'POST',
      mode: 'cors',
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
      //   navigate('/');
    }
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
    // add a post request to create a cookie???
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Signup</p>
          <label htmlFor='signup-username'>username</label>
          <input
            ref={username}
            id='signup-username'
            onChange={(e) => (username.current = e.target)}
            name='username'
            type='text'
            placeholder='Username'
          />
          <label htmlFor='signup-password'>password</label>
          <input
            ref={password}
            id='signup-password'
            onChange={(e) => (password.current = e.target)}
            name='password'
            type='password'
            placeholder='Password'
          />
          <button>Sign Up</button>
          <button type='button' onClick={() => navigate('/')}>
            Close
          </button>
        </form>
      </div>
      <div>
        <hr />
        <div>
          <div>
            <button onClick={githubLogin}>Sign up with GitHub here</button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
