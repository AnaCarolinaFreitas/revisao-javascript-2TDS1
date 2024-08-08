let arsenal = ["Ares", "laser", "atordoamento sônico", "explosivos", "missel", "ia", "lança chamas"];
let ataques = [ ];

ataques.push(arsenal[2]);
ataques.push(arsenal[1]);
ataques.push(arsenal[3]);

for (let i = 0; i < ataques.length; i++) {
    if (ataques[i] == ataques[0]){
    console.log("Nome do robô: " + arsenal[0])
    }
    console.log("Ataque", i+1 + ": " + ataques[i]);
}
