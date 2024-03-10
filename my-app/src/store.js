import { createStore } from "redux";

const initialState = {
  balance: 1000,
  fullName: "Swathi",
  mobile: 7989912343,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };//+action.payload is used to convert the payload to number
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload }; 
    case "mobileUpdate":
      return { ...state, mobile: action.payload };
    case "nameUpdate":
      return { ...state, fullName: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const store = createStore(accountReducer);

export default store
