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
    }

    componentDidMount() {
        this.getDataMovies()
    }

    getDataMovies() {

        const getListMovies = (movieGenre) => {
            try {
                fetch(
                    `${config.API_URL}${config.LIST_MOVIES_ENDPOINT}genre=${movieGenre}`)
                .then( response => response.json() )
                .then( response => { 
                    const movies = this.state.movies
                    movies[movieGenre] = response.data.movies
                    this.setState({
                        movies: {
                            ...movies                            
                        }
                    })
                })
                .catch( error => console.log(`Error al traer la data de las peliculas de ${movieGenre}`))
                
            } catch (error) {
                const movies = this.state.movies
                movies[movieGenre] = []
                this.setState({
                    movies: {
                        ...movies
                    }
                })
            }
        }

        this.state.moviesGenre.map( (movieGenre) => getListMovies(movieGenre) )
    } 

    render() {
        return(
            <Home
                moviesGenre={this.state.moviesGenre}
                dataMovies={this.state.movies}
            />
        )
    }
}

export default HomeContainer