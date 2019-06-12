window.cipher = {
  //cifrar
  encode: (offset,string) => {

    let stringEncode = "";

    for (let i = 0; i < string.length; i++) {
      //busca el caracter en el codigo ascii        
      string.charCodeAt(i);
      console.log(string.charCodeAt(i));
      
      //caracteres --(x-32+n)%0-32         
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){

        let textCharMin =(string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
        stringEncode += String.fromCharCode(textCharMin); 
      
      //caracteres en mayusculas--(x-65+n)%26+65
      } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        
        let textChar = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
        stringEncode += String.fromCharCode(textChar);
       
      
      //caracteres en minusculas--(x-97+n)%26+122         
      } else if (string.charCodeAt(i) >= 32 && string.charCodeAt(i) <= 64){

        let characterEncode = (string.charCodeAt(i));
        stringEncode += String.fromCharCode(characterEncode);
      //cuenta los caracteres ingresados
      console.log(stringEncode);
      console.log(offset);
      } 
    }
    return stringEncode;
  },


decode: (offset,string) => {

  let stringDecode = "";


  for (let i = 0; i < string.length; i++) {
    //busca el caracter en el codigo ascii        
    string.charCodeAt([i]);
    console.log(string.charCodeAt([i]));
   
    //caracteres en mayusculas--(x-65+n)%26+65
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      
      let textCharE = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
      stringDecode += String.fromCharCode(textCharE);
     
    }
    //caracteres en minusculas--(x-65+n)%26+65         
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){

      let textCharMinE =(string.charCodeAt(i) + 97 - parseInt(offset)) % 26 + 97;
      stringDecode += String.fromCharCode(textCharMinE); 
       

    //cuenta los caracteres ingresados
    console.log(stringDecode);
    console.log(offset);
    
  }
 }
  return stringDecode;
},

};