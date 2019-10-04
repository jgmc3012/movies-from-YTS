import React, {Fragment} from 'react'
import MovieDetails from './MovieDetails'
import ListMovies from './ListMovies'


class CarouselMovies extends React.Component{
    
    constructor(props) {
        super(props)
        
        this.state = {
            sliceLength:2 + Math.floor(window.innerWidth / this.props.moviesWidth), //Indica el numero de peliculas que se mostraran en la fila
            slice: 1,
            movieSelect: {},
            movieActive: this.props.selectedList
        }
        
        this.backSlice = this.backSlice.bind(this)
        this.nextSlice = this.nextSlice.bind(this)
        this.seeMoreDetails = this.seeMoreDetails.bind(this)
        this.sliceInit = (this.state.slice - 1) * this.state.sliceLength
        this.sliceEnd = (this.state.slice) * this.state.sliceLength 

    }

    backSlice() {
        if (this.state.slice > 1) {            
            this.setState({
                slice: this.state.slice - 1 
            })
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const sliceInit = (prevState.slice - 1) * prevState.sliceLength
    //     const sliceEnd = (prevState.slice) * prevState.sliceLength 
    //     console.log(this.props.movies.slice(sliceInit, sliceEnd).length === 0)
    
    //     if  (this.props.movies.slice(sliceInit, sliceEnd).length === 0) {
    //         const page = this.props.movies.length/20 + 1
    //         this.props.getMoreMovies(this.props.genre, page)
    //     }
    // }

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
        this.sliceInit = (this.state.slice - 1) * this.state.sliceLength
        this.sliceEnd = (this.state.slice) * this.state.sliceLength 
        
        let show
        if (this.props.movies.length > 0) {
            show = <ListMovies
                movies = {this.props.movies.slice(this.sliceInit, this.sliceEnd)}
                showMovie = {this.seeMoreDetails}
            />
        } else {
            show = (
                <div className='spinner-border mx-auto text-success'></div>
            )
        }


        return (
            <Fragment>
                <MovieDetails
                    movie = { this.state.movieSelect }
                    visible = {this.state.movieActive}
                />
                
                <div className='p-2 bg-dark'>
                    <div className='clearfix'>                        
                        <div className="float-left">
                            <button className="btn btn-primary" onClick={this.backSlice}>Atras</button>
                        </div>
                        <div className="float-right">
                            <button className="btn btn-primary" onClick={this.nextSlice}>Siguiente</button>
                        </div>
                        <div className="text-white text-center">
                            <h2>{this.props.genre.toUpperCase()}</h2>
                        </div>
                    </div>

                    <div className='d-flex'>
                        {show}
                    </div>    
                </div>
            </Fragment>
        )
    }
} 

export default CarouselMovies