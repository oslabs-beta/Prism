import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(/* {setUser} */) {
  const navigate = useNavigate();
  const username = useRef("");
  const password = useRef("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.current,
        password: password.current,
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
    // post request to create cookie
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Login Form</p>
          <label htmlFor="login-username">username</label>
          <input
            ref={username}
            id="login-username"
            onChange={(e) => (username.current = e.target.value)}
            name="username"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="login-password">password</label>
          <input
            ref={password}
            id="login-password"
            onChange={(e) => (password.current = e.target.value)}
            name="password"
            type="password"
            placeholder="Password"
          />
          <br></br>
          <button type="button">Login</button>
          <br></br>
          <button type="button" onClick={() => navigate("/")}>
            Close
          </button>
        </form>
      </div>
      {/* after this was added by Josh  */}
      <hr />
      <br />
      <hr />
      <div>
        <p>Welcome to Prism</p>
        <p>Get started by logging in</p>
        <div>
          <button onClick={githubLogin}>Sign in with GitHub here</button>
        </div>
        <hr />
        <div>
          <form>
            <label>email address:</label>
            <input placeholder="hello@example.com"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
