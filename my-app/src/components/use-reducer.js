import { useReducer } from "react"

/**
 * Used to handle state of component like useState()
 * useReducer() is good for handling complex state
 */

function UseReducer(){

    const [counter, dispatch] = useReducer(counterReducer, 0);

    return(
        <div className="mt-4 d-flex">
            <button className="btn btn-danger m-2" onClick={
                ()=>{
                    dispatch({
                        type: 'DEC'
                    })
                }
            }>-</button>
            <div className="mt-2">Counter: {counter}</div>
            <button className="btn btn-primary m-2" onClick={
                ()=>{
                    dispatch({
                        type: 'INC'
                    })
                }
            }>+</button>
            <button className="btn btn-primary m-2" onClick={
                ()=>{
                    dispatch({
                        type: 'RESET'
                    })
                }
            }>Reset</button>
        </div>
    )
}

function counterReducer(state, action){
    console.log(state, action);
    switch(action.type){
        case 'INC': return state+1;
        case 'DEC': return state-1;
        case 'RESET': return 0;
        default: return state;
    }
}

export default UseReducer