import React, {Fragment} from 'react'
import MovieCard from './MovieCard'
import MovieDetails from './MovieDetails'


class ListMovies extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            sliceLength: Math.floor(window.innerWidth / this.props.moviesWidth), //Indica el numero de peliculas que se mostraran en la fila
            slice: 1,
            movieSelect: {},
            movieActive: false
        }

        this.backSlice = this.backSlice.bind(this)
        this.nextSlice = this.nextSlice.bind(this)
        this.seeMoreDetails = this.seeMoreDetails.bind(this)

    }

    backSlice() {
        this.setState({
            slice: this.state.slice - 1 
        })
    }


    nextSlice() {
        this.setState({
            slice: this.state.slice + 1
        })
    }

    seeMoreDetails(e,movie) {
        this.setState({
            movieActive: true,
            movieSelect: movie
        })
    }

    render() {
        let SliceInit = (this.state.slice - 1) * this.state.sliceLength
        let SliceEnd = (this.state.slice) * this.state.sliceLength 

        return (
            <Fragment>
                <MovieDetails
                    movie = { this.state.movieSelect }
                    visible = {this.state.movieActive}
                />
                
                <div className='mb-4'>
                    <div className='clearfix'>                        
                        <div className="float-left">
                            <button className="btn btn-primary" onClick={this.backSlice}>Atras</button>
                        </div>
                        <div className="float-right">
                            <button className="btn btn-primary" onClick={this.nextSlice}>Siguiente</button>
                        </div>
                        <div className="text-dark text-center">
                            <h2>{this.props.genre}</h2>
                        </div>
                    </div>
                    <div className='mr-3 ml-3 row bg-dark'>
                            {this.props.movies.slice(SliceInit, SliceEnd).map( (movie) => ( 
                                <MovieCard
                                    key = {movie.id}
                                    movie = {movie}
                                    showMovie = {
                                                e => this.seeMoreDetails(e,movie)
                                            }
                                />
                            ))}
                    </div>    
                </div>
            </Fragment>
        )
    }
} 

export default ListMovies