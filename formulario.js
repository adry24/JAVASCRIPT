function comprobar(){

  var usuario = document.getElementById("usuario").value;
  var clave = document.getElementById("clave").value;

  if (usuario === "" && clave === ""){
    document.getElementById("errores").innerHTML = "Introduzca su Usuario y Clave, gracias.";
    return false;
  } else if (clave === ""){
    document.getElementById("errores").innerHTML = "Introduzca su Clave, gracias.";
    return false;
  } else if (usuario === ""){
    document.getElementById("errores").innerHTML = "Introduzca su Usuario, gracias.";
    return false;
  }

  return true;
  
}