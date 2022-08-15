import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firsName: '',
    lastName: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action)=>{
            state.firsName = action.payload
        }
    }
})

export const {setFirstName} = userSlice.payload
export default userSlice.reducer