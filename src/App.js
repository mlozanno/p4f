import React from 'react';

import { UserProvider } from './context/users';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
