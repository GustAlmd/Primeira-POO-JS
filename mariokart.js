class Carro{
    #personagem;
    constructor(Motor, personagem){
            this.motor = Motor;
            this.#personagem = personagem;
        }
    //Adicionando uma Função
    acelerar(){
        return this.motor.acelerar();
    }

    //Método Get - Encapsulamento
    get perso(){
        return this.#personagem;
    }

    //Método Set - Encapsulamento
    set perso(perso){
        this.#personagem = perso;
    }
}

//Class Motor para realizar a Herança em outros Motores
class Motor{

    acelerar() {
        return " ";
    }
}

//Classe Motor do Mario com Herança
class MotorMario extends Motor {
     acelerar(){
         return "VRUMMMMM I AM THE MARIO!";
     }    
}

//Classe Motor do Luigi com Herança
class MotorLuigi extends Motor {
    acelerar(){
        return "VRUMMMMM LUIGI!";
    }    
}