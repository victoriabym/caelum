import { TWITTELUM_API, getAuthToken } from "../utils";

export default class TweetService {
    /*
        Adiciona um tweet para o usuário atual
        @param {string} conteudo
        return {Promise<object>}
    */

    static async addTweet(conteudo) {
        const url = TWITTELUM_API + '/tweets?X-AUTH-TOKEN=' + getAuthToken();
        const resposta = await fetch( url,  {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({conteudo})
        });

        if(!resposta.ok) {
            throw new Error('Erro ao salvar seu tweet. Tente novamente!');
        }
        const TweetServidor = await resposta.json();
        return TweetServidor;
    }

    static async getTweets() {
        const url = TWITTELUM_API + '/tweets?X-AUTH-TOKEN=' + getAuthToken();
        const resposta = await fetch(url);

        if(!resposta.ok) {
            throw new Error('Erro ao retornar a lista de tweets do servidor!');
        }

        const tweets = await resposta.json();
        return tweets;
    }

    
    static async likeTweet(id) {
        const url = TWITTELUM_API + '/tweets/' + id + '/like?X-AUTH-TOKEN=' + getAuthToken();
        const resposta = await fetch(url, {
            method: 'POST'
        });

        const dadosServidor = await resposta.json();
        if (!resposta.ok) {
            throw new Error(dadosServidor.message);
        }

        console.log('Tweet Like: ', dadosServidor);
    }

    static async deleteTweet(id) {
        const url = TWITTELUM_API + '/tweets/' + id + '?X-AUTH-TOKEN=' + getAuthToken();
        const resposta = await fetch(url, {
            method: 'DELETE'
        });

        const dadosServidor = await resposta.json();
        if (!resposta.ok) {
            throw new Error(dadosServidor.message);
        }

        console.log('Tweet deleted: ', dadosServidor);
    }
}