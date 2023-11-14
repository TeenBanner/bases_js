// funciones flecha
// 1. se pueden utilizar para definir una función de manera mas concisa y sencilla, sin la palabra reservada
// estas funciones nos van a retornar el resultado de una expresion dentro de la misma linea
const sumar = (a,b) => a + b
console.log(sumar(5,5))
// cuando solo resivimos un parametro podemos evitar poner los parentesis
const saludar = nombre => {
    if (typeof nombre != "string"){
        console.log('el parametro debe de ser un string')
    }
    else{
        console.log(`hola!! ${nombre}`)
    }
}

console.log(saludar('juan'))

