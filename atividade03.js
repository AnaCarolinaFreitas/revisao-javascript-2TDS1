idadeMinima = 7;
idadeAluno = 20;
nomeAluno = "Larissa";

if (idadeAluno >= idadeMinima) {
console.log("Prezado(a) " + nomeAluno + " é com prazer que informamos que sua matricula foi realizada com sucesso");
}
else{
    console.log("Prezado(a) " + nomeAluno + " desculpe, você ainda não pode se matricular nesta escola");
}

let categoria = " ";
if (idadeAluno >= 7 && idadeAluno <= 10) {
  categoria = "Infantil";
} else if (idadeAluno >= 11 && idadeAluno <= 14) {
  categoria = "Juvenil";
} else if (idadeAluno >= 15 && idadeAluno <= 18) {
  categoria = "Adolescente";
} else if (idadeAluno >= 19 && idadeAluno<= 30) {
  categoria = "Adulto";
} else {
    categoria = "Não se encaixa em nenhuma categoria";
}

console.log("Categoria da turma: " + categoria);


