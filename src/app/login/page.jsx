"use client"

import Link from "next/link";
import { useState } from "react"

export default function Login(){

  const [usuario, setUsuario] = useState({
    login: '',
    senha: '',
    id:''
})

const handleChange = e=>{
    setUsuario({...usuario, [e.target.name]:e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/Sprint4/api/cliente/login?login=${usuario.login}&senha=${usuario.senha}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.error('Login falhou.');
            throw new Error('Login falhou.');
        }
    })
    .then(data => {
        console.log('Dados do cliente:', data.IdCliente);
        setUsuario(user => ({
            ...usuario,
            id: data.IdCliente
        }));
        window.location = `/paginaprincipal/${data.IdCliente}`;
    }).catch(error => console.error(error));
};


    return(
        
        <div className='Login'>
            
            <div className='LoginContainer'>
                
                <div className='LoginCampo1'>
                    <div className='LoginTexto'>
                        <h1>Bem-vindo</h1>
                        <h2>De volta</h2>
                    </div>
                </div>
                <div className='LoginCampo2'>
                    <form action="#">   
                        <div className='LoginTitulo'>
                            <h1>LOGIN</h1>
                        </div>
                        <div className="form-input-login">

                            <div className="input-box-login">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
                            </div>

                            <div className="input-box-login">
                                <label htmlFor="Senha">Senha</label>
                                <input id="senha" type="password" name="senha" placeholder="Digite sua senha" required/>
                            </div>

                        </div>
                            
                    </form>
                    <div>
                        <Link href= '/paginaprincipal' className ='botao-Login'>Login</Link>
                    </div>

                    <div className='TextoBaixo'>
                        <p>Ainda não possui uma conta?</p> 
                        <Link href='/criarconta'>Criar conta</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}