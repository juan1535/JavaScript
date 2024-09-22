const numeros = [1, 2, 3, 4, 5];

let uno = [0],
    dos = [1],
    tres = [2],
    cuatro = [3],
    cinco = [4];

console.log(uno, dos, tres, cuatro, cinco);

const [a, b, c, d, e] = numeros;

const persona = {
    nombre: 'Juan',
    apellido: 'Franco',
    edad: 20
};

let { nombre, apellido, edad, ciudad = 'Bucaramanga'} = persona;

console.log(apellido);


let color = "Verde"
let marca = "Chevrolet"

const carro = {
    color,
    marca
}

console.log(carro);
