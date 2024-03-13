import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    users: [],
    status: '',
    error: false
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        fetchUsersData: (state, action) => {}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state)=>{
            state.status='loading';
        })
        .addCase(fetchUsers.fulfilled, (state,action)=>{
            state.status = 'completed';
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action)=>{
            state.status = 'error';
            state.users = [];
            state.error = action.error.message;
        })
    }
});

export let fetchUsers = createAsyncThunk('user/fetch', async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data;
    }
    catch(error){
        throw error;
    }
});

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store