// objetos

let alumno = {
    nombre:'poncho',
    edad:21,
    sucriptor:true,
    ciudad:'lima'
}
// para acceder a un solo atributo del objeto o tambien podemos acceder con la nomenclaturoa de los arrays
console.log(alumno.ciudad)
console.log(alumno["suscriptor"])
// este va adevolver un array con los valores del obejeto
let valores = Object.values(alumno)
// este nos va a permitir que valores tiene nuestro objeto como un array
let keys = Object.keys(alumno)


