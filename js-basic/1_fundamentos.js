// == Valores ==
// Primitivos

40 // Numero

'Oscar Gonzalez' // String

true
false // Boolean

null
undefined // empty values

// Compuestos
[1,2,3] // Array

{nombre: 'Oscar';edad: 35} // Object

// === Variables ===

var nombre = 'Oscar';

// Declarar
var edad;

// Inicializar
edad = 35;

var elementos = ['laptop', 'movil'];

// elementos imprime esto: (2) ["laptop", "movil"]
// elementos[1] imprime: "movil"

var persona = {
    nombre: 'Oscar',
    edad: 35,
}

persona


// === Funciones ===
//Conjunto de sentencias que devuelven un resultado
// Declarativas
function miFuncion(){
    return 3
}

// Expresion / Anonimas
const func2 = function(a,b){
    return a + b
}
func2(4,3)

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
    }

saludarEstudiantes(Oscar);

function sumar(a,b){
    let resultado = a + b;

    return resultado;
}

sumar(76,89);


// === Scope ===
/* El scope es el alcance a las variables, hay variables afuera de las funciones
 (Scope global) y adentro de las funciones (Scope local). las funciones pueden 
 acceder a las variables locales, pero no se puede acceder a las variables
locales */

let miNombre = 'Oscar';

function nombre(){
    let miApellido = 'Gonzalez';

    console.log(miNombre + ' ' + miApellido);
}

nombre();


// === Hoisting ===
/* Es cuando las variables o funciones se declaran al inicio del código, 
antes de que se ejecute cualquier línea de código */

/* Para evitar que esto pase, es mejor declararlas al inicio del código
Si tengo que usar unescape, tengo que irme hasta el inicio y declararla ahí */


// === Coersión ===
/* Es cambiar los tipos de valores (Ejem: de number a string) */

// Coersión implicita
//Es cuando el lenguaje nos ayuda y cambia el tipo de dato automáticamente

let coer1 = 4 + '7';
console.log(typeof coer1); // Imprime '47' como string

// Coersión explicita
// El cambio de tipo de dato, se hace de manera obligada

let a = 20;
let b = a + '';

typeof b; // 'string'

let c = String(a); //Metodo de coersión explicita

console.log(c);

let d = Number(c);

typeof d // 'Number'


console.log('Truthy & Falsy')
// === Truthy & Falsy===

Boolean();

//*** FALSE ***
// 0 : false sirve para iniciar algoun evento (Si el numero de asistentes es 0, no iniciar)
// null : false
// NaN : false
// undefined : false
// false : false
// "" : false - string vacío es false

//*** TRUE ***
// ''hola : true - cualquier string con algo
// 1 ... : true - cualquier número diferente de 0, hasta negativos
// {} : true - objeto vacío
// [] : true - true vacío
// 

console.clear()
console.log('operadores')
// === operadores===

// operadores matemáticos
3 + 2
50 - 10
10 * 20
20 / 2

'Oscar' + 'Gonzalez'

!false // El ! es un operador unitario y niega la declaración, osea true

// Operadores de comparación
3 == '3'; // Compara el valor, no el tipo de valor : true

3 === '3' // Valida el dato y el tipo de dato : false

5 < 3 // comparación 5 es menor a 3, false 
5 > 3 // comparación 5 es menor a 3, false 

5 <= 6 // Validación de 2 pasos, una de las 2 se cumple : true
5 >= 6 // Validación de 2 pasos, ninguna se cumple : true

a && b // Si ambas es verdad, se cumple una condición

a || b // Si al menos alguna de estas es verdad, se cumple una condición

// Operadores de incremento
let age = 40
age++ // 41
age +=2 // 42


console.log('Condicionales')
// === Condicionales===

// == if ==

let age2 = 18;

if(age2 === 18){
    console.log('Puedes votar por primera vez');
} else if (age2 > 18){
    console.log('Vuelve a votar');
} else {
    console.log('NO puedes votar');
}


// == Operdor ternario ==
// condicion 
// ? true 
// : false

// Ejemplo
let num1 = 1;

num1 === 1
? 'Si soy un 1'
: 'No lo soy'


// Ejercicio

/* Piedra papel o tijera
Generar variables piedra, papel o tijera
Generar logica de validación
Encapsular logica en una funcion */

let opc1 = 'Piedra',
    opc2 = 'papel',
    opc3 = 'tijeras';

const juego = (user, cpu) => {
    if (user === cpu){
        console.log('Empate! vuelve a jugar')
    }else if ( user === opc1 && cpu === opc3 ){
        console.log(`El usuario gana con ${opc1}`);
    } else if(user === opc2 && cpu === opc1){
        console.log(`El usuario gana con ${opc2}`);
    } else if(user === opc3 && cpu === opc2){
        console.log(`El usuario gana con ${opc3}`);
    } else {
        console.log('Gana la máquina');
    }
}
    
juego(opc1, opc3);


console.log('Switch')
// === Switch===

// No es un condicional, está hecho para validar casos
let num2 = 1;

switch (num2) {
    case 1: 
        console.log('Soy uno');
        break;
    case 10: 
        console.log('Soy un diez');
        break;
    case 100: 
        console.log('Soy un cien');
        break;
    default:
        console.log('No soy nada');
}

// ejercicio

let opt1 = 'stone',
    opt2 = 'paper',
    opt3 = 'scissors';

const game2 = (user2, cpu) =>{

    switch (true){ // Si no es claro el valor que se valida, se valida con true
    case user2 === cpu:
        console.log('Empate! vuelve a jugar');
        break;
    case user2 === opt1 && cpu === opt3:
        console.log(`Gana el usuario con ${opt1}`);
        break;
    case user2 === opt2 && cpu === opt1:
        console.log(`Gana el usuario con ${opt2}`);
        break;
    case user2 === opt3 && cpu === opt2:
        console.log(`Gana el usuario con ${opt3}`);
        break;
    default:
        console.log('Gana la máquina')
    }
}

game2(opt2, opt3);


console.log('Estructuras de datos')
// === Estructuras de datos===

console.log('Arrays')
// === Arrays===

const frutas = ['manzanas', 'platano', 'cereza', 'fresa'];

console.log(frutas);
console.log(frutas.length); // length me muestra la cantidad de elementos del array
console.log(frutas[0]); // Accedo al primer valor del array

// Metodos de arrays
// Ayudan a cambiar el contenido del array

const masFrutas = frutas.push('uvas'); // push agrega un elemento al final
const last = frutas.pop('uvas'); // pop retira un elemento al final
const newFruit = frutas.unshift('Durazno'); // unshift agrega un elemento al inicio
const deleteFruit = frutas.shift('uvas'); // shift retira un elemento al inicio

const position = frutas.indexOf('cereza');



console.log('== Ciclos ==')
// === Ciclos===

console.log('For')
// === For===

let students = ['pepe', 'rosa', 'mario', 'clara']; // 1. Defino el array

const hiStudents = (student) =>{ // 2. Defino una función que salude a los estudiantes
    console.log(`Hola, ${student}`) // el parámetro de la función es estudiante y lo llamo en la interpolación
}

for (let i = 0; i < students.length; i++){ // 3. Hago que el ciclo recorra todos los indices del array
    hiStudents(students[i])
}


console.log('For of')
// === For of===

let students2 = ['pepe', 'rosa', 'mario', 'clara']; // 1. Defino el array

const hiStudents2 = (student2) =>{ // 2. Defino una función que salude a los estudiantes
    console.log(`Hola, ${student2}`) // el parámetro de la función es estudiante y lo llamo en la interpolación
}

for ( student2 of students2 ){ // 3. student2 es el singular del grupo students2, se va a convertir en el índice
    hiStudents2(student2); //el estudiante 0 del array students2 manda llamar la función con el parámetro índice
}


console.log('While')
// === While===

let students3 = ['pepe', 'rosa', 'mario', 'clara']; // 1. Defino el array

const hiStudents3 = (student3) =>{ // 2. Defino una función que salude a los estudiantes
    console.log(`Hola, ${student3}`) // el parámetro de la función es estudiante y lo llamo en la interpolación
}

while (students3.length > 0){ // Mientras que estudiantes tenga más de un elemento...
    console.log(students3)
    let student3 = students3.shift();
    hiStudents3(student3);
}
// 3. En cada iteración el shift va a saludar al primer estudiante y lo elimina del array
// Hasta llegar a cero


console.clear()
console.log('== Objetos ==')
// === Objetos===

const miCarro = {

    // propiedades
    marca: 'Kia',
    modelo: 'Soul',
    annio: 2010,

    // metodos
    detalle: function(){
        console.log(`Carro ${this.modelo} modelo ${this.annio}`) // This hace referencia al padre, en este caso miCarro
    }
};

// Accediendo a los objetos
miCarro.marca
miCarro.annio
miCarro.detalle() // Como detalle es una función tengo que llamarlo con ()


console.clear()
console.log('== Función constructora ==')
// === Función constructora===

// Genera un template de un objeto para generar nuevas instancias de ese molde

// Traído de Jon Mircha
/* Clases: Molde o modelo a seguir
Objetos. Instancia de una clase
Atributos: Caracteristica  propiedad del objeto, son variables dentro del objeto
Métodos: Son las acciones que un objeto puede realizar son funciones dentro del objeto */

const miCarro2 = {

    // propiedades
    marca: 'Kia',
    modelo: 'ceratto',
    annio: 2015,

    // metodos
    detalle: function(){
        console.log(`Carro ${this.modelo} modelo ${this.annio}`) // This hace referencia al padre, en este caso miCarro
    }
};

function auto(marca, modelo, annio){// meto como parámetro las propiedades de la clase
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

const autoNuevo = new auto('tesla', 'Model 3', 2020)
const autoNuevo2 = new auto('tesla', 'Model X', 2021)
const autoNuevo3 = new auto('toyota', 'Corola', 2019)


// Ejercicio

const bicis = []
const marcas = ['Donsnoventa', 'Vendetta', 'Cinelli', 'Santafixie'];
const tipo = ['fixie', 'Coaster', 'Ruta', 'Gravel'];

function  modelBicis(marca, tipo, annio){
    this.marca = marca;
    this.tipo = tipo;
    this.annio = annio;
}

const cargarBicis = () =>{

    let fecha = new Date(+2019,09,01 + Math.random() * (2021,09,01 - 2019,09,01));
    // Esta variable genera una fecha aleatorio a la que solo le dejarñe el año con .getFullYear

    for (let i = 0; i <= 30; i++){
        bicis.push(new modelBicis(marcas[Math.floor(Math.random() * marcas.length)],tipo[Math.floor(Math.random() * tipo.length)], fecha.getFullYear()));
        // (Math.random());  Da un número aleatorio entre 0 y 1, lo multiplico por el length del array de marcas y eso me da un indice aleatorio
    }
}

cargarBicis();

const allBikes = bicis.push(Bici1, Bici2);


console.log('== Recorriendo arrays ==')
// === Recorriendo arrays===

// === Filter ===
const articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'Televisor', costo: 2500 },
    { nombre: 'Laptop', costo: 8000 },
    { nombre: 'Móvil', costo: 5000 },
    { nombre: 'Tecaldo', costo: 400 },
    { nombre: 'Audifonos', costo: 1500 },
    { nombre: 'Libro', costo: 50 },
]

const articulosFiltrados = articulos.filter( function(articulo){ // Esta sintaxis de funcion se aplica el metodo filter
    return articulo.costo <= 500 // Creando un nuevo array con los artículos filtrados
});

// === Map ===
// Genera un nuevo array con solo el valor de la propiedad nombre, de los artículos
const nombreArticulos = articulos.map( function(articulo){ // Esta sintaxis de funcion se aplica el metodo filter
    return articulo.nombre
});

/* El método find () devuelve el primer valor que coincide de la colección. 
Una vez que coincida con el valor en los resultados, no verificará los valores
restantes en la colección de matriz. El método filter () devuelve los valores
coincidentes en una matriz de la colección */

// === Find ===
// Va a buscar algo que esté dentro del array y va a generar un nuevo array con el resultado
const encuentraArticulos = articulos.find( function(articulo){ // Creo el parámetro artículo para usarlo dentro de articulos
    return articulo.nombre === 'Laptop'
});

encuentraArticulos


// === for each ===
// Recorre el array
articulos.forEach(function(articulo){ // El parametro de la función es un articulo de articulos
    console.log(articulo.nombre);
});


// === Some ===
// Este devuelve truo o false, no los resultados específicos

const articulosBaratos = articulos.some( function(articulo){
    return articulo.costo <= 700
});