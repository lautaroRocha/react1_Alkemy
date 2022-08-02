import { useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../styles/listado.css'


function Listado () {
    const navegar = useNavigate();
    useEffect( () =>{
        const token = localStorage.getItem('token');
        const MySwal = withReactContent(Swal)
        if(token === null){
            MySwal.fire('debes estar logueado') ;
            navegar("/ ", { replace: true })
        }
    }, []);

    return ( 
    <section className="listado">
        <h2>Listado</h2> 
        <div className="cont-peli">
            <div className="peli">1</div>
            <div className="peli">2</div>
            <div className="peli">3</div>
            <div className="peli">4</div>
            <div className="peli">5</div>
            <div className="peli">6</div>
        </div>
    </section>    )
    
}

export default Listado