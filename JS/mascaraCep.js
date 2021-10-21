/* Máscara de CEP - Início */
function formatarCampoCep(campoTexto) {
    campoTexto.value = mascaraCep(campoTexto.value);
}

function mascaraCep(valor) {
    return valor.replace(/(\d{2})(\d{3})(\d{3})/g,"\$1\$2\-\$3");
}

/* Máscara de CEP - Fim */