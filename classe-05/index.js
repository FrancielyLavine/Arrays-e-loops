const original = [1, 4, 12, 21, 53, 112];

let numerosPares = [];

for (let item of original){

  if(item % 2 === 0){
    numerosPares.push(item)
  }
    
}
console.log(numerosPares)