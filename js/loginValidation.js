"use strict";

function loginItensValidation(form){

    let loginDefault = "test@email.com"
    let passwDefault = "123123"
    
    document.getElementById('message').style.display = ''
    let login = document.getElementById('email').value
    let passw = document.getElementById('senha').value
    let message = document.getElementById('message');
    let msg = ""

    if (localStorage.getItem('typebottom') == 0){
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
    }else{
        form.action = "cadastro-perfil.html";
    }
};

function clearMsg(){
    document.getElementById('message').style.display = 'none';
};
function typebottom(param){
    localStorage.setItem('typebottom', param)
};