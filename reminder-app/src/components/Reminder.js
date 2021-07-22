import React, { useEffect, useState } from "react";
import Date from "./Date";
import Text from "./Text";
import Time from "./Time";
import { addReminder, clearEditIndex, editReminder, store } from "../store/store";
import "../styles/reminder.css";
import "../styles/ureminder.css";
import "../styles/preminders.css";
import "../styles/buttons.css";
import ComingReminders from "./ComingReminders";
import PastReminders from "./PastReminders";
import { useSelector } from "react-redux";

const Reminder = () => {        
    const newDate = new window.Date();
    
    const [text, setText] = useState("");
    const [date, setDate] = useState(newDate);
    const [time, setTime] = useState(newDate);
    
    const userIndex = useSelector((state) => state.loggedIndexReducer[0]);
    const userEmail = useSelector((state) => state.userReducer[userIndex].email);

    const editIndex = useSelector((state) => state.editReminderReducer[0]);

    useEffect(() => {
        if(editIndex !== -1) {
            const editedReminder = store.getState().remindersReducer[editIndex];
            setText(editedReminder.text);
            setDate(editedReminder.date);
            setTime(editedReminder.time);
        }
    }, [editIndex]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    }    

    const handleDateChange = (changedDate) => {
        setDate(changedDate);
    }    

    const handleTimeChange = (changedTime) => {
        setTime(changedTime);
    }  
    
    const handleSubmit = () => {
        const newReminder = {
            email: userEmail,
            text: text,
            date: date,
            time: time
        }

        if( editIndex === -1 ) {
            store.dispatch(addReminder(newReminder));
        } else {
            store.dispatch(editReminder({editIndex, newReminder}));
            store.dispatch(clearEditIndex(-1));
        }
        setText("");
        setDate(newDate);
        setTime(newDate);
    }

    return(
        <div>
            <div className = "reminder-form">
                <div className = "reminder-container">
                    <Text value = {text} onChange = {(e) => handleTextChange(e)} />
                    <Date value = {date} onChange = {handleDateChange} />            
                    <Time value = {time} onChange = {handleTimeChange} />
                    <div className = "add-reminder-div">
                        <input className = "add-reminder" type = "button" value = "ADD REMINDER" onClick =  {handleSubmit} />
                    </div>
                </div>
                <div className = "upcoming-container">
                    <ComingReminders />
                </div>
                <div className = "past-container">
                    <PastReminders />
                </div>
            </div>
        </div>
    );
}

export default Reminder;
