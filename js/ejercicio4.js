/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto{
    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
        this.productos=[];
    }
    imprimeDatos(){
        document.write(`<ul>
        <li>El codigo del producto es: ${this.codigo}</li>
        <li>El nombre del producto es: ${this.nombre}</li>
        <li>El precio del producto es: $${this.precio}</li>
        </ul>`);
    }
    guardarProducto(producto){
    this.productos.push(producto);
    }
    mostrarLista(){
        for(let i=0; i < this.productos.length; i++){
            document.write(this.productos[i])
    }
    set modificarCodigo(nuevoCodigo){
        this.codigo=nuevoCodigo;
}
    set modificarNombre(nuevoNombre){
        this.nombre=nuevoNombre;
}
    set modificarPrecio(nuevoPrecio){
        this.precio=nuevoPrecio;
}

get mostrarCodigo(){
    return this.codigo;
  }
  get mostrarNombre(){
    return this.nombre;
  }
  get mostrarPrecio(){
    return this.precio;
  }
}

let producto1=new Producto(parseInt(prompt("ingrese el codigo del producto")),(prompt("ingrese el nombre del producto")),parseInt(prompt("ingrese el precio del producto")));
    producto1.imprimeDatos();
let producto2=new Producto(parseInt(prompt("ingrese el codigo del producto")),(prompt("ingrese el nombre del producto")),parseInt(prompt("ingrese el precio del producto")));
    producto2.imprimeDatos();
let producto3=new Producto(parseInt(prompt("ingrese el codigo del producto")),(prompt("ingrese el nombre del producto")),parseInt(prompt("ingrese el precio del producto")));
    producto3.imprimeDatos();
 producto1.guardarProducto(producto1)
 producto1.guardarProducto(producto1)
 producto1.guardarProducto(producto1)

