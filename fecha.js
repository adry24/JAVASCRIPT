//declaro la variable fecha
let fecha = new Date();

function mostrarFecha(fecha){

    //Arrayy con el nombre de los dias
    let dias = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    //Asigna el nombre del dia al número correspondiente
    let nombreDia = dias[fecha.getDay()];
    //Array con el nombre de los meses
    let mes = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    //Asigna el nombre del mes al número correspondiente
    let meses = mes[fecha.getMonth()];
    //devuelve el dia del mes
    let diaMes = (fecha.getDate());
    //Devuelve el año completo
    let anio = fecha.getFullYear();
    //Devuelve la hora actual(00 a 23)
    let hora = fecha.getHours();
    //Devuelve los minutos actuales(00 a 59)
    let min = fecha.getMinutes();
    /**Formatea los minutos para añadir un 0 si es inferior a 10
    y de esta forma mantenemos el formato de dos digitos**/
    if ((min >= 0) && (min < 10)){
        min = "0" + min;
    }

    //Crea la cadena que vamos a mostrar
    let dfecha = "Hoy es " + nombreDia + "," + diaMes + " de " + meses + " del " + anio + " , y son las " + hora + ":" + min ;
    return dfecha;

}

//Llama a la función mostrarFecha que pasa el objeto fecha y nos muestra el resultado 
alert (mostrarFecha(fecha));
document.write(mostrarFecha(fecha));