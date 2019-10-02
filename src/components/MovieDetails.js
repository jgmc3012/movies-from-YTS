import React from 'react'

const MovieDetails = (props) => {

    const {movie} = props
    const visible = (movie !== {})

    if (visible) {
        return (
            <div
                className='container'
                style={{'background-image': `url(${movie.background_image})`}}
            >
                <h1>{movie.title}</h1>
            </div>
        )
    }
    
    return (
        <React.Fragment>
        </React.Fragment>
    )

}


export default MovieDetails