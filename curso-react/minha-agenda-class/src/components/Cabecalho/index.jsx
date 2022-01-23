import React, { Component } from 'react';

export default class Cabecalho extends Component {
    render () {
        return (
            <div className="jumbotron">
                <h1 className="display-4">{ this.props.titulo }</h1>
                <p className="lead">{ this.props.descricao }</p>
            </div>
        );
    }
}

/*
    PROPS = recebe o conteúdo enviado via novos atributos do lado de fora
*/

Cabecalho.defaultProps = {
    /* informações inseridas quando nada for informado */
    titulo: 'Sem título',
    descricao: 'Sem descrição'
}

/*
class Cabecalho extends Component {
    render () {
        return (
            <div class="jumbotron">
                <h1 class="display-4">Minha Agenda</h1>
                <p class="lead">
                    Confira abaixo sua lista de contatos cadastrados.
                </p>
            </div>
        );
    }
} export default Cabecalho;
*/