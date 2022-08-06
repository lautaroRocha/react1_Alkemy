import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import '../styles/listado.css'

function Favoritos(){
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const favsInLocal = JSON.parse(localStorage.getItem('favs'));
        setFavoritos(favsInLocal)
    }
    , [favoritos])
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
        }else{
            let moviesLeft = tempFavs.filter(peli => {
                return peli.id !== movieFav.id;})
            localStorage.setItem('favs', JSON.stringify(moviesLeft))
        }
       
      }
    console.log(favoritos)

    
    if(favoritos === []){
        return(
            <section className="listado">
                <h3>Favoritos</h3>
                <p>Aquí aparecerán las películas que vayas guardando</p>
            </section>
        )
    }else{
        return(
            <section className="listado">
                <h3>Favoritos</h3>
                <div className="cont-peli">
               { favoritos.map((peli, idx) => {
                    return(
                            <div className="peli" key= {idx}>
                            <span className="peli-titulo">{peli.titu}</span>
                            <img className="peli-imagen" src={`https://image.tmdb.org/t/p/w500/${peli.imgURL}`}
                             alt="" />
                             <p className="peli-desp"> 
                                 {peli.resu.substring(0, 40)+"..."}</p>
                                <div className="btns">
                                    <Link to={`/detalle?movieID=${peli.id}`}>
                                        <button>Ver detalles</button>
                                    </Link>
                                    <button className="fv-btn" data-id={peli.id} onClick={addOrRemoveFavs}><span role='img' aria-label="no-fav">🖤</span></button>
                                </div>
                            </div>
                       )})};
                        </div>
            </section>
        )                   
    }
}

export default Favoritos;