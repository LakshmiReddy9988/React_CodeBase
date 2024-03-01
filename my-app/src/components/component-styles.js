import { useState } from 'react';
import './component-styles.css';
export default function Styles() {
    let pStyles = {
        border: '2px solid red',
        marginTop: '10px'
    }

    let [num, updateNum] = useState(100);

    return (
        <>
        <h1 style={{color: 'red'}} id='header'>This is heading</h1>
        <p style={pStyles}>This is Paragrapah</p>
        <div>{num}</div>
        <input type='text' value={num} onChange={(e) => {
            let val = e.target.value;
            updateNum(val);
        }} />
        </>
    )
}