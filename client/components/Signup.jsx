import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup( /*{setUser} */) {

    const navigate = useNavigate();
    const username = useRef('');
    const password = useRef('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.current,
                password: password.current,
            }),
        })
        if (res.ok) {
            // const user = await res.json();
            // setUser(user);
            //   navigate('/');
        }
    };

    return (
        <div >
            <div >
                <form onSubmit={handleSubmit} >
                    <p>Signup</p>
                    <label htmlFor="signup-username" >username</label>
                    <input
                        ref={username}
                        id="signup-username"
                        onChange={(e) => username.current = e.target.value}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <label htmlFor="signup-password">password</label>
                    <input
                        ref={password}
                        id="signup-password"
                        onChange={(e) => password.current = e.target.value}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button >Sign Up</button>
                    <button type="button" onClick={() => navigate('/')}>Close</button>
                </form>
            </div>
        </div>
    );
}

