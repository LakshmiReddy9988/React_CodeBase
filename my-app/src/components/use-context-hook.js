import { createContext } from "react";
import User from "./user";

/**
 * createContext is used to create a context and store data under value property
 * and this data can be accessed at any child levels instead of passing props in every child component
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