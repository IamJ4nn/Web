function agregarFila() {
    var nombre = document.getElementById("nombreInput").value;
    var email = document.getElementById("emailInput").value;
    var telefono = document.getElementById("telefonoInput").value;
    var gusto = document.getElementById("gustoInput").value;
    var porcentaje = document.getElementById("porcentajeInput").value;
    var tabla = document.getElementById("tablaGustos");
    var row = tabla.insertRow(tabla.rows.length);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = gusto;
    cell2.innerHTML = porcentaje;

    var editarButton = document.createElement("button");
    editarButton.innerHTML = "Editar";
    editarButton.onclick = function () {
      editarFila(this);
    };
    cell3.appendChild(editarButton);
  }

  function editarFila(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    var antiguoContenido = [];
    for (var i = 0; i < cells.length - 1; i++) {
      antiguoContenido.push(cells[i].innerHTML);
      cells[i].setAttribute("contenteditable", "true");
    }

    var editarButton = document.createElement("button");
    editarButton.innerHTML = "En edición";
    editarButton.disabled = true;

    var aceptarButton = document.createElement("button");
    aceptarButton.innerHTML = "Aceptar";
    aceptarButton.onclick = function () {
      aceptarEdicion(this, antiguoContenido);
    };

    var cancelarButton = document.createElement("button");
    cancelarButton.innerHTML = "Cancelar";
    cancelarButton.onclick = function () {
      cancelarEdicion(this, antiguoContenido);
    };

    cells[2].innerHTML = "";
    cells[2].appendChild(editarButton);

    var messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML =
      "Pulse 'Aceptar' para guardar los cambios o 'Cancelar' para anularlos";

    var buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";
    buttonsContainer.appendChild(aceptarButton);
    buttonsContainer.appendChild(cancelarButton);
  }

  function aceptarEdicion(button, antiguoContenido) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    for (var i = 0; i < cells.length - 1; i++) {
      cells[i].removeAttribute("contenteditable");
    }

    var editarButton = document.createElement("button");
    editarButton.innerHTML = "Editar";
    editarButton.onclick = function () {
      editarFila(this);
    };

    cells[2].innerHTML = "";
    cells[2].appendChild(editarButton);

    var messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = "";

    var buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";

    // Obtener los valores editados
    var nombre = document.getElementById("nombreInput").value;
    var email = document.getElementById("emailInput").value;
    var telefono = document.getElementById("telefonoInput").value;
    var gusto = cells[0].innerHTML;
    var porcentaje = cells[1].innerHTML;

    // Construir la URL con los parámetros
    var url = "nueva_pagina.html?";
    url += "nombre=" + encodeURIComponent(nombre);
    url += "&email=" + encodeURIComponent(email);
    url += "&telefono=" + encodeURIComponent(telefono);
    url += "&gusto=" + encodeURIComponent(gusto);
    url += "&porcentaje=" + encodeURIComponent(porcentaje);

    // Redirigir a la nueva página
    window.location.href = url;
  }

  function cancelarEdicion(button, antiguoContenido) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    for (var i = 0; i < cells.length - 1; i++) {
      cells[i].innerHTML = antiguoContenido[i];
      cells[i].removeAttribute("contenteditable");
    }

    var editarButton = document.createElement("button");
    editarButton.innerHTML = "Editar";
    editarButton.onclick = function () {
      editarFila(this);
    };

    cells[2].innerHTML = "";
    cells[2].appendChild(editarButton);

    var messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = "";

    var buttonsContainer = document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML = "";
  }