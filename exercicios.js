let usuario = "admin";
let senha = 1234;
let situacao = "";

if (usuario === "admin" && senha === 1234) {
    situacao = "Acesso Liberado";
} else {
    situacao = "Acesso Negado";
}

console.log(situacao);