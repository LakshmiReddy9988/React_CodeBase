import { useContext } from "react";
import { context } from './use-context-hook';

function User() {
    /**
     * useContext is used to get the data from the createContext provider at any child component
     */
    let data = useContext(context);

    return(
        <>
            <h1>User Name: {data.name}</h1>
            <h2>Age: {data.age}</h2>
        </>
    )
}

export default User