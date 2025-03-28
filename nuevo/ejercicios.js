let nums = [1, 2, 2, 3, 4, 4, 5];
//Eliminar los numeros duplicados //

let contador = 0

let eliminar = nums.reduce(function (x, currentValue){
    if (!x.includes(currentValue)){
       x.push(currentValue)
    }
    return x;
},[])

console.log(eliminar)

