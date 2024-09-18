let nombre = "Juan";
var apellido = "Franco";
const PI = 3.141592653589793

console.log(window);
console.log('Inicial',nombre);
console.log('Inicial',apellido);
{
    let nombre = "Kurono";
    var apellido = "Kei";
    console.log('Bloque',nombre);
    console.log('Bloque',apellido);    
}



console.log('Fuera del bloque',nombre);
console.log('Fuera del bloque',apellido);
let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eligendi repellendus omnis sequi beatae esse praesentium voluptas soluta itaque doloribus!";
console.log(cadena.length);
console.log(cadena.toUpperCase());
console.log(cadena.includes('amet'));

let arreglo = cadena.split(' ');
console.log(arreglo.length - 1);

console.clear();

lunes = "lunes";
martes = "martes";
miercoles = "miercoles";

let lista = `<ul> 
    <li> ${lunes} </li>
    <li> ${martes} </li> 
    <li> ${miercoles} </li> 
    <li> Jueves </li>
    <li> Viernes </li> 
    <li> Sábado </li> 
    <li> Domingo </li> 
</ul>`

console.log(lista);

console.clear();

let a = 2;
let b = new Number(25);
let falso = false;

console.log(a);
console.log(b);


console.log(typeof a);
console.log(typeof nombre);
console.log(typeof falso);

let resultado = suma(8)
console.log(resultado);

function suma(a, b = 25) {
    return a + b;
}

const resta = function (a, b) {
    return a - b;
}

let restamos = resta (9, 25);
console.log(restamos);
