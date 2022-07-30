import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import React from 'react';
import {useNavigate} from 'react-router-dom'

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
    return(
        <div>
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
        </div>
    )
}

export default Login;