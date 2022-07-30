import React from 'react'
import Login from "./components/Login.jsx" 
import Listado from './components/Listado.jsx'
import { BrowserRouter , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="listado" element={<Listado />} />
    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
