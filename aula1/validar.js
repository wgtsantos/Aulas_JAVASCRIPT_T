function valid(){

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var senha = document.getElementById("senha").value;
    var conf_senha = document.getElementById("conf_senha").value;

    // alert(nome + "\n" + telefone + "\n" + senha + "\n" + conf_senha);

    if(nome == "") {
        alert("Informe o seu nome!");
        return false;
    }
    if(telefone == "") {
        alert("Informe o seu Telefone!");
        return false;
    }
    if(senha == "") {
        alert("Informe uma senha.");
        return false;
    }
    if(conf_senha != senha){
        alert("As senhas não conferem ou campo não foi informado. ");
        return false;
    }

}