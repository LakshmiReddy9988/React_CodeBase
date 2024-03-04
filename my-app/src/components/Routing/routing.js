import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import User from "./user";
import Orders from "./orders";
import Profile from "./profile";
import Admin from "./admin";
import Error from "./error";

function Routing() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user' element={<User />}>
                    <Route path='orders' element={<Orders />}></Route>
                    <Route path='profile' element={<Profile />}></Route>
                </Route>
                <Route path="/admin/:id/:name" element={<Admin />}></Route>
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

function Header() {
    return(
        <ul style={{display: 'flex', gap: '50px'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/admin/1/Reddy?category=OC&posts=100'>Admin</Link></li>
        </ul>
    )
}

export default Routing

/**
 * To configure routing in React use the command "npm install react-router-dom"
 * We can configure routing in React using BrowserRouter tag
 * User Routes tag to configure route and configure each routing with Route tag
 * If we want to implement nested routing then use Route element inside Route tag again
 * For nested routes we don't need to mention '/' in the path, if we mention it will append to the root url
 * Element attribute is to trigger the component for the particular path
 * Link tag is used in UI to navigate to particular route
 * Link tag will not refresh the page and it will be converted to anchor tag in dom
 * Using anchor tag for navigation will refresh the page, so it's recommended to use Link tag
 */