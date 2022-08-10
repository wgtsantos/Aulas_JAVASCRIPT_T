// var input_tel = document.querySelector("input[type=tel]");
var input_tel = document.getElementById("telefone");
input_tel.addEventListener('keyup', mask_tel);

// var input_cpf = document.querySelector("input[type=text]");
var input_cpf = document.getElementById("cpf");
input_cpf.addEventListener('keyup', mask_cpf);

function mask_tel(e) {

    var caractere = e.target.value.replace(/\D/g,"");
    caractere = caractere.replace(/^(\d\d)(\d)/g,"($1) $2");
    caractere = caractere.replace(/(\d{5})(\d)/,"$1-$2");

    e.target.value = caractere;

}

function mask_cpf(e) {

    var caractere = e.target.value.replace(/\D/g,"");
    caractere = caractere.replace(/(\d{3})(\d)/,"$1.$2");
    caractere = caractere.replace(/(\d{3})(\d)/,"$1.$2");
    caractere = caractere.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

    e.target.value = caractere;

}