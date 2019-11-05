

function Enviar() {
    let nome = document.getElementById("nomeid");
    let email = document.getElementById("emailid");

    if (nome.value != "") {
      alert(
        "Obrigado sr(a) " +
          nome.value +
          " os seus dados foram encaminhados com sucesso"
      );
    } else if (email.value !='ola') {
        alert(
            "Obrigado sr(a) " +
          email.value +
          " os seus dados foram encaminhados com sucesso"
        );
    } else {
        alert(
            "Errado"
        );
    }
  }
  