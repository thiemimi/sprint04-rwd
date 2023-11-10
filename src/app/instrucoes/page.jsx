import Link from "next/link";

export default function Instrucoes(){

    return(
        <div className="Instrucoes">
            <h1>Instruções para tirar  as fotos</h1>
            <p>Ao tirar fotos da sua bicicleta para o processo de vistoria do seguro, é importante seguir algumas instruções para garantir a clareza e qualidade das imagens. Aqui estão algumas dicas para capturar fotos adequadas:</p>
            <p>1. Certifique-se de que a bicicleta esteja em um local bem iluminado. A luz natural é a melhor opção, mas se estiver em um ambiente interno, certifique-se de ter uma boa iluminação.</p>
            <p>2. Mantenha a bicicleta em uma posição estável. Coloque-a em um suporte ou encoste-a em uma parede para evitar trepidações ou movimentos indesejados durante a captura das fotos.</p>
            <p>3. Limpe a bicicleta antes de tirar as fotos. Remova sujeira, poeira e qualquer coisa que possa obstruir a visualização dos detalhes.</p>
            <p>4. Fotografe a bicicleta de diferentes ângulos. Tire fotos da parte frontal, traseira, lateral e em um ângulo de 45 graus para capturar todos os aspectos importantes.</p>
            <p>5. Certifique-se de que a foto esteja nítida e em foco. Evite fotos tremidas ou desfocadas, pois isso pode dificultar a identificação de detalhes importantes.</p>
            <p>6. Destaque características relevantes. Tire fotos dos componentes, como o guidão, selim, pedais e rodas, além de possíveis danos, como arranhões ou amassados.</p>
            <p>7. Tire fotos das informações de identificação. Capture o número de série da bicicleta, que geralmente está localizado no quadro, próximo ao pedivela ou sob o tubo do selim.</p>
            <p>8. Se houver acessórios importantes, como um ciclocomputador ou bagageiro, fotografe-os separadamente para uma documentação mais completa.</p>
            <p>9. O prazo para tirar as fotos é de 5 dias.</p>
            
            <div className='BotoesBii'>
                <Link href= '/paginaprincipal' className='botaoinstrucoes'>Voltar</Link>
                <Link href= '/bicicleta' className='botaoinstrucoes'>Próximo</Link>
            </div>
        </div>
    )
}