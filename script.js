// botão -> evento click.
document.getElementById("botaoCriptografar").addEventListener("click", function () {

// texto = valor do input.
var texto = document.getElementById("text-resultado").value;

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
document.getElementById("resultado").value = mudarLetra(texto);
})