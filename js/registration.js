"use strict";

function typeRegistration(){

    let userTypeValue = localStorage.getItem('value');

    if (userTypeValue == 0){
        userTypeValue = "Cidadao";
    } else {
        userTypeValue = "Ouvidor";
    };

    var legendElement = document.getElementById('registrationLegend');
    legendElement.innerHTML = "Cadastro do "+userTypeValue;
}