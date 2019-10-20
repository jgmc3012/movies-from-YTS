import React from 'react'
import Home from './Home'
import config from '../config'
import HomeMovie from './HomeMovie'

class HomeContainer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedMovie: null,
            movies: {},
            moviesGenre: [
                'action',
                'adventure',
                'animation',
                'biography',
                'comedy',
                'crime'
            ]                   
        }
        this.getListMovies = this.getListMovies.bind(this)
        this.selectMovie = this.selectMovie.bind(this)
        this.returnHome = this.returnHome.bind(this)
    }

    componentDidMount() {
        this.getDataMovies()
    }

    getListMovies(movieGenre, page = 1) {
        const URL = `${config.API_URL}${config.LIST_MOVIES_ENDPOINT}genre=${movieGenre}&page=${page}`
        try {
            fetch(URL)
            .then( response => response.json() )
            .then( response => { 
                const movies = this.state.movies
                if (movies[movieGenre] === undefined) {
                    movies[movieGenre] = response.data.movies
                } else {
                    const lastMoviesCurrent = movies[movieGenre][movies[movieGenre].length-1].id
                    const lastMoviesNews = response.data.movies[response.data.movies.length-1].id
                    if  ( lastMoviesCurrent !== lastMoviesNews ) {
                        movies[movieGenre] = movies[movieGenre].concat(response.data.movies) 
                    } else {
                    }
                    
                }
                this.setState({
                    movies: {
                        ...movies                           
                    }
                })
                console.log('Lista de Peliculas de',movieGenre,': ',movies[movieGenre])
            })
            .catch( error => console.log(`Error al traer la data de las peliculas de ${movieGenre}. Error:`, error))
            
        } catch (error) {
            const movies = this.state.movies
            if (movies[movieGenre] === undefined) {
                movies[movieGenre] = []
            }
            this.setState({
                movies: {
                    ...movies
                }
            })
        }
    }

    getDataMovies() {
        this.state.moviesGenre.map( (movieGenre) => this.getListMovies(movieGenre) )
    } 

    /**
     * Este metodo tiene como funcion obtener los datos de la pelicula seleccionada
     * en cualquiera de los carruseles  se peliculas y pasarle dichos datos la pagina
     * de "Movie"
     * @param {*} movie 
     */
    selectMovie(movie) {
        this.setState({
            selectedMovie: movie
        })
    }

    /**
     * Este metodo sera asociado a un boton que nos regresara a la pantalla de Home
     * en el caso de que estemos en HomeMovie
     */
    returnHome() {
        this.setState({
            selectedMovie: null
        })
    }

    render() {
        console.log('Datos de la pelicula: ',this.state.selectedMovie)
        if (this.state.selectedMovie === null) {
            return(
                <Home
                    selectMovie= {this.selectMovie}
                    moviesGenre={this.state.moviesGenre}
                    dataMovies={this.state.movies}
                    getMoreMovies={this.getListMovies}
                />
            )
        }
        
        return (
            <HomeMovie
                movie={this.state.selectedMovie}
                returnHome={this.returnHome}
            />
        )
    }
}

export default HomeContainer