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
    s = Math.min(s * saturationFactor, 0.7); // Aumenta saturação
    l = Math.max(l * 0.7, 0); // Escurece a cor (diminui luminosidade)
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

// Seleciona os elementos de imagem
const homeLogo = document.getElementById("home-logo");
const awayLogo = document.getElementById("away-logo");

// Chama a função para definir as cores do `retângulo`
setTeamColors(homeLogo, awayLogo, "retangulo");
