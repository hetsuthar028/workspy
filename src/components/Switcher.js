import React from 'react'
import css from './Switcher.css';

const Switcher = (props) => {
    
    return (
        <div className="switcher">
            {/* <a href="#" class="btn btn-white btn-animate">click me</a>
            <button className="switcher1"  >To-DO</button>
            <button className="switcher1">Expenses</button> */}
            <button className="btn fourth" onClick={props.toggle} value="4">Button 4</button>
            <button className="btn fifth" onClick={props.toggle} value="5">Button 4</button>
        </div>
    )
}

export default Switcher
