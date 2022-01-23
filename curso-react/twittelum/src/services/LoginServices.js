import { TWITTELUM_API } from '../utils';

export default class LoginServices {
   
    static async autenticar(login, senha) {
        
        const dadosLogin = { login, senha };
        const resposta = await fetch(TWITTELUM_API + '/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(dadosLogin)
        });

        const dadosServidor = await resposta.json();

        // sem resposta do servidor
        if(!resposta.ok) {
            throw new Error(dadosServidor.message);
        }

        const token = dadosServidor.token;

        // não encontrou token
        if(!token) {
            throw new Error('TOKEN não encontrado!');
        }

        // localStorage.setItem('TOKEN', token)
        return token;
    }
}
