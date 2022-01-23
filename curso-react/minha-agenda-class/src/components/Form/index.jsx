import React, { Component } from 'react';

class Form extends Component {
    state = {
        nome: '',
        telefone: ''
    }
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addContatoCallback( this.state.nome, this.state.telefone );
        // this.setState({nome:'', telefone:''});
    }

    render() {
        const msgNome = !this.state.nome && <span className="d-block text-danger mt-1">Nome é obrigatório!</span>;
        const msgTelefone = !this.state.telefone && <span className="d-block text-danger mt-1">Telefone é obrigatório!</span>;
        const isDisabled = !this.state.nome || !this.state.telefone;

        return (
            <div className="card mb-3 p-3 container">
                <form id="formCadastro" className="row" onSubmit={ this.handleFormSubmit }>
                    <div className="form-group col-md-5">
                        <label>Nome:</label>
                        <input value={ this.state.nome } onChange={ (e) => this.setState({ nome: e.target.value }) } type="text" id="inputNome" className="form-control" placeholder="Digite o nome do contato aqui..." />

                        { msgNome }
                    </div>
                    <div className="form-group col-md-5">
                        <label>Telefone:</label>
                        <input value={ this.state.telefone } onChange={ (e) => this.setState({ telefone: e.target.value }) } type="text" id="inputTelefone" className="form-control" placeholder="Digite o telefone aqui..." />
                        
                        { msgTelefone }
                    </div>
                    <div className="form-group col-md-2 mt-3 text-center">
                        <button id="btnSalvar" className="btn btn-primary btn-lg mt-2 w-100" type="submit" disabled={isDisabled}>Salvar</button>
                    </div>
                </form>
            </div>
        );
    }
} export default Form;