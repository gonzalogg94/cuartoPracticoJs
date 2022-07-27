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

class Usuario{
    constructor(userName,dinero){
        this.userName = nombre;
        this.dinero = saldo;
        ingresar(deposito){
            console.log(this);
            this.saldo += deposito; // c.saldo = deposito + c.saldo;
            console.log('Se ingreso $'+ deposito);
        },
        extraer(retiro){
            if(this.saldo >= retiro){
                this.saldo -= retiro;
                document.write(`<p>Se retiro $${retiro}</p>`);
            }else{
                document.write(`<p>Saldo insuficiente</p>`);
            }
        },
        informar(){
            document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $${this.saldo}</p>`)
        },
        
    }
    }
    cuenta.informar(cuenta);
    console.log(this)
    let deposito = parseFloat(prompt('Ingrese el monto deseado'));
cuenta.ingresar(deposito);
let retiro = parseFloat(prompt('Ingrese el monto a extraer'));
cuenta.extraer(retiro);
cuenta.informar();
