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

/* Para evitar que esto parseFloat, es mejor declararlas al inicio del código
Si tengo que usar unescape, tengo que irme hasta el inicio y declararla ahí */


// === Coersión ===
/* Es cambiar los tipos de valores (Ejem: de number a string) */

// Coersión implicita
//Cambia el tipo de dato automáticamente

let coer1 = 4 + '7';
console.log(typeof coer1); // Imprime '47' como string

// Coersión explicita
// El cambio de tipo de dato, se hace de manera obligada

let a = '20';
let b = a + '';

typeof b;

let c = String(a);

console.log(c);

let d = Number(c);

typeof d


