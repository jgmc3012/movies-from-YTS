import React from 'react'
import './styles/ListMovies.css'
import MovieCard from './MovieCard'
import LoaderLarge from './LoaderLarge'

class ListMovies extends React.Component {

    constructor(props) {
        super(props)

        // Utilizaremos la Api de Intersection Observer para traer mas peliculas a la Lista
        const getMovies = (entries, observer) => {
            const pageCurrent = Math.floor(this.props.movies.length/20)
            const page = pageCurrent + 1;
            if (entries[0].isIntersecting) {
                this.props.getMoreMovies(this.props.genre, page)
            }
        }

        // Cacturamos el elemento con el id (dicho elemento sera un loader que estara al final de la lista)
        this.elementObserve = null

        // Creamos el observador y lo configuramos para que se dispare cuando estemos a 500px por la izquierda
        this.observer = new IntersectionObserver(
            getMovies,
            {
                rootMargin: '0px 0px 0px 500px',
                threshold: 0.25
            });
    }

    componentDidUpdate() {
        this.elementObserve = document.querySelector(`#${this.props.genre}`)
        if (this.elementObserve !== null) {
            this.observer.observe(this.elementObserve)
        }
    }


    render() {
        const {selectMovie, movies, genre} = this.props
        if (movies.length > 0) {        
            return(        
                <div className='movie-list'>
                    {movies.map( (movie) => ( 
                        <MovieCard
                            key = {movie.id}
                            movie = {movie}
                            selectMovie= {selectMovie}
                        />
                    ))}
                    <MovieCard
                        movie = {{
                            title: '...'
                        }}
                        id={genre}
                    />    
                </div>
            )
        }
            
        return(
            <div className='movie-list'>
                <LoaderLarge/>
            </div>
        )
    }
}

export default ListMovies