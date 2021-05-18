// Ecmascript 9

//Operador de reposo
console.log('== Operador de reposo ==')
// Me ayuda a separar los elementos de un objeto

const obj = {
    name: 'Oscar',
    age: 35,
};

let {name, ...all} = obj; //Con esto puedo separar el elemento name del resto del objeto
console.log(name, all);

// Esto imprime
// Oscar {age: 35, country: "CO"}

let {country, ...all} = obj; // En este caso, saca al country de lo que se imprime
console.log(all);

// imprimiendo esto
// {name: "Oscar", age: 35}


//Spread operator en objetos
console.log('== Spread operator en objetos ==')
// Tal como con los arrays, puedo hacer spread operator en los objetos

const obj1 = {
    ...obj,
    country: 'CO'
}

console.log(obj1);


console.clear();
//Finally en promesas
console.log('== Finally en promesas ==')
// Permite identificar cuando la promesa finalizó

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject (new Error('Test error'))
    });
};

// Ejecutando la función helloWorld
helloWorld()
    .then(response => console.log(response)) // La función se ejecuta  con el then/catch
    .catch(error => console.log(error)) // como parámetro lleva una función anónima
    .finally(() => console.log('Finalizó')) // Este es el finally


console.clear();
//Bloques de rejects
console.log('== Bloques de rejects ==')
// Permite segmentar en grupos definiendo expresiones regulares

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// Esta exp. regular dice numeros del 0 al 9 y son 4 digitos de año, y así con mes y día

const match = regexData.exec('2021-05-16'); // Esta variable recoge el reject
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
