// WE ARE NOT USING THIS COMPONENT. I AM KEEPING IT JUST TO BE SAFE

import React from 'react';
import { ThemeProvider } from './ClusterViewHeader/themeContext';
import ClusterMap from './Dashboard/ClusterMap';
import NodesView from './Dashboard/NodesView';
import OverView from './Dashboard/Overview';
import PodsView from './Dashboard/PodsView';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import { getInitialTheme } from './ClusterViewHeader/themeContext';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       <Route index element={<OverView />} />
//       <Route exact path='/nodes' element={<NodesView />} />
//       <Route exact path='/pods' element={<PodsView />} />
//       <Route exact path='/clustermap' element={<ClusterMap />} />
//     </Route>
//   )
// );

const ClusterView = () => {

  const InitialTheme = getInitialTheme();

  return (
    <main className='min-h-screen grid items-stretch'>
      <ThemeProvider initialTheme={InitialTheme}>
        {/* <RouterProvider router={router} /> */}
        {/* <Route '/' element={<RootLayout />} /> */}
        <Route index element={<OverView />} />
        <Route path='/nodes' element={<NodesView />} />
        <Route path='/pods' element={<PodsView />} />
        <Route path='/clustermap' element={<ClusterMap />} />
      </ThemeProvider>
    </main>
  );
};

export default ClusterView;
