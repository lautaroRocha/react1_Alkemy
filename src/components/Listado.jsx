import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import '../styles/listado.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Listado () {
    let token = localStorage.getItem ('token'); 
    const MySwal = withReactContent(Swal);
    const [ moviesList, setMoviesList ] = useState([]);

    useEffect(() =>{
        const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=89be792ea6306278c870e8ce473ab886&language=en-US&sort_by=popularity.desc`
        axios.get(endPoint)
        .then(res => {
            const apiData = res.data.results
            setMoviesList(apiData)})
    }, [setMoviesList] )

    console.log(moviesList);
    
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
                        <span className="peli-titulo">{peli.original_title}</span>
                        <img className="peli-imagen" src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
                         alt="" />
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