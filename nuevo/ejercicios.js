// Cuenta cuántas veces aparece una letra en un string.

let string = "javascript"

let split = string.split("")

console.log(split)

let cont = {}

for (let i = 0; i < split.length; i++){
    {
    if (cont.hasOwnProperty(split[i])) {

      cont[split[i]]++;

    } else {
      cont[split[i]] = 1;
    }
  } 

}

console.log(cont)


// {j: 1, a: 2 , v: 1 ,...}

// Si la idea es preguntarle al objeto si ya tiene creada esa propiedad, si la propiedad ya esta creada le sumamos uno, y si no esta creada la igualamos a 1.

