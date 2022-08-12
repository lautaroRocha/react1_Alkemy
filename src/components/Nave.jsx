import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/nave.css'
import './Buscador.jsx'
import Buscador from './Buscador.jsx';

function Nave(props) {
    return (
        <header>
            <ul>
                <li>
                    <Link  to="/">Home</Link>
                </li>                
                <li>
                    <Link  to="/listado">Listado</Link>
                </li>                
                <li>
                    <Link to="/fav">Favoritos</Link>
                </li>
                <li>
                    {props.favoritos.length > 0 &&
                    <span className='cont'>{props.favoritos.length}</span>
                    }
                    
                </li>
            </ul>
            <Buscador/>
        </header>
    )
}

export default Nave;