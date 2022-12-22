document.getElementById("botao2").style.display = "none"; // deixa invísivel os botão copiar e limpar
document.getElementById("text-box").style.display = "inline"; // deixa invísivel o texto

var resetResultado = document.getElementById("text-resultado").value;
var resetMensagem = document.getElementById("mensagem").value;

// Função de Limpar os textos.
document.getElementById("limpar").addEventListener("click", function () {

    // valor de resultado e mensagem = " "
    var limparText = document.getElementById("text-resultado").value = "Nenhuma mensagem encontrada";
    
    document.getElementById("mensagem").value = " ";

    // Função de atualizar a mensagem em 2 segundos
    function atualizaTela() {
        // deixa visível
        document.getElementById("botao2").style.display = "none";
        document.getElementById("text-box").style.display = "inline";

        document.getElementById("text-resultado").value = resetResultado;
        document.getElementById("mensagem").value = resetMensagem;
    }
    setTimeout(atualizaTela, 500); // atualiza 1 vez só
})