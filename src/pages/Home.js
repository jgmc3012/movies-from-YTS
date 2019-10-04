import React from 'react'
import CarouselMovies from '../components/CarouselMovies'
import NavBar from '../components/NavBar'

const Home = ({moviesGenre, dataMovies, getMoreMovies}) => (
    <React.Fragment>
        <NavBar/>
        {moviesGenre.map( (movieGenre, index) =>(
            <CarouselMovies
            key = {index}
            genre = {movieGenre}
            movies = {dataMovies[movieGenre] || []}
            moviesWidth = {230}
            selectedList = {false}
            getMoreMovies = {getMoreMovies}
            />
        ))}
    </React.Fragment>
)

export default Home