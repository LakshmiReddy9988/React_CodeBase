import { useState } from 'react';
import './todo-app1.css';
function TodoApp() {

    let [todoInput, updateInput] = useState('test');

    let [todoList, updateTodos] = useState([{
        id:1,
        task: 'Learn React'
    }]);

    let nextId = 1;

    function addNewTodo() {
        if(todoInput == ''){
            alert('Please add a task')
        } else {
            let newTodos = [
                ...todoList,
                {
                    id: ++nextId,
                    task: todoInput
                }
            ]
            console.log(nextId)
            updateTodos(newTodos);
            updateInput('');
        }
    }

    function removeTodo(id) {
       let updatedTodos = todoList.filter(todo => todo.id != id);
       updateTodos(updatedTodos);
    }

    return (
      <div className="container mt-5 w-50">
        <h1 className="text-center">Todo App using React</h1>
        <div className="input-group">
          <input type="text" className="form-control" value={todoInput} onChange={(e) => {
            updateInput(e.target.value)
          }} />
          <button className="btn btn-primary" onClick={addNewTodo}>Add</button>
        </div>

        <ul className="list-group mt-4">
          {todoList.map((item) => {
            return (
              <li key={item.id} className="list-group-item">
                <p>{item.task}</p>
                <button className="btn" onClick={() => removeTodo(item.id)}>❌</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default TodoApp