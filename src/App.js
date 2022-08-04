import React from 'react'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Login from "./components/Login.jsx" 
import Listado from './components/Listado.jsx'
import Nave from "./components/Nave.jsx"
import Footer from './components/Footer.jsx';
import Detalle from './components/Detalle.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nave />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="listado" element={<Listado />} />
      <Route path="/detalle" element={<Detalle />}></Route>
    </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
