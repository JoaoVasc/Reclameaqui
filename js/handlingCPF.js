"use strict";

var cpfInput = 'cpf';

function clearImput(){
    document.getElementById(cpfInput).value = ""
    document.getElementById('message').style.display = 'none';
};

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    var i;
    Soma = 0;
  if (
        strCPF == '00000000000'
        || strCPF == '11111111111'
        || strCPF == '22222222222'
        || strCPF == '33333333333'
        || strCPF == '44444444444'
        || strCPF == '55555555555'
        || strCPF == '66666666666'
        || strCPF == '77777777777'
        || strCPF == '88888888888'
        || strCPF == '99999999999'
    ) return false;

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
};

function messageAlert(){
    var message = document.getElementById('message');
    message.innerHTML = 'CPF Invalido';
    message.className = 'message alert';
    event.preventDefault();
};

function contentValidation(){

    let strCPF = document.getElementById(cpfInput).value.replace(/\D/g, "");
    let strCPFlength = document.getElementById(cpfInput).value.replace(/\D/g, "").length;

    if (strCPFlength < 11 || strCPFlength > 11 || TestaCPF(strCPF) == false){
        messageAlert();
        document.getElementById('message').style.display = '';
        event.preventDefault();
    } else {
        localStorage.setItem('cpfNumFormat', document.getElementById(cpfInput).value);
    };
};

function cpfMask() {

    document.getElementById(cpfInput).value = document.getElementById(cpfInput).value.replace(/[&\/\\#,+()$~%'":*?<>{}a-zA-Z]/g,'')

    if(document.getElementById(cpfInput).value.length == 3 || document.getElementById(cpfInput).value.length == 7){
        document.getElementById(cpfInput).value += "."      
    }else if(document.getElementById(cpfInput).value.length == 11){        
        document.getElementById(cpfInput).value += "-"
    };

};

function userType(param){
    localStorage.setItem('value', param)
};

function goToPag(form){

    let userTypeValue = localStorage.getItem('value');

    if (userTypeValue == 0){
        userTypeValue = "Cidadao";
    } else {
        userTypeValue = "Ouvidor";
    };

    form.action = "cadastro"+userTypeValue+".html";
};

function writeCpf(){
    document.getElementById(cpfInput).value = localStorage.getItem('cpfNumFormat');
}