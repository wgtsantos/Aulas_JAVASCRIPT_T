function valid2(){

    var nome = document.getElementById("nome").value == "";
    var telefone = document.getElementById("telefone").value == "";
    var senha = document.getElementById("senha").value == "";
    var vsenha = document.getElementById("senha").value;
    var conf_senha = document.getElementById("conf_senha").value != vsenha;

   // alert(nome + "\n" + telefone + "\n" + senha + "\n" + conf_senha);

    if(nome) {
        document.getElementById("erro_nome").innerHTML = 
        "O campo nome não foi informado!";
        document.getElementById("nome").style.border = "3px solid #F00";
        return false;
    } else {
        document.getElementById("erro_nome").innerHTML = "";
        document.getElementById("nome").style.border = "";
    }
    if(telefone) {
        document.getElementById("erro_tel").innerHTML = 
        "O campo telefone não foi informado!";
        document.getElementById("telefone").style.border = "3px solid #F00";
        return false;
    } else {
        document.getElementById("erro_tel").innerHTML = "";
        document.getElementById("telefone").style.border = "";
    }
    if(senha) {
        document.getElementById("erro_senha").innerHTML = 
        "O campo senha não foi informado!";
        document.getElementById("senha").style.border = "3px solid #F00";
        return false;
    } else {
        document.getElementById("erro_senha").innerHTML = "";
        document.getElementById("senha").style.border = "";
    }
    if(conf_senha){
        document.getElementById("erro_conf_senha").innerHTML = 
        "As senhas não conferem!";
        document.getElementById("conf_senha").style.border = "3px solid #F00";
        return false;
    } else {
        document.getElementById("erro_conf_senha").innerHTML = "";
        document.getElementById("conf_senha").style.border = "";
    }

}