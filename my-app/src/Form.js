import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deposit, updateMobile, updateName, withdraw,reset, addTransaction } from "./store";

export default function Form() {

    const [amount, setAmount] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');

    const accountName = useSelector(
        (state) => state.user.fullName
    )

    let dispatch = useDispatch();

    return(
        <>
            <div className="container mt-3">
                <h2>Account Form</h2>
                <div className="row">
                    <div className="col-5">
                      <input type='number' className="form-control" placeholder="Enter Amount" value={amount} onChange={
                        (e) => setAmount(e.target.value)
                      } />
                    </div>
                    <button className='btn btn-danger col-2 mx-2' onClick={()=>{
                        dispatch(withdraw(amount));
                        dispatch(addTransaction(
                            {
                                time: new Date().toLocaleDateString(),
                                type: 'Debit',
                                accountName: accountName,
                                amount: amount
                            }
                        ));
                        setAmount('');
                    }}>Withdraw</button>
                    <button className='btn btn-primary col-2' onClick={()=>{
                        dispatch(deposit(amount));
                        dispatch(addTransaction(
                            {
                                time: new Date().toLocaleDateString(),
                                type: 'Credit',
                                accountName: accountName,
                                amount: amount
                            }
                        ));
                        setAmount('');
                    }}>Deposit</button>
                </div>

                <div className="row mt-2">
                    <div className="col-5">
                      <input type='text' className="form-control" placeholder="Enter Name" value={fullName} onChange={
                        (e) => setFullName(e.target.value)
                      } />
                    </div>
                    <button className='btn btn-primary col-2 mx-2' onClick={()=>{
                        dispatch(updateName(fullName));
                        setFullName('');
                    }}>Update</button>
                </div>

                <div className="row mt-2">
                    <div className="col-5">
                      <input type='text' className="form-control" placeholder="Enter Mobile" value={mobile} onChange={
                        (e)=> setMobile(e.target.value)
                      } />
                    </div>
                    <button className='btn btn-primary col-2 mx-2' onClick={()=>{
                        dispatch(updateMobile(mobile));
                        setMobile('');
                    }}>Update</button>
                </div>

                <div>
                    <button className="btn btn-danger mt-2" onClick={()=>{
                        dispatch(reset());
                    }}>Reset</button>
                </div>
            </div>
        </>
    )
}