// asignacion

let alumno
// =  este operador nos va a permitir asignar valores
alumno = 'juan'
// podemos guardar el resultado de una operacion dentro de la misma linea de codigo
// va a asignar el valor de la suma de a + b dentro de la variable 
let a = 1
let b = 2
a += b
console.log(a)
// este operador lo podemos utilizar con todos los demas operadores aritmeticos
// aritmeticos
// +, -, *, / y % (residuo) otro que vale la pena conocer es el operador de exponente o **

let operacion =  50 + 60
console.log(operacion)
console.log(5**7)

// el operador + lo podemos usar para hacer concatenaciones o bien dicho es un operador de concatenacion al momento de trabajar con textos
let nombre = "fernando"
let apellido = "vazquez"
// concatenacion mediante interpolacion o template strings
console.log(`mi nombre es: ${nombre} y mi apellido es ${apellido}`)

// operadores de comparacion
/*
    ES igual == (compara solo el valor)
    ES ESTRICTAMENTE IGUAL === (compara valor y tipo de dato)
    ES diferente != (verifica que los valores a comparar sean difertentes devuelve true en el caso que sean diferentes y false en el caso de ser iguales)
    ES ESTRICTAMENTE diferente !==
*/
/* cuando usamos operadores de comparacion estamos evaluando si una expresion devuelve true o false */
let comparacion1 = 50
let comparacion2 = "50"

console.log(comparacion1 == comparacion2) // esta comparacion va a devolver true

// js no le importa que los argumentos que le des le importa mas el valor de este por eso se pueden hacer comparaciones con strings y numeros 
// si nesecitamos que la comparacion sea estricta debemos de usar el operador === este si compara el tipo de valor
comparacion2 = 50

console.log(comparacion1 === comparacion2)

let diferente1 = 20
let diferente2 = "19"

console.log(diferente1 != diferente2)
// este compara el valor y el tipo de dato entonces sale true
console.log(diferente1 !== diferente2)
// operadores de comparacion 2 
/*
<
>
<=
>=
estos nos sirven para comparar si un valor es mayor/menor o mayo_o_igual/menor_o_igual
*/


console.log(diferente1 < diferente2)