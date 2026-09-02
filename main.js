//Arrays y colecciones
// Vamos a afianzar nuestro conocimiento de arrays explorando distintas acciones sobre
// ellos. Veremos si se comportan como esperamos u ocurren resultados inesperados.
// En primer lugar, practiquemos las acciones más comunes y necesarias:
// A. Acceder a elementos específicos de un array.
let colores = ["amarillo", "verde", "azul"];
console.log(colores[2]);
//D. Extraer elementos de un array.
let nueva = [colores.shift()];
console.log(nueva);
//C. Agregar elementos a un array.
let agrega = [colores.unshift("violeta")];
console.log(agrega);
//B. Modificar cada uno de sus elementos e imprimirlos.
let modifica = [colores.push("rojo", "fucsia", "rosa", "Bordo")];
console.log(modifica);
//E. Comparar elementos de un array con los elementos de otro.
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];
//¿Qué devuelven estos códigos?
//En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
//consola.
//1. tenia un numbers de mas devolvia indefinido
let numbers = [22, 33, 54, 66, 72];
console.log(numbers.length);
//2. muestra el de la posicion 5
let grupoDeAmigos = [
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
let str = "un string cualquiera";
let arrayAleatorio = [
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
let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
console.log(peliculas);
