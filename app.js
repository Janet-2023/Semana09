
// Ejercio 01 //
function potencia(x, n){
    return (Math.pow(x, n))
}
//console.log(potencia(5, 2))


// Ejercio 02 //

let arreglo = [1, 2, 3]
function sumaCubos(arreglo){
let suma = 0;
for( let i = 0; i < arreglo.lenght; i++){
    suma = suma + Math.pow(arreglo[i], 3)//1
    suma = 1 +8
    suma = 9 + 27 
}
}
//console.log(arreglo.length)

// Ejercio 03 //


   let name= 'Mili';
   let  lasName= 'Perez';
  let age=  33;

let saludo = ( `Hola mi nombre es ${name} ${lasName} y mi edad es ${age}.`);
console.log(saludo)

/* Ejercio 04 Crear una función que reciba n cantidad de
 argumentos y los sume ( utilizar parametros rest)
*/
function suma(...sum){
    let total = 0;
    for (const x of sum){
        total += x;
    }
    return total;
}
//console.log(suma(1, 2, 3, 4));


// Ejercio 05 //
/*Crear una función que reciba un array de valores y filtre los valores que no son
string. */
function  filtrar(valores){
    let string = valores.filter (number  => typeof number === 'string');
console.log(string);
}

filtrar( ["nombre", 1, "apellido", 2, 'edad', 3 ]);

// Ejercio 06 //
/* Cree una función que tome una array de números y devuelva 
los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 */
function numeros(){
 console.log(Math.max(numeros));
 console.log(Math.min(numeros));
}



// Ejercio 07 //