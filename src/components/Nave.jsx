import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import '../styles/nave.css'
import './Buscador.jsx'
import { useState, useEffect } from 'react';
import Buscador from './Buscador.jsx';
import Contador from './Contador';

function Nave(props) {
    let token = sessionStorage.getItem('token')
    let navegar = useNavigate();
    let cerrarSesion = () => {
        sessionStorage.removeItem('token')
        navegar("/", { replace: true })
        }
    let activeStyle = {
        color : '#f2f2f2',
      };
    let log;
    if(token == null){
              log =  <NavLink  to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Ingreso</NavLink>
    }else{
        log = <button onClick={cerrarSesion}>Cerrar Sesión</button>
        }
    return (
        <header>
            <ul>
                <li>
                    {log}
                </li>                
                <li>
                    <NavLink  to="/listado"style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Listado</NavLink>
                </li>                
                <li>
                    <NavLink to="/fav" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Favoritos</NavLink>
                </li>
                <li>
                    <Contador favoritos={props.favoritos} />
                </li>
            </ul>
            <Buscador/>
        </header>
    )
        }

export default Nave;