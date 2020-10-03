export default {
    getMovies: async(page) =>{
        const req = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9ecb4f059106182bad8c184c24afe467&language=pt-BR&page=${page}')
        const json = await req.json();
        return json;
    } 
}