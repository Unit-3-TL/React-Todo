// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";


const TodoList = props => {
    // console.log(props.toggleTodo)

    return (
        <div>
            {props.todo.map(todoItem => {
                return <Todo key={todoItem.id} todo={todoItem} toggleTodo={props.toggleTodo}/>
            })}
        </div>
    )
}

export default TodoList;