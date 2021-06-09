
// Promesas
const somethingWillHappen = () =>{ // Función de promesa
    return new Promise((resolve, reject) =>{ // return de nueva promesa con dos argumentos
        if (false){ // validación para ejecutar resolve o reject
            resolve('Hey!'); // Si es true, ejecuta el resolve
        } else {
            reject('Upsss!'); // Si es false ejecuta el reject
        }
    });
};

// Ejecutando función
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));



const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) => {
       if (true) {
           setTimeout(() => {
               resolve('True');
           }, 3000)
       } else {
           const error = new Error('Whoops!');
           reject(error);
       }
    });
}

//Ejecutando la función
somethingWillHappen2()
    .then(response => console.log(response)) //
    .catch(err => console.log(err)); // Como vasmos a controlar el error