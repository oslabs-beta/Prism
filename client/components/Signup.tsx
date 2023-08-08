import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LightDarkMode from './ClusterView/ClusterViewHeader/LighDarkMode';

interface Props {}

export default function Signup<Props>(/*{setUser} */) {
  const navigate = useNavigate();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const res = await fetch('http://localhost:3000/signup', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: username?.current.value,
    //     password: password?.current.value,
    //   }),
    // });
    // if (res.ok) {
    //   // const user = await res.json();
    //   // setUser(user);
    //   //   navigate('/');
    // }
    console.log(username.current.value)
    fetch('http://localhost:3333/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    // .then((data) => {
    //   data.json()
    //   return data
    // })
    .then((data) => {
      console.log(data)
    })
  };

  return (
    <div className='dark:bg-[var(--secondary)] dark:text-[var(--primary)]'>
      <div className='h-screen flex flex-col items-center justify-center drop-shadow '>  
      <LightDarkMode />   
        <form className='bg-[var(--primary-grey)] mt-5 px-5 pt-5 pb-10 flex flex-col items-center rounded dark:bg-[var(--secondary)] dark:border-2 dark:border-[var(--primary)] rounded shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)]' onSubmit={handleSubmit}>          
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
          <button>This will be github lol</button>
          <br></br>
          <div className='flex space-x-4'>
            <p className='text-sm text-slate-500 dark:text-[var(--primary-dark)] '>Already have an account?</p>
            <Link className='text-sm hover:font-bold' to="/login">Login</Link>
          </div> 
        </form>
      </div>
    </div>
  );
}
