import React from 'react'
import './styles/LoaderLarge.css'

const LoaderLarge = () => (
    <div className="loading">
        <div className="loading-bar">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2 className='text-white'>loading ...</h2>
        </div>
    </div>
)

export default LoaderLarge