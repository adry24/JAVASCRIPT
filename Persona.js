var persona = new Object();

persona.nombre = "German";
persona.apellido = "Escobar";
persona.edad = "35";
persona.estatura = "1.8";

persona.peso = "70";

delete persona.peso;

for (let propiedad in persona){
    alert (persona[propiedad]);    
}
