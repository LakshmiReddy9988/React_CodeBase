import { useSelector } from "react-redux"

function Account() {

    let data = useSelector(
        (state)=>{
            return state
        }
    )

    return(
        <>
            <div className="container">
                <h2 className="text-primary">Account Details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>User Name</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{data.balance}</th>
                            <th>{data.fullName}</th>
                            <th>{data.mobile}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Account