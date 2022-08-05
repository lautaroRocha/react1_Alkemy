import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/listado.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Resultado () {
    const MySwal = withReactContent(Swal);

    let params = new URLSearchParams(document.location.search)
    let keyword = params.get('keyword');

    const [ resultsList, setResultsList ] = useState([]);

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=89be792ea6306278c870e8ce473ab886&query=${keyword}`

        axios.get(endPoint)
        .then(res =>{
            const apiData = res.data.results
            setResultsList(apiData)
            }
            )
        .catch(err => {
                MySwal.fire('hubo un problema conectándose con el servidor')})
    }, [resultsList]);

   return(
            <section className="listado">
        {<h2>Resultados de: {keyword}</h2>}
        <div className="cont-peli">
        { resultsList.map((peli, idx) =>{
                    return(
                        <div className="peli" key= {idx}>
                        <span className="peli-titulo">{peli.original_title}</span>
                        <img className="peli-imagen" src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
                         alt="" />
                         <p className="peli-desp">
                            {peli.overview.substring(0, 40)+"..."}</p>
                            <Link to={`/detalle?movieID=${peli.id}`}>
                                <button>Ver detalles</button>
                            </Link>
                    </div>
                    )
                }) }
        </div>
        </section>  
        )
}

export default Resultado;