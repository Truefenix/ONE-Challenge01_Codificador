// Função de Copiar o Texto da caixa de resultado
document.getElementById("copy").addEventListener("click", function () {

    let copyText = document.getElementById("text-resultado");
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    // o botão recebe o texto copiado -> navegador pc
    navigator.clipboard.writeText(copyText.value);
    alert("o texto foi copiado: " + copyText.value);

    // o botão recebe o texto copiado -> celular
    document.getElementById("copy") = navigator.clipboard.writeText(copyText.value);
})