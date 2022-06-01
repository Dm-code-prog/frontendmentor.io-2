import './App.css';
import React from 'react';
import { use100vh } from 'react-div-100vh';
import { Navbar } from './Components/Navbar';

const Context = React.createContext();

function App() {
  const [MenuOpen, setMenuOpen] = React.useState(false);
  const height = use100vh()
  console.log(MenuOpen);
  return (
    <Context.Provider value={{MenuOpen, setMenuOpen}}>
      <div className="App">
        <Navbar/>
      </div>
    </Context.Provider>
  );
}

export {Context};
export default App;
