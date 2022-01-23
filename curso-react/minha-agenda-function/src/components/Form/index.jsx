import { useState } from "react";

export default function Form({ addContatoCallback }) {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addContatoCallback( nome, telefone );
        setNome('');
        setTelefone('');
    }

    
    const msgNome = !nome && <span className="d-block text-danger mt-1">Nome é obrigatório!</span>;
    const msgTelefone = !telefone && <span className="d-block text-danger mt-1">Telefone é obrigatório!</span>;
    const isDisabled = !nome || !telefone;

    return (
        <div className="card mb-3 p-3 container">
            <form id="formCadastro" className="row" onSubmit={ handleFormSubmit }>
                <div className="form-group col-md-5">
                    <label>Nome:</label>
                    <input value={ nome } onChange={ (e) => setNome( e.target.value ) } type="text" id="inputNome" className="form-control" placeholder="Digite o nome do contato aqui..." />

                    { msgNome }
                </div>
                <div className="form-group col-md-5">
                    <label>Telefone:</label>
                    <input value={ telefone } onChange={ (e) => setTelefone( e.target.value ) } type="text" id="inputTelefone" className="form-control" placeholder="Digite o telefone aqui..." />
                    
                    { msgTelefone }
                </div>
                <div className="form-group col-md-2 mt-3 text-center">
                    <button id="btnSalvar" className="btn btn-primary btn-lg mt-2 w-100" type="submit" disabled={isDisabled}>Salvar</button>
                </div>
            </form>
        </div>
    );
    
}