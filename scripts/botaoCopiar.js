// Função de Copiar o Texto da caixa de resultado
document.getElementById("copy").addEventListener("click", function () {

    var copyText = document.getElementById("text-resultado");
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("o texto foi copiado: " + copyText.value);
})