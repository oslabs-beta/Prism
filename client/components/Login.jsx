// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login( /* {setUser} */) {

//     const navigate = useNavigate();
//     const username = useRef('');
//     const password = useRef('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const res = await fetch("http://localhost:3000/login", {
//             method: "POST",
//             mode: "cors",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 username: username.current,
//                 password: password.current,
//             }),
//         })

//         if (res.ok) {
//             // const user = await res.json();
//             // setUser(user);
//             // navigate(-1)
//         }
//     }

//     return (
//         <div>
//             <div>
//                 <form onSubmit={handleSubmit} >
//                     <p>Login</p>
//                     <label htmlFor="login-username">username</label>
//                     <input
//                         ref={username}
//                         id="login-username"
//                         onChange={(e) => username.current = e.target.value}
//                         name="username"
//                         type="text"
//                         placeholder="Username"
//                     />
//                     <label htmlFor="login-password">password</label>
//                     <input
//                         ref={password}
//                         id="login-password"
//                         onChange={(e) => password.current = e.target.value}
//                         name="password"
//                         type="password"
//                         placeholder="Password"
//                     />
//                     <button >Login</button>
//                     <button type="button" onClick={() => navigate(-1)}>Close</button>
//                 </form>
//             </div>
//         </div>
//     );
// }
