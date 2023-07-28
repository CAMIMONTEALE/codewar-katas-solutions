//Given a string , say how many vowels are in it.
//The input string will only consist of lower case letters and/or spaces

//Example: Given "final fantasy", it should return 4.
// 1. separar la palabra en letras para poder contar cuantas letras hay.

function vowNum(word) {
  let vowelsCount = 0;
  const wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i++) {
    switch (wordArr[i]) {
      case "a":
        vowelsCount++;
        break;
      case "e":
        vowelsCount++;
        break;
      case "i":
        vowelsCount++;
        break;
      case "o":
        vowelsCount++;
        break;
      case "u":
        vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(vowNum("qanalai"));
