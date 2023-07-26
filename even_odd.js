// Instruction:Create a function that identifies if the given integer number is even or odd.
// Acá es preciso utilizar un operador, el de division para saber si hay residuo.
// se llama remainder  y es usado para saber el residuo de una division. Se representa asi %

function is_even_or_odd(int) {
  if (int % 2 == 0) {
    return "numbero par";
  } else {
    return "numero impar ";
  }
}
console.log(is_even_or_odd(13));
// me devuelve "impar"
