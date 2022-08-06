import React from "react";
import { useEffect, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import '../styles/listado.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Listado () {
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
    const [ moviesList, setMoviesList ] = useState([]);
    useEffect(() =>{
        const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=89be792ea6306278c870e8ce473ab886&language=es&sort_by=popularity.desc`
        axios.get(endPoint)
        .then(res => {
            const apiData = res.data.results
            setMoviesList(apiData)})
        .catch(err => {
                MySwal.fire('hubo un problema conectándose con el servidor')})
        }, [setMoviesList] )

    if(token == null){
        return (
        MySwal.fire('debes estar logueado'),
        <Navigate replace to={"/"} />)
        }else{
        return (
        <>
        <section className="listado">
        <h2>Listado</h2> 
        <div className="cont-peli">
        { moviesList.map((peli, idx) =>{
                    return(
                        <div className="peli" key= {idx}>
                            <span className="peli-titulo">{peli.title}</span>
                            <img className="peli-imagen" src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
                         alt="" />
                            <p className="peli-desp">
                            {peli.overview.substring(0, 40)+"..."}</p>
                            <div className="btns">
                                <Link to={`/detalle?movieID=${peli.id}`}>
                                    <button>Ver detalles</button>
                                </Link>
                                <button className="fv-btn" onClick={addOrRemoveFavs} data-id={peli.id}><span role='img' aria-label="no-fav">🖤</span></button>
                            </div>
                        </div>
                    )
                }) }
        </div>
        </section>  
        </>
        )
        }
}


export default Listado