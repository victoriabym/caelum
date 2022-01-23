// function Cabecalho(props) {
export default function Cabecalho({ titulo, descricao }) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{ titulo }</h1>
            <p className="lead">{ descricao }</p>
        </div>
    );
}

// Cabecalho.defaultProps = {
//     /* informações inseridas quando nada for informado */
//     titulo: 'Sem título',
//     descricao: 'Sem descrição'
// }