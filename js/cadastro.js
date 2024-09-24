// Seleção dos elementos de input
const iname = document.querySelector("#nome");
const iemail = document.querySelector("#email");
const ipassword = document.querySelector("#password");

async function cadastrar() {
  try {
    const response = await fetch(`http://localhost:8080/users`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: iname.value,
        email: iemail.value,
        password: ipassword.value,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.name && data.email) {
      const nome = data.name;
      const email = data.email;

      // Armazena o nome e o email no localStorage
      localStorage.setItem("nome", nome);
      localStorage.setItem("email", email);

      console.log("Nome e email armazenados no localStorage:", nome, email);
      alert("Cadastro realizado com sucesso!");

      window.location.href = '/index.html';
    }

    //window.location.href = "/index.html";
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro na requisição");
  }
}

function sair() {
  // Remove o token do localStorage
  localStorage.removeItem("token");

  alert("Deslogado");
}
