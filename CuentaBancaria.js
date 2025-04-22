function CuentaBancaria(nombre, apellidos, saldo){

    this.nombre = nombre;
    this.apellidos = apellidos;
    this.saldo = saldo;

    this.Info = function(){
        console.log("Titular: " + this.nombre + this.apellidos);
        console.log("saldo: " + this.saldo + "€");
        document.write("El nombre y los apellidos del titular son: " + this.nombre + " " + this.apellidos + ", y el saldo es: " + this.saldo + "€");
    }
}

var nombre = prompt("Nombre");
var apellidos = prompt("apellidos");
var saldo = parseFloat(prompt("saldo"));

var cuenta = new CuentaBancaria(nombre, apellidos, saldo);

cuenta.Info();