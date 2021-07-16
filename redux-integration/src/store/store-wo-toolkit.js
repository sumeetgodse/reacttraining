import { combineReducers, createStore } from "redux"

// actions
export const addData = (record) => {
    return {
        type: "ADD_DATA",
        payload: record
    }
}

export const deleteData = (email) => {
    return {
        type: "DELETE_DATA",
        payload: email
    }
}

export const editData = (index, record) => {
    return {
        type: "EDIT_DATA",
        index: index,
        payload: record
    }
}

// reducers
const formReducer = (oldUserData = [], action) => {
    if( action.type === "ADD_DATA" ) {
        return [...oldUserData, action.payload]
    }
    if( action.type === "DELETE_DATA" ) {
        return oldUserData.filter((item) => item.email !== action.payload)
    }
    if( action.type === "EDIT_DATA" ) {
        return oldUserData.filter((item, i) => {
            if( i!== action.index ) {
                return item;
            } else {
                return action.payload;
            }
        })
    }
    return oldUserData;
}

// store
const rootReducer = combineReducers({formReducer})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
