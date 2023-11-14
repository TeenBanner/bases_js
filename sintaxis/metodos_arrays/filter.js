// filter

let numeros = [10, 436, 45, 74, 33, 9, 2, 54]
let nuevoarray = []
// filtrar numeros > 20
numeros.map(num => {
    if(num > 20){
        nuevoarray.push(num)
    }
})

console.log(nuevoarray)
// .filter nos va regresar un nuevo array nosotros le vamos a pasar una funcion que haga una comparacion (esta tiene que dar como resultado true)
let numerosFiltrados = numeros.filter(num => num>20)
console.log(numerosFiltrados)


