// Sistema de productos electrónicos

class Producto{
    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        }
        descripcion(){
        return `Nombre: ${this.nombre}, Precio: $${this.precio}, Marca: ${this.marca}`;
    }
}
class Telefono extends Producto{
     constructor(nombre, precio, marca, almacenamiento, ram){
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
        }
        descripcion(){
        return `Nombre: ${this.nombre}, Precio: $${this.precio}, Marca: ${this.marca}, Almacenamiento: ${this.almacenamiento}, Ram: ${this.ram}`;
    }
}
class Laptop extends Producto{
     constructor(nombre, precio, marca, procesador, pulgadas){
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
        }
        descripcion(){
        return `Nombre: ${this.nombre}, Precio: $${this.precio}, Marca: ${this.marca}, Procesador: ${this.procesador}, Pulgadas: ${this.pulgadas}`;
    }
}

const Telefono1 = new Telefono("Nokia", 500, "G20", "120GB", "4GB");
const Laptop1 = new Laptop("HP", 900, "Envy", "Intel Core i7", 16);

console.log(Telefono1.descripcion());
console.log(Laptop1.descripcion());