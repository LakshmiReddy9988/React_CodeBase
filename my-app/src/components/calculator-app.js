import KeyPad from "./keypad";
import './calculator-app.css';
import { useState } from "react";

function Calculator() {

    let [input, setInput] = useState('');


    function handleClick(value) {
        setInput(input+value);
    }

    function calculate() {
        let outputVal = eval(input);
        setInput(outputVal);
    }

    function handleClear(){
        setInput('');
    }

    return (
        <div className="container">
            <h1>Calculator App using React</h1>
            <div className="calculator">
                <input type='text' className="output" value={input} onChange={
                    (e) => {
                        let val = e.target.value;
                        setInput(val);
                    }
                } />
                <KeyPad handleClick={handleClick} handleClear={handleClear} calculate={calculate} ></KeyPad>
            </div>
        </div>
    )
}

export default Calculator