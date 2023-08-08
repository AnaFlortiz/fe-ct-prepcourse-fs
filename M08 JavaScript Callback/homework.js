/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   var mayuscula = nombre[0].toUpperCase()
   return mayuscula + nombre.slice(1);
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
}

function invocarCallback(cb) {
   cb();
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
}

function operacionMatematica(num1, num2, cb) {
  return cb(num1,num2);
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
}

function sumarArray(arrayOfNumbers, cb) {
   var sumaArray = 0;

   for (var i = 0; i < arrayOfNumbers.length; i++) {
      sumaArray += arrayOfNumbers[i];
   }
   cb(sumaArray);
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
}

function forEach(array, cb) {

   for (var i = 0; i < array.length; i++){
      cb(array[i]);
   }
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
}

function map(array, cb) {
   var resultado = []

   for (var i = 0; i < array.length; i++){
      resultado.push(cb(array[i]));
   }

   return resultado;

   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
}

function filter(arrayOfStrings) {
   var comienzaConA = [];

   for (var i = 0; i < arrayOfStrings.length; i++) {
      if(arrayOfStrings[i].charAt(0) === 'a'){
         comienzaConA.push(arrayOfStrings[i])
      } else {
         continue 
      }
   }
   return comienzaConA;
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
