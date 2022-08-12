import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Login from "./components/Login.jsx" 
import Listado from './components/Listado.jsx'
import Nave from "./components/Nave.jsx"
import Footer from './components/Footer.jsx';
import Detalle from './components/Detalle.jsx';
import Resultado from "./components/Resultado.jsx" 
import Favoritos from './components/Favoritos.jsx'


function App() {
  const [favoritos, setFavoritos] = useState([]);
  useEffect(() => {
      const favsInLocal = localStorage.getItem('favs');
      if(favsInLocal !==null){
        const favsArray = JSON.parse(favsInLocal)
        setFavoritos(favsArray)
      }
      
  }
  , [])
  // const [token, setToken] = useState(null);
  // useEffect(() => {
  //   const tokenStorage = sessionStorage.getItem('token');
  //   if (tokenStorage !== null){
  //     setToken(tokenStorage);
  //   }
  // })
  const  addOrRemoveFavs = e =>{
    const favs = localStorage.getItem('favs')

    let tempFavs;

    if(favs === null){
        tempFavs = [];
    }else{
        tempFavs = JSON.parse(favs)
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const div = parent.parentElement;
    const imgURL = div.querySelector ('img').getAttribute('src')
    const title = div.querySelector('.peli-titulo').textContent;
    const resu = div.querySelector('.peli-desp').textContent
    const id = btn.dataset.id;
    const movieFav = {
        imgURL, title, resu, id
    }
    let movieIsFav = tempFavs.find( oneMovie =>{
        return oneMovie.id === movieFav.id})
    if(!movieIsFav){
        tempFavs.push(movieFav);
        localStorage.setItem('favs', JSON.stringify(tempFavs))
        setFavoritos(tempFavs)
    }else{
        let moviesLeft = tempFavs.filter(peli => {
            return peli.id !== movieFav.id;})
        localStorage.setItem('favs', JSON.stringify(moviesLeft))
        setFavoritos(moviesLeft)
    }

  }
  

  return (
    <>

    <Router>
      <Nave favoritos={favoritos} />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="listado"  element={<Listado fnc={addOrRemoveFavs}  favoritos={favoritos}/>}/>
      <Route path="detalle" element={<Detalle fnc={addOrRemoveFavs}/>} />
      <Route path="resultado" element={<Resultado fnc={addOrRemoveFavs} favoritos={favoritos}/>} />
      <Route path="fav" element={<Favoritos  fnc={addOrRemoveFavs} favoritos={favoritos}/>} />
    </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
