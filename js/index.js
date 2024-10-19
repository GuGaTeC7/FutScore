function sair() {
  localStorage.removeItem("token");
  window.location.reload(true);
}
