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

/**
 * Functional components can be created in different ways
    1. Using Named Function
        function App() {
            return (
                <h1>Named Function</h1>
            )
        }
    2. Using Arrow Function and it do not need any return statements as JSX expresssions are considered as single statements
       let App = () => 
        <div>
            <h1>Arrow Function</h1>
        </div>
    3. Using Anonymous Function
        let App = function () {
            return (
                <h1>Anonymous Function</h1>
            )
        }
    
 * Functional components can be called in different ways
    1. App()
    2. <App /> =>These are auto complete tags that doesn't contain any data
    3. <App>Props Children data</App> =>Props children data is the data between the tags 
 */
