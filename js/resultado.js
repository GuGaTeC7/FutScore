function getFinishedMatches() {
  const LEAGUE_ID = 71;
  const SEASON = 2024;
  const QTD_JOGOS = 5;

  const url = `https://v3.football.api-sports.io/fixtures?league=${LEAGUE_ID}&season=${SEASON}&status=FT&last=${QTD_JOGOS}`;

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Resultados:", data);

      // Primeiro, executa displayMatches
      return displayMatches(data.response);
    })
    .then(() => {
      insereEventos();
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getFixtureEvents(fixtureId) {
  const url = `https://v3.football.api-sports.io/fixtures/events?fixture=${fixtureId}`;

  try {
    const response = await fetch(url, options); // Certifique-se de que 'options' está configurado com suas chaves de API.

    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const events = data.response;
    return events;
  } catch (error) {
    console.error(error);
  }
}

async function displayMatches(matches) {
  return new Promise((resolve) => {
    const matchesElement = document.getElementById("result-jogadas");

    // Verifica se `matches` é válido
    if (!Array.isArray(matches) || matches.length === 0) {
      matchesElement.innerHTML = "<p>Os jogos não foram encontrados.</p>";
      return;
    }

    matchesElement.innerHTML = ""; // Limpa o container antes de adicionar novos jogos

    // Cria e insere o título do campeonato
    const nomeCampElement = document.createElement("h3");
    if (matches[0].league && matches[0].league.name) {
      nomeCampElement.innerText =
        matches[0].league.name + " - " + matches[0].league.country;
    } else {
      console.warn("Dados da liga não disponíveis ou array 'matches' vazio.");
      nomeCampElement.innerText = "Liga não disponível";
    }
    matchesElement.appendChild(nomeCampElement);

    for (const [index, match] of matches.entries()) {
      const idJogo = match.fixture.id;

      const idTimeHome = match.teams.home.id;
      const idTimeAway = match.teams.away.id;

      const homeTeam = match.teams.home.name;
      const awayTeam = match.teams.away.name;

      const homeScore = match.goals.home;
      const awayScore = match.goals.away;

      const homeLogo = match.teams.home.logo;
      const awayLogo = match.teams.away.logo;

      const dataJogo = match.fixture.date;
      const round = match.league.round || "Rodada desconhecida";
      const roundCut = round.split("-");

      formatDate(dataJogo);

      // IDs dinâmicos
      const cartaoAmareloHomeId = `cartaoAmareloHomeResultado-${index}`;
      const cartaoVermelhoHomeId = `cartaoVermelhoHomeResultado-${index}`;
      const cartaoAmareloAwayId = `cartaoAmareloAwayResultado-${index}`;
      const cartaoVermelhoAwayId = `cartaoVermelhoAwayResultado-${index}`;

      const iconSubHomeId = `substituicaoHomeResultado-${index}`;
      const iconSubAwayId = `substituicaoAwayResultado-${index}`;

      const retanguloId = `retangulo-${index}`;
      const homeLogoId = `home-logo-${index}`;
      const awayLogoId = `away-logo-${index}`;

      const matchHTML = `
        <div class="jogos-ao-vivo">
          <h6 class="campeonato">
            <b>Rodada - <span class="round">${roundCut[1]}</span></b>
            <span class="data"><b>${formatDate(dataJogo)}</b></span>
          </h6>
          <div class="retangulo" id="${retanguloId}">
            <div class="lado-home">
              <div class="img-moldura left">
                <img class="logo-team" src="${homeLogo}" id="${homeLogoId}" crossOrigin="anonymous" />
              </div>
              <div class="nome-team">${homeTeam}</div>
            </div>
            <div class="placar">${homeScore}</div>
            <div class="vs">X</div>
            <div class="placar">${awayScore}</div>
            <div class="lado-visitante">
              <div class="nome-team">${awayTeam}</div>
              <div class="img-moldura right">
                <img class="logo-team" src="${awayLogo}" id="${awayLogoId}" crossOrigin="anonymous" />
              </div>
            </div>
          </div>
          <div class="retangulo-menor" data-id-jogo="${idJogo}">
            <span class="eventos-resultados" data-id-time-home="${idTimeHome}">
              <img class="icon-resultados amarelo" id="${cartaoAmareloHomeId}" title="" data-bs-placement="bottom" src="assets/cartao-amarelo.png" />
              <img class="icon-resultados vermelho" id="${cartaoVermelhoHomeId}" src="assets/cartao-vermelho.png" />
              <img class="icon-resultados sub" id="${iconSubHomeId}" src="assets/sub.png" />
            </span>
            <span class="eventos-resultados" data-id-time-away="${idTimeAway}">
              <img class="icon-resultados sub" id="${iconSubAwayId}" src="assets/sub.png" />
              <img class="icon-resultados vermelho" id="${cartaoVermelhoAwayId}" src="assets/cartao-vermelho.png" />
              <img class="icon-resultados amarelo" id="${cartaoAmareloAwayId}" title="" data-bs-placement="bottom" src="assets/cartao-amarelo.png" />
            </span>
          </div>
        </div>
      `;

      const div = document.createElement("div");
      div.innerHTML = matchHTML;
      matchesElement.appendChild(div);

      // Inicializa tooltips do Bootstrap (para garantir que todos os elementos sejam configurados)
      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      tooltipTriggerList.forEach((tooltipTriggerEl) => {
        bootstrap.Tooltip.getInstance(tooltipTriggerEl)?.dispose(); // Remove qualquer tooltip existente
        new bootstrap.Tooltip(tooltipTriggerEl, {
          html: true, // Ativa HTML para todos os tooltips
        });
      });

      // Busca os elementos criados
      const homeLogoElement = document.getElementById(homeLogoId);
      const awayLogoElement = document.getElementById(awayLogoId);

      if (!homeLogoElement || !awayLogoElement) {
        console.error(
          `Elementos não encontrados: ${homeLogoId}, ${awayLogoId}`
        );
        continue;
      }

      homeLogoElement.onload = function () {
        setTeamColors(homeLogoElement, awayLogoElement, retanguloId);
      };

      if (homeLogoElement.complete) homeLogoElement.onload();
    }

    resolve();
  });
}

async function insereEventos() {
  const idJogosElements = document.querySelectorAll(
    ".retangulo-menor[data-id-jogo]"
  );
  if (!idJogosElements || idJogosElements.length === 0) {
    console.error("Nenhum elemento com data-id-jogo encontrado.");
    return;
  }

  // Recupera os IDs dos jogos
  const idJogos = Array.from(idJogosElements).map((element) =>
    element.getAttribute("data-id-jogo")
  );

  for (let i = 0; i < idJogos.length; i++) {
    console.log("contador For: " + i);
    const events = await getFixtureEvents(idJogos[i]);
    console.log("Requisição a API para o evento:", idJogos[i]);

    let substituicoesHome = [];
    let substituicoesAway = [];

    console.log("Eventos:", events);

    if (events && Array.isArray(events)) {
      events.forEach((event) => {
        const cartaoAmareloHome = document.getElementById(
          `cartaoAmareloHomeResultado-${i}`
        );
        console.log("home amarelo", cartaoAmareloHome);
        const cartaoAmareloAway = document.getElementById(
          `cartaoAmareloAwayResultado-${i}`
        );
        const cartaoVermelhoHome = document.getElementById(
          `cartaoVermelhoHomeResultado-${i}`
        );
        const cartaoVermelhoAway = document.getElementById(
          `cartaoVermelhoAwayResultado-${i}`
        );

        const iconSubHome = document.getElementById(
          `substituicaoHomeResultado-${i}`
        );
        const iconSubAway = document.getElementById(
          `substituicaoAwayResultado-${i}`
        );

        const idTimeHomeElement = idJogosElements[i].querySelector(
          `.eventos-resultados[data-id-time-home]`
        );
        const idTimeHome = idTimeHomeElement
          ? idTimeHomeElement.getAttribute("data-id-time-home")
          : null;

        const idTimeAwayElement = idJogosElements[i].querySelector(
          ".eventos-resultados[data-id-time-away]"
        );
        const idTimeAway = idTimeAwayElement
          ? idTimeAwayElement.getAttribute("data-id-time-away")
          : null;

        const tempoEvento = event.time.elapsed;

        if (event.type === "Card") {
          const jogadorCartao = event.player.name;

          switch (event.detail) {
            case "Yellow Card":
              if (event.team.id == idTimeHome) {
                if (cartaoAmareloHome) {
                  cartaoAmareloHome.style.display = "flex";
                }
                const titleAtualHome =
                  cartaoAmareloHome.getAttribute("data-bs-original-title") ||
                  "";
                const novoTitleHome = `${titleAtualHome}<b>${tempoEvento}'</b>: ${jogadorCartao}<br>`;
                cartaoAmareloHome.setAttribute(
                  "data-bs-original-title",
                  novoTitleHome
                );
                bootstrap.Tooltip.getInstance(cartaoAmareloHome)?.dispose();
                new bootstrap.Tooltip(cartaoAmareloHome, {
                  html: true,
                });
              } else if (event.team.id == idTimeAway) {
                if (cartaoAmareloAway) {
                  cartaoAmareloAway.style.display = "flex";
                }
                const titleAtualAway =
                  cartaoAmareloAway.getAttribute("data-bs-original-title") ||
                  "";
                const novoTitleAway = `${titleAtualAway}<b>${tempoEvento}'</b>: ${jogadorCartao}<br>`;
                cartaoAmareloAway.setAttribute(
                  "data-bs-original-title",
                  novoTitleAway
                );
                bootstrap.Tooltip.getInstance(cartaoAmareloAway)?.dispose();
                new bootstrap.Tooltip(cartaoAmareloAway, {
                  html: true,
                });
              }
              break;

            case "Red Card":
              if (event.team.id == idTimeHome) {
                if (cartaoVermelhoHome) {
                  cartaoVermelhoHome.style.display = "flex";
                }
                const titleAtualHome =
                  cartaoVermelhoHome.getAttribute("data-bs-original-title") ||
                  "";
                const novoTitleHome = `${titleAtualHome}<b>${tempoEvento}'</b>: ${jogadorCartao}<br>`;
                cartaoVermelhoHome.setAttribute(
                  "data-bs-original-title",
                  novoTitleHome
                );
                bootstrap.Tooltip.getInstance(cartaoVermelhoHome)?.dispose();
                new bootstrap.Tooltip(cartaoVermelhoHome, {
                  html: true,
                });
              } else if (event.team.id == idTimeAway) {
                if (cartaoVermelhoAway) {
                  cartaoVermelhoAway.style.display = "flex";
                }
                const titleAtualAway =
                  cartaoVermelhoAway.getAttribute("data-bs-original-title") ||
                  "";
                const novoTitleAway = `${titleAtualAway}<b>${tempoEvento}'</b>: ${jogadorCartao}<br>`;
                cartaoVermelhoAway.setAttribute(
                  "data-bs-original-title",
                  novoTitleAway
                );
                bootstrap.Tooltip.getInstance(cartaoVermelhoAway)?.dispose();
                new bootstrap.Tooltip(cartaoVermelhoAway, {
                  html: true,
                });
              }
              break;
          }
        }

        if (event.type === "subst") {
          const jogadorEntrou = event.player?.name || "Jogador desconhecido";
          const jogadorSaiu = event.assist?.name || "Jogador desconhecido";
          const tempoSub = event.time?.elapsed || 0;

          const setaVerde = '<i class="fas fa-arrow-right seta-verde"></i>';
          const setaVermelha =
            '<i class="fas fa-arrow-left seta-vermelha"></i>';

          if (event.team.id == idTimeHome && iconSubHome) {
            iconSubHome.style.display = "block";
            substituicoesHome.push(
              `<strong>${tempoSub}'</strong>:<br> <strong>Saiu:</strong> ${jogadorSaiu} ${setaVermelha} <br> <strong>Entrou:</strong> ${jogadorEntrou} ${setaVerde}`
            );
            iconSubHome.setAttribute("data-bs-toggle", "tooltip");
            iconSubHome.setAttribute("data-bs-html", "true");
            iconSubHome.setAttribute(
              "data-bs-original-title",
              substituicoesHome.join("<br>")
            );
            bootstrap.Tooltip.getInstance(iconSubHome)?.dispose();
            new bootstrap.Tooltip(iconSubHome, { html: true });
          } else if (event.team.id == idTimeAway && iconSubAway) {
            iconSubAway.style.display = "block";
            substituicoesAway.push(
              `<strong>${tempoSub}'</strong>:<br> <strong>Saiu:</strong> ${jogadorSaiu} ${setaVermelha} <br> <strong>Entrou:</strong> ${jogadorEntrou} ${setaVerde}`
            );
            iconSubAway.setAttribute("data-bs-toggle", "tooltip");
            iconSubAway.setAttribute("data-bs-html", "true");
            iconSubAway.setAttribute(
              "data-bs-original-title",
              substituicoesAway.join("<br>")
            );
            bootstrap.Tooltip.getInstance(iconSubAway)?.dispose();
            new bootstrap.Tooltip(iconSubAway, { html: true });
          }
        }
      });
    }
  }
}

function formatDate(isoDate) {
  const date = new Date(isoDate); // Converte o ISO para um objeto Date

  // Extrai o dia, mês e ano
  const day = String(date.getUTCDate()).padStart(2, "0"); // Usa UTC para evitar fuso horário
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Mês é baseado em zero
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`; // Formata a data
}

function setTeamColors(homeLogo, awayLogo, retanguloId) {
  const retangulo = document.getElementById(retanguloId);

  // Função para obter a cor predominante da imagem e aplicar o aumento de saturação e escurecimento
  function getDominantColor(image) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0, image.width, image.height);

    const imageData = context.getImageData(0, 0, image.width, image.height);
    const data = imageData.data;

    let r = 0,
      g = 0,
      b = 0,
      count = 0;

    // Calculando a média das cores da imagem
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    // Média das cores
    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    // Aplicando aumento de saturação e escurecimento na cor
    return adjustColor(r, g, b);
  }

  // Função para aumentar a saturação e escurecer a cor
  function adjustColor(r, g, b) {
    // Aumenta a saturação e escurece a cor
    let [newR, newG, newB] = increaseSaturationAndDarken(r, g, b, 2.5);
    return `rgb(${newR}, ${newG}, ${newB})`;
  }

  // Função para aumentar saturação e escurecer
  function increaseSaturationAndDarken(r, g, b, saturationFactor) {
    // Calcula a saturação e luminosidade base
    let [h, s, l] = rgbToHsl(r, g, b);
    s = Math.min(s * saturationFactor, 1); // Aumenta saturação
    l = Math.max(l * 0.5, 0); // Escurece a cor (diminui luminosidade)
    return hslToRgb(h, s, l); // Converte de volta para RGB
  }

  // Converte RGB para HSL
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h, s, l];
  }

  // Converte HSL de volta para RGB
  function hslToRgb(h, s, l) {
    let r, g, b;

    function hueToRgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hueToRgb(p, q, h + 1 / 3);
      g = hueToRgb(p, q, h);
      b = hueToRgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  // Ajusta as cores do gradiente após carregar as imagens
  homeLogo.onload = function () {
    const homeColor = getDominantColor(homeLogo);
    awayLogo.onload = function () {
      const awayColor = getDominantColor(awayLogo);

      // Aplica o gradiente linear com as cores mais escuras e saturadas dos times
      retangulo.style.backgroundImage = `linear-gradient(60deg, ${homeColor} 50%, ${awayColor} 50%)`;
    };
  };

  // Verifica se as imagens já estão carregadas
  if (homeLogo.complete) {
    homeLogo.onload();
  }
  if (awayLogo.complete) {
    awayLogo.onload();
  }
}

getFinishedMatches();
