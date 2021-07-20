import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

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
    initialState: [],
    reducers: {
        addPastReminder: (state, action) => { 
            state.push(action.payload);
        },
        deletePastReminder: (state, action) => { 
            for(let i = 0; i < state.length; i++ ) {
                if( state[i].text === action.payload ) {
                    state.splice(i, 1);
                    break;
                }
            }
        }
    }
})

export const { addPastReminder, deletePastReminder } = pastRemindersSlice.actions;

const pastRemindersReducer = pastRemindersSlice.reducer;

const remindersSlice = createSlice({
    name: "reminders",
    initialState: [],
    reducers: {
        addReminder: (state, action) => { 
            state.push(action.payload);
            
            state.length > 1 && state.sort((a,b) => {
                return a.date.getTime() - b.date.getTime();
            })
        },
        deleteReminder: (state, action) => { 
            for(let i = 0; i < state.length; i++ ) {
                if( state[i].text === action.payload ) {
                    state.splice(i, 1);
                    break;
                }
            }
        },
        editReminder: (state, action) => {
            state[action.payload.editIndex] = action.payload.newReminder;

            state.length > 1 && state.sort((a,b) => {
                return a.date.getTime() - b.date.getTime();
            })
        }
    }
})

export const { addReminder, deleteReminder, editReminder } = remindersSlice.actions;

const remindersReducer = remindersSlice.reducer;

export const store = configureStore({
    reducer: {
        remindersReducer: remindersReducer,
        pastRemindersReducer: pastRemindersReducer,
        editReminderReducer: editReminderReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
