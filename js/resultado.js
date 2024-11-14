document.addEventListener("DOMContentLoaded", function() {
    const imagem = document.getElementById("imagem");
    const resultado = document.getElementById("resultado");

    imagem.onload = function() {
        const colorThief = new ColorThief();
        const corPredominante = colorThief.getColor(imagem);
        
        // Exibindo a cor predominante
        resultado.style.backgroundColor = `rgb(${corPredominante[0]}, ${corPredominante[1]}, ${corPredominante[2]})`;
        resultado.innerText = `Cor predominante: rgb(${corPredominante[0]}, ${corPredominante[1]}, ${corPredominante[2]})`;
    };
});
