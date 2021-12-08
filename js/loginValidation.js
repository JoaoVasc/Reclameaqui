"use strict";

function loginItensValidation(){

    let loginDefault = "test@email.com"
    let passwDefault = "123123"
    
    document.getElementById('message').style.display = ''
    let login = document.getElementById('email').value
    let passw = document.getElementById('senha').value
    let message = document.getElementById('message');
    let msg = ""

    if (login === loginDefault && passw === passwDefault){
        document.getElementById('message').style.display = 'none'
        window.location.href = "historico.html";
    }else{
        switch(login){
            case loginDefault:
                msg = 'SENHA incorreta!'
                break;
            default:
                msg = 'Dado de LOGIN não cadastrado ou inválido!'
                break;
        }
        message.innerHTML = msg;
        message.className = 'message';
        document.getElementById('senha').value = ""
        event.preventDefault();
    };
};

function clearMsg(){
    document.getElementById('message').style.display = 'none';
};