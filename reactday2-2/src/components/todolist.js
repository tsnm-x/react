import { useState, useEffect } from "react";

function TodoList(props) {
    const { todoList, onTodoChange } = props;

    const changeArr = (delVal) => {
        const arr = todoList.filter((item) => item != delVal);
        onTodoChange(arr);
    }
    return (
        <>
            <div className="row bg-light text-start border">
                <h3 className="text-center m-4">Let's get some work done!</h3>
                <div className="card bg-light my-3">
                    <ul className="list-group list-group-flush">
                        {todoList.map((item) => {
                            return <li className="list-group-item d-flex bg-light">
                                <div  className="flex-grow-1">{item}</div>
                                <div className="btn btn-outline-primary mx-1">Mark As Completed</div>
                                <div onClick={() => { changeArr(item) }} className="btn btn-outline-primary">Delete</div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoList;