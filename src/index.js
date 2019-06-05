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
};
//llamando boton cifrar
document.getElementById("cipher").addEventListener("click", encode);
//funcion de aparecer en ambos textos
function encode(){
//hacer que aparezca texto en ambas cajas
    const encodeT = document.getElementById("encodeText").value;
    document.getElementById("decodeText").value = encodeT;
}; 




















