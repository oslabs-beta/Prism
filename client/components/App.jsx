import React, { useState } from 'react';
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AppIntro from './AppIntro.jsx';
import Layout from './NavBar/Layout.jsx';
import Login from './NavBar/Login.jsx';
import Signup from './NavBar/Signup.jsx';
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
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/'
//   )
// )

export default function App() {
  const [user, setUser] = useState({});
  const [viewOverview, setViewOverview] = useState(true);
  const [viewNode, setViewNode] = useState(false);
  const [viewPods, setViewPods] = useState(false);
  const [viewClusterMap, setViewClusterMap] = useState(false);

  return (
    <>
      <div>
        <ThemeProvider>
          <Routes>
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

            <Route path='/clusterview' element={<RootLayout />}>
              <Route index element={<OverView viewOverview={viewOverview} />} />
              <Route
                exact
                path='/clusterview/nodes'
                element={<NodesView viewNode={viewNode} />}
              />
              <Route
                exact
                path='/clusterview/pods'
                element={<PodsView viewPods={viewPods} />}
              />
              <Route
                exact
                path='/clusterview/clustermap'
                element={<ClusterMap ViewClusterMap={viewClusterMap} />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
}
