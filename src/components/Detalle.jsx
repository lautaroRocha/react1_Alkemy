import React from "react";
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import '../styles/detalle.css'
function Detalle(){
    let token = sessionStorage.getItem ('token'); 
    const MySwal = withReactContent(Swal);
    if(token == null){
        return (
        MySwal.fire('debes estar logueado'),
        <Navigate replace to={"/"} />)
        }else{
        return (
            <>
            <section className="detalle">
                <div className="detalle-cont">
                    <div className="detalle-col-uno">
                        <h2>TITULO</h2>
                        <img src="https://www.cdc.gov/NCBDDD/Spanish/birthdefects/images/spanish-asd-web.jpg" alt="" />
                    </div>
                    <div className="detalle-col-dos">
                        <p className="detalle-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eius? Necessitatibus vitae porro natus distinctio rerum aut adipisci, excepturi minima quibusdam sequi officia non odio sit nobis obcaecati ex reprehenderit? Sapiente maxime aperiam minima tempora aliquam iure eius est vero placeat illum corrupti maiores voluptatum odit perspiciatis, architecto suscipit, voluptatibus officia adipisci ipsam sequi. Ex assumenda veritatis quos odit modi.</p>
                    <div className="detalle-gnr">
                        <span>GENERO</span>
                        <span>GENERO</span>
                        <span>GENERO</span>
                    </div>
                    </div>
                </div>
            </section>
        </>
        )
        }
}

export default Detalle;