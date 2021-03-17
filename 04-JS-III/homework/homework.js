// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
    return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
        nuevoArray[i] = array[i] +1;
  }
  return  nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  //una manera:

    // array[array.length]= elemento;
    // return array;

    //manera más entendible por mí

    array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
   

  //una manera simple y horrible
   //return palabras.join(' ');
   //el metodo join une todos los elementos de una matriz en una cadena y devuelve esta cadena.s

   // otre manera
   var frase = palabras[0];

   for (let i = 1; i < palabras.length; i++) {
      
    frase = frase + " " + palabras[i];
   }
return frase;
   
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  //manera con el includes:

  // if (array.includes(elemento)) {
  //   return true;
  // }else{
  //   return false;
  // }
  //El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.


  //manera mas larga de henry:
  for(var i = 0; i < array.length; i++) {
    if(array[i] === elemento) {
      return true;
    }
  }
  return false;
  //lo que hace el for es recorrer el array hasta que encuentre el elemento,si al llegar al final
  //del array el elemento no está devuelve false,por el contrario,si lo encontró devuelve true
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  // var suma = numeros[0];
  // var numeros = [2,5,7,9,11]
  

  for(var i = 0; i < numeros.length; i++){
    //suma = suma + numeros[i]
    suma += numeros[i];

    //con  var suma = 0 el for haría esto al principio y suma empezaría en 2 
    //0 = 0 + 2
    // suma = 2

//con var suma = numeros[0] el for empezaria en 2 ya que es el primer valor del array
    //suma = 2
    //suma = suma + numeros[i]
    //ej suma = 2 + 2

  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

//el promedio es la suma de todos los elementos dividido por la cantidad de elementos

  // --- una manera con un valor nuevo: --- //

// var calcular = 0;
// var promedio = 0;
//   for (var i = 0; i < resultadosTest.length; i++) {
        
//     calcular = calcular + resultadosTest[i]; 
//     // promedio = promedio + resultadosTest[i]    
//   };
  
//   promedio = calcular / resultadosTest.length
// return promedio;



// --- Otra manera reutilzando una funcion anterior --- //

// return agregarNumeros(resultadosTest) / resultadosTest.length;

// --- Tercera manera parecida a la primera --- //

var suma = resultadosTest[0];
for (var i = 1; i < resultadosTest.length; i++) {
  
  suma += resultadosTest[i];
}
return suma / resultadosTest.length;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // var numeros = [1,2,3,4,5];
  var mayor = numeros[0];
 

  for (var i = 0; i < numeros.length; i++){
    if (numeros[i] > mayor){
          mayor = numeros[i];
    } ;
  };
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

// arguments es un objeto similar a Array accesible dentro de funciones que contiene los valores de los argumentos pasados a esa función.
  // --- Una manera --- //

  // if (arguments.length < 1) { return 0};
  // var total = 1;
  // for (var i = 0; i < arguments.length; i++){
  //   total = total * arguments[i]
  // }
  // return total;


  // --- Otra manera --- //
  if (arguments.length === 1) return arguments[0];
  else if (!arguments.length) return 0;

  var producto = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
     producto *= arguments[i];
    
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  var cantidad = 0
  for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] > 19) {
        cantidad++
      }

  };
  return cantidad;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

if(numeroDeDia === 1 || numeroDeDia === 7 ){  //porque 1 es domingo y 7 sabado
  return "Es fin de semana"
}
return "Es dia Laboral"
} 
  



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí:

  // var numero = n.toString();
  // if (numero.charAt(0) === '9'){ 
  //   //El método charAt() de String devuelve en un nuevo String el carácter ,que se solicite,de una cadena.
  //   //este charAt(0) se fija si el numero del array empieza con nueve
  //    return true;
  // }else{
  //   return false;
  // }

  // --- Otra manera --- // 

  var str = n.toString();
  if (str[0] === '9'){ return true}
  else{return false};

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  
  // --- una manera --- //
  //  for (var i = 0; i < arreglo.length -1; i++) { //si el i es menor que el ultimo elemento del array
  //     if (arreglo[i] !== arreglo[i +1]) {
  //       return false;
        
  //     }else{
  //       return true;
  //     } 
  //  }


  // --- Otra manera --- //

var comparacion = arreglo[0];
for (var i = 1; i < arreglo.length; i++) {
   if (comparacion !== arreglo[i]) {
     return false;
   }
}
return true;
  
}



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = [];
  for (var i = 0; i < array.length; i++) {

    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ) {
     meses.push(array[i]);
    }
  }
    if (meses.length === 3) {
       return meses;
    }
    else{
      return "No se encontraron los meses pedidos";
  };
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
    var nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
     if (array[i] > 100) {
       nuevoArray.push(array[i]);
     }
  }

  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  // --- Una manera --- //
  // var array = [];
  // var suma = numero;

  // for (var i = 0; i < 10; i++) {
  //   suma = suma + 2;
  //   if (suma === i) break;  //el break termina el bucle actual
  //   else{
  //      array.push(suma);
  //   } 
  // }
  // if (i < 10 ) {
  //    return "Se interrumpió la ejecución"
  // }
  // else{
  //    return array;
  // }

  var nuevoArray = [];

  for (var  i = 0; i < 10; i++) {
     numero += 2
     nuevoArray.push(numero);
     if (numero === i){
       break;
     }   
  }
  if (numero === i) {
    return "Se interrumpió la ejecución";
  }
  return nuevoArray;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  // --- Una manera --- //

//   var array = [];
//    var suma = numero; 

//   for ( var i = 0; i< 10 ; i++) {
//       if (i === 5) continue; //si llega a 5 continua
//       else{
//         suma = suma + 2; // de lo contrario hacemos la suma
//        array.push(suma); //   y Guardamos cada nuevo valor en un array
//     }
//   }
// return array;

// --- Otra manera --- //
var nuevoArray = [];

for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;  
    } 
    else  {
      numero += 2
      nuevoArray.push(numero);
    }
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
