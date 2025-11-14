// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './context/AuthProvider.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//    <AuthProvider>
//    <div className="dark:bg-slate-900 dark:text-white">
//    <App/>
//    </div>
//    </AuthProvider>
//     </BrowserRouter>
 
// )

import React from 'react'; // 1. Added the missing React import
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import './index.css';

// Import the i18n configuration to initialize it
import './i18n';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);