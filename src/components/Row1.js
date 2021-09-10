import React from 'react'
import Hello from './Hello'

const Row1 = () => {
    return (
        <div className="row">
            <div className="one">
                <h3>Player One</h3>
                <Hello />
            </div>
            <div className="two">Player Two</div>
        </div>
    )
}

export default Row1
