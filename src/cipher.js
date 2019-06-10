window.cipher = {
  //cifrar
  encode: function () {
    //variables de cadena y desplazamiento  
    let string = document.getElementById("encodeText").value.toUpperCase();
    document.getElementById("encodeText").value = "";
    let offset = document.getElementById("shift").value;
    
    //cuenta la longitud de la cadena 
    let size = string.length;
    let lastPosition = size;

    let stringEncode = "";

    
    for (let i = 0; i < lastPosition; i++) {
      //busca el caracter en el codigo ascii        
      string.charCodeAt([i]);
      console.log(string.charCodeAt([i]));
      //caracteres en mayusculas--(x-65+n)%26+65
      
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        
        let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
        stringEncode += String.fromCharCode(textChar);
        /*//caracteres en minusculas--(x-65+n)%26+65         
                     }else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
                          textChar =(string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                          string += String.fromCharCode(textChar);*/
      }
      //hacer que aparesca en la caja inferior?????    
      //cuenta los caracteres ingresados
      console.log(stringEncode);
      console.log(offset);


    }

    return stringEncode;
  },

};
