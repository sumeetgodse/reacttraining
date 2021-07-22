import { useSelector } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import "../styles/ureminder.css";
import "../styles/buttons.css";
import { deletePastReminder, store } from "../store/store";
import { IconButton } from "@material-ui/core";
import AlarmOnIcon from '@material-ui/icons/AlarmOn';

const PastReminders = () => {
    const reminders = useSelector((state) => state.pastRemindersReducer);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const userIndex = useSelector((state) => state.loggedIndexReducer[0]);
    const userEmail = useSelector((state) => state.userReducer[userIndex].email);

    return(
        <div>
        <div className = "p-reminder-header">
            <AlarmOnIcon style = {{padding: "20px", color: "#263238", fontSize: "32px"}} />
            <div className = "p-reminder-text">Past Reminders</div>
        </div>
        <div className="row">
        {
            reminders.map((reminder,index) => {
                return (
                    reminder.email === userEmail &&
                    <div key = {`${reminder.text}_${reminder.date}`} className="column">
                        <div className="card" style = {{backgroundColor: "#ffe0b2"}}>
                            <table>
                                <tbody>
                                <tr style = {{fontSize: "16px"}}>
                                    <td>
                                        {reminder.text}
                                    </td>
                                </tr>
                                <tr style = {{fontSize: "12px"}}>
                                    <td>
                                        {reminder.date.getDate()} {months[reminder.date.getMonth()]} {reminder.date.getFullYear()}
                                    </td>
                                </tr>
                                <tr style = {{fontSize: "12px"}}>
                                    <td>
                                        {days[reminder.date.getDay()]} {reminder.time.getHours()}{`:`}{reminder.time.getMinutes() < 10 ? `0${reminder.time.getMinutes()}` : reminder.time.getMinutes()}
                                    </td>
                                </tr>
                                <tr>
                                    <td style = {{display: "flex", flexDirection: "row-reverse"}}>
                                    <IconButton onClick = {() => store.dispatch(deletePastReminder(reminder.text))}>
                                        <DeleteIcon className = "delete" />
                                    </IconButton>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    );
}

export default PastReminders;
