import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <>
            <Link to='/connectcluster'>Connect Cluster------------------------------------------------------------------------------------------------------</Link>
            <Link to='/linkedin'>(Insert LinkedIn Logo Here)</Link>
            <Link to='/github'>(Insert Github Logo Here)</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </>
    )

    //     const username = user.username;

    //     return (
    //         <header>
    //             <Link to="/">Prism</Link>

    //             {/* <Link to="/linkedin">LinkedIn</Link>
    //             <Link to="/github">Github</Link> */}

    //             {username ? <>
    //                 <Link to='/ClusterConnect'></Link>
    //                 <a onClick={() => setUser(null)}>Logout</a>
    //             </>
    //                 :
    //                 <>
    //                     <Link to='/login'>Login</Link>
    //                     <Link to='/signup'>Signup</Link>
    //                 </>
    //             }
    //         </header>
    //     )
}