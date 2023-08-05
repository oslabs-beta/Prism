import React, { useState, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import LandingPage from './LandingPage/LandingPage';

import { ThemeProvider } from './ClusterView/ClusterViewHeader/themeContext';
import Dashboard from './ClusterView/Dashboard';

interface Props {}

const App: FC<Props> = () => {
  const [user, setUser] = useState({});

  return (
    <>
      <div>
        <ThemeProvider initialTheme={'dark'}>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />

            {/* <Route index element={<AppIntro />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/github' element={<Github />}></Route>
              <Route path='/linkedin' element={<LinkedIn />}></Route>
              <Route
                path='/connectcluster'
                element={<ClusterConnect />}
              ></Route>
            </Route>

            <Route path='/clusterview' element={<OverView />}> */}
            {/* <Route index element={<OverView />} /> */}
            {/* <Route exact path='/clusterview/nodes' element={<NodesView />} />
              <Route exact path='/clusterview/pods' element={<PodsView />} />
              <Route exact path='/clusterview/clustermap' element={<ClusterMap />} /> */}
            {/* </Route> */}
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
