import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    balance: 0,
    fullName: 'Reddy',
    mobile: null
}
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        updateMobile: (state, action) => {
            state.mobile = action.payload;
        },
        updateName: (state, action) => {
            state.fullName = action.payload
        },
        withdraw: (state, action) => {
            state.balance -= +action.payload;
        },
        deposit: (state, action) => {
            state.balance += +action.payload
        },
        reset: (state) => {
            return {
                balance: 0,
                fullName: 'Reddy',
                mobile: null
            }
        }
    }
});

const transactionSlice = createSlice({
    name: 'transactions',
    initialState: [],
    reducers: {
        addTransaction: (state, action) => {
            state.push(action.payload)
        }
    }
})
//userSlice {reducer:function, actions: {}}
export const { updateMobile, updateName, withdraw, deposit, reset } = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        transactions: transactionSlice.reducer
    }
});

export const { addTransaction } = transactionSlice.actions;

export default store