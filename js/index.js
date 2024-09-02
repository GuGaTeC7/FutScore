const url = "https://v3.football.api-sports.io";

async function montaTabela() {
  const endpoint = "/standings";
  const endpointRodada = "/fixtures/rounds";

  const liga = 71;

  const params = {
    league: liga,
    season: 2024,
  };
  const paramsRodada = {
    league: liga,
    season: 2024,
    current: true,
  };
  const searchParams = new URLSearchParams(params);
  const searchParamsRodada = new URLSearchParams(paramsRodada);

  try {
    const res = await fetch(url + endpoint + "?" + searchParams, options);
    const data = await res.json();

    const resRodada = await fetch(
      url + endpointRodada + "?" + searchParamsRodada,
      options
    );
    const dataRodada = await resRodada.json();

    // Erro de resposta HTTP
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Recurso não encontrado (404).");
      } else if (res.status === 500) {
        throw new Error("Erro interno do servidor (500).");
      } else {
        throw new Error(`Erro HTTP! status: ${res.status}`);
      }
    }

    if (!resRodada.ok) {
      if (resRodada.status === 404) {
        throw new Error("Recurso não encontrado (404).");
      } else if (resRodada.status === 500) {
        throw new Error("Erro interno do servidor (500).");
      } else {
        throw new Error(`Erro HTTP! status: ${resRodada.status}`);
      }
    }
    const bolinhas = [
      data.response[0].league.standings[0][0].form,
      data.response[0].league.standings[0][1].form,
      data.response[0].league.standings[0][2].form,
      data.response[0].league.standings[0][3].form,
      data.response[0].league.standings[0][4].form,
    ];

    const pontos = [
      data.response[0].league.standings[0][0].points,
      data.response[0].league.standings[0][1].points,
      data.response[0].league.standings[0][2].points,
      data.response[0].league.standings[0][3].points,
      data.response[0].league.standings[0][4].points,
    ];

    const times = [
      [
        data.response[0].league.standings[0][0].team.name,
        data.response[0].league.standings[0][0].team.logo,
      ],
      [
        data.response[0].league.standings[0][1].team.name,
        data.response[0].league.standings[0][1].team.logo,
      ],
      [
        data.response[0].league.standings[0][2].team.name,
        data.response[0].league.standings[0][2].team.logo,
      ],
      [
        data.response[0].league.standings[0][3].team.name,
        data.response[0].league.standings[0][3].team.logo,
      ],
      [
        data.response[0].league.standings[0][4].team.name,
        data.response[0].league.standings[0][4].team.logo,
      ],
    ];

    const setas = [
      data.response[0].league.standings[0][0].status,
      data.response[0].league.standings[0][1].status,
      data.response[0].league.standings[0][2].status,
      data.response[0].league.standings[0][3].status,
      data.response[0].league.standings[0][4].status,
    ];

    console.log("Resposta da API:");
    console.log(data);

    organizaBolinhas(bolinhas);
    organizaPontos(pontos);
    organizaTimes(times);
    organizaSetas(setas);
    exibeCampLogo(data.response[0].league.logo);
    exibeNumeroRodada(dataRodada.response[0]);
  } catch (error) {
    // Erro de rede ou de resposta
    if (error.message.includes("NetworkError")) {
      console.error("Erro de rede. Verifique sua conexão.");
    } else {
      console.error("Erro ao buscar dados da API:", error.message);
    }
    return null;
  }
}

function invertePalavra(palavra) {
  const palavraInvertida = palavra.split("").reverse();
  return palavraInvertida;
}

function organizaBolinhas(bolinhas) {
  const resultadosInvertidos = bolinhas.map((result) => invertePalavra(result));

  for (let t = 0; t < 5; t++) {
    const circleContainer = document.getElementById("time-" + t);
    if (circleContainer) {
      // Verifica se o elemento existe
      const circles = circleContainer.querySelectorAll(".circle");

      for (let b = 0; b < 5; b++) {
        const circle = circles[b];
        if (circle) {
          // Verifica se o círculo existe
          if (resultadosInvertidos[t][b] === "W") {
            circle.classList.add("circle-green");
          } else if (resultadosInvertidos[t][b] === "L") {
            circle.classList.add("circle-red");
          } else {
            circle.classList.add("circle-gray");
          }
        }
      }
    }
  }
}

function organizaPontos(pontos) {
  for (let t = 1; t < 6; t++) {
    const posicaoContainer = document.getElementById("posicao-" + t);
    const pontosTd = posicaoContainer.querySelector("td[data-pontos]");
    pontosTd.textContent = pontos[t - 1];
  }
}

function organizaSetas(setas) {
  for (let t = 1; t < 6; t++) {
    const posicaoContainer = document.getElementById("posicao-" + t);
    const setasTd = posicaoContainer.querySelector("td[data-seta]");
    const divSeta = setasTd.querySelector("div");

    if (setas[t - 1] == "up") {
      divSeta.className = "arrow up";
    } else if (setas[t - 1] == "down") {
      divSeta.className = "arrow down";
    } else {
      divSeta.className = "square";
    }
  }
}

function organizaTimes(times) {
  for (let t = 1; t < 6; t++) {
    const posicaoContainer = document.getElementById("posicao-" + t);
    console.log(posicaoContainer);
    const timeTd = posicaoContainer.querySelector("td[data-time]");
    console.log(timeTd);

    const logoImg = document.createElement("img");
    logoImg.src = times[t - 1][1];
    console.log(logoImg);

    const nomeTime = times[t - 1][0];

    console.log("Nome retornado do array: " + nomeTime);
    const nomeTimeNodeText = document.createTextNode(
      " " + nomeTime.slice(0, 3).toUpperCase()
    );
    console.log("Nome retornado do nó:");
    console.log(nomeTimeNodeText);

    timeTd.appendChild(logoImg);
    timeTd.appendChild(nomeTimeNodeText);
  }
}

function exibeCampLogo(img) {
  const campLogo = document.querySelector(".camp-logo");

  //console.log("Link recebido: " + img);

  if (campLogo) {
    const logoUrl = img;
    campLogo.src = logoUrl;
  }
}

function exibeNumeroRodada(frase) {
  const numero = frase.split(" - ");

  //console.log("Split aplicado: " + "[" + numero + "]");

  const numeroRodada = document.getElementById("rodadaNumber");
  numeroRodada.textContent = numero[1];
}

montaTabela();
