/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
Rectángulos.
*/

class Usuario {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldoInicial = saldoInicial;
  }
  ingresar(deposito) {
    this.saldoInicial += deposito;
    document.write(`Se ingreso un monto de $${deposito} en la cuenta de ${this.titular}`);
  }
  extraer(retiro) {
    if (this.saldoInicial >= retiro) {
      this.saldoInicial -= retiro;
      document.write(`<p>Se retiro $${retiro}</p>`);
    } else {
      document.write(`<p>Saldo insuficiente, no puede retirarse de la cuenta los ${retiro} ingresados</p>`);
    }
  }
  informar() {
    document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $${this.saldoInicial}</p>` );
  }
}

let Usuario1= new Usuario(prompt("ingrese el nombre del usuario"),Number(prompt("ingrese el monto inicial")));
let deposito=parseInt(prompt("ingrese un deposito"));
let retiro=parseInt(prompt("ingrese un retiro de dinero"));
Usuario1.ingresar(deposito);
Usuario1.extraer(retiro);
Usuario1.informar();