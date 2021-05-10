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
    console.log(`Hola ${estudiante}`)
    }

saludarEstudiantes(Oscar)

const func3 = () =>{

}