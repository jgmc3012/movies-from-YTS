import React from 'react'
import NavBar from '../components/NavBar'
import MovieDetails from '../components/MovieDetails'

const HomeMovie = ({movie, returnHome}) => (
    <div className='bg-dark'>
        <NavBar/>
        <MovieDetails
            movie={movie}
            returnHome= {returnHome}
        />
    </div>
)

export default HomeMovie