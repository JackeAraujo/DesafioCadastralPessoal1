/* Máscara de CPF - Início */
function formatarCampo(campoTexto) {
    campoTexto.value = mascaraCpf(campoTexto.value);
}
function retirarFormatacao(campoTexto) {
    campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g,"");
}
function mascaraCpf(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

/* Máscara de CPF - Fim */