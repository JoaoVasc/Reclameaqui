"use strict";

function typeRegistratio(){

    let userTypeValue = localStorage.getItem('value');

    if (userTypeValue == 0){
        userTypeValue = "Cidadao";
    } else {
        userTypeValue = "Ouvidor";
    };

    var message = document.getElementById('registrationLegend');
    message.innerHTML = "Cadastro do "+userTypeValue;
}