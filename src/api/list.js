export async function fetchList() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        if (!res.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        return await res.json();
    } catch (error) {
        console.error('Error al obtener comentarios:', error);
        throw error;
    }
}