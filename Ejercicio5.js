// Sistema de animales

class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
        return `${this.nombre} dice: ¡Muuu!`;
    }
    descripcion(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}
class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }
    emitirSonido(){
        return `${this.nombre} dice: ¡Guau guau!`;
    }
}
class Gato extends Animal{
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    emitirSonido(){
        return `${this.nombre} dice: ¡Miau!`;
    }
}

const animal1 = new Animal("Cuernitos", 8);
const perro1 = new Perro("Firulais", 4);
const gato1 = new Gato("Pastelito", 3);

console.log(animal1.emitirSonido());
console.log(perro1.emitirSonido());
console.log(gato1.emitirSonido());