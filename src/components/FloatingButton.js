import React, {useState} from 'react'
import floatingCss from './FloatingButton.css';

const FloatingButton = (props) => {

    
    return (
        <div className="floatingButton">
            <button className="addButton" onClick={props.toggle}>+</button>
        </div>
    )
}

export default FloatingButton
