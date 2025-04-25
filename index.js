let mes = prompt("Digite o mês do seu nascimento(ex: jan):");
let dia = prompt("Digite o dia do seu nascimento(ex: 1-31):");


let nomeDaBanda = "";



switch (mes) {
    case "jan":
        nomeDaBanda = "Capirotos";
         break;

         case "fev":
        nomeDaBanda = "Lendários";
         break;
         case "mar":
        nomeDaBanda = "Soldados";
         break;
         case "abr":
        nomeDaBanda = "Faroeste";
         break;
         case "mai":
        nomeDaBanda = "Fodões";
         break;
         case "jun":
        nomeDaBanda = "Monstros";
         break;
         case "jul":
        nomeDaBanda = "Fanfarrões";
         break;
         case "ago":
        nomeDaBanda = "Baderneiros";
         break;
         case "set":
        nomeDaBanda = "";
         break;
         case "out":
        nomeDaBanda = "";
         break;
         case "nov":
        nomeDaBanda = "";
         break;
         case "dez":
        nomeDaBanda = "";
         break;
}

alert(`mês ${mes} dia ${dia}`);