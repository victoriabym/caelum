import React from 'react';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
/* components */
import MasterLayout from '../../components/MasterLayout';
// import LoginServices from '../../services/LoginServices';
import useValidations from '../../hooks/useValidations';
import useFormValidator from '../../hooks/useFormValidator';
/* assets */
import '../../assets/css/fale-conosco.css';

export default function ContatoPage() {
    const inputNome = useRef();
    const inputEmail = useRef();
    const inputTelefone = useRef();
    const inputAssunto = useRef();
    const textareaMensagem = useRef();
    const formContact = useRef();
    
    const {isEmpty, isEmail, isTelefoneOuCelular} = useValidations();
    const { erros, isFormValid, validate } = useFormValidator({
        name: isEmpty('Login é obrigatório.'),
        email: isEmail('Email não é válido.'),
        tel: isTelefoneOuCelular('Telefone não é válido.', false),
        subject: isEmpty('Assunto é obrigatório.'),
        message: isEmpty('Mensagem é obrigatório.')
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let form = formContact.current
        let nome = inputNome.current.value.trim()
        let email = inputEmail.current.value.trim()
        let tel = inputTelefone.current.value.trim()
        let assunto = inputAssunto.current.value.trim()
        let mensagem = textareaMensagem.current.value.trim()
           
        if (!nome || !email || !tel || !assunto || !mensagem) {
            alert("Preencha todos os campos!");
        } else {
            alert("Enviado!");
            form.reset();
        }
    }

    return (
        <>
            <Helmet><title>Contato | AutoCaelum</title></Helmet>
            <MasterLayout>
                <main className="container fale-conosco">
                    <h1 className="cabecalho-pagina">Fale conosco</h1>
                    <p>Para entrar em contato conosco, preencha o formulário abaixo:</p>
                    <div className="flex">
                        <form ref={formContact} onSubmit={handleFormSubmit}>
                            <div className="campo">
                                <input type="text" name="name" ref={inputNome} onBlur={validate} placeholder="* Seu nome:" />
                                {erros.name && <span class="erro">{erros.name}</span>}
                            </div>
                            <div className="campo">
                                <input type="text" name="email" ref={inputEmail} onBlur={validate} placeholder="* Seu e-mail:" />
                                {erros.email && <span class="erro">{erros.email}</span>}
                            </div>
                            <div className="campo">
                                <input type="text" name="tel" ref={inputTelefone} onBlur={validate} placeholder="Seu telefone:" />
                                {erros.tel && <span class="erro">{erros.tel}</span>}
                            </div>
                            <div className="campo">
                                <input type="text" name="subject" ref={inputAssunto} onBlur={validate} placeholder="* Assunto da mensagem:" />
                                {erros.subject && <span class="erro">{erros.subject}</span>}
                            </div>
                            <div className="campo">
                                <textarea name="message" ref={textareaMensagem} onBlur={validate} placeholder="* Digite sua mensagem aqui..."></textarea>
                                {erros.message && <span class="erro">{erros.message}</span>}
                            </div>
                            <div className="campo">
                                <button className="btn lnk-destaque" disabled={!isFormValid}>Enviar</button>
                            </div>
                        </form>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.448598130898!2d-46.634653385383224!3d-23.588239368469686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum%20-%20Escola%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1624224472643!5m2!1spt-BR!2sbr" title="mapa" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </main>
            </MasterLayout>
        </>
    )
}
