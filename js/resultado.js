async function getFinishedMatches() {
  const LEAGUE_ID = 71;
  const SEASON = 2024;
  const QTD_JOGOS = 20;

  const url = `https://v3.football.api-sports.io/fixtures?league=${LEAGUE_ID}&season=${SEASON}&status=FT&last=${QTD_JOGOS}`;

  try {
    const response = await fetch(url, options); // Certifique-se de que 'options' esteja definido corretamente

    if (!response.ok) {
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Resultados:");
    console.log(data);
    displayMatches(data.response);
  } catch (error) {
    console.error(error);
  }
}

function displayMatches(matches) {
  const matchesElement = document.getElementById("result-jogadas");

  // Verifica se `matches` é válido
  if (!Array.isArray(matches) || matches.length === 0) {
    matchesElement.innerHTML = "<p>Os jogos não foram encontrados.</p>";
    return;
  }

  matchesElement.innerHTML = ""; // Limpa o container antes de adicionar novos jogos

  matches.forEach((match, index) => {
    const homeTeam = match.teams.home.name;
    const awayTeam = match.teams.away.name;
    const homeScore = match.goals.home;
    const awayScore = match.goals.away;
    const homeLogo = match.teams.home.logo;
    const awayLogo = match.teams.away.logo;

    const retanguloId = `retangulo-${index}`;
    const homeLogoId = `home-logo-${index}`;
    const awayLogoId = `away-logo-${index}`;

    const matchHTML = `
      <div class="jogos-ao-vivo">
        <h6 class="campeonato">
          <b>Copa Sul-Americana - Quartas de final</b>
          <span class="data"><b>11/06</b></span>
        </h6>
        <div class="retangulo" id="${retanguloId}">
          <div class="img-moldura">
            <img class="logo-team" src="${homeLogo}" id="${homeLogoId}" crossOrigin="anonymous" />
          </div>
          <div class="nome-team">${homeTeam}</div>
          <div class="placar">${homeScore}</div>
          <div class="vs">X</div>
          <div class="placar">${awayScore}</div>
          <div class="nome-team">${awayTeam}</div>
          <div class="img-moldura">
            <img class="logo-team" src="${awayLogo}" id="${awayLogoId}" crossOrigin="anonymous" />
          </div>
        </div>
        <div class="retangulo-menor">
          <span class="odds">
            <img class="odd" src="assets/cartao-vermelho.png" />
            <img class="odd" src="assets/cartao-amarelo.png" />
            <img class="odd sub" src="assets/sub.png" />
          </span>
          <span class="odds">
            <img class="odd sub" src="assets/sub.png" />
            <img class="odd" src="assets/cartao-amarelo.png" />
            <img class="odd" src="assets/cartao-vermelho.png" />
          </span>
        </div>
      </div>
    `;

    const div = document.createElement("div");
    div.innerHTML = matchHTML;
    matchesElement.appendChild(div);

    // Busca os elementos criados
    const homeLogoElement = document.getElementById(homeLogoId);
    const awayLogoElement = document.getElementById(awayLogoId);

    if (!homeLogoElement || !awayLogoElement) {
      console.error(`Elementos não encontrados: ${homeLogoId}, ${awayLogoId}`);
      return;
    }

    homeLogoElement.onload = function () {
      setTeamColors(homeLogoElement, awayLogoElement, retanguloId);
    };

    if (homeLogoElement.complete) homeLogoElement.onload();
  });
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

// Chama a função para definir as cores do `retângulo`
getFinishedMatches();
