/*
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro{
    constructor(isbn,titulo,autor,numeroPaginas){
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
        this.numeroPaginas=numeroPaginas;
    }
    mostrarLibro(){
        document.write(`
        <h3>El libro ingresado tiene los siguientes datos :</h3>
            <p>El libro ${this.titulo} tiene el ISBN ${this.isbn} creado por el autor ${this.autor}tiene la cantidad de ${this.numeroPaginas}</p>`);
    }
}

let libro1=new Libro(parseInt(prompt("Ingrese el isbn del libro")),prompt("Ingrese el titulo del libro"),prompt("Ingrese el nombre del autor del libro"),parseInt(prompt("Ingrese el numero de paginas del libro")));
libro1.mostrarLibro();
let libro2=new Libro(parseInt(prompt("Ingrese el isbn del libro")),prompt("Ingrese el titulo del libro"),prompt("Ingrese el nombre del autor del libro"),parseInt(prompt("Ingrese el numero de paginas del libro")));
libro2.mostrarLibro();

if(libro1.numeroPaginas>libro2.numeroPaginas){
    document.write(`<h2>El libro 1 tiene un mayor numero de paginas</h2>`)
}else{
    document.write(`<h2>El libro 2 tiene un mayor numero de paginas</h2>`)
}


