"use client"
import Link from "next/link";


export default function DadosPessoais({params}){

    const idCli = params.id == 0 ? '' : params.id

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

        fetch(`http://localhost:8080/Sprint4/api/cliente/${idCli}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(usuario)
        })
            .then(window.location = `/paginaprincipal/${data.IdCliente}`)
            .catch(error => console.error(error))
    }

    useEffect(()=>{
        if(idCli){
            fetch(`http://localhost:8080/Sprint4/api/cliente/${idCli}`)
            .then(resp => resp.json())
            .then(resp => setUsuario(resp))
            .catch(error => console.error(error))     
        }
    },[idCli])

    return(
        <main className="DadosPessoais">
            
            <div className='ContainerDadosPessoais'>
            <Link href= '/' className ='botaoVoltar'>Voltar</Link>
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