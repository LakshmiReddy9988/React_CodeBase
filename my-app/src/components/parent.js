import { useState } from "react";
import Child from "./child";

function Parent() {
    const [Todos, updateTodos] = useState([
        'Task1',
        'Task2'
    ]);

    const addTodo = (task) => {
        updateTodos([...Todos, task])
    }

    return(
        <>
            <Child addTodo={addTodo} msg='Parent & Child Data Communication'></Child>
            <ul>
                {
                    Todos.map(
                        (task,index)=> {
                            return <li key={index}>{task}</li>
                        }
                    )
                }
            </ul>
        </>
    )
}

export default Parent