const options = {
  method: 'GET',
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
	"x-rapidapi-key": "1abdb0ebf3673c3fbc22f0000eb4f35b"
  }
}

async function request() {
  const endpoint = '/standings'
  const params = {
    league: 71,
    season: 2024
  }
  const searchParams = new URLSearchParams(params)

    try {
        const res = await fetch(url + endpoint + '?' + searchParams, options);
        const data = await res.json();

        // Erro de resposta HTTP
        if (!res.ok) {
            if (res.status === 404) {
            throw new Error('Recurso não encontrado (404).');
            } else if (res.status === 500) {
            throw new Error('Erro interno do servidor (500).');
            } else {
            throw new Error(`Erro HTTP! status: ${res.status}`);
            }
        }

        console.log(data.response[0])

        
    } catch (error) {
        // Erro de rede ou de resposta
        if (error.message.includes('NetworkError')) {
            console.error('Erro de rede. Verifique sua conexão.');
          } else {
            console.error('Erro ao buscar dados da API:', error.message);
          }
          return null;
        }
}

request()