import React, { useState, FC } from 'react';
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AppIntro from './AppIntro';
import Layout from './NavBar/Layout';
import Login from './NavBar/Login';
import Signup from './NavBar/Signup';
import Github from './NavBar/Github';
import LinkedIn from './NavBar/LinkedIn';
import ClusterConnect from './ClusterView/ClusterConnect';
//import '../styles_out.css';
import ClusterView from './ClusterView/ClusterView.jsx';
import RootLayout from './ClusterView/RootLayout.jsx';
import { ThemeProvider } from './ClusterView/ClusterViewHeader/themeContext';
import ClusterMap from './ClusterView/Dashboard/ClusterMap.jsx';
import NodesView from './ClusterView/Dashboard/NodesView.jsx';
import OverView from './ClusterView/Dashboard/Overview';
import PodsView from './ClusterView/Dashboard/PodsView.jsx';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/'
//   )
// )

interface Props {

}

const App: FC<Props> = () => {
  const [user, setUser] = useState({});


  return (
    <>
      <div>
        <ThemeProvider initialTheme={'dark'} >
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<AppIntro />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/github' element={<Github />}></Route>
              <Route path='/linkedin' element={<LinkedIn />}></Route>
              <Route path='/connectcluster' element={<ClusterConnect />}>
              </Route>
            </Route>

            <Route path='/clusterview' element={<OverView />}>
              {/* <Route index element={<OverView />} /> */}
              {/* <Route exact path='/clusterview/nodes' element={<NodesView />} />
              <Route exact path='/clusterview/pods' element={<PodsView />} />
              <Route exact path='/clusterview/clustermap' element={<ClusterMap />} /> */}
            </Route>
          </Routes>
          {/* <RootLayout /> */}
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;