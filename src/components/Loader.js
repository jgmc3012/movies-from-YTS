import React from 'react'
import './styles/Loader.css'

const Loader = ({visible}) => {
    if (visible) {
        return(
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    return (<React.Fragment/>)
}


export default Loader