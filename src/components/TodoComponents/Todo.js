import React from "react";
import "./Todo.css"

const Todo = props => {

    // console.log(props)

    const toggle = (e) => {
        props.toggleTodo(props.todo.id)
    }

    return (
        <div className={`${props.todo.completed ? "completed" : ""}`} onClick={toggle}>
            {props.todo.task}
        </div>
    )
}

export default Todo;
