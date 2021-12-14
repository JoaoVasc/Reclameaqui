"use strict";

function loginItensValidation(form){

    let loginDefault = "test@email.com"
    let passwDefault = "123123"
    
    document.getElementById('message').style.display = ''
    let login = document.getElementById('email').value
    let passw = document.getElementById('senha').value
    let message = document.getElementById('message');
    let msg = ""
   
    if (login === loginDefault && passw === passwDefault){
        document.getElementById('message').style.display = 'none'
        form.action = "historico.html";
    }else{
        switch(login){
            case loginDefault:
                msg = 'SENHA incorreta!'
                break;
            default:
                msg = 'Dados de LOGIN não cadastrado ou inválidos!'
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