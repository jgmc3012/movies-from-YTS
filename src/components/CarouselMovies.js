import React, {Fragment} from 'react'
import ListMovies from './ListMovies'
import './styles/CarouselMovies.css'


class CarouselMovies extends React.Component{
    
    constructor(props) {
        super(props)
        
        this.state = {
            sliceLength:2 + Math.floor(window.innerWidth / this.props.moviesWidth), //Indica el numero de peliculas que se mostraran en la fila
            slice: 1,
            movieSelect: {},
            movieActive: this.props.selectedList
        }
        
    }

    seeMoreDetails(e,movie) {
        this.setState({
            movieActive: true,
            movieSelect: movie
        })
    }
    

    
    render() {
        return (
            <Fragment>
                <div className='clearfix'>                        

                    <div className="text-white carousel-title">
                        <h2>{this.props.genre}</h2>
                    </div>

                    <ListMovies
                        genre={this.props.genre}
                        movies = {this.props.movies}
                        showMovie = {this.seeMoreDetails}
                        getMoreMovies = {this.props.getMoreMovies}
                    />
                </div>
            </Fragment>
        )
    }
} 

export default CarouselMovies