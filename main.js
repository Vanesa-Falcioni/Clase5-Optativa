//Arrays y colecciones
// Vamos a afianzar nuestro conocimiento de arrays explorando distintas acciones sobre
// ellos. Veremos si se comportan como esperamos u ocurren resultados inesperados.
// En primer lugar, practiquemos las acciones más comunes y necesarias:
// A. Acceder a elementos específicos de un array.
const colores = ["amarillo", "verde", "azul"];
console.log(colores[2]);
//D. Extraer elementos de un array.
const nueva = [colores.shift()];
console.log(nueva);
//C. Agregar elementos a un array.
const agrega = [colores.unshift("violeta")];
console.log(agrega);
//B. Modificar cada uno de sus elementos e imprimirlos.
const modifica = [colores.push("rojo", "fucsia", "rosa", "Bordo")];
console.log(modifica);
//E. Comparar elementos de un array con los elementos de otro.
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
//¿Qué devuelven estos códigos?
//En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
//consola.
//1. tenia un numbers de mas devolvia indefinido y habia 2 soluciones posibles, sacar los corchetes o aplicar length -1
const numbers = [22, 33, 54, 66, 72];
console.log(numbers.length);
//2. muestra el de la posicion 5
const grupoDeAmigos = [
  "Harry",
  "Ron",
  "Hermione",
  "Spiderman",
  "Hulk",
  "Ironman",
  "Penélope Glamour",
  "Pierre Nodoyuna",
  "Patán",
];
console.log(grupoDeAmigos[5]);
//3.
const str = "un string cualquiera";
const arrayAleatorio = [
  "Digital",
  "House",
  true,
  "string",
  "123",
  false,
  "54",
  str,
];
console.log(arrayAleatorio[arrayAleatorio.length - 1]);

// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.
const peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
console.log(peliculas[1]);

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().
function TodoEnMayus(peliculas) {
  for (let i = 0; i < peliculas.length; i++) {
    peliculas[i] = peliculas[i].toUpperCase();
  }
  return peliculas;
}
console.log(TodoEnMayus(peliculas));

// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas
const nuevaspelis = [
  "toy story",
  "finding nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];
//sacamos el juego y lo guardamos en su propia variable
let sacandoJuego = nuevaspelis.pop();

function TodoEnMayus(nuevaspelis) {
  for (let i = 0; i < nuevaspelis.length; i++) {
    nuevaspelis[i] = nuevaspelis[i].toUpperCase();
  }
  return nuevaspelis;
}
console.log(TodoEnMayus(nuevaspelis));

function CombinaPelis(peliculas, nuevaspelis) {
  for (let i = 0; i < nuevaspelis.length; i++) {
    peliculas.push(nuevaspelis[i]);
  }
  return peliculas;
}
console.log(CombinaPelis(peliculas, nuevaspelis));
// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:
// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// 2
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son iguales
// o diferentes. Te confirman que están en el orden adecuado y que solo traen
// valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en
// orden al del array resultante de combinar películas con películas animadas. Es
// decir, el primer elemento del array de películas general corresponde al primer
// elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las
// funciones y testear su correcto funcionamiento.
// Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
// extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

//declaro la funcion para poder comparar las notas obtenidas con las peliculas a las que corresponde
function comparacion(asiaScores, euroScores, peliculas) {
  for (let i = 0; i < asiaScores.length; i++) {
    if (asiaScores[i] !== euroScores[i]) {
      return (
        "hay diferencia de puntaje en:" +
        peliculas[i] +
        ", Asia:" +
        asiaScores[i] +
        " y en europa:" +
        euroScores[i]
      );
    }
  }
  return "tienen el mismo puntaje";
}
console.log(comparacion(asiaScores, euroScores, peliculas));

// 1. Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).
function imprimirInverso(lista) {
  for (let i = lista.length - 1; i >= 0; i--) {
    console.log(lista[i]);
  }
}
imprimirInverso(peliculas);

// 2. Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.
function inversor(array) {
  const guardanuevoarray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    guardanuevoarray.push(array[i]);
  }
  return guardanuevoarray;
}
console.log(inversor(peliculas));

// sumaArray()
// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
// ● sumArray([1,2,3])
// ● sumArray([10, 3, 10])
//  // 6
//  // 23
// ● sumArray([-5,100, 19])      // 114
function sumaArray(elementos) {
  let suma = 0;
  for (let i = 0; i < elementos.length; i++) {
    suma = suma + elementos[i];
  }
  return suma;
}
console.log(sumaArray([1, 2, 3]));
console.log(sumaArray([10, 3, 10]));
console.log(sumaArray([-5, 100, 19]));

// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// strings de 4 elementos y simule el comportamiento del método Array.join().
// Importante: no podés usar el método Array.join() original.
// Ejemplo:
// ● join(["h","o","l","a"]) debe retornar el string "hola".
// ● join(["c","h","a,"u"]) debe retornar el string "chau"
function join(palabra) {
  let letras = "";
  for (let i = 0; i < palabra.length; i++) {
    letras = letras + palabra[i];
  }
  return letras;
}
console.log(join(["h", "o", "l", "a"]));
