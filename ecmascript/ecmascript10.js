//Metodo flat
console.log('== Metodo flat ==')

let arreglo = [1,2,3, [1,2,3, [1,2,3]]]; // esto es una matriz: arrays anidados
console.log(arreglo.flat(2)); // ese 2, es el valor de la profundidad


//Metodo flatMap
console.log('== Metodo flatMap ==')

arreglo2 = [1,2,3,4,5]
console.log(arreglo2.flatMap(value => [value, value * 2])); // 


//trimStart y trimEnd
console.log('== trimStart y trimEnd ==')
// Elimina los espacios en blanco y al final

let hola = '            hollo world';
console.log(hola);
console.log(hola.trimStart());

let hola2 = 'Holiii         ';
console.log(hola2);
console.log(hola2.trimEnd());


//fromentries
console.log('== fromentries ==')
// Devuelve un objeto, de un array o viseversa

let entries = [['name', 'Oscar'], ['age', 35]]
console.log(Object.fromEntries(entries));


//Objeto tipo symbol
console.log('== Objeto tipo symbol ==')

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);


// TC39 es la organización que plantea nuevos features en js