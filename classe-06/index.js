const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let numerosPares = [];

for (let par of numeros){
    if (par % 2 ===0){
        numerosPares.push(par)
    }
}
let soma = 0;

for (i = 0; i < numerosPares.length; i++){
    soma += numerosPares[i];
}
console.log(soma)