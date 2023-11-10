import Link from "next/link";

export default function Login(){

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
                        <p>Ainda não possui conta?</p> 
                        <Link href='/criarconta'>Criar conta</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}