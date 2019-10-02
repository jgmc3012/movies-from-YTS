import React, {Fragment} from 'react'
import MovieCard from './MovieCard'


class ListMovies extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            sliceLength: 4, //Indica el numero de peliculas que se mostraran en la pantalla
            slice: 1
        }
        this.state = {
            ...this.state,
            init: 0,
            end: this.state.sliceLength 
        }

        this.backSlice = this.backSlice.bind(this)
        this.nextSlice = this.nextSlice.bind(this)

    }

    backSlice() {
        this.state.slice--
        this.setState({
            init: (this.state.slice - 1) * this.state.sliceLength,
            end: (this.state.slice) * this.state.sliceLength 
        })
    }


    nextSlice() {
        this.state.slice++
        this.setState({
            init: (this.state.slice - 1) * this.state.sliceLength,
            end: (this.state.slice) * this.state.sliceLength 
        })
    }

    render() {
        return (
            <Fragment>
                <div className='container mb-4'>
                    <div className="text-dark">
                        <h2>{this.props.genre}</h2>
                    </div>
                    <div className='carousel slice mr-3 ml-3'>
                        <div className='carousel-inner row'>
                            {this.props.movies.slice(this.state.init, this.state.end).map( (movie) => ( 
                                <MovieCard
                                    img= {movie.medium_cover_image}
                                    title= {movie.title}
                                    data= {movie}
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