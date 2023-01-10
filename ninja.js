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
const ninja1 = new Ninja("Alvaro", 5);
ninja1.sayName();
ninja1.drinkSnake();
ninja1.showStats();

