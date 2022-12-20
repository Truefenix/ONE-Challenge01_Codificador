// botão -> evento click.
document.getElementById("botaoCriptografar").addEventListener("click", function () {

// texto = valor da mensagem.
var texto = document.getElementById("mensagem").value;

// Função de Mudar as letras
function mudarLetra(texto) {
    
        // se texto for com acento
        if(texto == texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {

            texto = texto.replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat');
            
            return texto.toLowerCase();
        } else {

            alert("Só pode letras sem acentos!!!");
        }
    }

    // o valor de textArea = texto.
    document.getElementById("text-resultado").value = mudarLetra(texto);
})

// Função de Limpar os textos.
document.getElementById("limpar").addEventListener("click", function () {

    // valor de resultado e mensagem = " "
    var limparText = document.getElementById("text-resultado").value = " ";
    document.getElementById("mensagem").value = " ";

    alert("o texto foi Limpo: " + limparText);
})


// Função de Copiar o Texto da caixa de resultado
document.getElementById("copy").addEventListener("click", function () {

    var copyText = document.getElementById("text-resultado");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("o texto foi copiado: " + copyText.value);
})