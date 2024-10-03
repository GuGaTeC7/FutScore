// Estatísticas
// Função para buscar campeonatos
async function fetchLeagues(query) {
  const url = `https://v3.football.api-sports.io/leagues?search=${query}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Erro ao buscar ligas");
    }

    const data = await response.json();
    console.log(data.response); // Retorna os campeonatos encontrados
    return data.response; // Retorna os campeonatos encontrados
  } catch (error) {
    console.error(error);
    return [];
  }
}

function exibeTodos(leagues) {
  leagues.forEach((league) => {
    const option = document.createElement("option");
    option.value = league.league.id; // Use o ID da liga
    option.textContent = league.league.name; // Nome da liga
    selectElement.appendChild(option);
  });
}

// Função para preencher o select com os resultados
function populateLeagues(leagues) {
  const selectElement = document.getElementById("campeonatos");
  selectElement.style.display = "block";
  //selectElement.innerHTML = ''; // Limpa as opções anteriores

  // Cria a opção fixa "SELECIONE UM CAMPEONATO"
  const optionFixed = document.createElement("option");
  optionFixed.innerText = "SELECIONE UM CAMPEONATO";
  optionFixed.value = ""; // Define o valor como vazio para forçar a seleção de uma liga válida
  optionFixed.disabled = true; // Impede que essa opção seja selecionada depois
  optionFixed.selected = true; // Define como a opção selecionada por padrão
  selectElement.appendChild(optionFixed); // Adiciona a opção ao select

  // Adiciona as ligas como opções no select
  leagues.forEach((league) => {
    const option = document.createElement("option");
    option.value = league.league.id; // ID da liga
    option.textContent = league.league.name; // Nome da liga
    selectElement.appendChild(option);
  });
}

// Função para lidar com a entrada do usuário
function handleSearchInput() {
  const selectElement = document.getElementById("campeonatos");
  const searchInput = document.getElementById("search-input");

  // Captura o evento de digitação no campo de busca
  searchInput.addEventListener("input", async function () {
    const query = this.value;
    if (query.length > 2) {
      // Evita buscar com strings curtas
      const leagues = await fetchLeagues(query);
      populateLeagues(leagues); // Preenche o select com as ligas encontradas
    } else {
      document.getElementById("campeonatos").innerHTML = ""; // Limpa o select se a busca for curta
    }
  });

  // Adiciona o event listener para capturar a opção selecionada
  selectElement.addEventListener("change", function () {
    const selectedLeagueId = this.value; // Captura o valor (ID) da liga selecionada
    console.log("id liga selecionada: " + selectedLeagueId);
    montaEstatisticas(selectedLeagueId);
  });

  // Dispara manualmente o evento 'change' se a primeira opção já estiver selecionada
  const event = new Event("change");
  selectElement.dispatchEvent(event);
}

// Chama a função quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", handleSearchInput);

// Função para montar as estatísticas
async function montaEstatisticas(liga) {
  const endpoint = "/players/topscorers";

  const params = {
    league: liga,
    season: 2024,
  };

  const searchParams = new URLSearchParams(params);

  try {
    const res = await fetch(url + endpoint + "?" + searchParams, options);
    const data = await res.json();

    const ratings = [
      data.response[0].statistics[0].games.rating,
      data.response[1].statistics[0].games.rating,
      data.response[2].statistics[0].games.rating,
      data.response[3].statistics[0].games.rating,
      data.response[4].statistics[0].games.rating,
    ];
    const imgs = [
      data.response[0].player.photo,
      data.response[1].player.photo,
      data.response[2].player.photo,
      data.response[3].player.photo,
      data.response[4].player.photo,
    ];
    const names = [
      data.response[0].player.name,
      data.response[1].player.name,
      data.response[2].player.name,
      data.response[3].player.name,
      data.response[4].player.name,
    ];
    const dados = {
      jogos: data.response[0].statistics[0].games.appearences,
      gols: data.response[0].statistics[0].goals.total,
      assistencias: data.response[0].statistics[0].goals.assists,
      conversao: {
        totalChute: data.response[0].statistics[0].shots.total,
        gols: data.response[0].statistics[0].goals.total,
      },
      cartoes: data.response[0].statistics[0].cards.yellow,
      img: data.response[0].statistics[0].team.logo,
    };

    console.log("Resposta da API:");
    console.log(data.response);

    console.log(dados);
    exibeNomeLiga(data.response[0].statistics[0].league.name);
    exibeNome(names);
    exibeDadosPrimeiroJogador(dados);
    exibeImgJogador(imgs);
    exibeRating(ratings);

    document.getElementById("loadingClass").style.display = "block";

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

    //if (data) hideLoader(dataTabela);
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

function exibeRating(ratings) {
  ratings.forEach((rating, r) => {
    const campoRating = document.querySelector(`[data-nota='${r}']`);

    // Converte a string de rating para número, se necessário
    rating = Number(rating);

    // Verifica se o rating é um número válido
    if (!isNaN(rating)) {
      const formattedRating = rating.toFixed(2); // Formata com 2 casas decimais
      campoRating.innerText = formattedRating; // Insere o valor formatado no campo HTML
    } else {
      // Se o rating não for válido, exibe "N/A"
      campoRating.innerText = "N/A";
    }
  });
}

function exibeNome(names) {
  names.forEach((name, n) => {
    const campoName = document.querySelector(`[data-name='${n}']`);

    campoName.innerText = name;
  });
}

function exibeNomeLiga(nomeLiga) {
  const campoNomeLiga = document.getElementById("nomeLigaEstatisticas");
  campoNomeLiga.innerText = nomeLiga;
}

function exibeDadosPrimeiroJogador(dados) {
  const campoJogos = document.querySelector("#jogosTd");
  const campoGols = document.querySelector("#golsTd");
  const campoAssistencias = document.querySelector("#assistenciasTd");
  const campoConversao = document.querySelector("#conversaoTd");
  const campoCartoes = document.querySelector("#cartoesTd");
  const campoImgTime = document.querySelector("#logoTimeJogadorUm");

  const taxaConversao =
    (dados.conversao.gols / dados.conversao.totalChute) * 100;

  campoJogos.innerText = dados.jogos;
  campoGols.innerText = dados.gols;
  campoAssistencias.innerText = dados.assistencias;
  campoCartoes.innerText = dados.cartoes;
  campoConversao.innerText = taxaConversao.toFixed(0) + "%";
  campoCartoes.innerText = dados.cartoes;

  campoImgTime.src = dados.img;
}

function exibeImgJogador(imgs) {
  imgs.forEach((img, i) => {
    const campoImg = document.querySelector(`[data-img='${i}']`);

    campoImg.src = img;
  });
}

montaEstatisticas(307);
