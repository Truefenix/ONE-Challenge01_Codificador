document.getElementById("botao2").style.display = "none"; // deixa invísivel os botão copiar e limpar
document.getElementById("text-box").style.display = "inline"; // deixa invísivel o texto

var resetResultado = document.getElementById("text-resultado").value;
var resetMensagem = document.getElementById("mensagem").value;

// Função de Desciptografar
document.getElementById("botaoDescodificar").addEventListener("click", function () {

    // visíbilidade
    document.getElementById("botao2").style.display = "block";
    document.getElementById("text-box").style.display = "none";

    var texto = document.getElementById("mensagem").value;
    
    function mudarLetra(texto) {
        
            // muda a plavra e transforma em minúsculo
            if(texto == texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
    
                texto = texto.toLowerCase().replaceAll('enter', 'e')
                                .toLowerCase().replaceAll('imes', 'i')
                                    .toLowerCase().replaceAll('ai', 'a')
                                        .toLowerCase().replaceAll('ober', 'o')
                                            .toLowerCase().replaceAll('ufat', 'u');
                
                return texto.toLowerCase();
            } else {
    
                alert("Só pode letras sem acentos!!!");

                // Função de atualizar a mensagem em 2 segundos
                function atualizaTela() {
                    // deixa visível
                    document.getElementById("botao2").style.display = "none";
                    document.getElementById("text-box").style.display = "inline";

                    document.getElementById("text-resultado").value = resetResultado;
                    document.getElementById("mensagem").value = resetMensagem;
                }
                setTimeout(atualizaTela, 10); // atualiza 1 vez só
            }
        }
    
    // o valor de text-resultado = texto.
    document.getElementById("text-resultado").value = mudarLetra(texto);
})