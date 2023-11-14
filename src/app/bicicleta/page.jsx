"use client"

import Link from "next/link"
import { useEffect, useState } from "react"


export default function Bicicleta({params}){

    const idCli = params.id == 0 ? '' : params.id


    const [bike, setBike] = useState({
        marca: '',
        modelo: '',
        numeroDeSerie: '',
        valorNota: '',
        valorAtual: '',
        tipoSeguro: '',
        id:''
    });

    const handleChange = e => {
        setBike({ ...bike, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch(`http://localhost:8080/Sprint4/api/bicicleta/cadastrar/${idCli}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(bike)
        })
        .then(data => {
            console.log('Dados do cliente:', data.idBike);
            setUsuario(b => ({
                ...bike,
                id: data.idBike
            }));
            window.location = `/vistoria/${data.idBike}`;
        })
        .catch(error => console.error(error))
    }

    return(
        <main className='Bicicleta'>
            <div className="FormBicicleta">
                <form onSubmit={handleSubmit}>   
                    <div className='TituloBicicleta'>
                        <h1>Cadastro da Bicicleta</h1>
                    </div>
                    <div className="form-input-bicicleta">

                        <div className="input-box-bicicleta">
                            <label htmlFor="marca">Marca da bicicleta</label>
                            <input id="marca" type="text" name="marca" placeholder="Digite a marca da bicicleta" onChange={handleChange}required/>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="modelo">Modelo da bicicleta</label>
                            <input id="modelo" type="text" name="modelo" placeholder="Digite o modelo da bicicleta" onChange={handleChange}required/>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="nserie">Número de serie</label>
                            <input id="nserie" type="text" name="nserie" placeholder="Digite o número de série"onChange={handleChange}required/>
                        </div>

                        <div className="input-box-bicicleta">
                            <label for="text">Tipo de Seguro</label>
                            <select name="tipoDeSeguro" onChange={handleChange}required>
                                <option value="">Escolha seu tipo de seguro</option>
                                <option value="">ESSENCIAL</option>
                                <option value="">LEVE</option>
                                <option value="">ELITE</option>
                            </select>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="valorNota">Valor da Nota Fiscal</label>
                            <input id="valorNota" type="number" name="valorNota" placeholder="Digite o valor da nota fiscal" onChange={handleChange}required/>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="valorAtual">Valor Atual</label>
                            <input id="valorAtual" type="number" name="valorAtual" placeholder="Digite o valor atual da bike" onChange={handleChange}required/>
                        </div>

                    </div>

                    <div className="BotoesBi">
                        <button onClick={handleSubmit}>Finalizar Cadastro</button>

                    </div>
                            
                </form>
                
            </div>
            <div className="BotoesBi">
                
                    <Link href= '/instrucoes' className='botao-Instrucoes'>Voltar</Link>
 
                
            </div>
        </main>
    )
}