document.getElementById("botao2").style.display = "none"; // deixa invísivel os botão copiar e limpar
//document.getElementById("text-box").style.display = "inline"; // deixa invísivel o texto

var resetResultado = document.getElementById("text-resultado").value;
var resetMensagem = document.getElementById("mensagem").value;

// Função de Codificar as Letras
document.getElementById("botaoCodificar").addEventListener("click", function () {

    // visíbilidade
    document.getElementById("botao2").style.display = "block";
    //document.getElementById("text-box").style.display = "none";

// texto = valor da mensagem.
var texto = document.getElementById("mensagem").value;

function mudarLetra(texto) {

    // Só passa aquilo que estiver no ARRAY.
    var caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
                                'y', 'z'];

    for(var a = 0; a < caracteres.length; a++) {
    
        // se for igual ao ARRAY.
        if(texto.includes(caracteres[a])) {

            // muda as letras
            texto = texto.replaceAll('e', 'enter')
                            .replaceAll('i', 'imes')
                                .replaceAll('a', 'ai')
                                    .replaceAll('o', 'ober')
                                        .replaceAll('u', 'ufat');
            
            return texto;
        } else {

                alert("ERRO Só pode LETRAS Minúsculas!!!");

                // Função de atualizar a mensagem em 2 segundos
                function atualizaTela() {
                    // deixa visível
                    document.getElementById("botao2").style.display = "none";
                    //document.getElementById("text-box").style.display = "inline";

                    document.getElementById("text-resultado").value = resetResultado;
                    document.getElementById("mensagem").value = resetMensagem;
                }
                setTimeout(atualizaTela, 10); // atualiza 1 vez só

                break;
            }
        }
    }
    // o valor de text-resultado = texto.
    document.getElementById("text-resultado").value = mudarLetra(texto);
    
})