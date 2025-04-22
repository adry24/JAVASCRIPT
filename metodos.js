//Muestra una ventana de alerta con un mensaje
function mostrarAlert(){
    window.alert("Hola,¿Que tal?");
}

//Muestra un cuadro de confirmación con los botenes "Aceptar" y "Cancelar"
function mostrarConfirm(){
    window.confirm("¿Todo bien?");
}

//Cierra la página
function mostrarClose(){
    window.close("Adios.");
}

//Abre una nueva ventana(en este caso YouTube)
function mostrarOpen(){
    window.open("https://www.youtube.com");
}

//Abre una ventana con un cuadro de diálogo donde el usuario ingresara texto
function mostrarPrompt(){
    window.prompt("Introduce tu dirección");
}

//Abre una ventana con informacion del tamaño de la ventana
function mostrarInfo(){
    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    alert("El ancho de la ventana es de : " + ancho + " px, y el alto de la ventana es : " + alto + " px.")
}

//Imprime la pantalla
function imprimir(){
    window.print();
}