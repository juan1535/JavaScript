const dias = [];

console.log(typeof dias);

dias.push('Lunes');
dias.push('Martes');
dias.push('Miercoles');
dias.push('Jueves');
dias.push(['Juan','Franco']);
dias.push('Viernes');
dias.push('Sábado');
dias.push('Domingo');

dias.splice(4, 2); //4 = primera posición ------ 2 = segunda posición, se cuenta desde la primera posición o sea, en este caso es 4 y 5.


// dias('Llegamos muy tarde a formación'); 

// console.log('Antes de eliminar',dias);

// dias.pop (); // Elimina la última posición //

// console.log('Después de eliminar',dias);


// console.clear();

// console.log(dias.length);

console.log('Saratruzta',dias);

for (let i = 0; i < dias.length; i++) {

    // console.log('Esto es i', i);
    

    console.log(dias[i]);    
}