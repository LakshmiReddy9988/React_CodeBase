import { useState } from "react"

export default function Child(props) {

    const [TextInput, updateTextInput] = useState('');

    return(
        <>
            <h1>{props.msg}</h1>
            <input type='text' value={TextInput} onChange={
                (e) => updateTextInput(e.target.value)
            } />
            <button onClick={
                () => {
                    props.addTodo(TextInput);
                    updateTextInput('')
                }
            }>Add Todo</button>
        </>
    )
}