/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/
class Persona{
    constructor(nombre,edad,dni,sexo,peso,altura,añoNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.añoNacimiento=añoNacimiento;
    }
    imprimirDatos(){
        document.write(`<ul>
        <h3>Los datos de esta persona son:</h3>
            <li>nombre:${this.nombre}</li>
            <li>edad:${this.edad}</li>
            <li>dni:${this.dni}</li>
            <li>sexo:${this.sexo}</li>
            <li>peso:${this.peso}</li>
            <li>altura:${this.altura}</li>
            <li>Año de nacimiento:${this.añoNacimiento}</li>
            </ul>`);
    }
    mostrarGeneracion(){
        if (this.añoNacimiento>=1930 & this.añoNacimiento<=1948){
            document.write(`<h3>Esta persona pertenece a la generacion Silent Generation</h3><ul>
            <li>Poblacion de:6.300.000</li>
            <li>Cirscunstancia historia: Conflictos belicos</li>
            <li>Rasgo Caracteristico:austeridad</li>
            </ul>`);
        }else if(this.añoNacimiento>=1949&this.añoNacimiento<=1968){
            document.write(`<h3>Esta persona pertenece a la generacion Baby Boom</h3><ul>
            <li>Poblacion de:12.2000.000</li>
            <li>Cirscunstancia historia: Paz y explosion demografica</li>
            <li>Rasgo Caracteristico:ambicion</li>
            </ul>`);
        }else if(this.añoNacimiento>=1969&this.añoNacimiento<=1980){
            document.write(`<h3>Esta persona pertenece a la generacion Generacion x</h3><ul>
            <li>Poblacion de:9.300.000</li>
            <li>Cirscunstancia historia: Crisis del 73 y transicion española</li>
            <li>Rasgo Caracteristico:obsecion por el exito</li>
            </ul>`);
        }else if(this.añoNacimiento>=1981&this.añoNacimiento<=1993){
            document.write(`<h3>Esta persona pertenece a la generacion Y millennials</h3><ul>
            <li>Poblacion de:7.200.000</li>
            <li>Cirscunstancia historia: Inicio de la digitalizacion</li>
            <li>Rasgo Caracteristico:Frustracion</li>
            </ul>`);
        }else if(this.añoNacimiento>=1994&this.añoNacimiento<=2010){
            document.write(`<h3>Esta persona pertenece a la generacion Generacion z</h3><ul>
            <li>Poblacion de:7.800.000</li>
            <li>Cirscunstancia historia: explosion masiva de internet</li>
            <li>Rasgo Caracteristico:Irreverencia</li>
            </ul>`);
        }else{
            document.write("la edad ingresada no se encuentra dentro de los parametros establecidos")
        }

    }
    set modificarNombre(nuevoNombre){
        this.nombre=nuevoNombre;
}
    set modificarEdad(nuevoEdad){
        this.edad=nuevoEdad;
}
    set modificarDni(nuevoDni){
        this.dni=nuevoDni;
}
    set modificarSexo(nuevoSexo){
        this.sexo=nuevoSexo;
}
    set modificarPeso(nuevoPeso){
        this.peso=nuevoPeso;
}
    set modificarAltura(nuevoAltura){
        this.altura=nuevoAltura;
}
    set modificarAñoNacimiento(nuevoAñoNacimiento){
        this.añoNacimiento=nuevoAñoNacimiento;
}
get mostrarNombre(){
    return this.nombre;
  }
get mostrarEdad(){
    return this.edad;
  }
get mostrarDni(){
    return this.dni;
  }
get mostrarSexo(){
    return this.sexo;
  }
get mostrarPeso(){
    return this.peso;
  }
get mostrarAltura(){
    return this.altura;
  }
get mostrarAñoNacimiento(){
    return this.añoNacimiento;
  }
}

let nombre= prompt("Ingrese el nombre de la persona");
let edad=parseInt(prompt("Ingrese la edad de la persona"));
let dni=parseInt(prompt("Ingrese el D.N.I de la persona"));
let sexo=prompt("Ingrese el sexo de la persona");
let peso=parseInt(prompt("Ingrese el peso de la persona expresado en kilogramos"));
let altura=parseInt(prompt("Ingrese la altura de la persona expresado en centimetros"));
let añoNacimiento=parseInt(prompt("Ingrese el año de nacimiento de la persona"));
let persona1=new Persona(nombre,edad,dni,sexo,peso,altura,añoNacimiento)
persona1.imprimirDatos()
persona1.mostrarGeneracion();