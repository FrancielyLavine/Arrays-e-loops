const letras = ["A", "a", "B", "C", "E", "e"];

let quantidade = 0;

for (let letra of letras){
    if (letra === "E"){
        quantidade++;
    }
}

let letrinha = 0;
for (let letra of letras){
    if (letra === "e"){
        letrinha++;
    }
}


console.log(`Tem ${quantidade} letra E e ${letrinha} letra e`);

if (!quantidade && !letrinha){
    console.log ('Nenhuma letra "E" ou "e" foi encontrada')
}


