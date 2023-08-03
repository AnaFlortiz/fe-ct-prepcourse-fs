/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   return(array[0]);
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
}

function devolverUltimoElemento(array) {
   return (array[array.length - 1]);
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
}

function obtenerLargoDelArray(array) {
   return(array.length);
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   var arrayMasUno = array.map((num) => {
      return num + 1;
   })
   return arrayMasUno;
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   array.push(elemento);
   return(array);
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
   array.unshift(elemento);
   return(array);
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
}

function dePalabrasAFrase(palabras) {
   return palabras.join(' ');
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
}

function arrayContiene(array, elemento) {
   return array.includes(elemento);
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   return arrayOfNums.reduce((a, b) => a + b, 0);
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   var promedio = 0;
   var suma = 0

   for ( var i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];
      promedio = suma / resultadosTest.length;
   }
   return promedio;
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(arrayOfNums) {
   return Math.max.apply(null, arrayOfNums);
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}

function multiplicarArgumentos() {

   if (arguments.length === 0) {
      return 0;
   } 

   var producto = 1;
         
   for (var i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
   }
   return producto;
}

function cuentoElementos(array) {
   var numMayores = [];

   for (var i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         numMayores.push(array[i]);
      }
   }
   return numMayores.length;
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return ('Es fin de semana');
   } else {
      return ('Es dia laboral');
   }
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   var numString = num.toString();
   var numSeparado = numString.split('');

   if (numSeparado[0] == 9) {
      return true;
   } else {
      return false;
   }
      // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

}

function todosIguales(array) {
   for (var i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
         return true;
      } else {
         return false; 
      }
   }
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {
   var eneMarNo = [];

   for (var i = 0; i < array.length; i++) {
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
        eneMarNo.push(array[i]);
      }
   }
   if (eneMarNo.length == 3) {
      return eneMarNo;
   } else {
      return "No se encontraron los meses pedidos";
   }
}
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:


function tablaDelSeis() {
  var tablaMultiSeis = [];

  for (var i = 0; i <= 10; i++) {
   tablaMultiSeis.push(6 * i)
  }

  return tablaMultiSeis;
}
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

function mayorACien(array) {
   return array.filter(num => num > 100);
   //var numMayoresACien = [];

  // array.forEach((num) => {
    //  if (num > 100) {
     //    numMayoresACien.push(num);
   //   }
  // } ) ;

   //return(numMayoresACien);
}
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   var total = [];
   var i = 1;

   while (i <= 10) {
      i++;
      var nuevoNumero = num += 2;
      total.push(nuevoNumero);

      if (nuevoNumero === i) {
         break;
      }
   }
   if (i < 10) {
      return 'Se interrumpió la ejecución'
   }
   return total;
}

   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:


function continueStatement(num) {
   var nuevoArray = [];
   var i = 1;

   while (i < 10) {
      i++;
      num += 2;
      nuevoArray.push(num); 
      
      if (i === 5) {
         continue;
      }
   }
      return nuevoArray;
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
