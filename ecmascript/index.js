/ Curso ECMSscript 6

// 1 FUNCIONES
// Antes las funciones se definían así
function newFunction(name, age, country){
    var name = name || 'Oscar';
    var age = age || 35;
    var country = country || 'CO';
    console.log(name, age, country); 
}

// Con es6 se puede establecer desde la asignación de los parámetros
// Como efectivamente yo aprendí
function newFunction2( name = 'Oscar', age = 35, country = 'CO' ){
    // el = 'Oscar' es el valor que le asigno por defecto, si el parámetro no tiene valor
    console.log(name, age, country);
}

newFunction2()
newFunction2('Marce', 33, 'CO')
// Le asignaba el valor que recibía o un valor por defecto que yo definía


// 2 TEMPLATE LITERALS (lo conozco como interpolación)
console.log('== Concatenación ==')

let hola = 'Hello',
    world = 'world';

// Antes era así
let epicPhrase = hola + ' ' + world;
console.log(epicPhrase);


// Ahora se puede así, más intuitivo
let epicPhrase2 = `${hola} ${world} my friend`
console.log(epicPhrase2);
	
	
//Multilinea
console.log('== Multilinea ==')

// Antes
let lorem = 'Esta es la primera linea vieja \n'
+ 'Esta es la segunda línea vieja';

// ES6
let lorem2 = `Esta es la primera linea nueva
Esta es la segunda linea nueva`;

console.log(lorem);
console.log(lorem2);

//Destructuración
console.log('== Destructuración ==')
// Nueva forma como accedo a elementos de un objeto


const pollo = {
    name: 'Oscar',
    age: 35,
    country: 'CO'
}

// Antes
//console.log(pollo.name, pollo.age)

// ES6
let {name, age, country} = objeto;

console.log(name, age, country);

// Que pasa si quiero imprimir en consola los elementos de 2 onjetos diferentes


//Spread operator (de propagación)
console.log('== Spread operator (de propagación) ==')
// Me permite unir arrays

let team1 = [ 'Maradona', 'Pele', 'Cruyff' ];
let team2 = [ 'Zidane', 'Ronaldinho', 'Ronaldo' ];

let megaTeam = ['Messi', ...team1, ...team2];

console.log(megaTeam);


//var, let y const
console.log('== var, let y const ==')
// Para más info de esto remitirme al curso de Jon Mircha

//Objetos literales
console.log('== Objetos literales ==')

let name = 'Oscar';
let age = 35;

// Antes
obj = { name:name, age:age };

// ES6 On¡bjeto literla
obj2 = {name, age};

console.log(obj);
console.log(obj2);


//Arrow functions
console.log('== Arrow functions ==')


const names = [
    {name: 'Oscar', age: 35},
    {name: 'Marce', age: 33},
]

//== Uso en métodos de arrays ==
// Estas son funciones anónimas 👇
let nameList = names.map( function(item){
    console.log(item.name)
});

// Estas también son anónimas 👇 pero como arrow function
let nameList2 = names.map( item => console.log(item.name));


// == Uso como funciones ==

// Acá van los ...👇 parámetros
const nameList3 = (name, age) => {
    //...
}

//Solo un parámetro👇 
const nameList4 = name => {
    //...
}

const square = num => num + num;


//Promesas
console.log('== Promesas ==')
// promesas en programación: Algo va a pasar
// Evitan el callback hell

const helloPromise = () => {

    // retornamos la promesa de que algo va a pasar
    return new Promise((resolve, reject) => { // llos parametros de la función de promesa son resolve y reject
        if (true){
            resolve('Bien!');
        } else {
            reject('upss!!');
        }
    });
}

// Llamar la promesa
helloPromise()
    .then(response => console.log(response)) // Si es true response llama la respuesta (Bien)
    .catch(error => console.log(error)); // Si sale false, trae el error (Ups)
    

//Clases
console.log('== Clases ==')

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const Calc = new calculator();
console.log(Calc.sum(2,2));

// Para más info, ir al curso de jon Mircha


//Import / export
console.log('== Import / export ==')
// Puedo dividir la lógica 

/* Esto está en el archivo module.js
const hello = () => {
    return 'Hello!';
}
export default hello; */

import {hello} from './module';

hello();


//Generators
console.log('== Generators ==')
// No entiendo la aplicación practica, debo investigarlo

// El * indica que es un generator
function* helloWorld() {
    if (true){
        yield 'Hello, ';
        // Ese termino yield se maneja en los generators
    }
    if (true) {
        yield 'World';
    }
};

// Ejecución del generator
const generatorHello = helloWorld(); // Ejecutoel generator de la función de arriba (helloWorld)
console.log(generatorHello.next().value); // El valor next permite ejecutar la primer lógica y pasar a ejecutar el siguiente Yield
console.log(generatorHello.next().value);
console.log(generatorHello.next().value); // Este imprime undefined porque ya no hay más yield