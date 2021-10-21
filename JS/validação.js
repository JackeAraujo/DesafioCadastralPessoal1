document.getElementById('cpf').onchange = function cpf() {
    var cpf = document.getElementById("cpf");
    /*Validação de CPF - Inicio*/
    function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }
    var strCPF = cpf.value;
    if (!TestaCPF(strCPF)) {
        alert("O CPF informado não é válido");
        cpf.focus();
    }
    /*Validação de CPF - Fim*/
}

document.getElementById('enviar').onclick = function validar() {
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var telefoneCelular = document.getElementById("telefoneCelular");
    var termo = document.getElementById("termo");