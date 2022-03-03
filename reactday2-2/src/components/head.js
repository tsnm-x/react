import { useState } from "react";

function Head(props) {
    const {todoList, onTodoChange} = props
    const [val, setVal]  = useState("");

    const changeVal = (e) => {
        setVal(e.target.value);
    }

    const pushTodo = () => {
        onTodoChange([...todoList, val])
    }

    return (
        <>
            <div>
                <div className="row flex-column text-start bg-primary p-3">
                    <h2 className="text-light display-4 my-3">To-Do App</h2>
                    <form>
                        <div className="my-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-light my-2">Add New To-do</label>
                            <input type="text" name="val" value={val} onChange={(e)=>{changeVal(e)}} className="form-control w-75" />
                        </div>
                        <div onClick={()=>{pushTodo()}} className="btn btn-primary border-light my-3">Save Todo</div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Head;