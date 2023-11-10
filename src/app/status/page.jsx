import Link from "next/link";

export default function Status(){

    return(
        <main>
            <div className="Status">
                <p>Para verificar o status da vistoria, é necessário acessar informações externas, como a aprovação ou não do seguro.</p>
                <Link  href= '/paginaprincipal'>Voltar</Link>
            </div>
        </main>
    )
}