// App.js
import React from 'react';
import { StoreProvider } from './Store/Store'; // Adjust the path as needed
import Navbar from './RouteCompo/Navbar';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Navbar />
      </div>
    </StoreProvider>
  );
}

export default App;
