// Qué hay de nuevo

//Matrices
console.log('== Matrices ==')

const data = {
    frontend: 'Oscar',
    backend: 'nobody',
    design: 'Eduardo'
}

const entries = Object.entries(data); // regresa una matriz, un arreglo de strings
console.log(entries);
console.log(entries.length);


//Object.values
console.log('== Object.values ==')
// Puedo crear un arreglo de strings con los valores ddde un objeto

const data2 = {
    frontend: 'Oscar',
    backend: 'nobody',
    design: 'Eduardo'
}

const values = Object.values(data2);
// Eso imprime esto (3) ["Oscar", "nobody", "Eduardo"]

console.log(values);
console.log(values.length);


//PadStart padEnd
console.log('== PadStart padEnd ==');
// antemone cadenas o elementos a los strings

const string = 'Hello';
console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(12, ' --------')); // el 12 es el maxlength
console.log('Food'.padEnd(12, ' --------'));

