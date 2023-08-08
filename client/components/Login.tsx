import React, { SyntheticEvent, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LightDarkMode from './ClusterView/ClusterViewHeader/LighDarkMode';
interface Props {}

export default function Login<Props>(/* {setUser} */) {
  const navigate = useNavigate();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
 



  const handleSubmit = async (event: SyntheticEvent) => {
    console.log('sumbit was handled', password.current.value)
    event.preventDefault();
    // const res = await fetch('http://localhost:3333/login', {
    //   method: 'POST',
    //   // mode: "cors",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: username?.current.value,
    //     password: password?.current.value,
    //   }),
    // });
    // if (res.ok) {
    //   const user = await res.json();
    //   setUser(user);
    //   navigate('/')
    // }
    fetch('http://localhost:3333/user/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value
      })
    })
    .then((data) => data.json())
    .then((data) => {
      console.log(data)
    })
  };
  return (
    <div className='dark:bg-[var(--secondary)] dark:text-[var(--primary)]'>
      <div className='h-screen flex flex-col items-center justify-center'>
      <LightDarkMode />   
        <form className='bg-[var(--primary-grey)] mt-5 px-5 pt-5 dark:bg-[var(--secondary)] pb-10 flex flex-col items-center dark:border-2 dark:border-[var(--primary)] rounded shadow-[5px_5px_6px_0px_rgba(0,0,0,0.3)]' onSubmit={handleSubmit}>
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
          <button type='submit' className='bg-[var(--secondary)] px-6'>Login</button>
          <br></br>
          <button>This will be github lol</button>
          <br></br>
          <div className='flex space-x-4'>
            <p className='text-sm text-slate-500 dark:text-[var(--primary-dark)]'>Don't Have an account?</p>
            <Link className='text-sm hover:font-bold' to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
