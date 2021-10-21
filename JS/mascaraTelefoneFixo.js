/* Máscara de Telefone Fixo - Início */
function formatarCampoTelefoneFixo(campoTexto) {
    campoTexto.value = mascaraTelefoneFixo(campoTexto.value);
}

function mascaraTelefoneFixo(valor) {
    return valor.replace(/(\d{2})(\d{4})(\d{4})/g,"\(\$1\) \$2\-\$3");
}

/* Máscara de Telefone Fixo - Fim */