import React from 'react'

class MovieCard extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            image:'collapse',
            loader: true
        }
        this.loaderOff = this.loaderOff.bind(this)
    } 

    loaderOff() {
        this.setState({
            loader: false,
            image:''
        })
    }
    render () {
        const { medium_cover_image, title } = this.props.movie
        let loader
        if  (this.state.loader) {
            loader = (
                <div className='spinner-border mx-auto text-white'></div>
            )
        } else {
            loader = <React.Fragment/>
        }

        return (
            <div
            onClick={ (e) => this.props.showMovie(e,this.props.movie) }
            className='flex-fill'
        >
            {loader}
        
            <div className='d-flex flex-column'>
                <div className={`p-2 ${this.state.showImage}`}>
                    <img
                        src={medium_cover_image}
                        alt={title}
                        className="img-thumbnail"
                        onLoad={this.loaderOff}
                    />
                </div>

                <div className='p-3 text-white'>
                    <strong className='text-white text-center'>{title}</strong>
                </div>
            </div>
        </div>
        )
    }
}

export default MovieCard