/* 
AND (&&)
OR (||)
*/
let a = 10
let b = 20
let c = 30

// saber si b es mayor que a y mayor que c
// este compara 2 y estas 2 deben de ser true
let resp = b > a &&  b > c
// este verfica si al menos una condicion se cumple 
let resp2 = b > a || b > a
// si juntamos estos 2 comparadores si una de las 2 expresiones devuelve false toda la expresion devueleve false
let resp3 = b > a  || b > c && c > a