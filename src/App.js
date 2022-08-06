import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Login from "./components/Login.jsx" 
import Listado from './components/Listado.jsx'
import Nave from "./components/Nave.jsx"
import Footer from './components/Footer.jsx';
import Detalle from './components/Detalle.jsx';
import Resultado from "./components/Resultado.jsx" 
import Favoritos from './components/Favoritos.jsx'

function App() {

  

  return (
    <>
    <Router>
      <Nave />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="listado" element={<Listado />}/>
      <Route path="detalle" element={<Detalle />} />
      <Route path="resultado" element={<Resultado />} />
      <Route path="fav" element={<Favoritos />} />
    </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
