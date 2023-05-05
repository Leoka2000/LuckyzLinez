import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './routes';
import './App.css'


const Loader = () => (
  <div className="Loader">
      <div className="Loader__dot"></div>
      <div className="Loader__dot"></div>
      <div className="Loader__dot"></div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Suspense fallback={<Loader />}>
    <Routes />
    </Suspense>
  </React.StrictMode>
);
