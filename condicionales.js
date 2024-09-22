// let edad = 20;
let horario = 11;

if (edad > 17 && horario > 10) {    // Si después de la condicional solo hay una línea de código no hace falta agregar las {} y se puede escribir en la misma linea de código.
    console.log("Puedes retirarte cumples con las condiciones");
} else {
    console.log("No puedes retirarte no cumples con las condiciones");
    
}

// console.log("Ni idea");

/**
 * Estamos dormidos 0H - 5H
 * Buenos dias 6H - 11H
 * Buenas tardes 12H - 18H
 * Buenas noches 19H - 23H
 */

let edad = 17;
let esmayor =(edad >= 18)
    ? 'Es mayor de edad'
    : 'Es menor de edad';

    console.log(esmayor)

let dia = 3;

switch (dia) {
    case 1:
    console.log('Lunes');
    break;
    case 2:
    console.log('Martes');
    break;
    case 3:
    console.log('Miércoles');
    break;
    case 4:
    console.log('Jueves');
    break;
    case 5:
    console.log('Viernes');
    break;
    case 6:
    console.log('Sábado');
    break;
    case 7:
    console.log('Domingo');
    break;

    default:
    console.log('No es un día valido');
    break;
}