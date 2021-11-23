"use strict";

var cpfInput = 'cpf'

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    var i;
    Soma = 0;
  if (strCPF == "00000000000" ) return false;

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

function cpfMask() {

    document.getElementById(cpfInput).value = document.getElementById(cpfInput).value.replace(/[&\/\\#,+()$~%'":*?<>{}a-zA-Z]/g,'')

    if(document.getElementById(cpfInput).value.length == 3 || document.getElementById(cpfInput).value.length == 7){
        document.getElementById(cpfInput).value += "."      
    }else if(document.getElementById(cpfInput).value.length == 11){        
        document.getElementById(cpfInput).value += "-"
    };    

    let strCPF = document.getElementById(cpfInput).value.replace(/\D/g, "");

    if (document.getElementById(cpfInput).value.length == 14){
        
        switch (TestaCPF(strCPF)){
            case false:
                alert('CPF inválido');
                document.getElementById(cpfInput).value = ""
                break;
            case true:
                break;
        }
    }
};
