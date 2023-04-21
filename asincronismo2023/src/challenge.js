//1. importo la libreria de xmlhttprequest como una variable
const XMLHttpRequest = require('xmlhttprequest');

// 2. guardo la API en una variable
const API = 'https://api.escuelajs.co/api/v1';

//Funciòn del llamado http
const fetchData = (urlApi, callback) =>{
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readystate === 4){
            if(xhttp.status === 200){ //si el servidor respondiò de forma correcta
                callback(null, JSON.parse(xhttp.responseText))
            }
        }
        else{
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }

    xhttp.send();
}

fetchData(`${API}/products`, function(error1, data){
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1}`)
})