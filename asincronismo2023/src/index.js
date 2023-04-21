//Uso de una funciòn como argumento de otra
const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const calc = (num1, num2, operation) => {
    return operation(num1, num2);
}

console.log(`La suma es ${calc(4, 2, add)}`);
console.log(`La resta es ${calc(4, 2, subtract)}`);

//Set time out

setTimeout( () => { // ()=> arrow funcion anonima
    console.log('Hola Javascript')
}, 5000) //tiempo que se esperarà en milisegundos

const gretting = (name) => {
    console.log(`Hola ${name}`);
}

//Set time out recibe cualquier funcion, ya se anonima o creada
setTimeout(gretting, 2000, 'Oscar'); //'Oscar' es el argumento que recibe la funcion