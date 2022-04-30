/* Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
Retorna el array resultante.

Sugerencia de array: */

const miarray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];



function swap(array,num1,num2){
    const valor1=array[num1];
    const valor2=array[num2];

    array[num1]=valor2;
    array[num2]=valor1;

    return array;
}


console.log(miarray);
swap(miarray,1,3);
console.log(miarray);