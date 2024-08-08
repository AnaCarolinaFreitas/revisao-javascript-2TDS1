let metaLivros = 5
let livrosLidos = ["Forth Wing", "From Lukov with Love", "The Love Hypothesis", "The cruel prince", "Hunger Games" ];
let output = livrosLidos.join(", ")

console.log("Você leu: " + output + " este mês");

 if (livrosLidos.length >= metaLivros){
    console.log("Parabéns! Você atingiu sua meta de leitura!")
 }else{
    console.log("Você está progredindo! Faltam ", metaLivros - livrosLidos.length, "livros para atingir sua meta.");
 }