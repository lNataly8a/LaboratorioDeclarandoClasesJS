// Sistema de figuras geométricas

class Figura{
    constructor(color){
        this.color = color;
    }
    area(){
        return 0;
    }
    descripcion(){
        return `Color: ${this.color}, Área: ${this.area()}`;
    }
}
class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area(){
        return this.base * this.altura;
    }
    descripcion(){
        return `Rectángulo - Color: ${this.color}, Base: ${this.base}, Altura: ${this.altura}, Área: ${this.area()}`;
    }
}
class Circulo extends Figura{
    constructor(color, radio){
        super(color);
        this.radio = radio;
    }
    area(){
        return Math.PI * this.radio * this.radio;
    }
    descripcion(){
        return `Círculo - Color: ${this.color}, Radio: ${this.radio}, Área: ${this.area().toFixed(2)}`;
    }
}

const figura1 = new Figura("Verde");
const rectangulo1 = new Rectangulo("Azul", 8, 3);
const circulo1 = new Circulo("Amarillo", 9);

console.log(figura1.descripcion());
console.log(rectangulo1.descripcion());
console.log(circulo1.descripcion());