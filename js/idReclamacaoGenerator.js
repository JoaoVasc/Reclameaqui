"use strict";

function idGenerator(){
    var i = 0;
    var alfaCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var numCharacters = '0123456789'
    var reclNumID = alfaCharacters.charAt(Math.floor(Math.random() * 26));
    for (i=0; i<12; i++){

        if ( reclNumID.length < 3 || reclNumID.length >= 9 && reclNumID.length <= 10 || reclNumID.length === 14){
            reclNumID += alfaCharacters.charAt(Math.floor(Math.random() * 26))
        } else {
            reclNumID += numCharacters.charAt(Math.floor(Math.random() * 10))
        }
        if ( reclNumID.length === 3 || reclNumID.length === 8 || reclNumID.length === 13 ){
            reclNumID += " "
        }
    };
    document.getElementById('reclamacaoNumID').value = reclNumID
};