import { useState } from 'react';
import './counter-app.css';
export default function Counter() {

    let [counter, setCounter] = useState(0);
    let stock = 10;

    return (
        <>
            <h1>Counter App in React</h1>
            <div className="wrapper">
            <button className='minus' disabled={counter===0} onClick={
                () => {
                    if(counter > 0){
                        setCounter(counter-1)
                    }
                }
            }>-</button>
            <p style={{fontSize: '20px'}}>{counter}</p>
            <button className='plus' disabled={counter==10} onClick={
                () => {
                    if(counter < stock){
                        setCounter(counter+1)
                    }
                }
            }>+</button>
            </div>
        </>
    )
}