import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import AppIntro from './AppIntro.jsx';
import Layout from './NavBar/Layout.jsx';
import Login from './NavBar/Login.jsx';
import Signup from './NavBar/Signup.jsx';
import Github from './NavBar/Github.jsx';
import LinkedIn from './NavBar/LinkedIn.jsx';
import ClusterConnect from './ClusterView/ClusterConnect.jsx';



export default function App() {

  const [user, setUser] = useState({});

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<AppIntro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/github" element={<Github />}></Route>
            <Route path="/linkedin" element={<LinkedIn />}></Route>
            {/* <Route path="/connectcluster" element={<ClusterConnect />}></Route> */}
          </Route>
        </Routes>
      </div>
    </>
  )
}



 // <div>
    //   <Routes>
    //     <Route path="/" element={<Layout user={user} setUser={setUser} />}>
    //       <Route index element={<AppIntro />}></Route>
    //       <Route path='/login' element={<Login />}></Route>
    //       <Route path='/signup' element={<Signup />}></Route>
    //       {/* <Route path='/linkedin' element={<LinkedIn />}></Route>
    //           <Route path='/github' element={<Github />}></Route> */}
    //     </Route>
    //   </Routes>
    // </div>