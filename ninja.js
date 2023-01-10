class Ninja {
    constructor(nombre,salud){
        this.nombre = nombre;
        this.salud = salud; 
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(this.nombre,this.fuerza,this.velocidad,this.salud);
    }
    drinkSnake(){
        this.salud += 10;
    }
}
class Sensei extends Ninja{
    constructor(nombre){
        super(nombre,200);
        this.nombre = nombre;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduría = 10;
    }
    speakWisdom(){
        this.drinkSnake();
        let msg = "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses";
        console.log(msg);
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

