// .find()

// El metodo find() es una de las formas mas comunes de buscar un elemento dentro de un array. Es una forma
// de iterar el array, comparando cada uno de los elementos con el valor que le pasamos por parametro.
// Si encuentra algun elemento que coincida con ese valor devuelve la posicion del primer elemento encontrado.

// ejemplo

let numeros = [10,436,45,74,33,99,2,54,'poncho']

let dato = numeros.find(num => num%2 !== 1 )
console.log(dato)
// En este caso, estamos buscando el primer numero par del array numeros. La funcion anonima (función arrow)

// .includes
// El metodo includes() devuelve verdadero si el array contiene al menos un elemento que coincida con el argumento

let find = numeros.includes(35)
// .some
// explica que es el metodo .some()
// el metodo some() devuelve true si al menos un elemento en el array cumple la condicion especificada y false en
// en este codigo validamos si almenos un elemnto del array cumple con ser <0
let some = numeros.some(num => num<0)
// some no nos dice exactamente cual
let some2 = numeros.some(num => typeof num === 'string')
console.log(`hay un string en el array?? ${some2}`)

// every
// explica metodo el metodo .every()
// en este codigo verificamos si todos los elementos del array cumplen con una condicion retornando true o false dependeiendo

let everyArray = ['hola', 'hola2', 'hola3']

let every = everyArray.every(num => typeof num === "string")

console.log(`todos los elementos son strings???: ${every}`)