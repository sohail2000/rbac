const backendUrl = 'http://localhost:3000';


export async function getAllUsers() {
    const res = await fetch(`${backendUrl}/`);
    return await res.json();

}
