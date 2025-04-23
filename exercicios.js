let notaA = 7;
let notaB = 8;
let notaC = 9;
let media = (( notaA + notaB + notaC) /3).toFixed(1);
let situacao = ""

if (media >= 7) {
    situacao = "Aprovado;"
}else if (media > 5 && media < 7) {
    situacao = "Recuperação;"   
}else {(media > 5 && media < 7) 
    situacao = "Reprovado;"
}

    console.log(`situacao, média: ${media}`);
    