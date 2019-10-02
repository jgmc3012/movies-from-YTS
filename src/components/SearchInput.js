import React, {Fragment} from 'react'
import config from '../config'

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            movies: []
        }

        this.changeSearch = this.changeSearch.bind(this)
        this.getData = this.getData.bind(this)
    }
    

    changeSearch(e) {
        this.setState({
            search: e.currentTarget.value 
        })
    }

    getData(e) {
        e.preventDefault()

        try {
            fetch(
                `${config.API_URL}${config.LIST_MOVIES_ENDPOINT}query_term=${this.state.search}`)
            .then( response => response.json() )
            .then( response => { 
                if (response.data.movie_count !== 0 ) {
                    this.setState({
                        movies: response.data.movies
                    })
                } else {
                    this.setState({
                        movies: []
                    })
                }
                console.log(this.state.movies)
            })    
        } catch (error) {
            this.setState({
                movies: []
            })
            console.log('Error en el fetch del buscador de peliculas: ', error)
        }
    }

    render() {
        return (
            <Fragment>
                <div className="input-group">
                        <input 
                            className="form-control"
                            type="search"
                            name="movie"
                            list={this.props.idList}
                            onChange={this.changeSearch}
                        />
                    <div className="input-group-append">
                        <button
                            className="btn btn-success"
                            onClick={this.getData}
                        >Buscar</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SearchInput