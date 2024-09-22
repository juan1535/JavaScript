let contador = parseInt(prompt("Ingrese el número"));

while (contador < 10) {
    console.log('While', contador);
    contador++;
}

do {
    console.log('Do while', contador);
    contador++
} while (contador < 10);