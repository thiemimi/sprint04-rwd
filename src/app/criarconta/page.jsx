"use client"

import Link from "next/link";
import { useState, useRef } from "react"

export default function CriarConta(){

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
    
    return(
        <div className='Cadastrar'>
            
            <div className='CadastrarContainer'>
                
                <div className='CadastrarCampo1'>
                    <div className='CadastrarTexto'>
                        <h1>Seja</h1>
                        <h2>Bem-vindo</h2>
                    </div>
                </div>
                <div className='CadastrarCampo2'>
                    <form action="#">   
                        <div className='CadastrarTitulo'>
                            <h1>CRIAR CONTA</h1>
                        </div>
                        <div className="form-input-cadastrar">

                            <div className="input-box-cadastrar">
                                <label htmlFor="name">Nome</label>
                                <input id="name" type="text" name="name" placeholder="Digite seu nome" required/>
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="cep">Cep</label>
                                <input id="cep" type="text" name="cep" placeholder="Digite seu CEP" required/>
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="cpf">CPF</label>
                                <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" required/>
                            </div>

                            <div className="input-box-cadastrar">
                                <label for="genero">Gênero</label>
                                <select name="genero" class="tamanho">
                                    <option value="">Escolha seu gênero</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                    <option value="NB">Não-binário</option>
                                    <option value="NR">Prefiro não dizer</option>
                                </select>
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" placeholder="Digite seu email" required/>
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" name="telefone" placeholder="Digite seu telefone" required/>
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="Senha">Senha</label>
                                <input id="senha" type="password" name="senha" placeholder="Digite sua senha" required/>
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="Senha">Confirme sua senha</label>
                                <input id="senha" type="password" name="senha" placeholder="Digite sua senha" required/>
                            </div>

                        </div>
                            
                    </form>
                    <div>
                        <Link href= '/paginaprincipal'  className='botao-Cadastrar'>Criar conta</Link>
                    </div>

                    <div className='TextoBaixo'>
                        <p>Já possui uma conta?</p> 
                        <Link href='/login'>Faça login</Link>
                    </div>
                </div>
            
            </div>
        </div>
    )
}