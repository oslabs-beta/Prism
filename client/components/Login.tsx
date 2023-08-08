import React, { SyntheticEvent, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
interface Props {}

export default function Login<Props>(/* {setUser} */) {
  const navigate = useNavigate();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const Button = () => {
    return (
      <div>
        <button type="button" onClick={() => navigate("/dashboard")}>
          Close
        </button>
      </div>
    );
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
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

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
  }, []);

  const CLIENT_ID = "a62670300c9169ebd3b3";
  const githubLogin = () => {
    window.location.assign(
      "https://www.github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
    // add a post request to create a cookie???
  };

  // <NavLink to='/dashboard'></NavLink>
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Login Form</p>
          <label htmlFor="login-username">username</label>
          <input
            ref={username}
            id="login-username"
            onChange={(e) => (username.current = e.target)}
            name="username"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="login-password">password</label>
          <input
            ref={password}
            id="login-password"
            onChange={(e) => (password.current = e.target)}
            name="password"
            type="password"
            placeholder="Password"
          />
          <br></br>
          <button type="button">Login</button>
          <br></br>
          <Button />
          {/* <NavLink to='/dashboard'> Dashboard</NavLink>
          <button type='button' onClick={() => navigate('/dashboard')}>
            Close
          </button> */}
        </form>

        <hr />
        <br />
        <hr />
        <div>
          <div>
            <button onClick={githubLogin}>Sign in with GitHub here</button>
          </div>
          <hr />
          {/* <div>
            <form>
              <label>email address:</label>
              <input placeholder="hello@example.com"></input>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}
