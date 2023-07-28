//Instruction: Given a string, reverse the word. reverseString(“hello”) should become “olleh”

//Para solucionarlo,
//1. el string debe ser primero dividido en letras,Es decir que debe ser
//convertido a un array, o conjunto de múltiples letras. Con el método split.(convierte string a array)

//2. Teniendo este array, debemos utilizar un método para reversar el orden con reverse
//(reversa el orden de un array)

//3. Debemos re convertir el array en string. con el método join, que me brinda un string separado por comas.
//(convierte array en string)

const reversedWord = function (str) {
  return str.split("").reverse().join();
};
