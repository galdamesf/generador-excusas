function generarNumeroAleatorio(indice_mayor) {
  let numero_aleatorio = Math.random() * indice_mayor;
  numero_aleatorio = Math.round(numero_aleatorio);
  return numero_aleatorio;
}

window.onload = function () {
  let numero_aleatorio;
  let quien = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let accion = ["se comió", "orinó", "aplastó", "rompió"];
  let que = ["mi tarea", "mi teléfono", "el coche"];
  let cuando = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras rezaba",
  ];

  let elemento_html = document.querySelector("#excuse");
  //alert(elemento_html);

  let indice_mayor_quien = quien.length - 1;
  let primera_frase = quien[generarNumeroAleatorio(indice_mayor_quien)];

  //alert(indice_mayor_accion);
  let indice_mayor_accion = accion.length - 1;
  let segunda_frase = accion[generarNumeroAleatorio(indice_mayor_accion)];

  //alert(indice_mayor_que);
  let indice_mayor_que = que.length - 1;
  let tercera_frase = que[generarNumeroAleatorio(indice_mayor_que)];

  //alert(indice_mayor_cuando);
  let indice_mayor_cuando = cuando.length - 1;
  let cuarta_frase = cuando[generarNumeroAleatorio(indice_mayor_cuando)];

  document.querySelector("#excuse").innerHTML =
    primera_frase +
    " " +
    segunda_frase +
    " " +
    tercera_frase +
    " " +
    cuarta_frase +
    " ";
};
