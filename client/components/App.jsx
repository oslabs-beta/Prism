import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppIntro from './AppIntro.jsx';
import Layout from './NavBar/Layout.jsx';
import Login from './NavBar/Login.jsx';
import Signup from './NavBar/Signup.jsx';
import Github from './NavBar/Github.jsx';
import LinkedIn from './NavBar/LinkedIn.jsx';

//import '../styles_out.css';

import Dashboard from './ClusterView/Dashboard.jsx';
import { ThemeProvider } from './ClusterView//ClusterViewHeader/themeContext.js';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<AppIntro />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/github' element={<Github />}></Route>
            <Route path='/linkedin' element={<LinkedIn />}></Route>
          </Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>

        {/* <RootLayout /> */}
      </ThemeProvider>
    </>
  );
}
