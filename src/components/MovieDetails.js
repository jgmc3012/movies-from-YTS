import React from 'react'

const MovieDetails = (props) => {

    const {movie, visible} = props
    console.log(movie)

    const intToTime = (min) => {
        let hours = Math.trunc( min / 60 )
        if ( hours > 0) {
            min = min % 60 
            return (`${hours}h ${min}min`)
        }
        return (`${min}min`)
    } 

    if (visible) {
        return (
            <div className='card'>
                <img src={movie.background_image} alt={movie.title}/>
                <div className='card-img-overlay row'>
                    
                    <div className='col-7'>                        
                        <h1 className='text-white'>
                            {movie.title}
                        </h1>

                        <span className='text-white'>
                            <strong className='mr-2'>{movie.rating} Estrellas</strong>
                            <strong className='mr-2'>Año: {movie.year}</strong>
                            <strong className='mr-2'>{intToTime(movie.runtime)}</strong>
                        </span>
                        
                        <p className='text-white'>
                            {movie.summary}
                        </p>
                    </div>
                    
                    <div className="col-3 mx-auto">
                        <img src={movie.medium_cover_image} alt={movie.title}/>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <React.Fragment>
        </React.Fragment>
    )

}


export default MovieDetails