import React from 'react'
import todocss from './TodoSingle.css';

const TodoSingle = () => {
    return (
        <div className="todoCard">
            <p className="todoDate">01/01/2021 <span className="dot"/></p> 
            <p className="todoHeader">JavaScript and Redux</p>
            <hr />
            <ol className="todoList">
                <li>JavaScript</li>
                <li>Redux</li>
                <li>React</li>
                <li>MVVM</li>
                <li>Jetpack</li>
            </ol>
            

        </div>
    )
}

export default TodoSingle
