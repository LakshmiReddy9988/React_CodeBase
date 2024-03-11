export function addTodo(todo) {
  return { type: "add", payload: todo };
}

export function editTodo(todo) {
    return { type: "edit", payload: todo };
}

export function deleteTodo(id) {
    return { type: "delete", payload: id };
}
