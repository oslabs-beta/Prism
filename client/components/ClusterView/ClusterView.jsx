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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<OverView />} />
      <Route exact path='/nodes' element={<NodesView />} />
      <Route exact path='/pods' element={<PodsView />} />
      <Route exact path='/clustermap' element={<ClusterMap />} />
    </Route>
  )
);

const ClusterView = () => {
  return (
    <main className='min-h-screen grid items-stretch'>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </main>
  );
};

export default ClusterView;
