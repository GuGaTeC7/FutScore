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

  // Adiciona as ligas como opções no select
  leagues.forEach((league) => {
    const option = document.createElement("option");
    option.value = league.league.id; // Use o ID da liga
    option.textContent = league.league.name; // Nome da liga
    selectElement.appendChild(option);
  });
}

// Função para lidar com a entrada do usuário
function handleSearchInput() {
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
}

// Chama a função quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", handleSearchInput);

async function montaEstatisticas() {
  const endpoint = "/players/topscorers";

  const params = {
    league: 71,
    season: 2024,
  };

  const searchParams = new URLSearchParams(params);

  try {
    const res = await fetch(url + endpoint + "?" + searchParams, options);
    const data = await res.json();

    console.log("Resposta da API:");
    console.log(data.response);

    //foto:

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

montaEstatisticas();
