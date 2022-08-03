import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom'
import '../styles/login.css'

function Login(){
    const navegar = useNavigate();
    const MySwal = withReactContent(Swal)
    const submitHandler = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === "" || password === ""){
           MySwal.fire('los campos no pueden estar vacíos');
            return;
        }
        if(email !== "" && !regexEmail.test(email)){
            MySwal.fire('Debes ingresar un email válido')
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            MySwal.fire('Credenciales inválidas');
            return
        }
        console.log('listos para enviar la información')
        axios
            .post('http://challenge-react.alkemy.org', {email, password})
            .then(res => {
                MySwal.fire('Estás dentro');
                const tokenRecibido = res.data.token;
                localStorage.setItem('token', tokenRecibido);
                navegar("/listado", { replace: true })
                ;
            }
            )
    }
    let token = localStorage.getItem('token')
    if(token){
    return (<Navigate replace to={"/listado"} /> ) 
    }else{
        return(  
        <section className='login-com'>
        <h1>
            Formulario de Login
        </h1>
        <form onSubmit={submitHandler}>
            <label>
            Email:<br/>
            <input type="text" name="email" /> 
            </label><br/>
            <label>
                Contraseña:<br/>
            <input type="password" name="password" /> 
            </label><br/>
            <button type="submit"> Ingresar</button>
        </form>
        </section>)
    }
}

export default Login;