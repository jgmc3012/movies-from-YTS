import React, {Fragment} from 'react'
import MovieCard from './MovieCard'
import MovieDetails from './MovieDetails'


class ListMovies extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            sliceLength: 4, //Indica el numero de peliculas que se mostraran en la pantalla
            slice: 1,
            movieSelect: {}
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
        console.log(movie)
    }

    render() {
        let SliceInit = (this.state.slice - 1) * this.state.sliceLength
        let SliceEnd = (this.state.slice) * this.state.sliceLength 

        return (
            <Fragment>
                <div className='container mb-4'>
                    <div className="text-dark">
                        <h2>{this.props.genre}</h2>
                    </div>
                    <MovieDetails
                        movie = { this.state.movieSelect }
                    />
                    <div className='carousel slice mr-3 ml-3'>
                        <div className='carousel-inner row'>
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
        
                        <div className="carousel-control-prev">
                            <button className="btn btn-primary" onClick={this.backSlice}>Atras</button>
                        </div>
                        <div className="carousel-control-next">
                            <button className="btn btn-primary" onClick={this.nextSlice}>Adelante</button>
                        </div>
                    </div>    
                </div>
            </Fragment>
        )
    }
} 

export default ListMovies