import React, { useState, FC, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import LandingPage from './LandingPage/LandingPage';

import { ThemeProvider } from './ClusterView/ClusterViewHeader/themeContext';
import Dashboard from './ClusterView/Dashboard';

interface Props {}

const App: FC<Props> = () => {
  const [user, setUser] = useState({});
  const [rerender, setRerender] = useState(false);
  const navigate = useNavigate();
  // effect hook will get access token if
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    console.log(codeParam);

    if (codeParam && localStorage.getItem('accessToken') === null) {
      async function getAccessToken() {
        await fetch('/user/getAccessToken?code=' + codeParam, {
          method: 'GET',
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);

            if (data.access_token) {
              console.log('test from app.tx, then statement');
              localStorage.setItem('accessToken', data.access_token);
              setRerender(!rerender);
              navigate('/dashboard');
            }
          });
      }
      getAccessToken();
    }
  }, []);

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
