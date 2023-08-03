import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppIntro from './AppIntro.jsx';
import Layout from './NavBar/Layout.jsx';
import Login from './NavBar/Login.jsx';
import Signup from './NavBar/Signup.jsx';
import Github from './NavBar/Github.jsx';
import LinkedIn from './NavBar/LinkedIn.jsx';
import ClusterConnect from './ClusterView/ClusterConnect.jsx';
//import '../styles_out.css';

import RootLayout from './ClusterView/RootLayout.jsx';
import { ThemeProvider } from './ClusterView//ClusterViewHeader/themeContext.js';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <ThemeProvider>
        {/* <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<AppIntro />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/github' element={<Github />}></Route>
              <Route path='/linkedin' element={<LinkedIn />}></Route>
              <Route
                path='/connectcluster'
                element={<ClusterConnect />}
              ></Route>
            </Route>
            <Route path='/clusterview' element={<RootLayout />}></Route>
          </Routes> */}

        <RootLayout />
      </ThemeProvider>
    </>
  );
}
