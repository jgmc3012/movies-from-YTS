import React from 'react'
import Loader from './Loader'
import './styles/MovieCard.css'

class MovieCard extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            loader:true,
            display_img: 'animation-hidden'
        }
        this.loaderOff = this.loaderOff.bind(this)
    }

    loaderOff() {
        this.setState({
            loader: false,
            display_img: 'animation-visible'
        })
    }

    render () {
        const { medium_cover_image, title } = this.props.movie
        return (
                <div className='movie-card' id={this.props.id}>
                    <div className="movie-image">
                        <img
                        className={this.state.display_img}
                        src={medium_cover_image}
                        alt={title}
                        onLoad = {this.loaderOff}
                        />
                        <Loader
                            visible={this.state.loader}    
                        />
                    </div>

                    <div className='movie-title text-white'>
                        <h2>{title}</h2>
                    </div>
                </div>



        )
    }
}

export default MovieCard