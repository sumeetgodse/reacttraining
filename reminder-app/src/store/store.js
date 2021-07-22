import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { getReminders, storeInLocal } from "../utilities/utility";
import { loggedIndexReducer, userReducer } from "./userReducer";

const editReminderSlice = createSlice({
    name: "editReminder",
    initialState: [-1],
    reducers: {
        changeEditIndex: (state, action) => {
            state[0] = action.payload;
        },
        clearEditIndex: (state, action) => {
            state[0] = action.payload;
        }
    }
})

export const { changeEditIndex, clearEditIndex } = editReminderSlice.actions;

const editReminderReducer = editReminderSlice.reducer;

const pastRemindersSlice = createSlice({
    name: "pastReminders",
    initialState: getReminders("pastReminders"),
    reducers: {
        addPastReminder: (state, action) => { 
            state.push(action.payload);
            storeInLocal("pastReminders", JSON.stringify(state));
        },
        deletePastReminder: (state, action) => { 
            for(let i = 0; i < state.length; i++ ) {
                if( state[i].text === action.payload ) {
                    state.splice(i, 1);
                    break;
                }
            }
            storeInLocal("pastReminders", JSON.stringify(state));
        }
    }
})

export const { addPastReminder, deletePastReminder } = pastRemindersSlice.actions;

const pastRemindersReducer = pastRemindersSlice.reducer;

const remindersSlice = createSlice({
    name: "reminders",
    initialState: getReminders("reminders"),
    reducers: {
        addReminder: (state, action) => { 
            state.push(action.payload);
            
            state.length > 1 && state.sort((a,b) => {
                return a.date.getTime() - b.date.getTime();
            })
            storeInLocal("reminders", JSON.stringify(state));
        },
        deleteReminder: (state, action) => { 
            for(let i = 0; i < state.length; i++ ) {
                if( state[i].text === action.payload ) {
                    state.splice(i, 1);
                    break;
                }
            }
            storeInLocal("reminders", JSON.stringify(state));
        },
        editReminder: (state, action) => {
            state[action.payload.editIndex] = action.payload.newReminder;

            state.length > 1 && state.sort((a,b) => {
                return a.date.getTime() - b.date.getTime();
            })
            storeInLocal("reminders", JSON.stringify(state));
        }
    }
})

export const { addReminder, deleteReminder, editReminder } = remindersSlice.actions;

const remindersReducer = remindersSlice.reducer;

export const store = configureStore({
    reducer: {
        remindersReducer: remindersReducer,
        pastRemindersReducer: pastRemindersReducer,
        editReminderReducer: editReminderReducer,
        userReducer: userReducer,
        loggedIndexReducer: loggedIndexReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
