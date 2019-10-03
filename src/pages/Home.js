import React from 'react'
import ListMovies from '../components/ListMovies'
import NavBar from '../components/NavBar'

const Home = ({moviesGenre, dataMovies}) => (
    <React.Fragment>
        <NavBar/>
        {moviesGenre.map( (movieGenre, index) =>(
            <ListMovies
            key = {index}
            genre = {movieGenre}
            movies = {dataMovies[movieGenre] || []}
            moviesWidth = {230}
            />
        ))}
    </React.Fragment>
)

export default Home