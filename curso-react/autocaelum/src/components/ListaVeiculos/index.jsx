import React from 'react'
/* components */
import Veiculo from '../Veiculo';
/* assets */
import '../../assets/css/veiculos.css';

export default function ListaVeiculos({ qtd }) {
    const lista = [];

    for ( let i = 1; i <= qtd; i++ ){
        lista.push(
            <Veiculo key={i}/>
            //toda lista de componentes precisa possuir um key para cada item
        )
    }

    return (
        <ul className="flex">
            { lista }
        </ul>
    )
}
