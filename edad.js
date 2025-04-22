let edad = prompt ("Introduce tu edad :");

if(edad < 18){
    alert ("¡Tienes " + edad + ", no puedes conducir!");
} else if(edad >= 18 && edad <75){
    alert ("¡Tienes " + edad + ", ya puedes conducir, enhorabuena!");
} else if(edad >= 75) {
    alert ("¡Tienes " + edad + ", deberias dejar de conducir!");
} else {
    alert ("¡Valor Incorrecto!")
}