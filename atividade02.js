let ingressos = 3; // Quantidade de ingressos comprados

// Inicializa o contador de porções de batata frita grátis
let BatataFrita = 0;

// O nome do cliente
let nome = "Ana"

// Usa um loop for para contar quantos grupos de 3 ingressos foram comprados
for (let i = 3; i <= ingressos; i += 3) {
    BatataFrita++;
}

// Verifica se o cliente ganhou alguma porção de batata frita
if (BatataFrita > 0) {
    console.log(nome + " você ganhou " + BatataFrita + " porção(ões) de batata frita grátis.");
} else {
    console.log("O cliente não se qualificou para a promoção de batata frita grátis.");
}
