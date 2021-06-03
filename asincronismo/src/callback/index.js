const sum = (num1, num2) => {
    return num1 + num2; //devuelvo los parámetros
}

const calc = (num1, num2, callback) => { // Se pone el nombre callback como standar
    return callback(num1, num2); // retorno el parámetro callback con los parámetros de la primera función
}

console.log(calc(6, 2, sum)); // Imprimo la segunda función con los parametros 
// de la primera


// Ejercicio 2
// 1ra función Date solo recibe un callback
const dateInfo = (callback) => {
    console.log(new Date);

    setTimeout(() =>{ // Dentro del timeout va todo
        let date1 = new Date;
        callback(date1) // El parámetro del callback es la variable
    }, 5000) // El tiemop de espera del timeout es de 5 secs
}

// 2da función, la que imprime los valores
const printDate = (dateNow) => {
    console.log(dateNow);
}

dateInfo(printDate); // Se imprime la 1ra función con el parametro de la 3ra