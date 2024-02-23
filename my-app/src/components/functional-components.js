import '../index.css';
export function Header(props) {
    // props contains all properties data from parent where it is being called
    // props are immutable i.e., we cannot change the value of props
    console.log(props);
    let menus = ['home', 'About Us', 'Contact US'];
    return (<header>
        {show()}
        <ul>
            <li className='test'>{menus[0]}</li>
            <li>{menus[1]}</li>
            <li>{menus[2]}</li>
        </ul>
        <input type='checkbox' id='sub' />
        <label htmlFor='sub'>Subscribe {props.name}</label>
    </header>)
}

function show() {
    return <h1>Header</h1>
}
export default Header