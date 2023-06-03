import {createSlice} from '@reduxjs/toolkit'
import { deleteUser } from '../action';


const userSlice = createSlice({
    name :"user",
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
        },
        removeUser(state,action){
            console.log(action.payload);
        state.splice(action.payload,1)
                },
        deleteUser(state,action){
           return [];
        },
    },
});

export default userSlice.reducer;
export const {addUser,removeUser,deleteUser} = userSlice.actions;