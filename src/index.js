import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './Store/Store'; // Import StoreProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider> {/* Wrap App with StoreProvider */}
      <App />
    </StoreProvider>
  </React.StrictMode>
);

reportWebVitals();
