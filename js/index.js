function sair() {
  localStorage.removeItem("token");
  window.location.reload(true);
}

document.getElementById("editar").addEventListener("click", () => {
  const nomeNovo = prompt("Insira seu novo nome:");

  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);

  fetch(`http://localhost:8080/users/atualiza-nome/${decodedToken.name}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      name: nomeNovo,
    }),
  })
    .then((data) => {
      if (data) {
        alert("Nome alterado com sucesso!");

        localStorage.removeItem("token");

        // Redireciona para a página login
        window.location.href = "/login.html";
      } else {
        // Exibe uma mensagem de erro se não houver token
        alert("Erro ao alterar o nome!");
      }
    })
    .catch((error) => {
      // Lida com erros na requisição
      console.log("Erro na requisição:", error);
      alert("Credenciais inválidas!");
    });
});
