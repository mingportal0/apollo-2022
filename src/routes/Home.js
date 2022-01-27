import React from 'react';
import {
    useQuery, gql
  } from "@apollo/client";
const GET_MOVIES = gql`
    query GetMovies {
        movies{
            id
            title
            backdrop_path
        }
    }
`;

export default () => {
    const {loading, error, data} = useQuery(GET_MOVIES);

    console.log(loading, error, data);
    return <h1>Home</h1>
};