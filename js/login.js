// Captura os campos de email e senha
const iemail = document.querySelector("#email");
const ipassword = document.querySelector("#password");

// Função de login
function login() {
  // Faz a requisição para o backend (API)
  fetch(`http://localhost:8080/users/login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: iemail.value, // Pega o valor do input de email
      password: ipassword.value, // Pega o valor do input de senha
    }),
  })
    .then((response) => {
      // Converte a resposta em JSON
      return response.json();
    })
    .then((data) => {
      // Verifica se o login foi bem-sucedido e se há um token
      console.log(data);
      if (data.token) {
        const token = data.token; // Supondo que o token vem como { "token": "valor_do_token" }

        // Armazena o token no localStorage
        localStorage.setItem("token", token);

        console.log("Token armazenado no localStorage:", token);

        // Redireciona para a página home
        window.location.href = "/index.html";
      } else {
        // Exibe uma mensagem de erro se não houver token
        alert("Erro ao realizar o login: Token não encontrado.");
      }
    })
    .catch((error) => {
      // Lida com erros na requisição
      console.log("Erro na requisição:", error);
      alert("Credenciais inválidas!");
    });
}