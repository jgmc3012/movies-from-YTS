import React from 'react'

class MovieCard extends React.Component{

    constructor(props) {
        super(props)
        
    }

    render () {
       const {img, title} = this.props
       return (
       <div className="card col-3" onClick={this.seeMoreDetails}>
           <img src={img} alt={title} className="card-img-top"/>
           <div className="countainer">
               <p>{title}</p>
           </div>
       </div>
       )
   }
}

export default MovieCard