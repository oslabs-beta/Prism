import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './input.css';
import App from './components/app.jsx';
import { createRoot } from 'react-dom/client';

// react render
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
