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

//funcion de aparecer en ambos textos
function encode(){
//hacer que aparezca texto en ambas cajas ambas las traduce a mayusculas
    const encodeT = document.getElementById("encodeText").value;
    document.getElementById("decodeText").value = encodeT.toUpperCase();
    
encodeT.innerHTML=window.cipher.encode();
    
  
}; 

//llamando boton cifrar
document.getElementById("cipher").addEventListener("click", encode);

 /*//definir string y offset    
    let displacement=document.getElementById("shift").value;
    let message =document.getElementById("encodeText").value;*/
/*console.log(decodeText());*/









