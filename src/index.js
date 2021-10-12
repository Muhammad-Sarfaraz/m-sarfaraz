import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';

import App from './App';
import { LoadingProvider } from './contexts/LoadingContext';

ReactDOM.render(
  <React.StrictMode>
     <LoadingProvider>
      <App />
      </LoadingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

