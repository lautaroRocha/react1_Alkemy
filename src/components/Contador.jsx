import React from "react";

function Contador(props){
    let token = sessionStorage.getItem('token')
    if(token !== null){
        if(props.favoritos.length > 0 ){
            return(<span className='cont'>{props.favoritos.length}</span>)
        }else{
        return (<span className='cont-inv'></span>)
    }  
}
}

export default Contador