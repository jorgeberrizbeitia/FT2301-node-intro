console.log("probando con node!");


let sum = 2 + 10;
let message = `${sum} es la suma`

console.log(message);

require("./test.js") 
// 1. ejecutar todo el codigo de test.js
// require es busca un modulo y ejecutalo

const receivedData = require("./data.js")
// 1. ejecutar todo el codigo de data.js
// 2. recibir algo de data.js
console.log(receivedData)


// paquetes
const superheroes = require('superheroes');

let randomSuperhero = superheroes.random();
console.log(`Mi nombre de superheroe es: ${randomSuperhero}`)