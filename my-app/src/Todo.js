import { useState } from "react";
import { editTodo, deleteTodo } from "./actions";
import { useDispatch } from "react-redux";

function Todo({ id, title }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setTitle] = useState(title);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if(newTitle.trim()){
        dispatch(editTodo({id: id, title: newTitle}));
        setEditing(false);
    }
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <div>
      {editing ? (
        <div className="input-group">
          <input className="form-control" type="text" value={newTitle} onChange={
            (e) => setTitle(e.target.value)
          } />
          <button className="btn btn-secondary" onClick={handleTodo}>Save</button>
        </div>
      ) : (
        <li className="list-group-item">
          <p className="mt-2">{title}</p>
          <div className="actions">
            <button className="btn btn-warning" onClick={
                ()=> setEditing(true)
            }>Edit</button>
            <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete</button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Todo;
