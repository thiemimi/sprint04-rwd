import Link from "next/link";

export default function CriarConta(){

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