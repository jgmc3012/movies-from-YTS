import React, {Fragment} from 'react'
import ListMovies from './ListMovies'
import './styles/CarouselMovies.css'


class CarouselMovies extends React.Component{
        
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
                        getMoreMovies = {this.props.getMoreMovies}
                        selectMovie = {this.props.selectMovie}
                    />
                </div>
            </Fragment>
        )
    }
} 

export default CarouselMovies