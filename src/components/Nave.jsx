import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/nave.css'

function Nave() {
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
            </ul>
    
        
</header>
    )
}

export default Nave;