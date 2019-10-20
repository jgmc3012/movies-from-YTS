import React, {Fragment} from 'react'
import './styles/MovieDetails.css'
import Iframe from 'react-iframe'

class MovieDetails extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            idMovie: undefined
        }

    }

    intToTime(min) {
        let hours = Math.trunc( min / 60 )
        if ( hours > 0) {
            min = min % 60 
            return (`${hours}h ${min}min`)
        }
        return (`${min}min`)
    } 

    render() {

        const {movie, visible} = this.props    

    
        if (visible) {
            return (
                <Fragment>
                    <div className='d-flex flex-column justify-content-center'>
                        <div className='video d-flex'>
                            <Iframe 
                                className='video-content'
                                url={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                            ></Iframe>
                        </div>
                    
                        <div className="datos">                        
                            <div className='ml-4'>
                                <h2 className='text-white'>
                                    {movie.title}
                                </h2>
                            </div>
                    
                            <div className='detalles'>
                                <span className='p-1 btn-dark rounded ml-2'>{movie.rating} Estrellas</span>
                                <span className='p-1 btn-dark rounded ml-2'>Year: {movie.year}</span>
                                <span className='p-1 btn-dark rounded ml-2'>{this.intToTime(movie.runtime)}</span>
                            </div>
                    
                            <div className='description'>
                                <p>
                                    {movie.synopsis}
                                </p>
                            </div>
                    
                            <div className='footer-movie d-flex mb-2'>
                                
                                {movie.torrents.map( (torrent,index) => (
                                    <div key={index} className='flex-fill mr-1 ml-1'>
                                        <a className='btn btn-success btn-block' href={torrent.url}>Torrent {torrent.quality}</a>
                                    </div>
                                
                                ))}
                            </div>
                        </div>                            
                    </div>
                </Fragment>
            )
        }
        return (
            <Fragment/>
        )

    }
}

export default MovieDetails