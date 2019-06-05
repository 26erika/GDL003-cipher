//ocultar segunda pagina
    document.getElementById("two").style.visibility="hidden";
//llamar boton de comenzar//
    document.getElementById("start").addEventListener("click",comenzar);
//ejecutar funcion de comenzar//
function comenzar(){
    let enter = 
    document.getElementById("root").style.display= "none";
    document.getElementById("one").style.display= "none";
    document.getElementById("two").style.visibility="visible";
}
//definir alfabeto
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// desplazamiento a la derecha
encodeOffset = "right";
// desplazamiento a la izquierda
decodeOffset = "left";
//constantes para llamar funcion
const encode = document.getElementById("encode");
const decode = document.getElementById("decode");
const displayEncode = document.getElementById ("normaltext");
//llamar funcion al presionar botones
encode.addEventListener(click,function(){
    displayEncode.innerHTML=window.cipher.encode();
});


