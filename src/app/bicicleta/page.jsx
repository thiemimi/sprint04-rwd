import Link from "next/link";

export default function Bicicleta(){

    return(
        <main className='Bicicleta'>
            <div className="FormBicicleta">
                <form action="#">   
                    <div className='TituloBicicleta'>
                        <h1>Cadastro da Bicicleta</h1>
                    </div>
                    <div className="form-input-bicicleta">

                        <div className="input-box-bicicleta">
                            <label htmlFor="marca">Marca da bicicleta</label>
                            <input id="marca" type="text" name="marca" placeholder="Digite a marca da bicicleta" required/>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="modelo">Modelo da bicicleta</label>
                            <input id="modelo" type="text" name="modelo" placeholder="Digite o modelo da bicicleta" required/>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="nserie">Número de serie</label>
                            <input id="nserie" type="text" name="nserie" placeholder="Digite o número de série"/>
                        </div>

                        <div className="input-box-bicicleta">
                            <label for="ano">Ano de fabricação</label>
                            <select name="ano" class="ano">
                                <option value="">Escolha o ano de fabricação</option>
                                <option value="">2023</option>
                                <option value="">2022</option>
                                <option value="">2021</option>
                                <option value="">2020</option>
                                <option value="">2019</option>
                                <option value="">2018</option>
                                <option value="">2017</option>
                                <option value="">2016</option>
                                <option value="">2015</option>
                                <option value="">2014</option>
                                <option value="">2013</option>
                                <option value="">2012</option>
                                <option value="">2011</option>
                                <option value="">2010</option>
                                <option value="">2009</option>
                                <option value="">2008</option>
                                <option value="">2007</option>
                                <option value="">2006</option>
                                <option value="">2005</option>
                                <option value="">2004</option>
                                <option value="">2003</option>
                                <option value="">2002</option>
                                <option value="">2001</option>
                                <option value="">2000</option>
                            </select>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="foto">Envie fotos da bicicleta aqui</label>
                            <input id="foto" type="file" name="foto" placeholder="Envie fotos da bicicleta aqui" required/>
                        </div>

                        <div className="input-box-bicicleta">
                            <label htmlFor="dados">Dados extras</label>
                            <input id="dados" type="obs" name="dados"/>
                        </div>

                    </div>
                            
                </form>
                
            </div>
            <div className="BotoesBi">
                
                    <Link href= '/instrucoes' className='botao-Instrucoes'>Voltar</Link>
                
                    <Link href= '/aprovado' className='botao-Finalizar'>Finalizar cadastro</Link>
                
            </div>
        </main>
    )
}