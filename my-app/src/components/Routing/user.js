import { Outlet, Link } from "react-router-dom";

export default function User() {
    return(
       <>
        <h1>This is user component</h1>
        <button><Link to='orders'>Orders</Link></button>
        <button><Link to='profile'>Profile</Link></button>
        <h1>This is Nested Routing</h1>
        <Outlet></Outlet>
       </>
    )
}