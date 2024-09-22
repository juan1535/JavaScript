const persona = {
    nombre: 'Juan',
    apellido: 'Franco',
    edad: 38
}

console.log(persona);

for(const propiedad in persona) {
    console.log(`Llave ${propiedad}, valor: ${persona [propiedad]}`);
    // console.log(persona.edad);
}

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

let palabra = "Validando lo más bpasico de JS";
for (const caracter of palabra) {
    console.log(caracter);
}
