/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class rectangulo{
    constructor(alto,ancho){
        this.alto=alto,
        this.ancho=ancho
    }
    perimetro(){
        document.write(`<p>El perimetro del rectangulo es de: ${this.alto*2+this.ancho*2}</p>`)
}
area(){
    document.write(`<p>El area del rectagulo es de ${this.alto*this.ancho}`)
}
datos(){
    document.write(`<p>El perimetro del rectangulo es de: ${this.alto*2+this.ancho*2}</p>`),
    document.write(`<p>El area del rectagulo es de ${this.alto*this.ancho}`)
}

}

let rectangulo1=new rectangulo(20,50);
rectangulo1.datos()
let rectagulo2=new rectangulo(30,70)
rectagulo2.datos()