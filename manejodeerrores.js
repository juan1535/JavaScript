try {
    // Agregamos el código que vamos a evaluar
    console.log("Código a evaluar");
    codigo;
    console.log("Que pasará en este lugar");
} catch (error){ 
    console.log("Mensajes o manejadores de errores");
    console.log(error);
} finally {
    console.log("Siempre se ejecuta");   
}

try {
    // let numeros = "letras";
    let numeros = 10;
    if(isNaN(numeros)) 
        throw new Error("Mensaje que le pondremos o le mostraremos al usuario");
    console.log(numeros * numeros);
} catch (error) {
 console.error(`Se produjo el siguiente error: ${error}`);
}