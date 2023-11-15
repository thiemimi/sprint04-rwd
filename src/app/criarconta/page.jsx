"use client"

import Link from "next/link"
import { useState, useRef } from "react"



export default function criarConta() {

    const numeroRef = useRef(null);

    const [usuario, setUsuario] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        genero: '',
        dtaNasc: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        telefone: '',
        email: '',
        login: '',
        senha: '',

    });



    const handleChange = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const buscarCep = (e) => {
        const cep = e.target.value;
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then((resp) => resp.json())
            .then((data) => {
                setUsuario({
                    ...usuario,
                    cep: cep,
                    logradouro: data.logradouro,
                    numero: "",
                    complemento: "",
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf
                })
                numeroRef.current.focus();
            })
            .catch((error) => {
                console.error("Erro ao buscar CEP:", error);
            });

    }


    const handleSubmit = e => {
        e.preventDefault();
    
        fetch(`http://localhost:8080/Sprint4/api/cliente/criarconta`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        .then(window.location = '/login')
        .catch(error => console.error(error))  
    }
    

    return (
        <div className="Cadastrar">

            <div className="CadastrarContainer">
                <div className='CadastrarCampo1'>
                    <div className='CadastrarTexto'>
                        <h1>Seja</h1>
                        <h2>Bem-vindo</h2>
                    </div>
                </div>
                <div className='CadastrarCampo2'>
                    <form onSubmit={handleSubmit}>
                        <div className='CadastrarTitulo'>
                            <h1>CRIAR CONTA</h1>
                        </div>
                        <div className="form-input-cadastrar">
                            <div className="input-box-cadastrar">   
                                <input type="text" name='nome' value={usuario.nome}
                                placeholder="Nome" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='sobrenome' value={usuario.sobrenome}
                                placeholder="Sobrenome" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='cpf' value={usuario.cpf}
                                placeholder="CPF" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='genero' value={usuario.genero}
                                placeholder="Genero" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="date" name='dtaNasc' value={usuario.dtaNasc}
                                placeholder="Data de Nascimento" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='cep' value={usuario.cep}
                                placeholder="CEP" onChange={handleChange} onBlur={buscarCep} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='logradouro' value={usuario.logradouro}
                                placeholder="Logradouro" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input ref={numeroRef} type="text" name='numero' value={usuario.numero}
                                placeholder="Numero" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='complemento' value={usuario.complemento}
                                placeholder="Complemento" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='bairro' value={usuario.bairro}
                                placeholder="Bairro" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='cidade' value={usuario.cidade}
                                placeholder="Cidade" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='estado' value={usuario.estado}
                                placeholder="Estado" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='telefone' value={usuario.telefone}
                                placeholder="Telefone" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='email' value={usuario.email}
                                placeholder="Email" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='login' value={usuario.login}
                                placeholder="Login" onChange={handleChange} /> <br />
                            </div>
                            <div className="input-box-cadastrar"> 
                                <input type="text" name='senha' value={usuario.senha}
                                placeholder="Senha" onChange={handleChange} /> <br />
                            </div>
                            <Link href={'/'}  className='botao-Cancelar'>Cancelar</Link>
                            <button type="submit"  className='botao-Cadastrar'>Criar conta</button>
                        </div>
                    </form>
                
                    <div className='TextoBaixo'>
                        <p>Já possui uma conta?</p> 
                        <Link href='/login'>Faça login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}