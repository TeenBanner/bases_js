// arrays

let amigos = ['pedro','gabriel','Erick', 'daniel']

console.log(amigos)
console.log(amigos.length)

// agregar elementos a un array con metodo .push
amigos.push('poncho')
console.log(amigos)
// eliminar ultimo elemento de un array con el metodo pop()
let datos = amigos.pop()
// este metodo retorna el ultimo elemento de un array y lo elimina
console.log(datos)
// partir el array en 2 arrays usando .slice()
let mitad1 = amigos.slice(0, 2) // definimos el rango de division en este caso va a generar un nuevo array con los 2 primeros elementos del array
// indicamos que iniciamos desde la posicion 0 hasta antes de la posicion 2 (el anterior al 2) el resultado va a ser un nuevo array pero el array original no se ve modificado

//iterar los elementos de un array con .foreach() este nesecita una funcion como parametro
let foreach = amigos.forEach(function(amigo){
    console.log(`hola ${amigo}`)
})
// foreach con funcion flecha (tenemos que tener claro que foreach no nos devuelve nada este solo modifica el array)
let foreach2 = amigos.forEach(amigo => {console.log(amigo)})
console.log(foreach2)


// .map() si me devuelve un array con lo que retorna cada ciclo 
let arraymap = amigos.map(amigo => `hola!: ${amigo}`)
