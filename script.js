function perguntas() {
  document.getElementById("cliente").style.display = "none";
  document.getElementById("funcionario").style.display = "none";
  document.getElementById("gerente").style.display = "none";

  const tipo = document.querySelector('input[name="tipo"]:checked');

  if (tipo) {
    document.getElementById(tipo.value).style.display = "block";
  }
}
