const url = "https://v3.football.api-sports.io";

function hideLoader(dataTabela) {
  const tabela = document.querySelector(`div[data-tabela='${dataTabela}']`);
  const loadingElement = tabela.querySelector("#loading");
  loadingElement.style.display = "none";
}

async function montaTabela(liga, dataTabela) {
  const endpoint = "/standings";
  const endpointRodada = "/fixtures/rounds";

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

    if (data) hideLoader(dataTabela);

    const bolinhas = [
      data.response[0].league.standings[0][0].form,
      data.response[0].league.standings[0][1].form,
      data.response[0].league.standings[0][2].form,
      data.response[0].league.standings[0][3].form,
      data.response[0].league.standings[0][4].form,
      data.response[0].league.standings[0][5].form,
      data.response[0].league.standings[0][6].form,
      data.response[0].league.standings[0][7].form,
      data.response[0].league.standings[0][8].form,
      data.response[0].league.standings[0][9].form,
      data.response[0].league.standings[0][10].form,
      data.response[0].league.standings[0][11].form,
      data.response[0].league.standings[0][12].form,
      data.response[0].league.standings[0][13].form,
      data.response[0].league.standings[0][14].form,
      data.response[0].league.standings[0][15].form,
      data.response[0].league.standings[0][16].form,
      data.response[0].league.standings[0][17].form,
      data.response[0].league.standings[0][18].form,
      data.response[0].league.standings[0][19].form,
    ];

    const pontos = [
      data.response[0].league.standings[0][0].points,
      data.response[0].league.standings[0][1].points,
      data.response[0].league.standings[0][2].points,
      data.response[0].league.standings[0][3].points,
      data.response[0].league.standings[0][4].points,
      data.response[0].league.standings[0][5].points,
      data.response[0].league.standings[0][6].points,
      data.response[0].league.standings[0][7].points,
      data.response[0].league.standings[0][8].points,
      data.response[0].league.standings[0][9].points,
      data.response[0].league.standings[0][10].points,
      data.response[0].league.standings[0][11].points,
      data.response[0].league.standings[0][12].points,
      data.response[0].league.standings[0][13].points,
      data.response[0].league.standings[0][14].points,
      data.response[0].league.standings[0][15].points,
      data.response[0].league.standings[0][16].points,
      data.response[0].league.standings[0][17].points,
      data.response[0].league.standings[0][18].points,
      data.response[0].league.standings[0][19].points,
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
      [
        data.response[0].league.standings[0][5].team.name,
        data.response[0].league.standings[0][5].team.logo,
      ],
      [
        data.response[0].league.standings[0][6].team.name,
        data.response[0].league.standings[0][6].team.logo,
      ],
      [
        data.response[0].league.standings[0][7].team.name,
        data.response[0].league.standings[0][7].team.logo,
      ],
      [
        data.response[0].league.standings[0][8].team.name,
        data.response[0].league.standings[0][8].team.logo,
      ],
      [
        data.response[0].league.standings[0][9].team.name,
        data.response[0].league.standings[0][9].team.logo,
      ],
      [
        data.response[0].league.standings[0][10].team.name,
        data.response[0].league.standings[0][10].team.logo,
      ],
      [
        data.response[0].league.standings[0][11].team.name,
        data.response[0].league.standings[0][11].team.logo,
      ],
      [
        data.response[0].league.standings[0][12].team.name,
        data.response[0].league.standings[0][12].team.logo,
      ],
      [
        data.response[0].league.standings[0][13].team.name,
        data.response[0].league.standings[0][13].team.logo,
      ],
      [
        data.response[0].league.standings[0][14].team.name,
        data.response[0].league.standings[0][14].team.logo,
      ],
      [
        data.response[0].league.standings[0][15].team.name,
        data.response[0].league.standings[0][15].team.logo,
      ],
      [
        data.response[0].league.standings[0][16].team.name,
        data.response[0].league.standings[0][16].team.logo,
      ],
      [
        data.response[0].league.standings[0][17].team.name,
        data.response[0].league.standings[0][17].team.logo,
      ],
      [
        data.response[0].league.standings[0][18].team.name,
        data.response[0].league.standings[0][18].team.logo,
      ],
      [
        data.response[0].league.standings[0][19].team.name,
        data.response[0].league.standings[0][19].team.logo,
      ],
    ];

    const setas = [
      data.response[0].league.standings[0][0].status,
      data.response[0].league.standings[0][1].status,
      data.response[0].league.standings[0][2].status,
      data.response[0].league.standings[0][3].status,
      data.response[0].league.standings[0][4].status,
      data.response[0].league.standings[0][5].status,
      data.response[0].league.standings[0][6].status,
      data.response[0].league.standings[0][7].status,
      data.response[0].league.standings[0][8].status,
      data.response[0].league.standings[0][9].status,
      data.response[0].league.standings[0][10].status,
      data.response[0].league.standings[0][11].status,
      data.response[0].league.standings[0][12].status,
      data.response[0].league.standings[0][13].status,
      data.response[0].league.standings[0][14].status,
      data.response[0].league.standings[0][15].status,
      data.response[0].league.standings[0][16].status,
      data.response[0].league.standings[0][17].status,
      data.response[0].league.standings[0][18].status,
      data.response[0].league.standings[0][19].status,
    ];

    organizaBolinhas(bolinhas, dataTabela);
    organizaPontos(pontos, dataTabela);
    organizaTimes(times, dataTabela);
    organizaSetas(setas, dataTabela);
    exibeCampLogo(data.response[0].league.logo, dataTabela);
    // exibeNumeroRodada(dataRodada.response[0], dataTabela);
  } catch (error) {
    // Erro de rede ou de resposta
    if (error.message.includes("NetworkError")) {
      console.error("Erro de rede. Verifique sua conexão.");
    } else {
      console.error("Erro ao buscar dados da API:", error);
    }
    return null;
  }
}

function invertePalavra(palavra) {
  const palavraInvertida = palavra.split("").reverse();
  return palavraInvertida;
}

function organizaBolinhas(bolinhas, dataTabela) {
  const resultadosInvertidos = bolinhas.map((result) => invertePalavra(result));

  const tabela = document.querySelector(`div[data-tabela='${dataTabela}']`);

  // NUMERO EXATO ARRAY
  for (let t = 0; t < 20; t++) {
    const circleContainer = tabela.querySelector("#time-" + t);
    if (circleContainer) {
      // Verifica se o elemento existe
      const circles = circleContainer.querySelectorAll(".circle");

      for (let b = 0; b < 20; b++) {
        const circle = circles[b];
        if (circle) {
          // Verifica se o círculo existe
          if (resultadosInvertidos[t][b] === "W") {
            circle.classList.add("circle-green");
          } else if (resultadosInvertidos[t][b] === "L") {
            circle.classList.add("circle-red");
          } else if (resultadosInvertidos[t][b] === "D") {
            circle.classList.add("circle-gray");
          }
        }
      }
    }
  }
}

function organizaPontos(pontos, dataTabela) {
  const tabela = document.querySelector(`div[data-tabela='${dataTabela}']`);
  for (let t = 1; t < 21; t++) {
    const posicaoContainer = tabela.querySelector("#posicao-" + t);

    const pontosTd = posicaoContainer.querySelector("td[data-pontos]");
    pontosTd.textContent = pontos[t - 1];
  }
}

// NUMERO +1 DO ARRAY
function organizaSetas(setas, dataTabela) {
  const tabela = document.querySelector(`div[data-tabela='${dataTabela}']`);
  for (let t = 1; t < 21; t++) {
    const posicaoContainer = tabela.querySelector("#posicao-" + t);
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

// NUMERO +1 DO ARRAY
function organizaTimes(times, dataTabela) {
  const tabela = document.querySelector(`div[data-tabela='${dataTabela}']`);
  for (let t = 1; t < 21; t++) {
    const posicaoContainer = tabela.querySelector("#posicao-" + t);
    const timeTd = posicaoContainer.querySelector("td[data-time]");

    const logoImg = document.createElement("img");
    logoImg.src = times[t - 1][1];

    const nomeTime = times[t - 1][0];

    const nomeTimeNodeText = document.createTextNode(
      " " + nomeTime.slice(0, 3).toUpperCase()
    );

    timeTd.appendChild(logoImg);
    timeTd.appendChild(nomeTimeNodeText);
  }
}

function exibeCampLogo(img, dataTabela) {
  const tabela = document.querySelector(`div[data-tabela='${dataTabela}']`);

  const campLogo = tabela.querySelector(".camp-logo");

  if (campLogo) {
    const logoUrl = img;
    campLogo.src = logoUrl;
  }
}

function exibeNumeroRodada(frase, dataTabela) {
  const tabela = document.querySelector(`div[data-tabela='${dataTabela}']`);

  const numero = frase.split(" - ");

  const numeroRodada = tabela.querySelector("#rodadaNumber");
  const rodadaNumero = numero[1];
  numeroRodada.textContent = rodadaNumero;
}

document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.querySelector(".table tbody");
  const linhas = tabela.querySelectorAll("tr");
  const btnVerMais = document.getElementById("verMais");
  const btnVerMenos = document.getElementById("verMenos");

  // Oculta os times 6 a 20 no carregamento
  linhas.forEach((linha, index) => {
    if (index >= 5) linha.style.display = "none";
  });

  // Exibir tabela completa ao clicar em "Ver Mais"
  btnVerMais.addEventListener("click", () => {
    linhas.forEach((linha) => (linha.style.display = "table-row"));
    btnVerMais.style.display = "none";
    btnVerMenos.style.display = "block";
  });

  // Voltar a exibir apenas os 5 primeiros ao clicar em "Ver Menos"
  btnVerMenos.addEventListener("click", () => {
    linhas.forEach((linha, index) => {
      if (index >= 5) linha.style.display = "none";
    });
    btnVerMais.style.display = "block";
    btnVerMenos.style.display = "none";
  });

  // Inicia escondendo o botão "Ver Menos"
  btnVerMenos.style.display = "none";
});


// Lógica para montar as tabelas
document.getElementById("verMais").addEventListener("click", () => {
  // exibeTabela(true);
});
document
  .getElementById("verMenos")
  .addEventListener("click", () => exibeTabela(false));

const tabela2 = document.querySelector('div[data-tabela="2"]');
const tabela3 = document.querySelector('div[data-tabela="3"]');
const btnVerMais = document.querySelector("#verMais");
const btnVerMenos = document.querySelector("#verMenos");

let tabela2Montada = false;
let tabela3Montada = false;

function exibeTabela(show) {
  tabela2.style.display = show ? "block" : "none";
  tabela3.style.display = show ? "block" : "none";
  btnVerMais.style.display = show ? "none" : "block";
  btnVerMenos.style.display = show ? "block" : "none";

  // Volta para o topo da tabela
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  if (show) {
    if (!tabela2Montada) {
      montaTabela(61, 2);
      tabela2Montada = true;
    }
    if (!tabela3Montada) {
      montaTabela(140, 3);
      tabela3Montada = true;
    }
  }
}

montaTabela(2, 1);
