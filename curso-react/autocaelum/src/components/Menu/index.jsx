import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu({ children }) {
    return (
        <>
            <nav id="menu">
                <button className="btn-mobile">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="container flex">
                    <ul className="menu-principal">
                        <li><NavLink to="/" exact><i className="fas fa-home"></i> Home</NavLink></li>
                        <li><NavLink to="/sobre">Sobre a Empresa</NavLink></li>
                        <li><NavLink to="/veiculos">Veículos</NavLink></li>
                        <li><NavLink to="/contato">Fale conosco</NavLink></li>
                    </ul>

                    { children }
                </div>
            </nav>
        </>
    )
}
