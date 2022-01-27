import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.themoviedb.org/3/movie/popular?api_key=8b3e0bcc46faf19a548ac7e51d9cded2&language=ko-KR&page=1',
    cache: new InMemoryCache()
})

export default client;