import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { StrictMode } from 'react';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
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
