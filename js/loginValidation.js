"use strict";

function loginItensValidation(){
    
    document.getElementById('message').style.display = ''
    let login = document.getElementById('email').value
    let passw = document.getElementById('senha').value
    let message = document.getElementById('message');
    let msg = ""

    if (login === "test@email.com" && passw === "123123"){
        window.location.href = "historico.html";
    }else{
        switch(login){
            case "test@email.com":
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