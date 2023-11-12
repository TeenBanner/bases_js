/* los tipos de datos en js tenemos
number = int, float todos los tipos de numeros
string = string,cadena, etc... los strings se pueden escribir con "" ''
Boolean = true o false
*/
// number
console.log(typeof 50.12)
// string
console.log(typeof 'poncho')
// boolean
console.log(typeof true)

/* datos complejos 
[] array
{} objeto
*/
// un array es un objeto que guarda mas datos con un indice numerico
let array = ['jose', 'juan', 'pepe']
// este indice comienza desde el 0 
console.log(array[0])
console.log(array.length)
// los objetos son una coleccion de datos que tiene un identificador ejemplo
let objeto = {
    'uno': 1,
    'dos': 2,
    'tres': 3
}
/* null
* es un valor nulo el cual es un aunque no cumpla con las caracteristicas es un objeto
* null representa que algo no tiene valor
*/

objetoNuevo = null

/* undefined
* undefind es un tipo de dato indefinido es decir no tiene nada 
*/

/* Variables 
 las variables son como una caja donde podemos meterle valores es decir es un espacio de memoria el cual contiene un dato
 las variables se pueden declarar con las palabras reservadas
 var y let la diferencia es que var se ve le limitado el uso de la variable y let es una forma mas nueva de declarar una variable por eso es mejor utilizar let
 esta es la sintaxis:
*   let variable = valor

las variables si no se les asigna ningun dato su valor sera undefind esto nos causara errores si nosotros tratamos de acceder al valor de esta variable


 tambien existen las constantes estos son lo mismo que las variables con la diferencia de que estas son imutables es decir que estas no pueden modificar su valor en tiempo de ejecucion
 el valor que se les asigna no se puede volver a cambiar 

*/