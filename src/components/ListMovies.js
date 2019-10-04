import React from 'react'
import MovieCard from './MovieCard'

const ListMovies = ({showMovie, movies}) => (
    movies.map( (movie) => ( 
        <MovieCard
            key = {movie.id}
            movie = {movie}
            showMovie = {showMovie}
        />
    ))
)

export default ListMovies