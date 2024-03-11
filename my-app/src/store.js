import { createStore } from "redux";

const initialState = {
    todos: [{id:1, title: 'Test Todo'}],
    nextId: 2
}

const todoReducer = (state=initialState, action) => {
    switch(action.type){
        case 'add':
            const newTodo = { id: state.nextId, title: action.payload.title };
            return {
                ...state, todos: [...state.todos, newTodo], nextId: state.nextId+1
            }
        case 'edit':
            return {
                ...state, todos: state.todos.map(
                    (todo) => todo.id === action.payload.id ? {...todo, title:action.payload.title} : todo
                )
            }
        case 'delete':
            return {
                ...state, todos: state.todos.filter(
                    (todo) => todo.id !== action.payload
                )
            }
        default: return state;
    }
}

const store = createStore(todoReducer);

export default store;
