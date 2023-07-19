import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from './Layout.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import AppIntro from './AppIntro.jsx';

export default function App() {

  const [user, setUser] = useState({});

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<AppIntro />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          {/* <Route path='/linkedin' element={<LinkedIn />}></Route>
              <Route path='/github' element={<Github />}></Route> */}
        </Route>
      </Routes>
    </div>
  )
} 
