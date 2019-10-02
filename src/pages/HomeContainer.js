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

    componentWillMount() {
        this.getDataMovies()
    }

    getDataMovies() {

        const getListMovies = (movieGenre) => {
            try {
                fetch(
                    `${config.API_URL}${config.LIST_MOVIES_ENDPOINT}genre=${movieGenre}`)
                .then( response => response.json() )
                .then( response => { 
                    this.state.movies[movieGenre] = response.data.movies
                    this.setState({
                        movies: {
                            ...this.state.movies
                        }
                    })
                })    
            } catch (error) {
                this.state.movies[movieGenre] = []
                this.setState({
                    movies: {
                        ...this.state.movies
                    }
                })
            console.log('Error en el fetch al buscar las peliculas del genero: ',movieGenre,'->', error)
            }
        }

        this.state.moviesGenre.map( (movieGenre) => getListMovies(movieGenre) )
    } 

    render() {
        console.log(this.state.dataMovies)
        return(
            <Home
                moviesGenre={this.state.moviesGenre}
                dataMovies={this.state.movies}
            />
        )
    }
}

export default HomeContainer