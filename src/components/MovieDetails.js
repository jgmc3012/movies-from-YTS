import React, {Fragment} from 'react'

class MovieDetails extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            idMovie: undefined
        }
        this.offLoader = this.offLoader.bind(this)

    }

    intToTime(min) {
        let hours = Math.trunc( min / 60 )
        if ( hours > 0) {
            min = min % 60 
            return (`${hours}h ${min}min`)
        }
        return (`${min}min`)
    } 

    offLoader() {
        this.setState({
            idMovie: this.props.movie.id,
        })
    }

    render() {

        const {movie, visible} = this.props    

    
        if (visible) {
            let loader
            let card
            if (this.state.idMovie !== this.props.movie.id) {
                loader = (
                    <div className={`p-3 bg-info d-flex flex-column`}>
                        <h4 className='text-white mx-auto'>{movie.title}</h4>
                        <div className='spinner-grow mx-auto text-white'></div>
                    </div>
                )
                card = 'collapse'
            } else {
                loader = (
                    <Fragment>
                    </Fragment>
                )
                card = ''
            }
            console.log(movie)
            return (
                <Fragment>
                    {loader}
                    <div className={`${card}`}>

                        <div className='d-flex bg-info p-3'>

                            <div className='d-flex flex-column'>
                                
                                <div className=''>
                                    <h1 className='text-white'>
                                        {movie.title}
                                    </h1>
                                </div>
                                <div>
                                    <span>
                                        <strong className='p-1 btn-dark btn mr-2 mb-2'>{movie.rating} Estrellas</strong>
                                        <strong className='p-1 btn-dark btn mr-2 mb-2'>Año: {movie.year}</strong>
                                        <strong className='p-2 text-white mr-4 mb-2'>{this.intToTime(movie.runtime)}</strong>
                                        {movie.torrents.map( (torrent, index) =>(
                                            <a 
                                                key={index}
                                                className='btn btn-success p-2 mr-1 mb-2'
                                                href={torrent.url}
                                            > Torrent <strong>{torrent.quality}</strong></a>
                                        ))}
                                    </span>
                                </div>
                                
                                <div className='d-flex  mt-4'>
                                    <div className='col-7 flex-fill'>    
                                        <p className='p-3 jumbotron'>
                                            {movie.summary}
                                        </p>
                                    </div>
                                    
                                    <div className="flex-grow mx-auto">
                                        <img
                                            src={movie.medium_cover_image}
                                            alt={movie.title}
                                            className='img-thumbnail mx-auto'
                                            onLoad={this.offLoader}
                                        />
                                    </div>
                                </div>
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