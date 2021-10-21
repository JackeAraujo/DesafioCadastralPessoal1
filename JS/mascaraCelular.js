/* Máscara de Celular - Início */
function formatarCampoCelular(campoTexto) {
    campoTexto.value = mascaraCelular(campoTexto.value);
}

function mascaraCelular(valor) {
    return valor.replace(/(\d{2})(\d{5})(\d{4})/g,"\(\$1\) \$2\-\$3");
}

/* Máscara de Celular - Fim */