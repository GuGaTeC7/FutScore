// Função para mockar os jogos ao vivo
function mockData() {
  return [
    {
      fixture: {
        id: 1234445,
        referee: "S. Toro",
        timezone: "UTC",
        date: "2024-10-17T21:00:00+00:00",
        timestamp: 1729198800,
        periods: {
          first: 1729198800,
          second: null,
        },
        venue: {
          id: null,
          name: "Estadio Romelio Martínez",
          city: "Barranquilla",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 21,
          extra: null,
        },
      },
      league: {
        id: 240,
        name: "Primera B",
        country: "Colombia",
        logo: "https://media.api-sports.io/football/leagues/240.png",
        flag: "https://media.api-sports.io/flags/co.svg",
        season: 2024,
        round: "Clausura - 15",
      },
      teams: {
        home: {
          id: 1466,
          name: "Barranquilla",
          logo: "https://media.api-sports.io/football/teams/1466.png",
          winner: false,
        },
        away: {
          id: 1458,
          name: "Bogota FC",
          logo: "https://media.api-sports.io/football/teams/1458.png",
          winner: true,
        },
      },
      goals: {
        home: 1,
        away: 2,
      },
      score: {
        halftime: {
          home: 1,
          away: 2,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 5,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: "M. Bacca",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 12,
            extra: null,
          },
          team: {
            id: 1458,
            name: "Bogota FC",
            logo: "https://media.api-sports.io/football/teams/1458.png",
          },
          player: {
            id: null,
            name: "M. Medina",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1458,
            name: "Bogotá FC",
            logo: "https://media.api-sports.io/football/teams/1458.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Red Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 19,
            extra: null,
          },
          team: {
            id: 1458,
            name: "Bogota FC",
            logo: "https://media.api-sports.io/football/teams/1458.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
  ];
}

// Função para buscar os jogos ao vivo (modificada para usar mockData)
async function montaGridAoVivo() {
  const endpoint = "/fixtures"; // Endpoint da API
  const params = {
    live: "all", // Parâmetro para buscar todos os jogos ao vivo
  };

  const searchParams = new URLSearchParams(params);

  try {
    // Dados mockados para testes
    // const data = { response: mockData() };

    const res = await fetch(url + endpoint + "?" + searchParams, options); // Faz a requisição à API
    const data = await res.json();
    console.log(data.response);

    const liveMatches = data.response.slice(0, 20); // Pegue as 3 primeiras partidas mockadas

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
  matches.forEach((match, index) => {
    const matchElement = document.createElement("div");
    matchElement.classList.add("match-ao-vivo");

    // Trata o tempo do jogo
    var tempo = match.fixture.status.short;

    if (tempo === "1H") {
      tempo = "1º";
    } else if (tempo === "2H") {
      tempo = "2º";
    }
    console.log("Esse é o tempo: " + tempo);

    // IDs dinâmicos para os cartões
    const cartaoAmareloHomeId = `cartaoAmareloHome-${index}`;
    const cartaoVermelhoHomeId = `cartaoVermelhoHome-${index}`;
    const cartaoAmareloAwayId = `cartaoAmareloAway-${index}`;
    const cartaoVermelhoAwayId = `cartaoVermelhoAway-${index}`;

    // Inicializa contadores de cartões
    let countCartoesAmarelosHome = 0;
    let countCartoesVermelhosHome = 0;
    let countCartoesAmarelosAway = 0;
    let countCartoesVermelhosAway = 0;

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
          <span class="cartao cartao-amarelo" id="${cartaoAmareloHomeId}">${countCartoesAmarelosHome}</span>
          <span class="cartao cartao-vermelho" id="${cartaoVermelhoHomeId}">${countCartoesVermelhosHome}</span>
          <img class="subs" src="assets/sub.png">
          <span class="team-score">${match.goals.home}</span>
        </div>
      </div>                   
      <div class="resultado-partida">
        <div class="team">
          <img src="${match.teams.away.logo}" alt="${match.teams.away.name}" class="team-logo">
          <span class="team-name">${match.teams.away.name}</span>
        </div>
        <div class="eventos-jogo">
          <span class="cartao cartao-amarelo" id="${cartaoAmareloAwayId}">${countCartoesAmarelosAway}</span>
          <span class="cartao cartao-vermelho" id="${cartaoVermelhoAwayId}">${countCartoesVermelhosAway}</span>
          <img class="subs" src="assets/sub.png">
          <span class="team-score">${match.goals.away}</span>
        </div>
      </div>

      <hr>
    `;

    // Adiciona o jogo ao container
    liveMatchesContainer.appendChild(matchElement);

    // ID times
    const idTimeHome = match.teams.home.id;
    const idTimeAway = match.teams.away.id;

    // Exibe a cor do cartão se houver eventos de cartão
    const cartaoAmareloHome = document.getElementById(cartaoAmareloHomeId);
    const cartaoVermelhoHome = document.getElementById(cartaoVermelhoHomeId);
    const cartaoAmareloAway = document.getElementById(cartaoAmareloAwayId);
    const cartaoVermelhoAway = document.getElementById(cartaoVermelhoAwayId);

    match.events.forEach((event) => {
      // Verifica se o tipo do evento é "Card"
      if (event.type === "Card") {
        switch (event.detail) {
          case "Yellow Card":
            if (event.team.id == idTimeHome) {
              countCartoesAmarelosHome++;
              cartaoAmareloHome.textContent = countCartoesAmarelosHome;
              cartaoAmareloHome.style.display = "flex"; // Garantir que o cartão seja exibido
            } else if (event.team.id == idTimeAway) {
              countCartoesAmarelosAway++;
              cartaoAmareloAway.textContent = countCartoesAmarelosAway;
              cartaoAmareloAway.style.display = "flex";
            }
            break;

          case "Red Card":
            if (event.team.id == idTimeHome) {
              countCartoesVermelhosHome++;
              cartaoVermelhoHome.textContent = countCartoesVermelhosHome;
              cartaoVermelhoHome.style.display = "flex";
            } else if (event.team.id == idTimeAway) {
              countCartoesVermelhosAway++;
              cartaoVermelhoAway.textContent = countCartoesVermelhosAway;
              cartaoVermelhoAway.style.display = "flex";
            }
            break;

          default:
            break; // Caso para ignorar eventos não relacionados
        }
      }
    });
  });
}

// Chama a função para mockar e exibir os jogos ao vivo ao carregar a página
montaGridAoVivo();
