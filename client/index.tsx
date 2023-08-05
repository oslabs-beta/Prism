import React from 'react';

import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';
import { ReactDOM } from 'react';

import './styles_output.css';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
