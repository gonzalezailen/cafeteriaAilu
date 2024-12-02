/*document.addEventListener("DOMContentLoaded", () => {
    const carritoLista = document.getElementById("carrito-lista");
    const botonVaciar = document.getElementById("vaciar-carrito");

    // Cargar productos del carrito
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        carritoLista.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        carritoLista.innerHTML = carrito
            .map(
                (producto) =>
                    `<p>${producto.nombre} - $${producto.precio}</p>`
            )
            .join("");
    }

    // Botón para vaciar el carrito
    botonVaciar.addEventListener("click", () => {
        localStorage.removeItem("carrito");
        carritoLista.innerHTML = "<p>El carrito está vacío.</p>";
        alert("El carrito ha sido vaciado.");
    });
});
*/