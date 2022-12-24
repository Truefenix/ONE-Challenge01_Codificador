document.getElementById("botao2").style.display = "none"; // deixa invísivel os botão copiar e limpar
//document.getElementById("text-box").style.display = "inline"; // deixa invísivel o texto

var urso = document.getElementById("mensagem").style.background = "none"; // -> invísivel

//var resetResultado = document.getElementById("text-resultado").value;
var resetMensagem = document.getElementById("mensagem").value;

// Função de Limpar os textos.
document.getElementById("limpar").addEventListener("click", function () {

    // valor de resultado e mensagem = " "
    var limparText = document.getElementById("text-resultado").value;
    
    document.getElementById("mensagem").value = " ";

    // Função de atualizar a mensagem em 2 segundos
    function atualizaTela() {
        // deixa visível
        document.getElementById("botao2").style.display = "none";
        //document.getElementById("text-box").style.display = "inline";

        document.getElementById("text-resultado").value = resetResultado;
        document.getElementById("mensagem").value = resetMensagem;

        // Mostra denovo o Urso 
        function atualizaTela() {
            urso = document.getElementById("mensagem").style.background = ""; // -> vísivel
        }
        setTimeout(atualizaTela, 1000);

        // Esconde o Urso
        function atualizaTela2() {
            urso = document.getElementById("mensagem").style.background = "none"; // -> invísivel
        }

        setTimeout(atualizaTela2, 5000);
    }
    setTimeout(atualizaTela, 500); // atualiza 1 vez só
})