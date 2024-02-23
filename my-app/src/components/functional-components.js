import '../index.css';
export function Header() {
    let menus = ['home', 'About Us', 'Contact US'];
    return (<header>
        {show()}
        <ul>
            <li className='test'>{menus[0]}</li>
            <li>{menus[1]}</li>
            <li>{menus[2]}</li>
        </ul>
        <input type='checkbox' id='sub' />
        <label htmlFor='sub'>Subscribe</label>
    </header>)
}

function show() {
    return <h1>Header</h1>
}
export default Header