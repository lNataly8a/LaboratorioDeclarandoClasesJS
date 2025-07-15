// Sistema de empleados

class Empleado{
    constructor(nombre, edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = Number(salarioBase);
    }
    calcularSalario(){
        return `Salario: $${this.salarioBase}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre, edad, salarioBase, bonificacion){
        super(nombre, edad, salarioBase);
        this.bonificacion = Number(bonificacion);
    }
    calcularSalario(){
        return `Salario: $${this.salarioBase+this.bonificacion}`;
    }
}
class Desarrollador extends Empleado{
    constructor(nombre, edad, salarioBase, lenguaje){
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }
    calcularSalario(){
        return `Salario: $${this.salarioBase}`;
    }
}

const Empleado1 = new Empleado("Juan", 24, 300);
const Gerente1 = new Gerente("Felipe", 37, 300, 100);
const Desarrollador1 = new Desarrollador("Maria", 26, 300, "Python");

console.log(Empleado1.calcularSalario());
console.log(Gerente1.calcularSalario());
console.log(Desarrollador1.calcularSalario());
