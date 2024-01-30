function configurarAlarme() {
  const tempoEmMinutos = parseInt(document.getElementById('tempo').value, 10);

  if (isNaN(tempoEmMinutos) || tempoEmMinutos <= 0) {
    alert('Por favor, insira um valor válido maior que zero.');
    return;
  }

  const tempoEmMilissegundos = tempoEmMinutos * 60 * 1000;

  exibirMensagem('Alarme configurado!');

  setTimeout(() => {
    exibirMensagem('É hora! Bom dia, princesa!');
    reproduzirMusica();
  }, tempoEmMilissegundos);
}

function exibirMensagem(mensagem) {
  document.getElementById('mensagem').innerText = mensagem;
}

function reproduzirMusica() {
  const musica = document.getElementById('musica');
  musica.play();
}
