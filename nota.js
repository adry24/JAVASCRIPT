let nota = prompt("introduce tu nota(0-10) :");

if(nota >= 9 && nota <= 10){
    alert ("¡Tu nota es un : "+ nota + ", enhorabuena tienes un Sobresaliente!");
} else if(nota >= 7 && nota < 9){
    alert ("¡Tu nota es un : "+ nota + ", enhorabuena tienes un Notable!");
} else if(nota >= 6 && nota < 7){
    alert ("¡Tu nota es un : "+ nota + ", tienes un Bien!");
} else if(nota >= 5 && nota < 6){
    alert ("¡Tu nota es un : "+ nota + ", tienes un Suficiente!");
} else if(nota <5 && nota >= 0){
    alert ("¡Tu nota es un : "+ nota + ", estas suspenso, deberías estudiar más!");
} else{
    alert ("Valor incorrecto.")
}