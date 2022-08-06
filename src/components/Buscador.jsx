import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useNavigate} from 'react-router-dom'

import '../styles/buscador.css'

function Buscador(){
    const navegar = useNavigate();
    const MySwal = withReactContent(Swal);
    const prevent = e =>{
        e.preventDefault();
    
        let keyword = e.currentTarget.keyword.value.trim(); 
        e.currentTarget.keyword.value = "";
        if(keyword.length === 0 ){
            MySwal.fire('debes escribir una palabra clave');
        }else if(keyword.length < 4){
            MySwal.fire('necesito más data rey');
        }else{
            navegar(`../resultado?keyword=${keyword}`, { replace: true })
        }

    }
    return(
        <>
        <form className="form-busc" onSubmit={prevent}>
            <label>
                <input type="text" placeholder="Buscador..." name="keyword"/>
            </label>            
            <button type="submit"></button>
        </form>
        </>
    )
}

export default Buscador;