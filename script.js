function perguntas() {
  const secoes = ["cliente", "funcionario", "gerente"];

  secoes.forEach((id) => {
    const div = document.getElementById(id);
    div.style.display = "none";

    div.querySelectorAll("input, textarea").forEach((el) => {
      el.disabled = true;
      el.required = false;
    });
  });

  const tipo = document.querySelector('input[name="tipo"]:checked');

  if (tipo) {
    const ativa = document.getElementById(tipo.value);
    ativa.style.display = "block";

    ativa.querySelectorAll("input, textarea").forEach((el) => {
      el.disabled = false;
    });

    if (tipo.value === "cliente") {
      obrigar("frequencia");
      obrigar("agendamento");
    }

    if (tipo.value === "funcionario") {
      obrigar("agenda_func");
      obrigar("atendimentos_dia");
    }

    if (tipo.value === "gerente") {
      obrigar("estoque_gerente");
      obrigar("escala");
    }
  }
}

function obrigar(nome) {
  const grupo = document.querySelectorAll(`input[name="${nome}"]`);
  grupo.forEach((el) => (el.required = true));
}
