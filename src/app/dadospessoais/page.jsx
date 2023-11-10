import Link from "next/link";

export default function DadosPessoais(){

    return(
        <main className="DadosPessoais">
            
            <div className='ContainerDadosPessoais'>
            <Link href= '/paginaprincipal' className ='botaoVoltar'>Voltar</Link>
                <h1>DADOS PESSOAIS</h1>
                <div className="input-box-DadosPessoais">
                    <p>Nome</p>
                    <label htmlFor="Nome">Nome</label>
                </div>

                <div className="input-box-DadosPessoais">
                    <p>Email</p>
                    <label htmlFor="Email">Email</label> 
                </div>

                <div className="input-box-DadosPessoais">
                    <p>Senha</p>
                    <label htmlFor="Senha">Senha</label>
                </div>

                <div className="input-box-DadosPessoais">
                    <p>Telefone</p>
                    <label htmlFor="Telefone">Telefone</label>
                </div>

                <div className="input-box-DadosPessoais">
                    <p>CPF</p>
                    <label htmlFor="CPF">CPF</label>
                </div>

                <div className="input-box-DadosPessoais">
                    <p>Enredeço</p>
                    <label htmlFor="Endereço">Endereço</label>
                </div>

                <div className="input-box-DadosPessoais">
                    <p>Data de nascimento</p>
                    <label htmlFor="Data de nascimento">Data de nascimento</label>
                    
                </div>
            </div>
        </main>
    )

}