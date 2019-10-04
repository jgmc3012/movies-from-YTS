import React from 'react'
import Home from './Home'
import config from '../config'

class HomeContainer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
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
    }

    componentDidMount() {
        this.getDataMovies()
    }

    getListMovies(movieGenre, page = 1) {
        const URL = `${config.API_URL}${config.LIST_MOVIES_ENDPOINT}genre=${movieGenre}&page=${page}`
        console.log(`${movieGenre} page: ${page}`)
        try {
            fetch(URL)
            .then( response => response.json() )
            .then( response => { 
                const movies = this.state.movies
                if (movies[movieGenre] === undefined) {
                    movies[movieGenre] = response.data.movies
                } else {
                    movies[movieGenre].concat(response.data.movies) 
                }
                this.setState({
                    movies: {
                        ...movies                           
                    }
                })
                console.log(movies[movieGenre])
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

    render() {
        return(
            <Home
                moviesGenre={this.state.moviesGenre}
                dataMovies={this.state.movies}
                getMoreMovies={this.getListMovies}
            />
        )
    }
}

export default HomeContainer