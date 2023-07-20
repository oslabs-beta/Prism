import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import { createRoot } from 'react-dom/client';
import './styles.css'

// react render
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <>
      <div>hello </div>
      <App />
    </>
  </Router>
);
