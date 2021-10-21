/* Máscara de RG - Início */
function formatarCampoRg(campoTexto) {
    campoTexto.value = mascaraRg(campoTexto.value);
}

function mascaraRg(valor) {
    return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/g,"\$1.\$2.\$3\-\$4");
} 

/* Máscara de RG - Fim */