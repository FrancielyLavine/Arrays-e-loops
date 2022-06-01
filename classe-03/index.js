const numeros = [54, 22, 14, 87, 284];

let existe = false

for (let i = 0 ; i < numeros.length; i++){
    const item = numeros[i]
    if(item === 10){
        console.log(i)
        existe = true
    }
}

if(!existe){
    console.log(-1)
}
