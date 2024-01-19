import axios from "axios";

async function useFetchApi(page) {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    
    return data;
}

export default api = {
    useFetchApi: useFetchApi
}