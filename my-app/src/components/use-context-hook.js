import { createContext } from "react";
import User from "./user";

/**
 * createContext is used to create a context and store data under value property
 * and this data can be accessed at any child levels instead of passing props in every child component
 * without createContext we can pass the data using props, but in this case we need to pass data at every child component (Props Drilling)
 */
export const context = createContext();

function UseContextHook() {
    let user = {
        name: 'Reddy',
        age: 25
    }
    return(
        <context.Provider value={user}>
            <User></User>
        </context.Provider>
    )
}

export default UseContextHook