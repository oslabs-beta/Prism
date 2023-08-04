import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup.jsx';
import Dashboard from './ClusterView/Dashboard.jsx';
import { ThemeProvider } from './ClusterView//ClusterViewHeader/themeContext.js';

import LandingPage from './LandingPage/LandingPage.jsx';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <div>
        <ThemeProvider>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />}></Route>
            {/* <Route index element={<AppIntro />}></Route>
              <Route path='/github' element={<Github />}></Route>
              <Route path='/linkedin' element={<LinkedIn />}></Route>
              <a href="">Github</a>
              <a href="">linkedin</a>
              <Route
                path='/connectcluster'
                element={<ClusterConnect />}
              ></Route> */}

            {/* 
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/clusterview' element={<RootLayout />}>
              <Route index element={<OverView />} />
              <Route exact path='/clusterview/nodes' element={<NodesView />} />
              <Route exact path='/clusterview/pods' element={<PodsView />} />
              <Route
                exact
                path='/clusterview/clustermap'
                element={<ClusterMap />}
              /> */}
            {/* </Route> */}
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
}
