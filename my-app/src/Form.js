import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw, mobileUpdate, nameUpdate, reset } from "./action";

function Form() {
  let dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const [fullNmae, setFullName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <>
      <div className="container">
        <h2>Form</h2>
        <div className="row">
          <div className="col-4">
            <input
              type="number"
              value={amount}
              placeholder="Enter amount"
              className="form-control"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-2"
            onClick={() => {
                dispatch(deposit(amount));
            //   dispatch({ type: "deposit", payload: amount });
              setAmount("");
            }}
          >
            Deposit
          </button>
          <button
            className="btn btn-danger mx-2 col-2"
            onClick={() => {
              dispatch(withdraw(amount));
              setAmount("");
            }}
          >
            Withdraw
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              type="text"
              value={fullNmae}
              placeholder="Enter Full Name"
              className="form-control"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-2"
            onClick={() => {
              dispatch(nameUpdate(fullNmae));
              setFullName("");
            }}
          >
            Update
          </button>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <input
              type="text"
              value={mobile}
              placeholder="Enter Mobile NO."
              className="form-control"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary col-2"
            onClick={() => {
              dispatch(mobileUpdate(mobile));
              setMobile("");
            }}
          >
            Update
          </button>
        </div>
        <div className="row mt-2">
          <button
            className="btn btn-danger col-2"
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
