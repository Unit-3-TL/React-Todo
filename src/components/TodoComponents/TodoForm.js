import React, { useState } from "react";

const TodoForm = (props) => {
    // console.log(props.addItem)

    const [todoText, setTodoText] = useState("");

    const handleChanges = e => {
        e.preventDefault();
        setTodoText(e.target.value)
    }

    const submitForm = e => {
        e.preventDefault();
        props.addItem(todoText)
        setTodoText("")
    }

    const clear = e => {
        e.preventDefault();
        props.removeItem();
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input name="task" type="text" value={todoText} onChange={handleChanges}/>
                <button type="submit">Add</button>
                <button onClick={clear}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;