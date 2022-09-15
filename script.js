let p1 = new Carro(new MotorMario(),"Mario Bross");
let p2 = new Carro(new MotorLuigi(),"Luigi Bross");

//Mostrar o Resultado no Site
document.write(p1.perso + " ", p1.acelerar() + "</br>");
document.write(p2.perso + " ", p2.acelerar() + "</br>");