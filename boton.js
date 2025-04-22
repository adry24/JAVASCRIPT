function enlaceCentro(){
    //Muestra el cuadro de consulta
    let centro = window.confirm("¿Quieres accedes a la web de ITEC?");

    if (centro){
        //Redirige a la web si se devuelve true
        window.open("https://www.itecfp.com/");
    } else {
        //Muestra el mensaje si se devuelve false
        alert("¡Operación cancelada!")
    }

}