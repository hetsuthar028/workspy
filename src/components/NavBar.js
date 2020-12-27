import React, {useState} from 'react'
import ReactSwitch from 'react-switch';
import avatar from '../avatar.png'
import navcss from './NavBar.css';


const NavBar = (props) => {
    // const [mode, setMode] = useState(0)

    
    return (
        <nav className="navHeader">
            <img src={avatar} className="nav_avatar" />
            <h3 className="appName">WorkSpy</h3>
            <label class="switch"  >
                <input type="checkbox" onClick={props.mode}/>
                <span class="slider round"></span>
            </label>
            <img src={avatar} className="nav_avatar" />
        </nav>

    )
}

export default NavBar
