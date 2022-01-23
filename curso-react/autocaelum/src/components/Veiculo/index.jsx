import React from 'react';
import { Link } from 'react-router-dom';

export default function Veiculo({image}) {
    return (
        <li>
            <img src={image} alt="Chevrolet Cruze"/>
            <h3>Chevrolet Cruze LT 2012 Flex (Aut.)</h3>
            <p>R$ 35.500,00</p>
            <Link to="/" className="lnk-destaque">Ver Detalhes</Link>
        </li>
    )
}

Veiculo.defaultProps = {
    image: 'https://via.placeholder.com/232x129',
}