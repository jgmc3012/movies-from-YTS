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

        const {movie} = this.props    
        return (
            <Fragment>
                <div className='d-flex flex-column justify-content-center'>
                    <div className='pl-2 pb-2 pt-2 bg-dark-to-black movie-header'>
                        <div
                            className='btn-back text-white'
                            onClick={this.props.returnHome}
                        >
                            X
                        </div>
                        <div className='movie-title'>
                            <h2 className='text-white'>
                                {movie.title}
                            </h2>      
                        </div>
                    </div>

                    <div className='video-container bg-black'>
                        <div className='video'>
                            <Iframe 
                                className='video-content'
                                url={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                            ></Iframe>
                        </div>
                    </div>
                
                    <div className="datos">                        
                
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
}

export default MovieDetails