alert ('Por motivos de comodidad se mantendran lo scripts comentados para que uno pueda decidir cual de los dos codigos se quiere probar');

//primer ejercicio
/* ingresa el numero de filas y el numero de columnas
let filas = parseInt(prompt("Ingresa el número de filas:"));
let colum = parseInt(prompt("Ingresa el número de columnas:"));

// crea la tabla solicitada 
let table = document.createElement("table");

// se encarga de acomodar los numero de la forma solicitada conforma a la instruccion 
for (let i = 0; i < filas; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < colum; j++) {
    let cell = document.createElement("td");
    let number = (filas * colum) - (i * colum) - j;
    cell.textContent = number;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

// imprimr la tabla creada dentro del html
document.body.appendChild(table);
*/

/*
//segundo ejericicio
//es un mensaje que indica lo que se debe de hacer 
alert ('Veamos quien es el mayor, agrega tu edad y le edad de otros dos amigos tuyos.');


// se declaran las variables de edades y nombres
nombre1 = prompt('Ingresa tu nombre con el que te sientas comodo:');
edad1= prompt('Ahora ingresa tu edad: ');
nombre2 = prompt('Ingresa el nombre de tu amigo:');
edad2= prompt('Ahora ingresa su edad: ');
nombre3 = prompt('Ingresa el nombre de tu otro amigo:');
edad3 = prompt('Ahora ingresa su edad: ');

// se declara una funcion que almacene el alert y ser ejecutado dentro de un if, 
// puesto que de manera convencional no funciona en un if
let mayor;

//Se crea el IF el cual decidira cual de los tres edades es la mayor y emplea 
//el uso de la funcion mayor para mostrar en pantalla cual es el mejor
if(edad1 > edad2 && edad1 < edad3) {
    console.log('Felicidades' + nombre1 + ' eres el mas grande de tus amigos'); //
    mayor = nombre1;
} else if(edad2 > edad1 && edad2 < edad3) {
  console.log('Felicidades' + nombre2 + ' eres el mas grande de tus amigos'); //
    mayor=nombre2;
} else if(edad3 > edad1 && edad3 < edad2){
  console.log('Felicidades' + nombre3 + ' eres el mas grande de tus amigos'); //  //
    mayor=nombre3;
}

if (mayor){
    alert('Felicidades ' + mayor + '  eres el mayor de tus amigos.');
} */
