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
    var cpf = document.getElementById("Cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var Celular = document.getElementById("Celular");
    var termo = document.getElementById("termo");

     /*Validação de campos obrigatórios - Inicio*/
     if (nome.value == "") {
        alert("É obrigatório informar o nome.");
        nome.focus();
        return;
    }

    if (cpf.value == "") {
        alert("É obrigatório informar o CPF.");
        cpf.focus();
        return;
    }

    if (endereco.value == "") {
        alert("É obrigatório informar o endereço.");
        endereco.focus();
        return;
    }

    if (numero.value == "") {
        alert("É obrigatório informar o número de endereço.");
        numero.focus();
        return;
    }

    if (telefoneCelular.value == "") {
        alert("É obrigatório informar o telefone de celular.");
        telefoneCelular.focus();
        return;
    }

    if (termo.checked) {
        alert("É preciso estar ciente com o Termo de Política de Privacidade.");
        termo.focus();
        return false;
    }
    /*Validacao de campos obrigatorios - Fim*/
}

document.getElementById('formulario').onsubmit = function enviar() {
    alert("Deseja enviar o formulario?");
    return;
}

