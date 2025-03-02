// 7. Fusionar dos arreglos de objetos si se repiten se tienen que sumar la suma.
// Es decir por ej maria deberia tener cantidad de 8 y asi con todos
const empleados1 = [
  { id: 1, nombre: "Juan" , cant: 3 },
  { id: 2, nombre: "María", cant: 7 },
  { id: 3, nombre: "Lalo", cant: 7 },
  { id: 6, nombre: "Nahu", cant: 0 }
];
const empleados2 = [
  { id: 2, nombre: "María" , cant: 1 },
  { id: 5, nombre: "Carlos", cant: 12  },
  { id: 3, nombre: "Lalo", cant: 4  }
];

let fusionar = empleados1.concat(empleados2);

console.log(fusionar)

let reducir = fusionar.reduce(function (acumulador , CurrentValue){
if (acumulador[CurrentValue.id]) {
  acumulador[CurrentValue.id].cant += CurrentValue.cant; 
} else {
  acumulador[CurrentValue.id] = CurrentValue;
}
return acumulador
}, {});

console.log(reducir)
