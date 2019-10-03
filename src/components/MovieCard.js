import React from 'react'

class MovieCard extends React.Component{

    render () {
        const { medium_cover_image, title } = this.props.movie
        return (
        <div
            onClick={ this.props.showMovie }
        >
            <img src={medium_cover_image} alt={title} className="img-thumbnail"/>
            <div className="countainer">
                <p>{title}</p>
            </div>
        </div>
        )
    }
}

export default MovieCard