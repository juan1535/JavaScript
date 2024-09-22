// function suma(a, b, c, d, e) {
//     return a + b + c + d + e;
// }

function suma(a, b, ...c) { //Los tres "..." es el parametro "rest" con el nombre evidentemente.

    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n;
    });

    return resultado;
}

console.log(suma(10,5,23,45,99));

const a = [1,2,3,4];
const b = [5,6,7,8];    // Concatenar = Unirlos

console.log(a.concat(b));

console.log(...a,...b);

console.log([...a,...b]);