"use strict";

var cepNum = 'CEP'

const writeForm = (addressData) => {
    document.getElementById('lougradouro').value = addressData.logradouro
    document.getElementById('bairro').value = addressData.bairro
    document.getElementById('cidade').value = addressData.localidade
    document.getElementById('estado').value = addressData.uf
}

const clearForm = () => {
    document.getElementById('lougradouro').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('estado').value = ""
}

const validCep = (cep) => /^[0-9]+$/.test(cep) && cep.length == 8; 

const searchCEP = async() =>{
    clearForm();
    const cep = document.getElementById('CEP').value.replace(/\D/g, "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (validCep(cep)){
        const jsonData = await fetch(url)
        const addressData = await jsonData.json();        
        if (addressData.hasOwnProperty('ibge')){
            writeForm(addressData);
        }else{
            alert ('CEP não encontrado')
        }    
    }else{
        alert ('CEP inválido')
    }
};

function cepMask() {

    document.getElementById(cepNum).value = document.getElementById(cepNum).value.replace(/[&\/\\#,+()$~%'":*?<>{}a-zA-Z]/g,'');

    if(document.getElementById(cepNum).value.length == 2){
        document.getElementById(cepNum).value += "."      
    }else if(document.getElementById(cepNum).value.length == 6){        
        document.getElementById(cepNum).value += "-"
    };
};  

document.getElementById(cepNum).addEventListener('focusout',searchCEP);


