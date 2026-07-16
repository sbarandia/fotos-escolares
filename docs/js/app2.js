console.log("Proyecto iniciado");

async function probarProductos() {

    const { data, error } = await db
        .from("productos")
        .select("*")
        .order("id");

    console.log("PRODUCTOS:", data);
    console.log("ERROR:", error);

}

probarProductos();