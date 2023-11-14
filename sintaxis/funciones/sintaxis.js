// funciones

// piezas de codigo que son reutilizables y pueden ejecutarse n numero de veces
// function saludar(nombre){
//     console.log(`Hola ${nombre}`)
// }
// llama a la funcion

// parametros de una funcion estos sirven para darle argumento sa una funcion estos sirvencomo "variables de la funcion"
function saludar(nombre){
    console.log(`hola: ${nombre} que tengas un buen dia`)
}
// retorno de valores
function nombreCompleto(nombre,apellido){
    return `${nombre} ${apellido}`;
}

saludar('poncho')

console.log(nombreCompleto(`miguel`, `ramirez`))

// funciones de primera clase
// es decir una variable puede almacenar una función como cualquier otro valor 
const miFuncion = saludar()
//funciones anonimas

(function(a,b,c){
    console.log(a+b+c) 
}(2,3,5))

//funciones como constantes
const saludar = function(nombre){
    console.log(`hola ${nombre}`)
}

// scope
// el scope de una funcion hace referencia a que las variables alamacenadas en una funcion no se pueden usar fuera de la funcion porque solo existen dentro de la funcion
nombre = 'alexys'
function saludar2(nombre){  // sin el parametro se imprimiria el nombre alexys este parametro es una variable de una funcion
    console.log(`hola ${nombre}`)// al momento de indicarla nombre sera el valor del parametro
}         

/*podemos reasignar valores de variable globales dentro de la funcion que solo cambian en la funcion
function saludar(){
    nombre = 'juan' // aqui se hace una reasingacion de una varaible global amenos que el valor sea una constante
    console.log(`hola ${nombre}`)
}

tambien podemos declarar variables dentor pero estas solo tienen alcance dentro de la funcion 

*/
