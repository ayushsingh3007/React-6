import React from 'react';
import Navbar from './RouteCompo/Navbar';

function App() {
  return (
    <div className="App">
      <StoreProvider> {/* Add StoreProvider here */}
        <Navbar/>
      </StoreProvider>
    </div>
  );
}

export default App;
