let a = 5;
let b = 15;
let c = [];

const matematicas = function (a, b) {
    
    let resultado = [];
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    
    resultado.push(['Resultado suma es', suma]);
    resultado.push(['Resultado resta es',resta]);
    resultado.push(['Resultado multiplicacion es',multiplicacion]);
    resultado.push(['Resultado division es', division]);

    return resultado;
}

let resultado = matematicas(a, b);
console.log(resultado);
// console.log(resultado.length);


// console.log(suma(a, b));
// console.log(resta(a, b));
// console.log(multiplicacion(a, b));
// console.log(division(a, b));