// Seção animado
var mensagem = document.getElementById("mensagem");
var urso = document.getElementById("mensagem").style.background = "none"; // -> invísivel

// Mostra o Urso
function atualizaTela() {

    urso = document.getElementById("mensagem").style.background = ""; // -> vísivel
}

setTimeout(atualizaTela, 5000); // atualiza 1 vez só.


var clique = mensagem.addEventListener("click", function(event) {
  
    urso = document.getElementById("mensagem").style.background = "none"; // -> invísivel
})

// Esconde o Urso
function atualizaTela2() {

    urso = document.getElementById("mensagem").style.background = "none"; // -> vísivel
}

setTimeout(atualizaTela2, 10000); // atualiza 1 vez só.