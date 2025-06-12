function hideLoaderEstatisticas() {
  const grid = document.querySelector("#estatisticas-camp");
  const loadingElement = grid.querySelector(".loading");
  loadingElement.style.display = "none";
}

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
    console.log(data);
    // console.log(data.response); // Retorna os campeonatos encontrados
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
    option.textContent = `${league.league.name} - ${league.country.name}`; // Nome da liga
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
    // console.log("id liga selecionada: " + selectedLeagueId);
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
    
    console.log('API Response:', data);
    console.log('First player data:', data.response[0]);
    console.log('First player statistics:', data.response[0].statistics[0]);

    // Mantém os dados dos 5 primeiros jogadores para a exibição inicial
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

    hideLoaderEstatisticas();
    exibeNomeLiga(data.response[0].statistics[0].league.name);
    exibeNome(names);
    exibeDadosPrimeiroJogador(dados);
    exibeImgJogador(imgs);
    exibeRating(ratings);

    // Adiciona os jogadores restantes (6-20)
    const loadingClass = document.getElementById("loadingClass");
    console.log('Adding remaining players...');
    data.response.slice(5).forEach((jogador, index) => {
      console.log('Processing player:', index + 6, jogador);
      console.log('Player rating:', jogador.statistics[0].games.rating);
      
      const jogadorHTML = `
        <div class="tabela-estatisticas" style="display: none;">
          <div class="posicao-estatisticas">
            <p>${index + 6}</p>
          </div>
          <div class="perfil-jogador-estatisticas">
            <img src="${jogador.player.photo}" class="img-jogador-estatisticas" alt="img jogador" />
            <p>${jogador.player.name}</p>
          </div>
          <div class="nota-tabela-estatisticas">
            <p>${Number(jogador.statistics[0].games.rating).toFixed(2)}</p>
          </div>
        </div>
      `;
      loadingClass.innerHTML += jogadorHTML;
    });

    document.getElementById("loadingClass").style.display = "block";

    // Configura os eventos dos botões
    const btnVerMais = document.getElementById('verMaisEstatisticas');
    const btnVerMenos = document.getElementById('verMenosEstatisticas');
    const artilheiros = document.querySelectorAll('.tabela-estatisticas');

    // Remove event listeners antigos para evitar duplicação
    btnVerMais.replaceWith(btnVerMais.cloneNode(true));
    btnVerMenos.replaceWith(btnVerMenos.cloneNode(true));

    // Adiciona os novos event listeners
    document.getElementById('verMaisEstatisticas').addEventListener('click', () => {
      artilheiros.forEach(artilheiro => {
        artilheiro.style.display = 'flex';
      });
      document.getElementById('verMaisEstatisticas').style.display = 'none';
      document.getElementById('verMenosEstatisticas').style.display = 'block';

      // Verifica o time selecionado e aplica a estilização aos elementos
      const selectedTeam = localStorage.getItem("selectedTeam");
      if (selectedTeam === 'Corinthians') {
        document.querySelectorAll('.posicao-estatisticas, .nota-tabela-estatisticas').forEach(element => {
          element.style.backgroundColor = 'rgb(186, 8, 37)';
          element.style.border = '2.5px solid rgb(186, 8, 37)';
        });
        document.querySelectorAll('.posicao-estatisticas').forEach(element => {
          element.style.backgroundColor = 'white';
          element.style.border = '2.5px solid white';
        });
        document.querySelectorAll('.posicao-estatisticas p').forEach(element => {
          element.style.color = 'black';
        });
        document.querySelectorAll('.img-jogador-estatisticas').forEach(element => {
          element.style.border = '2.5px solid rgb(186, 8, 37)';
        });
      } else if (selectedTeam === 'Palmeiras') {
        document.querySelectorAll('.posicao-estatisticas, .nota-tabela-estatisticas').forEach(element => {
          element.style.backgroundColor = '#5eb490';
          element.style.border = '2.5px solid #5eb490';
        });
        document.querySelectorAll('.posicao-estatisticas').forEach(element => {
          element.style.backgroundColor = 'white';
          element.style.border = '2.5px solid white';
        });
        document.querySelectorAll('.posicao-estatisticas p').forEach(element => {
          element.style.color = '#026336';
        });
        document.querySelectorAll('.img-jogador-estatisticas').forEach(element => {
          element.style.border = '2.5px solid #5eb490';
        });
      }

      // Explicitly set the initial color of the arrow icons after elements are in DOM
      if (selectedTeam === 'Corinthians' || selectedTeam === 'Palmeiras') {
        document.querySelectorAll('#verMais .fas, #verMenos .fas, #verMaisEstatisticas .fas, #verMenosEstatisticas .fas').forEach(icon => {
            icon.style.color = 'white';
        });
      }

    });

    document.getElementById('verMenosEstatisticas').addEventListener('click', () => {
      artilheiros.forEach((artilheiro, index) => {
        if (index >= 4) {
          artilheiro.style.display = 'none';
        }
      });
      document.getElementById('verMaisEstatisticas').style.display = 'block';
      document.getElementById('verMenosEstatisticas').style.display = 'none';

      // Verifica o time selecionado e aplica a estilização aos elementos
      const selectedTeam = localStorage.getItem("selectedTeam");
      if (selectedTeam === 'Corinthians') {
        document.querySelectorAll('.posicao-estatisticas, .nota-tabela-estatisticas').forEach(element => {
          element.style.backgroundColor = 'rgb(186, 8, 37)';
          element.style.border = '2.5px solid rgb(186, 8, 37)';
        });
        document.querySelectorAll('.posicao-estatisticas').forEach(element => {
          element.style.backgroundColor = 'white';
          element.style.border = '2.5px solid white';
        });
        document.querySelectorAll('.posicao-estatisticas p').forEach(element => {
          element.style.color = 'black';
        });
        document.querySelectorAll('.img-jogador-estatisticas').forEach(element => {
          element.style.border = '2.5px solid rgb(186, 8, 37)';
        });
      } else if (selectedTeam === 'Palmeiras') {
        document.querySelectorAll('.posicao-estatisticas, .nota-tabela-estatisticas').forEach(element => {
          element.style.backgroundColor = '#5eb490';
          element.style.border = '2.5px solid #5eb490';
        });
        document.querySelectorAll('.posicao-estatisticas').forEach(element => {
          element.style.backgroundColor = 'white';
          element.style.border = '2.5px solid white';
        });
        document.querySelectorAll('.posicao-estatisticas p').forEach(element => {
          element.style.color = '#026336';
        });
        document.querySelectorAll('.img-jogador-estatisticas').forEach(element => {
          element.style.border = '2.5px solid #5eb490';
        });
      }

      // Explicitly set the initial color of the arrow icons after elements are in DOM
      if (selectedTeam === 'Corinthians' || selectedTeam === 'Palmeiras') {
        document.querySelectorAll('#verMais .fas, #verMenos .fas, #verMaisEstatisticas .fas, #verMenosEstatisticas .fas').forEach(icon => {
            icon.style.color = 'white';
        });
      }

    });

    if (!res.ok) {
      throw new Error(`Erro HTTP! status: ${res.status}`);
    }
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
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

montaEstatisticas(13);
