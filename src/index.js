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

//funcion de cifrar y de aparecer en ambos textos
const encode=()=>{
    
//variables de cadena y desplazamiento  
let string = document.getElementById("encodeText").value;
document.getElementById("encodeText").value = "";
let offset = document.getElementById("shift").value;
    document.getElementById("decodeText").value = window.cipher.encode(offset,string);
     //console.log(window.cipher.encode())

};

//llamando boton cifrar
document.getElementById("cipher").addEventListener("click", encode);
///////////////////////////////////////////////////////////////////////

//funcion de descifrar y de aparecer en ambos textos
const decode=()=>{
    
    //variables de cadena y desplazamiento  
    let string = document.getElementById("encodeText").value;
    document.getElementById("encodeText").value = "";
    let offset = document.getElementById("shift").value;
        document.getElementById("decodeText").value = window.cipher.decode(offset,string);
         //console.log(window.cipher.encode())
    
    };
    
    //llamando boton descifrar
    document.getElementById("descipher").addEventListener("click", decode);









