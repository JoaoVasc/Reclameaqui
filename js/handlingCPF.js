"use strict";

var cpfInput = 'cpf';

function clearImput(){
    document.getElementById(cpfInput).value = ""
    document.getElementById('message').style.display = 'none';
};

function TestaCPF(strCPF) {
    var Soma = 0;
    var Resto;
    var i;
    
    switch(strCPF){
        case '00000000000':
        case '11111111111':
        case '22222222222':
        case '33333333333':
        case '44444444444':
        case '55555555555':
        case '66666666666':
        case '77777777777':
        case '88888888888':
        case '99999999999':
            return false;
    };

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
        userTypeValue = "cidadao";
    } else {
        userTypeValue = "ouvidor";
    };

    form.action = "cadastro-"+userTypeValue+"-1.html";
};

function writeCpf(){
    document.getElementById(cpfInput).value = localStorage.getItem('cpfNumFormat');
}