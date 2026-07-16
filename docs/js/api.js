async function obtenerCampaniaVigente() {

    const { data, error } = await db
        .from("campanias")
        .select("*")
        .eq("activa", true)
        .single();

    if (error) {
        throw error;
    }

    return data;
}

async function obtenerProductos(campaniaId) {

    const { data, error } = await db
        .from("productos")
        .select("*")
        .eq("campania_id", campaniaId)
        .order("id");

    if (error) {
        throw error;
    }

    return data;
}