import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

import '../styles/detalle.css'
function Detalle(){
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
    let token = sessionStorage.getItem ('token'); 
    const MySwal = withReactContent(Swal);

    let params = new URLSearchParams(document.location.search)
    let id = params.get('movieID')
    const [movie, setMovie] = useState(null)

    useEffect(() =>{
        const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=89be792ea6306278c870e8ce473ab886&language=es`
        axios.get(endPoint)
        .then(res => {
            let detalles = res.data;
            setMovie(detalles)
        })
        .catch(err => {
                MySwal.fire('hubo un problema conectándose con el servidor')})
        }, [setMovie] )
       
           
    

    if(token == null){
        return (
        MySwal.fire('debes estar logueado'),
        <Navigate replace to={"/"} />)
        }else{
        return (
            <>
            
            <section className="detalle">
                {
                    !movie &&
                    <h2 className="loading">Cargando...</h2>
                }
              {  movie && 
              <div className="detalle-cont">
                    <div className="detalle-col-uno">
                        <h2 className="peli-titulo">{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                        <span className="detalle-rel">Fecha de lanzamiento: {movie.release_date}</span>
                    </div>
                    <div className="detalle-col-dos">
                        <p className="detalle-des peli-desp">{movie.overview}</p>
                    <div className="detalle-gnr">
                        {movie.genres.map ((oneGenre, idx) => <span key={idx}>{oneGenre.name}</span>)}
                    </div>
                    <button onClick={addOrRemoveFavs}>AÑADIR A FAVORITOS</button>
                    </div>
                </div>}
            </section>
            </>
        )}
        }

export default Detalle;