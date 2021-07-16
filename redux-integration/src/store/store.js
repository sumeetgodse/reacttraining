import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { getUserData } from "../utilities/utility";

const formDataSlice = createSlice({
    name: "formData",
    initialState: getUserData(),
    reducers: {
        addData: (state, action) => { 
            state.push(action.payload)
            localStorage.setItem('userData', JSON.stringify(state)) 
        },
        deleteData: (state, action) => { 
            for(let i = 0; i < state.length; i++ ) {
                if( state[i].email === action.payload ) {
                    state.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem('userData', JSON.stringify(state)) 
        },
        editData: (state,action) => {
            state[action.payload.index] = action.payload.editUser;
            localStorage.setItem('userData', JSON.stringify(state)) 
        }
    }
})

export const { addData, deleteData, editData } = formDataSlice.actions;

const formReducer = formDataSlice.reducer;

export const store = configureStore({
    reducer: {
        formReducer: formReducer
    }
})
