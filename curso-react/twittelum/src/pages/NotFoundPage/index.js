import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import { Link } from 'react-router-dom'
import './NotFoundPage.css'
import { Helmet } from 'react-helmet-async'

export default function NotFoundPage( props ) {
    return (
        <>
            <Helmet>
                <title>404! | Tweetelum</title>
            </Helmet>
            <Cabecalho />
            <div className="container">
                <div Style="text-align: center; padding: 100px">
                    <h1 className="NFPage__title">Oops!</h1>
                    <h2>Página não encontrada!</h2>
                    <p>A URL <strong>{ props.location.pathname }</strong> não existe.</p>
                    <Link to="/" className="NFPage__btn">Voltar à página inicial</Link>
                </div>
            </div>
        </>
    )
}
