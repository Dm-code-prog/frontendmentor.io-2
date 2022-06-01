import './App.css';
import React from 'react';

const Context = React.createContext();

function App() {
  return (
    <Context.Provider value="">
      <div className="App">
        
      </div>
    </Context.Provider>
  );
}

export default App;
