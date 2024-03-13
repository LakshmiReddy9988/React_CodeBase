import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./api-store";

export default function User() {

    let data = useSelector(
        (state)=> state.user.users
    );

    let status = useSelector(
        (state)=> state.user.status
    );

    let error = useSelector(
        (state) => state.user.error
    );

    console.log(data)

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch(fetchUsers())
        }, 
        []
    );

    return(
        <>
           <div className="container">
             <h2 className="text-primary text-center m-5">Users data using Redux Toolkit Async Thunk</h2>
           </div>

           {
            status == 'loading' && <h2 className="text-info">Fetching data, please wait</h2>
           }

           {
            error && <h2 className="text-danger">{error}</h2>
           }

           {
            status == 'completed' &&
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(
                        (user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )
                    )
                }
            </tbody>
           </table>
           }
        </>
    )
}