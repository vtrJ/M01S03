const mensagemOla = (nome) => {
    return `Olá, ${nome}!`;
  }
  const resultado = mensagemOla("Mariana");
  console.log(resultado);

  const exibirMensagem = () => {
    const nome = document.getElementById("nome").value;
    if(nome === "") {
      alert("Por favor, insira um nome");
      return;
    }
    const mensagem = mensagemOla(nome);
    document.getElementById("mensagem").innerHTML = mensagem;
  }
  