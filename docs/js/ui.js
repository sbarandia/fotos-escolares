function renderizarProductos(productos) {

    const contenedor = document.getElementById("contenedorProductos");

    contenedor.innerHTML = "";

    productos.forEach(producto => {

        const fila = document.createElement("div");

        fila.className = "list-group-item";

        fila.innerHTML = `
            <strong>${producto.descripcion}</strong>
            <span class="float-end">$ ${producto.precio}</span>
        `;

        contenedor.appendChild(fila);

    });

}