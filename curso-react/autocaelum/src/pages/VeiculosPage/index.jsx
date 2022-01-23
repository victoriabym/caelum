import React from 'react';
import { Helmet } from 'react-helmet-async';
/* components */
import MasterLayout from '../../components/MasterLayout';
import ListaVeiculos from '../../components/ListaVeiculos';

export default function VeiculosPage() {
    return (
        <>
            <Helmet><title>Escolha seu Veículo | AutoCaelum</title></Helmet>
            <MasterLayout>
                <main className="container lista-veiculos">
                    <h1 className="cabecalho-pagina">Veículos</h1>
                    <ListaVeiculos qtd="12"/>
                </main>
            </MasterLayout>
        </>
    )
}
