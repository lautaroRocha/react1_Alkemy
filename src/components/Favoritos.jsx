import React from "react";
import { Link } from 'react-router-dom';
import '../styles/listado.css'

function Favoritos(props){
        return(
            <section className="listado">
                <h3>Favoritos</h3>
                <div className="cont-peli">
               { props.favoritos.map((peli, idx) => {
                 let esFavorito = props.favoritos.some(ele => ele.title === peli.title);
                 let corazon;
                 console.log(esFavorito)
                 if(esFavorito){
                    corazon = "💖"
                }else{
                    corazon = '🖤' 
                 } 
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
                                    <button className="fv-btn" data-id={peli.id} onClick={props.fnc}><span role='img' aria-label="no-fav">{corazon}</span></button>
                                </div>
                            </div>
                       )})};
                        </div>
            </section>
        )                   
}


export default Favoritos;