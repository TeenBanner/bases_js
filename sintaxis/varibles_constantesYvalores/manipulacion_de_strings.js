// manipulacion de strings
// .slice() funciona igual que en los arrays recibe uno o 2 parametros para indicar la posicion de inicio y final del corte
let texto = "Alberto Junior Quiroga Muñoz"
texto.slice(3)
console.log(texto)

// .split()
// explica .split()
// el metodo split() divide un string en una matriz de substrings, y devuelve la matriz.

let split = texto.split(" ")
// este va a elminar los espacios del string devolviendonos un array con todos los demas elementos
// y separa el texto mediante el caracter que se selecciono como parametro
console.log(split)

// .search()
// El método search() busca un valor dentro de un string o en una matriz, y devuelve su posición.
// este recibe como parametro una expresion regular
let search = texto.search("")

// .to
// este nos va apermitir converitr un texto a diferentes letras