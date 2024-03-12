import { useSelector } from "react-redux"

export default function Account(){

    let data = useSelector(
        (state)=> state.user
    );

    let transactions = useSelector(
        (state) => state.transactions
    );

    console.log(transactions)

    return(
        <>
            <div className="container mt-5">
                <h2 className="text-primary">Account Details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>Full Name</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data?.balance}</td>
                            <td>{data?.fullName}</td>
                            <td>{data?.mobile}</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="text-primary m-3">Transaction Details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>TimeStamp</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map(
                                (transaction, index) => (
                                    <tr key={index}>
                                        <td>{transaction.type}</td>
                                        <td>{transaction.time}</td>
                                        <td>{transaction.amount}</td>
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