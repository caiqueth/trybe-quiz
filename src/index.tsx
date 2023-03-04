import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/fonts/Roobert-Regular.ttf';
import './assets/fonts/Roobert-RegularItalic.ttf';
import './assets/fonts/Roobert-SemiBold.ttf';
import './assets/fonts/Roobert-SemiBoldItalic.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

