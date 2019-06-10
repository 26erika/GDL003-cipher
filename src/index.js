//ocultar segunda pagina
    document.getElementById("two").style.visibility="hidden";

//ejecutar funcion de comenzar//
let comenzar=()=>{
    
    document.getElementById("root").style.display= "none";
    document.getElementById("one").style.display= "none";
    document.getElementById("two").style.visibility="visible";
};
//llamar boton de comenzar//
document.getElementById("start").addEventListener("click",comenzar);

//funcion de aparecer en ambos textos
const encode=()=>{
//hacer que aparezca texto en ambas cajas ambas las traduce a mayusculas
    document.getElementById("decodeText").value = window.cipher.encode();
     //console.log(window.cipher.encode())

    //encodeT.innerHTML = 
    
  
};

//llamando boton cifrar
document.getElementById("cipher").addEventListener("click", encode);

 









