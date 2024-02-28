import './component-styles.css';
export default function BackGroundChanger() {
    return (
        <div className="wrapper">
            <h2>Background Color Changer</h2>
            <input type="color" onChange={
                (e) => {
                    console.log(e.target.value);
                    document.body.style.background = e.target.value;
                }
            } />
        </div>
    )
}