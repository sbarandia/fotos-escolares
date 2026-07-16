async function iniciarAplicacion() {

    try {

        console.log("Iniciando aplicación...");

        const campania = await obtenerCampaniaVigente();

        console.log("Campaña:", campania);

        const productos = await obtenerProductos(campania.id);

        console.log("Productos:", productos);

        renderizarProductos(productos);

    }

    catch (error) {

        console.error("Error:", error);

    }

}

document.addEventListener("DOMContentLoaded", iniciarAplicacion);