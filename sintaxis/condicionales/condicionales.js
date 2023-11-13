// condicionales

const INVITACION = true
let edad = 17
let persona = `poncho`
if (INVITACION  == true && edad >= 18 || persona == `alexys`){
    console.log(`estas invitado puedes pasar: ${persona}`)
}
else if (INVITACION == true && persona == `poncho`){
    console.log(`esta bien solo no digas nada a los demas ${persona}`)
}
else{
    console.log (`no estas invitado no puedes pasar`)
}

// switch case

let edad2 = 17

switch (edad2){
    case edad2 < 15:
        console.log('estas muy peque ')
        break;
    case edad2 > 16:
        console.log('casiii pero aun muy peque')
        break;
    case edad2 >= 18 && edad2 < 65:
        console.log(`Puedes pasar: ${persona}`)
        break;
}