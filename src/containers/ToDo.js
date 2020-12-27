import React from 'react'
import TodoSingle from '../components/TodoSingle'
import todocss from './ToDo.css';

const ToDo = () => {
    return (
        <div className="todoContainer">
            <TodoSingle />
            <TodoSingle />
            <TodoSingle />
            <TodoSingle />
            <TodoSingle />
            <TodoSingle />
            <TodoSingle />
            <TodoSingle />
        </div>
    )
}

export default ToDo
