const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let inicialA = [];

for(let palavra of nomes){
    if (palavra[0] ==="A"||palavra[0] === "a"){
        inicialA.push(palavra)
    }
}
console.log(inicialA);
