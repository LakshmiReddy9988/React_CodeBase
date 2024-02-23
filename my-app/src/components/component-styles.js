import './component-styles.css';
export default function Styles() {
    let pStyles = {
        border: '2px solid red',
        marginTop: '10px'
    }
    return (
        <>
        <h1 style={{color: 'red'}} id='header'>This is heading</h1>
        <p style={pStyles}>This is Paragrapah</p>
        </>
    )
}