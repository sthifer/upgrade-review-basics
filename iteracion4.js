/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y
un texto y devuelve la posición del array cuando el valor del array sea igual al valor del
texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

Sugerencia de función: */

function findArrayIndex(array, text) {

    for (const iterator of array) {
        
        if (iterator===text){
            return array.indexOf(iterator);
        }

    }
}

const miarray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

console.log('Posición para Caracol ->',findArrayIndex(miarray,'Caracol'));

console.log('Posición para Salamandra ->',findArrayIndex(miarray,'Salamandra'));