const url = 'https://v3.football.api-sports.io';

const options = {
  method: 'GET',
  headers: {
  "x-rapidapi-host": "v3.football.api-sports.io",
	"x-rapidapi-key": "1abdb0ebf3673c3fbc22f0000eb4f35b"
  }
}

async function montaTabela() {
  const endpoint = '/standings'
  const params = {
    league: 72,
    season: 2024
  }
  const searchParams = new URLSearchParams(params)

    try {
        const res = await fetch(url + endpoint + '?' + searchParams, options);
        const data = await res.json();

        const bolinhas = [
            data.response[0].league.standings[0][0].form,
            data.response[0].league.standings[0][1].form,
            data.response[0].league.standings[0][2].form,
            data.response[0].league.standings[0][3].form,
            data.response[0].league.standings[0][4].form
        ];

        const pontos = [
            data.response[0].league.standings[0][0].points,
            data.response[0].league.standings[0][1].points,
            data.response[0].league.standings[0][2].points,
            data.response[0].league.standings[0][3].points,
            data.response[0].league.standings[0][4].points
        ]

        organizaBolinhas(bolinhas)
        organizaPontos(pontos)

        console.log(data.response[0].league.standings[0][8])
        
    } catch (error) {
        console.log(error);
    }
}

function invertePalavra(palavra) {
    const palavraInvertida = palavra.split('').reverse();
    return palavraInvertida;
}

function organizaBolinhas(bolinhas) {
    const resultadosInvertidos = bolinhas.map(result => invertePalavra(result));

    for (let t = 0; t < 5; t++) {
        const circleContainer = document.getElementById('time-' + t);
        if (circleContainer) { // Verifica se o elemento existe
            const circles = circleContainer.querySelectorAll('.circle');

            for (let b = 0; b < 5; b++) {
                const circle = circles[b];
                if (circle) { // Verifica se o círculo existe
                    if (resultadosInvertidos[t][b] === 'W') {
                        circle.classList.add('circle-green');
                    } else if (resultadosInvertidos[t][b] === 'L') {
                        circle.classList.add('circle-red');
                    } else {
                        circle.classList.add('circle-gray');
                    }
                }
            }
        }
    }
}

function organizaPontos(pontos) {
    for (let t = 1; t < 6; t++) {
        const posicaoContainer = document.getElementById('posicao-'+t);
        const pontosTd = posicaoContainer.querySelector('td[data-pontos]');
        pontosTd.textContent = pontos[t-1];
    }
}

montaTabela();