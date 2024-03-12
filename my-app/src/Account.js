import { useSelector } from "react-redux"

function Account() {

    let data = useSelector(
        (state)=>{
            return state
        }
    )
    console.log(data)

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
                            <th>{data.account.balance}</th>
                            <th>{data.account.fullName}</th>
                            <th>{data.account.mobile}</th>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-primary">Transaction Details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.transactions.map(
                                (transaction) =>(
                                    <tr key={transaction.id}>
                                        <th>{transaction.id}</th>
                                        <th>{transaction.amount}</th>
                                        <th>{transaction.type}</th>
                                        <th>{transaction.date.toLocaleDateString()}</th>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Account