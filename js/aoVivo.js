// Função para buscar os jogos ao vivo
async function montaGridAoVivo() {
  const endpoint = "/fixtures"; // Endpoint da API

  const params = {
    live: "all", // Parâmetro para buscar todos os jogos ao vivo
  };

  const searchParams = new URLSearchParams(params);

  try {
    const res = await fetch(url + endpoint + "?" + searchParams, options); // Faz a requisição à API
    const data = await res.json(); // Transforma a resposta em JSON

    const liveMatches = data.response.slice(0, 3); // Pegue as 5 primeiras partidas ao vivo

    // Chama a função para organizar e exibir as informações
    organizaInfos(liveMatches);
  } catch (error) {
    console.log("Erro ao buscar os jogos ao vivo:", error);
  }
}

// Função para organizar e exibir os dados no HTML
function organizaInfos(matches) {
  const liveMatchesContainer = document.getElementById("ao-vivo"); // Container onde os jogos serão exibidos

  // Limpa o conteúdo anterior (caso tenha atualizações)
  liveMatchesContainer.innerHTML = "";

  // Itera sobre os jogos ao vivo e cria o layout para cada jogo
  matches.forEach((match) => {
    const matchElement = document.createElement("div");
    matchElement.classList.add("match-ao-vivo");

    // Trata o tempo do jogo {
    var tempo = match.fixture.status.short;

    if (tempo === "1H") {
      tempo = "1º";
    } else if (tempo === "2H") {
      tempo = "2º";
    }
    console.log("esse é o tempo" + tempo);
    //  }

    matchElement.innerHTML = `
        <div class="infos">
          <h6 class="title-liga">${match.league.name}</h6>
          <span class="tempo">${tempo}
            <span class="minuto">${match.fixture.status.elapsed}'</span>
          </span>
        </div>
        <div class="resultado-partida">
          <div class="team">
            <img src="${match.teams.home.logo}" alt="${match.teams.home.name}" class="team-logo">
            <span class="team-name">${match.teams.home.name}</span>
          </div>
          <div class="eventos-jogo">
            <span class="team-score">${match.goals.home}</span>
          </div>
        </div>                   
        <div class="resultado-partida">
          <div class="team">
            <img src="${match.teams.away.logo}" alt="${match.teams.away.name}" class="team-logo">
            <span class="team-name">${match.teams.away.name}</span>
          </div>
          <div class="eventos-jogo">
            <span class="team-score">${match.goals.away}</span>
          </div>
        </div>

        <hr>
      `;

    // Adiciona o jogo ao container
    liveMatchesContainer.appendChild(matchElement);
  });
}

// Chama a função para buscar e exibir os jogos ao vivo ao carregar a página
montaGridAoVivo();
