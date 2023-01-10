document.getElementById("botao2").style.display = "none"; // deixa invísivel os botão copiar e limpar
//document.getElementById("text-box").style.display = "inline"; // deixa invísivel o texto

var urso = document.getElementById("mensagem").style.background = "none"; // -> invísivel

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

    // Função que bloqueia caracteres especiais.
    function ContemCharEspecial(caracter) {
        const charEspecial = /[`!@#$%^&*()_+\-=\[\]{};':"+\\|,<>\/?~1234567890]/;
        return charEspecial.test(caracter);
    }

    // Função que Bloqueia de A - Z Maiúsculo.
    function containUppercase(str) {
        return /[A-Z]/.test(str);
    }

    if (ContemCharEspecial(texto) || containUppercase(texto)) {

        alert('✅ Só pode Letras Minúsculas e sem Acentos!!!');
        
        // Função de atualizar a mensagem em 2 segundos
        function atualizaTela() {
            document.getElementById("botao2").style.display = "none";

            document.getElementById("text-resultado").value = resetResultado;
            document.getElementById("mensagem").value = resetMensagem;
        }
        setTimeout(atualizaTela, 10); // atualiza 1 vez só

            document.getElementById("mensagem").style.background = ""; // -> vísivel
            // Esconde o Urso
            function atualizaTelaUrso() {
                document.getElementById("mensagem").style.background = "none"; // -> invísivel
            }
            setTimeout(atualizaTelaUrso, 3000);

    } else {

        // se for sem acento.
        if(texto == texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {

            // muda as letras
            texto = texto.replaceAll('e', 'enter')
                            .replaceAll('i', 'imes')
                                .replaceAll('a', 'ai')
                                    .replaceAll('o', 'ober')
                                        .replaceAll('u', 'ufat')
                                            .replaceAll('A', 'a');
            
            return texto;
        } else {

                alert("ERRO NÃO PODE ACENTOS!!!");

                // Função de atualizar a mensagem em 0.10 milésimos de seg.
                function atualizaTela() {
                    // deixa visível
                    document.getElementById("botao2").style.display = "none";
                    //document.getElementById("text-box").style.display = "inline";

                    document.getElementById("text-resultado").value = resetResultado;
                    document.getElementById("mensagem").value = resetMensagem;
                }
                setTimeout(atualizaTela, 10); // atualiza 1 vez só
            }
        }
    }    
    // o valor de text-resultado = texto.
    document.getElementById("text-resultado").value = mudarLetra(texto);
    
})