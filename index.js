import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
// Creating a root for React rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the App component wrapped with ShopContextProvider to provide context to the entire app
root.render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
);
