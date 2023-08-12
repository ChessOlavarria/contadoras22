document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("consulta-form");
    const mensajeAgradecimiento = document.getElementById("mensaje-agradecimiento");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario por correo electrónico usando PHP o cualquier otro método que prefieras.

        // Muestra el mensaje de agradecimiento y oculta el formulario
        form.style.display = "none";
        mensajeAgradecimiento.style.display = "block";
    });
});
