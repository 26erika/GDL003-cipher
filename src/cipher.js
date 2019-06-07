window.cipher = {
  //cifrar
  encode : function() {

    const string = document.getElementById("encodeText").value.toUpperCase();
    document.getElementById("encodeText").value = "";
    const offset = document.getElementById("shift").value;

  console.log(string);
  console.log(offset);
  document.getElementById("encodeText").value = string;
    return string + offset

  /*const encodeT = "";
for (let i = 0; i = string.length;i ++ );{
  let character = string[i];
  if(character.match(/[a-z]/) >= 65 && string.charCodeAt(i) <= 90);



  }return encodeT; */
 }

} 
 
    
    