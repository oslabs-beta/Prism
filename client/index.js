import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         {/* <Route path='/' Component={App} /> */}
//         <Route path='/*' Component={App} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
