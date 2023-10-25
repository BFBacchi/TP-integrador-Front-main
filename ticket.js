function cambiarOpcionSelect(valor) {
    // Obtén una referencia al elemento select
    var select = document.getElementById("miSelect");

    // Cambia la opción seleccionada al valor deseado
    select.value = valor;

    // Opcionalmente, puedes disparar un evento "change" en el select
    var event = new Event('change');
    select.dispatchEvent(event);
}

   

