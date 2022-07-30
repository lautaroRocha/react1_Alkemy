import { useEffect } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';


function Listado () {
    const navegar = useNavigate();
    useEffect( () =>{
        const token = localStorage.getItem('token');
        if(token === null){
            navegar("/ ", { replace: true })
        }
    }, []);

    return ( <h2>Listado</h2> )
    
}

export default Listado