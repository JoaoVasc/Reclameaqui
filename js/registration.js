"use strict";

function typeRegistration(){
    let userTypeValue = localStorage.getItem('value');
    if (userTypeValue == 0){
        userTypeValue = "Cidadão";
    } else {
        userTypeValue = "Ouvidor";
    };
    var legendElement = document.getElementById('registrationLegend');
    legendElement.innerHTML = "Cadastro do "+userTypeValue;
}

function pageReturn(){{
    let userTypeValue = localStorage.getItem('value');
    if (userTypeValue == 0){
        location.href='cadastro-cidadao-2.html'
    } else {
        location.href='cadastro-ouvidor-2.html'
    };
}}