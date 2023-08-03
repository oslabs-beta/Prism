import React, { useState } from 'react';
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AppIntro from './AppIntro.jsx';
import Layout from './NavBar/Layout.jsx';
import Login from './Login';
import Signup from './Signup.jsx';
import Github from './NavBar/Github.jsx';
import LinkedIn from './NavBar/LinkedIn.jsx';
import ClusterConnect from './ClusterView/ClusterConnect.jsx';
//import '../styles_out.css';
import ClusterView from './ClusterView/ClusterView.jsx';
import RootLayout from './ClusterView/RootLayout.jsx';
import { ThemeProvider } from './ClusterView//ClusterViewHeader/themeContext.js';
import ClusterMap from './ClusterView/Dashboard/ClusterMap.jsx';
import NodesView from './ClusterView//Dashboard/NodesView';
import OverView from './ClusterView//Dashboard/Overview';
import PodsView from './ClusterView//Dashboard/PodsView';
import LandingPage from './LandingPage.jsx';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/'
//   )
// )

export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <div>
        <ThemeProvider>
          <Routes>
            <Route path='/' element={<LandingPage />}>  </Route>
            <Route path = '/login' element = {<Login/>}></Route>
            <Route path = '/signup' element = {<Signup/>}></Route>


      
            <Route path = '/dashboard' element = {<RootLayout/>}></Route>
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
          {/* <RootLayout /> */}
        </ThemeProvider>
      </div>
    </>
  );
}
