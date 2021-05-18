//Includes
console.log('== Includes ==')
// Valida si en un array existe un determinado elemento

let numbers = [1,2,3,7,8];

if (numbers.includes(7)){
    console.log(`${numbers} Si tiene ese numero`)
} else {
    console.log(`${numbers} no tiene ese numero`)
}


//Exponencias
console.log('== Exponencias ==')
// Puedo elevar numeros a potencias con ***

let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);