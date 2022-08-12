import React from "react";
import { useEffect, useState } from "react";

import { Navigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

import '../styles/detalle.css'
function Detalle(props){

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
                    <button onClick={props.fnc}>AÑADIR A FAVORITOS</button>
                    </div>
                </div>}
            </section>
            </>
        )}
        }

export default Detalle;